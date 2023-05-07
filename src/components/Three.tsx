import classes from "./Two.module.css";

type Props = {
  chosen: string;
  computer: string;
};

const Three: React.FC<Props> = ({ chosen, computer }) => {
  console.log("THREE");
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
          <div className={eval(`classes.${computer}OuterContainer`)}>
            <div className={eval(`classes.${computer}InnerContainer`)}>
              <div className={classes.circleTwo}>
                <div className={classes.circleOne}>
                  <img
                    className={classes.image}
                    src={`/images/icon-${computer}.svg`}
                    alt={`${computer} icon`}
                  />
                </div>
              </div>
            </div>
          </div>
          <span>The House Picked</span>
        </div>
      </div>
    </>
  );
};

export default Three;
