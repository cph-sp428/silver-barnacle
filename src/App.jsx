import "./styles/App.css";
import Wishes from "./components/Wishes";

function App() {
  /*
  TODO:
  - Add a header to the page
  - Add a footer to the page
  - fix bug - when editing a wish, the form is not updated with the wish's data
  - add sort by functionality
  
  */

  return (
    <>
        <img
          src="src\assets\dlf.pt-christmas-present-png-229865.png"
          alt="presents"
        />
        <Wishes />
    </>
  );
}

export default App;
