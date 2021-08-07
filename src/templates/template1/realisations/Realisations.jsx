import { Fragment, PureComponent } from "react";
import "./Realisations.css";

export default class Realisations extends PureComponent {
  render() {
    return (
      <>
        <div className="section_title">{this.props.title}</div>
        <div className="realisations">
          {this.props.realisations.map((r) => (
            <Fragment key={r.title}>
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
            </Fragment>
          ))}
        </div>
      </>
    );
  }
}

Realisations.defaultProps = {
  technologiesPrefix: "Technologies: ",
};
