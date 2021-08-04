import { PureComponent } from "react";
import "./Realisations.css";

export default class Realisations extends PureComponent {
  render() {
    return (
      <>
        <div className="realisations_title">{this.props.title}</div>
        <div className="realisations">
          {this.props.realisations.map((r) => (
            <>
              <div className="period">{r.period}</div>
              <div className="content">
                <div className="title">{r.title}</div>
                <div className="coordinates">
                  <span className="enterprise">{r.enterprise || r.school}</span>
                  &nbsp;
                  <span className="place">{r.place}</span>
                </div>
                <div className="details">{r.details}</div>
                {r.more && (
                  <div className="more">
                    {this.props.technologiesPrefix + " " + r.more}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}

Realisations.defaultProps = {
  technologiesPrefix: "Technologies: ",
};
