// MemberForm.js
import {
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import styled from "styled-components";
interface props {
  newMember?: any;
  handleMemberChange: any;
}

const MemberForm = ({ newMember, handleMemberChange }: props) => {
  // Member form fields
  return (
    <Wrapper>
      <h1 style={{ padding: "10px", fontSize: "22px", fontWeight: "600" }}>
        Member Form
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
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
        <Grid item xs={12} sm={4} md={4}>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Gender</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
        <InputLabel id="demo-simple-select-label">Date of Birth</InputLabel>
          <TextField
            id="outlined-basic"
            type="date"
            variant="outlined"
            fullWidth
            name="dob"
            value={newMember.dob}
            onChange={handleMemberChange}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Married</b></span>
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
          <span><b>Job</b></span>
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
          <span style={{fontSize:"20px"}}><b>Disability</b></span>
          <div style={{ display: "flex" }}>
            <StyledRadio
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <span><b>Mental Illness</b></span>
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
              <span><b>From Birth</b></span>
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
        <Grid item xs={12} sm={8} md={8}>
          <span style={{fontSize:"20px"}}><b>Blindness</b></span>
          <div style={{ display: "flex" }}>
            <StyledRadio
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <span><b>Accident</b></span>
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
              <span><b>Complete</b></span>
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
              <span><b>partial</b></span>
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
          <span><b>Spectacles</b></span>
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
          <span style={{fontSize:"20px"}}><b>Tobacco</b></span>
          <div style={{ display: "flex" }}>
            <StyledRadio
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <span><b>Smoking</b></span>
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
              <span><b>Chewing</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Alcohol</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Emigrant</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Other Info</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
        <InputLabel id="demo-simple-select-label">vaccination</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="vaccination"
            fullWidth
            name="vaccination.complete"
            // value={newMember.vaccination.complete}
            // onChange={handleMemberChange}
          >
            <MenuItem value={3}>complete</MenuItem>
            <MenuItem value={1}>partiallyComplete</MenuItem>
            <MenuItem value={1}>incomplete</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Blood Pressure</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Diabetes</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Asthma</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Epilepsy</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Cancer</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Heart Disease</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Mental Retardation</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>TB</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Stroke</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Liver Disease</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Dialysis</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
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
        <Grid item xs={12} sm={4} md={4}>
          <span><b>Covid Vaccination</b></span>
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
        <Grid item xs={12} sm={4} md={4}>
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
        <Grid item xs={12} sm={4} md={4}>
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
        <Grid item xs={12} sm={4} md={4}>
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
    </Wrapper>
  );
};

export default MemberForm;
const Wrapper = styled.div`
  padding: 10px;
`;
const StyledRadio = styled(RadioGroup)`
  display: block !important;
`;
