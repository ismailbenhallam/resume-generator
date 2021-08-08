import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import "./App.css";
import Template2 from "./templates/template2/Template2";
// import Template1 from "./templates/template1/Template1";

class App extends PureComponent {
  render() {
    return (
      <>
        <div className="save-button-wrapper">
          <button
            className="save-button"
            tabIndex={1}
            onClick={() => window.print()}>
            Save as PDF&nbsp;
            <FontAwesomeIcon icon={faFilePdf} className="icon" />
          </button>
        </div>
        <div id="resume" className="container">
          <Template2 />
        </div>
      </>
    );
  }
}

class ErrorBoundaries extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    return !this.state.hasError ? (
      <div>{this.props.children}</div>
    ) : (
      <div>Error</div>
    );
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
}
export default App;
