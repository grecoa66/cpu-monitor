import { isAlarmTriggered } from "./alarm";

test("return true when cpu load is above 1 for evaluation cycles", () => {
  const dataArray = [
    { y: 0.01 },
    { y: 0.01 },
    { y: 0.01 },
    { y: 1.01 },
    { y: 1.02 },
    { y: 1.03 },
  ];

  const result = isAlarmTriggered(dataArray, 2);

  expect(result).toBe(true);
});

test("return true when cpu load spikes and is above 1 for evaluation cycles", () => {
  const dataArray = [
    { y: 0.01 },
    { y: 0.01 },
    { y: 0.01 },
    { y: 9.01 },
    { y: 0.02 },
    { y: 0.03 },
  ];

  const result = isAlarmTriggered(dataArray, 6);

  expect(result).toBe(true);
});

test("return false when cpu load is 1 for evaluation cycles", () => {
  const dataArray = [
    { y: 1 },
    { y: 1 },
    { y: 1 },
    { y: 1 },
    { y: 1 },
    { y: 1 },
  ];

  const result = isAlarmTriggered(dataArray, 5);

  expect(result).toBe(false);
});

test("return false when cpu load is below 1 for evaluation cycles", () => {
  const dataArray = [
    { y: 1 },
    { y: 1 },
    { y: 0.1 },
    { y: 1 },
    { y: 1 },
    { y: 1 },
  ];

  const result = isAlarmTriggered(dataArray, 5);

  expect(result).toBe(false);
});
