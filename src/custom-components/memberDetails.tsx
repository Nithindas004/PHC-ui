import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface props {
  members: any;
  handleMemberChange: (e: any) => void;
  newMember: any;
  setMemberForms: any;
}
export function MemberDetails({
  members,
  handleMemberChange,
  newMember,
  setMemberForms,
}: props) {
  console.log(members, "members");
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const handleRowClick = (member: any) => {
    setSelectedMember(member);
  };
  console.log(selectedMember, "selectedMember.....");
  const closeModal = () => {
    setSelectedMember(null);
  };
  useEffect(() => {
    if (selectedMember) setMemberForms(selectedMember);
  }, [selectedMember, setMemberForms]);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead>Education</TableHead>
            <TableHead>Marital Status</TableHead>
            <TableHead>Job</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members?.map((member, index) => (
            <TableRow
              key={`${index}`}
              onClick={() => handleRowClick(member)}
              style={{ cursor: "pointer" }}
            >
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.age}</TableCell>
              <TableCell>{member.gender}</TableCell>
              <TableCell>{member.dob}</TableCell>
              <TableCell>{member.education}</TableCell>
              <TableCell>{member.married}</TableCell>
              <TableCell>{member.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPopup open={!!selectedMember} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Member Details </DialogTitle>
          </DialogHeader>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={newMember.name}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                fullWidth
                name="age"
                value={newMember.age}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Gender</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="M"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="M"
                  control={<Radio />}
                  label="Male"
                  name="gender"
                  checked={newMember.gender === "M"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="Female"
                  name="gender"
                  checked={newMember.gender === "F"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="DOB"
                variant="outlined"
                fullWidth
                name="dob"
                value={newMember.dob}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Education"
                variant="outlined"
                fullWidth
                name="education"
                value={newMember.education}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Married</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="married"
                  checked={newMember.married === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="married"
                  checked={newMember.married === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <span>Job</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="job"
                  checked={newMember.job === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="job"
                  checked={newMember.job === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <span>Disability</span>
              <div style={{ display: "flex" }}>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>Mental Illness</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="disability.mentalIllness"
                    checked={newMember.disability.mentalIllness === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="disability.mentalIllness"
                    checked={newMember.disability.mentalIllness === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>From Birth</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="disability.fromBirth"
                    checked={newMember.disability.fromBirth === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="disability.fromBirth"
                    checked={newMember.disability.fromBirth === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <span>Blindness</span>
              <div style={{ display: "flex" }}>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>Accident</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="blindness.accident"
                    checked={newMember.blindness.accident === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="blindness.accident"
                    checked={newMember.blindness.accident === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>Complete</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="blindness.complete"
                    checked={newMember.blindness.complete === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="blindness.complete"
                    checked={newMember.blindness.complete === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>partial</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="blindness.partial"
                    checked={newMember.blindness.partial === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="blindness.partial"
                    checked={newMember.blindness.partial === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <span>Spectacles</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="spectacles"
                  checked={newMember.spectacles === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="spectacles"
                  checked={newMember.spectacles === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <span>Tobacco</span>
              <div style={{ display: "flex" }}>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>Smoking</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="tobacco.smoking"
                    checked={newMember.tobacco.smoking === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="tobacco.smoking"
                    checked={newMember.tobacco.smoking === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span>Chewing</span>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="tobacco.chewing"
                    checked={newMember.tobacco.chewing === "yes"}
                    onChange={handleMemberChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="tobacco.chewing"
                    checked={newMember.tobacco.chewing === "no"}
                    onChange={handleMemberChange}
                  />
                </StyledRadio>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Alcohol</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="alcohol"
                  checked={newMember.alcohol === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="alcohol"
                  checked={newMember.alcohol === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Emigrant</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="immigrantEmigrant"
                  checked={newMember.immigrantEmigrant === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="immigrantEmigrant"
                  checked={newMember.immigrantEmigrant === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Other Info</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="otherInfo"
                  checked={newMember.otherInfo === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="otherInfo"
                  checked={newMember.otherInfo === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="vaccination"
                fullWidth
                name="vaccination.complete"
                value={newMember.vaccination.complete}
                // onChange={handleMemberChange}
              >
                <MenuItem value={3}>complete</MenuItem>
                <MenuItem value={1}>partiallyComplete</MenuItem>
                <MenuItem value={1}>incomplete</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Blood Pressure</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="bloodPressure"
                  checked={newMember.bloodPressure === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="bloodPressure"
                  checked={newMember.bloodPressure === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Diabetes</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="diabetes"
                  checked={newMember.diabetes === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="diabetes"
                  checked={newMember.diabetes === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Asthma</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="asthma"
                  checked={newMember.asthma === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="asthma"
                  checked={newMember.asthma === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Epilepsy</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="epilepsy"
                  checked={newMember.epilepsy === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="epilepsy"
                  checked={newMember.epilepsy === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Cancer</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="cancer"
                  checked={newMember.cancer === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="cancer"
                  checked={newMember.cancer === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Heart Disease</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="heartDisease"
                  checked={newMember.heartDisease === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="heartDisease"
                  checked={newMember.heartDisease === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Mental Retardation</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="mentalRetardation"
                  checked={newMember.mentalRetardation === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="mentalRetardation"
                  checked={newMember.mentalRetardation === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>TB</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="TB"
                  checked={newMember.TB === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="TB"
                  checked={newMember.TB === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Stroke</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="Stroke"
                  checked={newMember.Stroke === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="Stroke"
                  checked={newMember.Stroke === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Liver Disease</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="liverDisease"
                  checked={newMember.liverDisease === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="liverDisease"
                  checked={newMember.liverDisease === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Dialysis</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="dialysis"
                  checked={newMember.dialysis === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="dialysis"
                  checked={newMember.dialysis === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Others"
                variant="outlined"
                fullWidth
                name="other"
                value={newMember.other}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <span>Covid Vaccination</span>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="covidVaccination"
                  checked={newMember.covidVaccination === "yes"}
                  onChange={handleMemberChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="covidVaccination"
                  checked={newMember.covidVaccination === "no"}
                  onChange={handleMemberChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Maternity Info"
                variant="outlined"
                fullWidth
                name="maternityInfo"
                value={newMember.maternityInfo}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Family Planning Method"
                variant="outlined"
                fullWidth
                name="familyPlanningMethod"
                value={newMember.familyPlanningMethod}
                onChange={handleMemberChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Remark"
                variant="outlined"
                fullWidth
                name="remark"
                value={newMember.remark}
                onChange={handleMemberChange}
              />
            </Grid>
          </Grid>
          <DialogFooter>
            <Button onClick={closeModal}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </CustomPopup>
    </>
  );
}

const CustomPopup = styled(Dialog)``;
const StyledRadio = styled(RadioGroup)`
  display: block !important;
`;
