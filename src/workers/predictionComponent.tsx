import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import { predictDiabetes } from "@/api/workerApi";
interface prope {
  closeModal: () => void;
}
function PredictionComponent({ closeModal }): props {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [prediction, SetPrediction] = useState<any>();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataNumbers = {
        Pregnancies: parseFloat(formData.Pregnancies),
        Glucose: parseFloat(formData.Glucose),
        BloodPressure: parseFloat(formData.BloodPressure),
        SkinThickness: parseFloat(formData.SkinThickness),
        Insulin: parseFloat(formData.Insulin),
        BMI: parseFloat(formData.BMI),
        DiabetesPedigreeFunction: parseFloat(formData.DiabetesPedigreeFunction),
        Age: parseFloat(formData.Age),
      };
      const prediction = await predictDiabetes(formDataNumbers);
      SetPrediction(prediction);
      console.log(prediction);
      // Handle the prediction result as needed
    } catch (error) {
      console.error("Error predicting diabetes:", error);
    }
  };

  return (
    <>
      {prediction ? (
        <div>Diabetes :{prediction.data.diabetes}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Pregnancies"
                variant="outlined"
                fullWidth
                name="Pregnancies"
                value={formData.Pregnancies}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Glucose"
                variant="outlined"
                fullWidth
                name="Glucose"
                value={formData.Glucose}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="BloodPressure"
                variant="outlined"
                fullWidth
                name="BloodPressure"
                value={formData.BloodPressure}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Skin Thickness"
                variant="outlined"
                fullWidth
                name="SkinThickness"
                value={formData.SkinThickness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Insulin"
                variant="outlined"
                fullWidth
                name="Insulin"
                value={formData.Insulin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="BMI"
                variant="outlined"
                fullWidth
                name="BMI"
                value={formData.BMI}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="DiabetesPedigreeFunction"
                variant="outlined"
                fullWidth
                name="DiabetesPedigreeFunction"
                value={formData.DiabetesPedigreeFunction}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                fullWidth
                name="Age"
                value={formData.Age}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <BtnWrapper>
            <Button type="submit">Submit</Button>
          </BtnWrapper>
        </form>
      )}
      <Button onClick={() => closeModal()}>Close</Button>
    </>
  );
}

export default PredictionComponent;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
`;
