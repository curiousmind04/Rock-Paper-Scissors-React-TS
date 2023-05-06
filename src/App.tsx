import { useState } from "react";

import classes from "./App.module.css";
import One from "./components/One";
import Rules from "./components/Rules";
import Two from "./components/Two";
import Three from "./components/Three";

function App() {
  const [showRules, setShowRules] = useState<boolean>();
  const [choice, setChoice] = useState<string>();
  const [step, setStep] = useState<number>(1);

  const rulesHandler = () => {
    setShowRules((prevState) => !prevState);
  };

  const choiceHandler = (choice: string) => {
    setChoice(choice);
    setStep(2);
  };

  const changeStep = () => {
    setStep((prevState) => prevState + 1);
    console.log("hi");
  };

  console.log(step);

  return (
    <div>
      <header>
        <div>
          <h1>
            <span>Rock</span>
            <span>Paper</span>
            <span>Scissors</span>
            <span>Lizard</span>
            <span>Spock</span>
          </h1>
          <div className={classes.score}>
            <span>Score</span>
            <span>12</span>
          </div>
        </div>
      </header>
      <main>
        {step === 1 && <One onChoice={choiceHandler} />}
        {choice && step === 2 && (
          <Two chosen={choice} onNextStep={changeStep} />
        )}
        {step === 3 && <Three />}
        {showRules === true && <Rules onRulesHide={rulesHandler} />}
      </main>
      <footer>
        <button type="button" onClick={rulesHandler}>
          Rules
        </button>
      </footer>
    </div>
  );
}

export default App;
