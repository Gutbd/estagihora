// Method to verify if any day has odd registers so it is pendent
export const hasCheckpointPendentDay = (checkpointList) => {
  let odds = checkpointList.filter((day) => day.dates.length % 2 !== 0);
  return odds.length > 0;
};
