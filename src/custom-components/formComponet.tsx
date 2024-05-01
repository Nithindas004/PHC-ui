import {
  MenuItem,
  Select,
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MemberDetails } from "./memberDetails";
import { fetchSurveys, updateSurvey } from "@/api/adminApi";
import Cookies from "js-cookie";

interface props {
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMember: any;
}
const defaultMemberData = {
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
    complete: "",
    partiallyComplete: "",
    incomplete: "",
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
const FormComponent = ({ setShowDetails, selectedMember }: props) => {
  const [formData, setFormData] = useState({
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
    members: [],
  });
  const [memberForms, setMemberForms] = useState(defaultMemberData);
  console.log(memberForms, "memberForms");
  useEffect(() => {
    if (selectedMember) {
      setFormData({
        surveyNumber: selectedMember.surveyNumber,
        owner: selectedMember.owner,
        houseNumber: selectedMember.houseNumber,
        houseName: selectedMember.houseName,
        mobile: selectedMember.mobile,
        houseType: selectedMember.houseType,
        religion: selectedMember.religion,
        caste: selectedMember.caste,
        income: selectedMember.income,
        rationCard: selectedMember.rationCard,
        scst: selectedMember.scst,
        waterSource: selectedMember.waterSource,
        toilet: selectedMember.toilet,
        nearby: {
          pond: selectedMember.nearby.pond,
          stream: selectedMember.nearby.stream,
          garbage: selectedMember.nearby.garbage,
          wasteWater: selectedMember.nearby.wasteWater,
        },
        cattle: selectedMember.cattle,
        wasteManagement: selectedMember.wasteManagement,
        workingMembers: selectedMember.workingMembers,
        jobType: selectedMember.jobType,
        members: selectedMember.members,
      });
      setMemberForms(selectedMember.members[0]);
    }
  }, [selectedMember]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  const handleMemberChange = (e: any) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts.length === 1) {
      setMemberForms({ ...memberForms, [name]: value });
    } else {
      const [nestedKey, subKey] = nameParts;
      setMemberForms({
        ...memberForms,
        [nestedKey]: {
          ...memberForms[nestedKey],
          [subKey]: value,
        },
      });
    }
  };
  const adminId = Cookies.get("adminId");
  const fetchData = async () => {
    try {
      await fetchSurveys(adminId);
    } catch (error) {
      console.error("Error fetching surveys:", error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      _id: selectedMember._id,
      workerId: selectedMember.workerId,
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

      const surveyRes = await updateSurvey(payload);

      // Check if the survey creation was successful
      if (surveyRes) {
        // Survey creation successful, do something with the response if needed
        alert("Updated Sucessfully");
        console.log("Survey created:", surveyRes);
        fetchData();
      } else {
        // Survey creation failed, handle the error if needed
        console.log("Survey creation failed");
      }
    } catch (error) {
      // Catch any errors from the createSurvey function
      console.error("Error creating survey:", error);
    }
  };
  return (
    <>
      <h1 style={{ padding: "10px", fontSize: "22px", fontWeight: "600" }}>
        All Details
      </h1>
      <form onSubmit={handleSubmit} style={{ padding: "15px" }}>
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Ration Card"
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="SCST"
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Water Source"
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Toilet"
              fullWidth
              name="toilet"
              value={formData.toilet}
              onChange={handleChange}
            >
              <MenuItem value={"pit"}>Pit</MenuItem>
              <MenuItem value={"septicTank"}>Septic Tank</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <span>Near By</span>
            <div style={{ display: "flex" }}>
              <StyledRadio
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <span>Pond</span>
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
                <span>Stream</span>
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
                <span>Garbage</span>
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
                <span>Waste Water</span>
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
            <span>Cattle</span>
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Waste Management"
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Job Type"
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
        <div style={{ padding: "20px" }}></div>
        <HeadingWrapper>
          <span>Member Details</span>
        </HeadingWrapper>
        <MemberDetails
          members={selectedMember.members}
          newMember={memberForms}
          handleMemberChange={handleMemberChange}
          setMemberForms={setMemberForms}
        />
        <BtnWrapper>
          <button onClick={() => setShowDetails(false)}>cancel</button>
          <button onClick={(e) => handleUpdateSubmit(e)}>Submit</button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default FormComponent;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px;
  button {
    background-color: #3c8de9;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
  }
`;
const StyledRadio = styled(RadioGroup)`
  display: block !important;
`;
const HeadingWrapper = styled.div`
  margin-top: 15px;
  span {
    font-size: 18px;
    font-weight: 600;
  }
`;
