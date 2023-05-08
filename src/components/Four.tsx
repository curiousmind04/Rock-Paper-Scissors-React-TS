import classes from "./Play.module.css";

type Props = {
  chosen: string;
  computer: string;
  winner: string;
  onReset: () => void;
};

const Four: React.FC<Props> = ({ chosen, computer, winner, onReset }) => {
  const resetHandler = () => {
    onReset();
  };

  console.log("FOUR");

  return (
    <>
      <div className={classes.container}>
        <div className={classes.player}>
          <div className={eval(`classes.${chosen}OuterContainer`)}>
            <div className={eval(`classes.${chosen}InnerContainer`)}>
              <div className={winner === "player" ? classes.winner : ""}></div>
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
              <div
                className={winner === "computer" ? classes.winner : ""}
              ></div>
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
      <div className={classes.result}>
        {winner === "player" && <span>You Win</span>}
        {winner === "computer" && <span>You Lose</span>}
        {winner === "tie" && <span>Tie Game</span>}
        <button type="button" onClick={resetHandler}>
          Play Again
        </button>
      </div>
    </>
  );
};

export default Four;
