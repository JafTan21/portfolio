import { useEffect, useState } from "react";
import { Hand } from "./Hand";
import { Time, getCurrentTime, getRotations } from "./utils";

import classes from "./style.module.scss";

export default function DigiAnaClock() {
  const [time, timeSet] = useState<Time>(getCurrentTime);
  const [rotation, rotationSet] = useState(() => getRotations(time));

  useEffect(() => {
    // change page title
    document.title = "Digiana Clock";

    // update time every second
    const interval: NodeJS.Timeout = setInterval(
      () => timeSet(getCurrentTime),
      1000,
    );

    // clear the interval when page unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // update hands rotations based on current time
    rotationSet(() => getRotations(time));
  }, [time]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.circle}>
          <Hand
            rotation={rotation.hour}
            time={time.hour}
            className={classes.hour}
          />
          <Hand
            rotation={rotation.min}
            time={time.min}
            className={classes.minute}
          />
          <Hand
            rotation={rotation.sec}
            time={time.sec}
            className={classes.second}
          />
        </div>
      </div>
    </>
  );
}
