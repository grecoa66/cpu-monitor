import React from "react";
import styled from "styled-components";

const Warning = styled.h2`
  color: red;
`;

export const isAlarmTriggered = (dataArray, evaluations) => {
  let twoMinuteAvg = 0;

  for (let i = 1; i <= evaluations; i++) {
    twoMinuteAvg += dataArray[dataArray.length - i].y;
  }

  if (twoMinuteAvg / evaluations > 1) {
    return true;
  } else {
    return false;
  }
};

const Alarm = ({ graphData, evaluations }) => {
  return (
    <>
      {isAlarmTriggered(graphData, evaluations) ? (
        <Warning>Warning: High CPU Usage</Warning>
      ) : (
        <h2>Normal CPU Usage </h2>
      )}
    </>
  );
};

export default Alarm;
