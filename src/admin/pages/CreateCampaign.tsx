import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import styled from "styled-components";
import Navbar from "@/custom-components/NavBar/Navbar";
import { createCampaign } from "@/api/adminApi";

type Props = {};

const CreateCampaign = (props: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: null,
    endDate: null,
    conductedBy: "",
  });

  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCampaign(formData);
      console.log(response);
      // Handle the successful response from the API
    } catch (error) {
      console.error(error);
      // Handle the error from the API
    }
  };

  return (
    <>
      <Navbar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <DatePicker
                  label="Basic date picker"
                  name="startDate"
                  value={formData.startDate}
                  onChange={(date) => handleDateChange("startDate", date)}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <DatePicker
                  label="Basic date picker"
                  name="endDate"
                  value={formData.endDate}
                  onChange={(date) => handleDateChange("endDate", date)}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  id="outlined-basic"
                  label="Conducted By"
                  variant="outlined"
                  fullWidth
                  name="conductedBy"
                  value={formData.conductedBy}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <BtnWrapper>
              <button type="submit">Create Campaign</button>
            </BtnWrapper>
          </form>
        </Wrapper>
      </LocalizationProvider>
    </>
  );
};

export default CreateCampaign;
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
const Wrapper = styled.div`
  padding: 5%;
`;
