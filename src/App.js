// Step 1: Import dependencies
import "./App.css";
import { Header } from "./components/header";

// Step 2: Declare component as a function/class
const App = (props) => {
  // react components always have to return JSX (HTML)

  return (
    <div>
      <Header firstName="Bob Smith" title="My Life in React" />
    </div>
  );
};

// Step 3: export component
export default App;
