# USSD Simulator Documentation.

This project simulates a USSD (Unstructured Supplementary Service Data) interface using React, Vite, and TypeScript. It allows users to interact with a text-based menu system for testing and development of USSD applications without a real mobile network.

## Approach

My approach to building this USSD simulator involved the following key steps:

1.  **Component-Based Architecture (React):** I utilized React's component to structure the simulator's UI. This allowed for modularity and reusability of UI elements, making the code more organized and maintainable.  I created a component for the USSD Simulator which has the [ the screen display, the input field and button ].

2.  **TypeScript for Type Safety:** I incorporated TypeScript to add typing to the project. This helped catch potential errors early during development and improved code maintainability and readability. I defined interfaces for [].

3.  **State Management (React):** I managed the state of the USSD simulator using [ `useState` and `useEffect` hooks].  This allowed me to efficiently update the UI based on user input and user screen.

4.  **Menu Structure Design/Input Handling:** The USSD menu structure is defined implicitly within the React component's JSX and the `handleUssd` function.  The initial menu is rendered directly in the component's JSX.  Subsequent menus are created dynamically within the `handleUssd` function's `switch` statement. Each `case` in the `switch` statement displays a different menu screen.  The content of each menu screen (using JSX) is then set as the `screen` state, which triggers the component to display the appropriate content or response. 


5.**Styling:** I used CSS Modules (`Ussd.module.css`) to style the simulator interface, giving it a look and feel similar to a real USSD menu on a mobile phone. I also made it responsive on all devices.


6.  **Vite for Fast Development:** I used Vite as the build tool for this project, which enabled fast development and hot reloading.

## How to Run the Project
1.  **Prerequisites:** Ensure you have Node.js and npm (or yarn) installed on your system.

2.  **Installation:**
 In your Terminal:
    git clone [https://github.com/your-username/ussd-simulator.git]
    https://github.com/Nanakhodes/ussd-simulator.git
    cd ussd-simulator
    npm install 
    

3.  **Running the Simulator:**

    npm run dev
    

    This will start the development server. The simulator will be accessible at [`http://localhost:5176`].

4.  **Interacting with the Simulator:**

    *   Open your web browser and navigate to the URL mentioned above.
    *   The USSD simulator interface will be displayed.
    *   Enter the number corresponding to your desired menu option in the input field and press Enter.
    *   Follow the prompts to navigate through the menus.

5.  **Exiting the Simulator:**

    Close the terminal window where the Vite development server is running.


