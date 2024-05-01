import { downloadSurveys, fetchSurveys } from "@/api/adminApi";
import Navbar from "@/custom-components/NavBar/Navbar";
import { TableContent } from "@/custom-components/tableComponent";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@mui/material";

function Phc() {
  const adminId = Cookies.get("adminId");
  const [surveyData, setSurveyData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSurveys(adminId);
        setSurveyData(response); // Set the survey data in state
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchData();
  }, [adminId]);
  const downloadSurvey = async () => {
    try {
      await downloadSurveys(adminId);
    } catch (error) {
      console.error("Error fetching surveys:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "end", padding: "10px" }}>
        <a
          style={{ background: "#8acfff", padding: "10px" , borderRadius: '10px'}}
          href="http://localhost:8000/api/v1/admin/download-surveys"
        >
          Dowload Survey
        </a>
      </div>

      <TableContent surveyData={surveyData} />
    </>
  );
}

export default Phc;
