import classes from "./Rules.module.css";

type Props = {
  onRulesHide: () => void;
};

const Rules: React.FC<Props> = ({ onRulesHide }) => {
  const rulesHandler = () => {
    onRulesHide();
  };

  return (
    <div className={classes.container}>
      <h2>Rules</h2>
      <img
        className={classes.rules}
        src="/images/image-rules-bonus.svg"
        alt="rules diagram"
      />
      <img
        className={classes.close}
        onClick={rulesHandler}
        src="/images/icon-close.svg"
        alt="close icon"
      />
    </div>
  );
};

export default Rules;
