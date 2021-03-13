import { useState } from "react";
import useInterval from "./useInterval";

const useCpu = () => {
  const [cpuLoad, setCpuLoad] = useState(0);
  const [time, setTime] = useState(0);

  useInterval(async () => {
    await fetch("http://localhost:3001/cpu-load", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("USE EFFECT CPU: ", data);
        setCpuLoad(data.loadAverage);
        setTime(data.time);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 3000);

  return { cpuLoad, time };
};

export default useCpu;
