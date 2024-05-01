import { Grid, TextField } from "@mui/material";
import styled from "styled-components";
import Navbar from "./NavBar/Navbar";
import { createWorker } from "@/api/workerApi";
import { useState } from "react";

const Createuser = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    mobile: "",
    address: "",
    password: "",
  });

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Call the createUser API with the formData state
      const response = await createWorker(formData);

      // Check if the user creation was successful
      if (response) {
        alert("User created successfully");
        console.log("User created:", response);
        setFormData({
          name: "",
          username: "",
          mobile: "",
          address: "",
          password: "",
        });
      } else {
        console.log("User creation failed");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <h1 style={{ padding: "10px", fontSize: "22px", fontWeight: "600" }}>
          Create User
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="username"
              name="username"
              label="User Name"
              variant="outlined"
              fullWidth
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="mobile"
              name="mobile"
              label="Phone"
              variant="outlined"
              fullWidth
              value={formData.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="address"
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <BtnWrapper>
          <button onClick={handleSubmit}>Submit</button>
        </BtnWrapper>
      </Wrapper>
    </>
  );
};

export default Createuser;
const Wrapper = styled.div`
  padding: 10px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  button {
    background-color: #4992f1;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
  }
`;
