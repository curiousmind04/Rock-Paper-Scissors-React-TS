import { useState } from "react";

import classes from "./App.module.css";
import One from "./components/One";
import Rules from "./components/Rules";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";

function App() {
  const [showRules, setShowRules] = useState<boolean>(false);
  const [choice, setChoice] = useState<string>();
  const [computerChoice, setComputerChoice] = useState<string>();
  const [step, setStep] = useState<number>(1);
  const [winner, setWinner] = useState<string>();
  const [score, setScore] = useState<number>(0);

  const rulesHandler = () => {
    setShowRules((prevState) => !prevState);
  };

  const choiceHandler = (choice: string) => {
    setChoice(choice);
    setStep(2);

    const computerPlay = Math.floor(Math.random() * 5 + 1);

    if (computerPlay === 1) {
      setComputerChoice("scissors");
    }
    if (computerPlay === 2) {
      setComputerChoice("spock");
    }
    if (computerPlay === 3) {
      setComputerChoice("paper");
    }
    if (computerPlay === 4) {
      setComputerChoice("lizard");
    }
    if (computerPlay === 5) {
      setComputerChoice("rock");
    }
  };

  console.log(computerChoice);

  const changeStep = () => {
    if (step === 3) {
      if (choice === "scissors" && computerChoice === "paper") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "paper" && computerChoice === "scissors") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "paper" && computerChoice === "rock") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "rock" && computerChoice === "paper") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "rock" && computerChoice === "lizard") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "lizard" && computerChoice === "rock") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "lizard" && computerChoice === "spock") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "spock" && computerChoice === "lizard") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "spock" && computerChoice === "scissors") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "scissors" && computerChoice === "spock") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "scissors" && computerChoice === "lizard") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "lizard" && computerChoice === "scissors") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "paper" && computerChoice === "spock") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "spock" && computerChoice === "paper") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "rock" && computerChoice === "scissors") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "scissors" && computerChoice === "rock") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "lizard" && computerChoice === "paper") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "paper" && computerChoice === "lizard") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else if (choice === "spock" && computerChoice === "rock") {
        setWinner("player");
        setScore((prevState) => prevState + 1);
      } else if (choice === "rock" && computerChoice === "spock") {
        setWinner("computer");
        setScore((prevState) => (prevState > 0 ? prevState - 1 : 0));
      } else {
        setWinner("tie");
      }
    }

    setStep((prevState) => prevState + 1);
  };

  const resetHandler = () => {
    setStep(1);
  };

  console.log(step);

  return (
    <div className={classes.container}>
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
            <span>{score}</span>
          </div>
        </div>
      </header>
      <main>
        {step === 1 && <One onChoice={choiceHandler} />}
        {choice && step === 2 && (
          <Two chosen={choice} onNextStep={changeStep} />
        )}
        {step === 3 && computerChoice && choice && (
          <Three
            computer={computerChoice}
            chosen={choice}
            onNextStep={changeStep}
          />
        )}
        {step === 4 && computerChoice && choice && winner && (
          <Four
            computer={computerChoice}
            chosen={choice}
            winner={winner}
            onReset={resetHandler}
          />
        )}
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
