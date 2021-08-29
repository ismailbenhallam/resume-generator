import capitalize from "../../../../../../utilities/capitalize";
import SectionTitle from "../../section-title/SectionTitle";
import styles from "./Realizations.module.css";

export default function Realizations({ realizations, title }) {
  return (
    <>
      {realizations && realizations.length > 0 && (
        <>
          <SectionTitle title={capitalize(title)} />
          <div className={styles.realizations}>
            {realizations.map((r) => (
              <div key={r.title} className={styles.realization}>
                <div className={styles.top}>
                  <div className={styles.topLeft}>
                    <div className={styles.enterprise}>
                      {r.enterprise || r.school}
                    </div>
                    <div className={styles.title}>{r.title}</div>
                  </div>
                  <div className={styles.topRight}>({r.period})</div>
                </div>
                {r.details && (
                  <div className={styles.bottom}>
                    {r.details}
                    {r.more && (
                      <>
                        <br />
                        <span className={styles.more}>{r.more}</span>
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
