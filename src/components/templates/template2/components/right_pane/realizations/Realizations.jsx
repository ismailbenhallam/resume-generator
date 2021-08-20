import SectionTitle from "../../section-title/SectionTitle";
import "./Realizations.css";

export default function Realizations(props) {
  return (
    <>
      <SectionTitle title={props.title} />
      <div className="realizations">
        {props.realizations.map((r) => (
          <div key={r.title} className="realization">
            <div className="top">
              <div className="top-left">
                <div className="enterprise">{r.enterprise || r.school}</div>
                <div className="title">{r.title}</div>
              </div>
              <div className="top-right">({r.period})</div>
            </div>
            {r.details && (
              <div className="bottom">
                {r.details}
                {r.more && (
                  <>
                    <br />
                    <span className="more">
                      {props.technologiesPrefix + r.more}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

Realizations.defaultProps = {
  technologiesPrefix: "Technologies: ",
};
