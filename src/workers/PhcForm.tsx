import React, { useState } from "react";
import {
  MenuItem,
  Select,
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogContent,
  Button,
  InputLabel,
} from "@mui/material";
import styled from "styled-components";
import MemberForm from "./memberForm";
import { createSurvey } from "@/api/workerApi";
import Cookies from "js-cookie";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface MemberData {
  name: string;
  age: string;
  gender: string;
  dob: string;
  education: string;
  married: string;
  job: string;
  disability: {
    mentalIllness: string;
    fromBirth: string;
  };
  blindness: {
    accident: string;
    complete: string;
    partial: string;
  };
  spectacles: string;
  tobacco: {
    smoking: string;
    chewing: string;
  };
  alcohol: string;
  immigrantEmigrant: string;
  otherInfo: string;
  vaccination: {
    complete: string;
    partiallyComplete: string;
    incomplete: string;
  };
  bloodPressure: string;
  diabetes: string;
  asthma: string;
  epilepsy: string;
  cancer: string;
  heartDisease: string;
  mentalRetardation: string;
  TB: string;
  Stroke: string;
  liverDisease: string;
  dialysis: string;
  other: string;
  covidVaccination: string;
  maternityInfo: string;
  familyPlanningMethod: string;
  remark: string;
}

function PhcForm() {
  const workerId = Cookies.get("workerId");
  const defautValue = {
    workerId: workerId,
    surveyNumber: "",
    houseNumber: "",
    houseName: "",
    houseType: "",
    owner: "",
    mobile: "",
    religion: "",
    caste: "",
    income: "",
    rationCard: "",
    scst: "",
    waterSource: "",
    toilet: "",
    nearby: {
      pond: "",
      stream: "",
      garbage: "",
      wasteWater: "",
    },
    cattle: "",
    wasteManagement: "",
    workingMembers: "",
    jobType: "",
    members: [] as MemberData[],
  };
  const [formData, setFormData] = useState(defautValue);
  console.log(formData, "formData");
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts.length === 1) {
      setFormData({ ...formData, [name]: value });
    } else {
      const [nestedKey, subKey] = nameParts;
      setFormData({
        ...formData,
        [nestedKey]: {
          ...formData[nestedKey],
          [subKey]: value,
        },
      });
    }
  };

  const handleAddMember = () => {
    const newMember: MemberData = {
      name: "",
      age: "",
      gender: "",
      dob: "",
      education: "",
      married: "",
      job: "",
      disability: {
        mentalIllness: "",
        fromBirth: "",
      },
      blindness: {
        accident: "",
        complete: "",
        partial: "",
      },
      spectacles: "",
      tobacco: {
        smoking: "",
        chewing: "",
      },
      alcohol: "",
      immigrantEmigrant: "",
      otherInfo: "",
      vaccination: {
        complete: "3",
        partiallyComplete: "2",
        incomplete: "1",
      },
      bloodPressure: "",
      diabetes: "",
      asthma: "",
      epilepsy: "",
      cancer: "",
      heartDisease: "",
      mentalRetardation: "",
      TB: "",
      Stroke: "",
      liverDisease: "",
      dialysis: "",
      other: "",
      covidVaccination: "",
      maternityInfo: "",
      familyPlanningMethod: "",
      remark: "",
    };
    setMemberForms([...memberForms, newMember]);
    setFormData({
      ...formData,
      members: memberForms, // Ensure newMember is included in the update
    });
  };

  const [memberForms, setMemberForms] = useState<MemberData[]>([]);
  console.log(memberForms, "memberForms");
  const handleMemberChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMemberForms = [...memberForms];
    const nameParts = name.split(".");

    if (nameParts.length === 1) {
      // If it's a direct property of MemberData
      updatedMemberForms[index] = {
        ...updatedMemberForms[index],
        [name]: value,
      };
    } else {
      // If it's a nested property
      const [nestedKey, subKey] = nameParts;
      updatedMemberForms[index] = {
        ...updatedMemberForms[index],
        [nestedKey]: {
          ...updatedMemberForms[index][nestedKey],
          [subKey]: value,
        },
      };
    }
    setMemberForms(updatedMemberForms);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      workerId: workerId,
      surveyNumber: formData.surveyNumber,
      houseNumber: formData.houseNumber,
      houseName: formData.houseName,
      houseType: formData.houseType,
      owner: formData.owner,
      mobile: formData.mobile,
      religion: formData.religion,
      caste: formData.caste,
      income: formData.income,
      rationCard: formData.rationCard,
      scst: formData.scst,
      waterSource: formData.waterSource,
      toilet: formData.toilet,
      nearby: {
        pond: formData.nearby.pond,
        stream: formData.nearby.stream,
        garbage: formData.nearby.garbage,
        wasteWater: formData.nearby.wasteWater,
      },
      cattle: formData.cattle,
      wasteManagement: formData.wasteManagement,
      workingMembers: formData.workingMembers,
      jobType: formData.jobType,
      members: memberForms,
    };
    try {
      // Call the createSurvey API with the form data

      const surveyRes = await createSurvey(payload, workerId);

      // Check if the survey creation was successful
      if (surveyRes) {
        // Survey creation successful, do something with the response if needed
        alert("Survey completed");
        console.log("Survey created:", surveyRes);
        setFormData(defautValue);
        setMemberForms([]);
      } else {
        // Survey creation failed, handle the error if needed
        console.log("Survey creation failed");
      }
    } catch (error) {
      // Catch any errors from the createSurvey function
      console.error("Error creating survey:", error);
    }
  };
  const [openModal, setopenModal] = useState(false);
  const closeModal = () => {
    setopenModal(false);
  };
  const handleClickOpen = () => {
    setopenModal(true);
  };

  return (
    <>
      <Wrapper>
        <h1 style={{ padding: "10px", fontSize: "22px", fontWeight: "600" }}>
          New Form
        </h1>
        <BtnPrediction>
          <button onClick={handleClickOpen}>Diabetes Prediction</button>
        </BtnPrediction>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Survey Number"
                variant="outlined"
                fullWidth
                name="surveyNumber"
                value={formData.surveyNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Owner"
                variant="outlined"
                fullWidth
                name="owner"
                value={formData.owner}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="House Number"
                variant="outlined"
                fullWidth
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="House Name"
                variant="outlined"
                fullWidth
                name="houseName"
                value={formData.houseName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                fullWidth
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="House Type"
                variant="outlined"
                fullWidth
                name="houseType"
                value={formData.houseType}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Religion"
                variant="outlined"
                fullWidth
                name="religion"
                value={formData.religion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Caste"
                variant="outlined"
                fullWidth
                name="caste"
                value={formData.caste}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Income"
                variant="outlined"
                fullWidth
                name="income"
                value={formData.income}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            <InputLabel id="demo-simple-select-label">Ration Card</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                name="rationCard"
                value={formData.rationCard}
                onChange={handleChange}
              >
                <MenuItem value={"BPL"}>BPL</MenuItem>
                <MenuItem value={"Apl"}>APL</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            <InputLabel id="demo-simple-select-label">SCST</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                name="scst"
                value={formData.scst}
                onChange={handleChange}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            <InputLabel id="demo-simple-select-label">Water Source</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                
                fullWidth
                name="waterSource"
                value={formData.waterSource}
                onChange={handleChange}
              >
                <MenuItem value={"well"}>Well</MenuItem>
                <MenuItem value={"tap"}>Tap</MenuItem>
                <MenuItem value={"publicWell"}>Public Well</MenuItem>
                <MenuItem value={"publicTap"}>Public Tap</MenuItem>
                <MenuItem value={"borewell"}>Bore well</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            <InputLabel id="demo-simple-select-label">Toilet</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                name="toilet"
                value={formData.toilet}
                onChange={handleChange}
              >
                <MenuItem value={"pit"}>Pit</MenuItem>
                <MenuItem value={"septicTank"}>Septic Tank</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={8} md={10}>
              <span style={{fontSize:"20px"}}><b>Near By</b></span>
              <div style={{ display: "flex" }}>
                <StyledRadio 
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span><b><i>Pond</i></b></span>
                  <br/>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="nearby.pond"
                    checked={formData.nearby.pond === "yes"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="nearby.pond"
                    checked={formData.nearby.pond === "no"}
                    onChange={handleChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span><b><i>Stream</i></b></span>
                  <br/>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="nearby.stream"
                    checked={formData.nearby.stream === "yes"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="nearby.stream"
                    checked={formData.nearby.stream === "no"}
                    onChange={handleChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span><b><i>Garbage</i></b></span>
                  <br/>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="nearby.garbage"
                    checked={formData.nearby.garbage === "yes"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="nearby.garbage"
                    checked={formData.nearby.garbage === "no"}
                    onChange={handleChange}
                  />
                </StyledRadio>
                <StyledRadio
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <span><b><i>Waste Water</i></b></span>
                  <br/>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="nearby.wasteWater"
                    checked={formData.nearby.wasteWater === "yes"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="nearby.wasteWater"
                    checked={formData.nearby.wasteWater === "no"}
                    onChange={handleChange}
                  />
                </StyledRadio>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <span><b><i>Cattle</i></b></span>
              <br/>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  name="cattle"
                  checked={formData.cattle === "yes"}
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  name="cattle"
                  checked={formData.cattle === "no"}
                  onChange={handleChange}
                />
              </StyledRadio>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            <InputLabel id="demo-simple-select-label">Waste Management</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                name="wasteManagement"
                value={formData.wasteManagement}
                onChange={handleChange}
              >
                <MenuItem value={"compost"}>Compost</MenuItem>
                <MenuItem value={"bioGas"}>Bio Gas</MenuItem>
                <MenuItem value={"soakagePit"}>Soakage Pit</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Working Members"
                variant="outlined"
                fullWidth
                name="workingMembers"
                value={formData.workingMembers}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
              >
                <MenuItem value={"government"}>Government</MenuItem>
                <MenuItem value={"private"}>Private</MenuItem>
                <MenuItem value={"agriculture"}>Agriculture</MenuItem>
                <MenuItem value={"business"}>Business</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <BtnWrapper>
            <button onClick={handleAddMember}>Add New Member</button>
          </BtnWrapper>
          {memberForms.map((member, index) => (
            <MemberForm
              key={index}
              newMember={member}
              handleMemberChange={(e: any) => handleMemberChange(e, index)}
            />
          ))}
          {memberForms.length > 0 && (
            <BtnWrapper>
              <button type="submit">Submit</button>
            </BtnWrapper>
          )}
        </form>
      </Wrapper>
      <Dialog
        open={openModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Diabetes Preditions</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <PredictionComponent closeModal={closeModal}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PhcForm;
const Wrapper = styled.div`
  padding: 10px;
`;
const StyledRadio = styled(RadioGroup)`
  display: block !important;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  button {
    background-color: #2d97dd;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
  }
`;
const BtnPrediction = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px;
  button {
    background-color: #2d97dd;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
  }
`;
