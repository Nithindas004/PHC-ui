import { fetchDashboardAnalytics } from "@/api/adminApi";
import Navbar from "@/custom-components/NavBar/Navbar";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Home() {
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [error, setError] = useState(null);
  console.log(analyticsData, "analyticsData");
  const fetchData = async () => {
    try {
      const data = await fetchDashboardAnalytics();
      setAnalyticsData(data);
    } catch (error: any) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Wrapper>
        {analyticsData?.map((item: any, index: number) => (
          <div key={index}>
            {item.data && (
              <img src={`${item.data}`} alt="Dashboard Analytics" />
            )}
          </div>
        ))}
      </Wrapper>
    </>
  );
}

export default Home;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
