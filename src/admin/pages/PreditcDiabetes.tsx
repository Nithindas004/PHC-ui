import Navbar from "@/custom-components/NavBar/Navbar";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const PreditcDiabetes = (props: Props) => {
  const baseUrl = "http://localhost:3000/api/v1/worker";

  const predictDiabetes = async (data: any) => {
    try {
      const response = await axios.post(
        `${baseUrl}/diabetes-count/predict`,
        data
      );
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };

  const [year, setYear] = useState("");
  const [response, setReposne] = useState<any>();
  const handleChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      year,
    };
    try {
      const response = await predictDiabetes(payload);
      setReposne(response);
      console.log(response); // Expected response: { result: '50' }
    } catch (error) {
      console.error(error);
      // Handle the error from the API
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="Year"
                variant="outlined"
                fullWidth
                name="year"
                value={year}
                onChange={handleChange}
              />
            </Grid>
            {response && (
              <Grid item xs={12} sm={4} md={4}>
                <ResultWrapper>
                  <span>Result : </span> <h2>{response?.data?.result}</h2>
                </ResultWrapper>
              </Grid>
            )}
          </Grid>
          <BtnWrapper>
            <button type="submit">Submit</button>
          </BtnWrapper>
        </form>
      </Wrapper>
    </>
  );
};

export default PreditcDiabetes;

const Wrapper = styled.div`
  padding: 5%;
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
const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
`;
