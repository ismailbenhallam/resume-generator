import capitalize from "../../../../../../utilities/capitalize";
import SectionTitle from "../../section-title/SectionTitle";
import "./Realizations.css";

export default function Realizations({ realizations, title }) {
  return (
    <>
      {realizations && realizations.length > 0 && (
        <>
          <SectionTitle title={capitalize(title)} />
          <div className="realizations">
            {realizations.map((r) => (
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
                        <span className="more">{r.more}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
