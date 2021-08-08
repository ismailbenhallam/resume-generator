import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import "./App.css";
import Template1 from "./templates/template1/Template1";
import Template2 from "./templates/template2/Template2";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      templates: {
        template1: <Template1 />,
        template2: <Template2 />,
      },
    };
    this.state.selectedTemplate = this.state.templates.template1;
  }
  render() {
    return (
      <>
        <select onChange={this.handleChangeTemplate}>
          {Object.entries(this.state.templates).map((entry) => (
            <option value={entry[0]}>{entry[0]}</option>
          ))}
        </select>
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
          {this.state.selectedTemplate}
        </div>
      </>
    );
  }

  handleChangeTemplate = (event) => {
    this.setState({
      selectedTemplate: this.state.templates[event.target.value],
    });
  };
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
