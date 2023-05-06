import classes from "./One.module.css";

type Props = {
  onChoice: (choice: string) => void;
};

const One: React.FC<Props> = ({ onChoice }) => {
  const choiceHandler = (choice: string) => {
    onChoice(choice);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.scissorsOuterContainer}
        onClick={choiceHandler.bind(null, "scissors")}
      >
        <div className={classes.scissorsInnerContainer}>
          <div className={classes.circleTwo}>
            <div className={classes.circleOne}>
              <img
                className={classes.image}
                src="/images/icon-scissors.svg"
                alt="scissors icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.spockOuterContainer}
        onClick={choiceHandler.bind(null, "spock")}
      >
        <div className={classes.spockInnerContainer}>
          <div className={classes.circleTwo}>
            <div className={classes.circleOne}>
              <img
                className={classes.image}
                src="/images/icon-spock.svg"
                alt="spock icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.paperOuterContainer}
        onClick={choiceHandler.bind(null, "paper")}
      >
        <div className={classes.paperInnerContainer}>
          <div className={classes.circleTwo}>
            <div className={classes.circleOne}>
              <img
                className={classes.image}
                src="/images/icon-paper.svg"
                alt="paper icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.lizardOuterContainer}
        onClick={choiceHandler.bind(null, "lizard")}
      >
        <div className={classes.lizardInnerContainer}>
          <div className={classes.circleTwo}>
            <div className={classes.circleOne}>
              <img
                className={classes.image}
                src="/images/icon-lizard.svg"
                alt="lizard icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.rockOuterContainer}
        onClick={choiceHandler.bind(null, "rock")}
      >
        <div className={classes.rockInnerContainer}>
          <div className={classes.circleTwo}>
            <div className={classes.circleOne}>
              <img
                className={classes.image}
                src="/images/icon-rock.svg"
                alt="rock icon"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        className={classes.pentagon}
        src="/images/bg-pentagon.svg"
        alt="pentagon icon"
      />
    </div>
  );
};

export default One;
