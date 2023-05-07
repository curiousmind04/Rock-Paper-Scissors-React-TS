import { useEffect } from "react";
import classes from "./Two.module.css";

type Props = {
  chosen: string;
  onNextStep: () => void;
};

const Two: React.FC<Props> = ({ chosen, onNextStep }) => {
  useEffect(() => {
    const timer = setTimeout(onNextStep, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onNextStep]);

  console.log("TWO");

  return (
    <>
      <div className={classes.container}>
        <div className={classes.player}>
          <div className={eval(`classes.${chosen}OuterContainer`)}>
            <div className={eval(`classes.${chosen}InnerContainer`)}>
              <div className={classes.circleTwo}>
                <div className={classes.circleOne}>
                  <img
                    className={classes.image}
                    src={`/images/icon-${chosen}.svg`}
                    alt={`${chosen} icon`}
                  />
                </div>
              </div>
            </div>
          </div>
          <span>You Picked</span>
        </div>
        <div className={classes.computer}>
          <div className={classes.blank}></div>
          <span>The House Picked</span>
        </div>
      </div>
    </>
  );
};

export default Two;
