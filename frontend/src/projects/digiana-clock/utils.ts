export type Time = {
  hour: number;
  min: number;
  sec: number;
};

export const rotationUnits = {
  hour: 360 / 12,
  min: 360 / 60,
  sec: 360 / 60,
};

// logic to get current time
export const getCurrentTime = (): Time => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return {
    hour: hour + (1 / 60) * min + (1 / 3600) * sec,
    min,
    sec,
  };
};

// logic to get rotation angle based on "time"
export const getRotations = (time: Time) => {
  return {
    hour: time.hour * rotationUnits.hour,
    min: time.min * rotationUnits.min,
    sec: time.sec * rotationUnits.sec,
  };
};
