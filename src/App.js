import React from "react";
import AverageCpuChart from "./averageCpuChart";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-color: #622da5;
`;

function App() {
  return (
    <PageWrapper>
      <header className="App-header">
        <h2>Datadog CPU Monitor</h2>
      </header>
      <AverageCpuChart />
    </PageWrapper>
  );
}

export default App;
