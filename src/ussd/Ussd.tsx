import React, { useState } from 'react'
import styles from "./Ussd.module.css";

interface ScreenContent {
  title: string;
  options: { number: string; text: string }[];
}
interface ScreenType {
  content: ScreenContent;
}

const Ussd: React.FC = () => {
const [screen, setScreen] = useState<ScreenType>(() => {
    const savedScreen = localStorage.getItem("screen");
    return savedScreen ? JSON.parse(savedScreen) : {
      content: {
        title: "Welcome to USSD Simulator",
        options: [
          { number: "1", text: "Check Balance" },
          { number: "2", text: "Exit" },
        ],
      },
    };
  });
const [input, setInput] = useState<string>("");

const handleUssd =  () => {
  switch (input) {
    case "1":
      setScreen(
        <div>
          <p>
            <span className={styles.number}>Your</span> balance{" "}
            <span className={styles.title}>is</span>{" "}
            <span className={styles.number}>$50</span>
          </p>
          <br />
          <p>
            <span className={styles.number}>0</span>.{" "}
            <span className={styles.number}>Back</span>
          </p>
        </div>
      );
      break;
    case "0":
       setScreen(
         <div>
           <p>
             Welcome <span className={styles.title}>to</span> USSD Simulator
           </p>
           <br />
           <p>
             <span className={styles.number}>1.</span>
             <span className={styles.title}>Check</span> Balance
           </p>
           <br />
           <p>
             <span className={styles.number}>2.</span> <span className={styles.title}>Exit</span>
           </p>
         </div>
       ); 
      break;
    case "2":
      setScreen<String>("Session Ended.");
     break;
    default:
      setScreen("Invalid Input.Try again");

      setInput("");
  }
}
  return (
    <>
      <div className={styles.container}>
        <div className={styles.phonescreen}>
          <div className={styles.screen}>{screen}</div>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Input a number..."
        />
        <button onClick={handleUssd}>Enter</button>
      </div>
    </>
  );
}

export default Ussd