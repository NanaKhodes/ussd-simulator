import React, { useState } from "react";
import styles from "./Ussd.module.css";

/*Defines the structure of the content displayed on the screen*/
interface ScreenContent {
  title: string;
  options: { number: string; text: string }[];
}
/*defines the structure of the screen state variable, which holds the current content being displayed on the USSD screen.*/
interface ScreenType {
  content: ScreenContent;
}
/*defines a functional component*/
const Ussd: React.FC = () => {
  const [screen, setScreen] = useState<ScreenType>(() => {
    const savedScreen = localStorage.getItem("screen");
    return savedScreen
      ? JSON.parse(savedScreen)
      : {
          content: {
            title: "Welcome to USSD Simulator",
            options: [
              { number: "1", text: "Check Balance" },
              { number: "2", text: "Exit" },
            ],
          },
        };
  });
/*state management for user input*/
  const [input, setInput] = useState<string>("");

/*function that handles conditional rendering and */
  const handleUssd = () => {
    const numInput = parseInt(input, 10);

    switch (numInput) {
      case 1:
        setScreen({
          content: {
            title: "Your balance is $50",
            options: [{ number: "0", text: "Back" }],
          },
        });
        break;
      case 0:
        setScreen({
          content: {
            title: "Welcome to USSD Simulator",
            options: [
              { number: "1", text: "Check Balance" },
              { number: "2", text: "Exit" },
            ],
          },
        });
        break;
      case 2:
        setScreen({
          content: {
            title: "Session Ended.",
            options: [],
          },
        });
        break;
      default:
        setScreen({
          content: {
            title: "Invalid Input. Try again.",
            options: [],
          },
        });
        break;
    }
    setInput("");
  };

  const renderScreen = (content: ScreenContent) => (
    <div>
      <h4>{content.title}</h4>
      <br />
      {content.options.map((option) => (
        <p key={option.number}>
          <span className={styles.number}>{option.number}.</span>{" "}
          <span className={styles.title}>{option.text}</span>
        </p>
      ))}
    </div>
  );
/*handles and tracks the changes in the state*/
  return (
    <div className={styles.container}>
      <div className={styles.phonescreen}>
        <div className={styles.screen}>{renderScreen(screen.content)}</div>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input a number..."
      />
      <button onClick={handleUssd}>Enter</button>
    </div>
  );
};

export default Ussd;
