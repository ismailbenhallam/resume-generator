import { Component } from "react";
import AssetsService from "../../../services/assets-service";
import "./Assets.css";

export default class Assets extends Component {
  constructor(props) {
    super(props);
    this.assetsService = new AssetsService();
    this.state = {
      asset: "",
      assets: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      assets: this.assetsService.getAll(),
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeAsset = (a) => {
    // let index = this.state.assets.indexOf(a);
    // let array = [...this.state.assets];
    // array.splice(index, 1);
    this.assetsService.removeOne(a);
    this.setState({
      assets: this.assetsService.getAll(),
    });
  };

  addAsset = (event) => {
    event.preventDefault();
    if (!this.state.asset) return;
    // console.log(this.state.asset);
    // let a = this.state.assets;
    // a.push(this.state.asset);
    this.assetsService.addOne(this.state.asset);

    this.setState({
      assets: this.assetsService.getAll(),
      asset: "",
    });
  };

  render() {
    return (
      <div className="assets">
        <div className="assets-list">
          {this.state.assets.map((a) => (
            <div key={a} className="asset">
              <span>{a}</span>
              <button
                onClick={() => this.removeAsset(a)}
                className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
        <form>
          <div className="assets-input-wrapper">
            <div className="assets-input">
              <label htmlFor="input-new-asset">Asset</label>
              <input
                id="input-new-asset"
                name="asset"
                type="text"
                onChange={this.handleChange}
                value={this.state.asset}
                required="required"
              />
            </div>
            <button onClick={this.addAsset} className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
