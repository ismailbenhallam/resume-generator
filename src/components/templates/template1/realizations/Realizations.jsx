import { Fragment } from "react";
import capitalize from "../../../../utilities/capitalize";
import "./Realizations.css";

export default function Realizations(props) {
  return (
    <>
      <div className="section_title">{capitalize(props.title)}</div>
      <div className="realizations">
        {props.realizations.map((r) => (
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
              {r.more && <div className="more">{r.more}</div>}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
