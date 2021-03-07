import { useState, useEffect, useRef } from "react";

const useCpu = () => {
  const [cpuLoad, setCpuLoad] = useState();
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    setInterval(async () => {
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
          setCpuLoad(data.loadAverage);
          setCount(countRef.current + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return clearInterval();
  }, []);

  return { cpuLoad, count };
};

export default useCpu;
