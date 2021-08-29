import { Fragment } from "react";
import SectionTitle from "../section_title/SectionTitle";
import styles from "./Realizations.module.css";

export default function Realizations(props) {
  return (
    <>
      <SectionTitle title={props.title} />
      <div className={styles.realizations}>
        {props.realizations.map((r) => (
          <Fragment key={r.title}>
            <div className={styles.period}>{r.period}</div>
            <div className={styles.content}>
              <div className={styles.title}>{r.title}</div>
              <div className={styles.coordinates}>
                <span className={styles.enterprise}>
                  {r.enterprise || r.school}
                </span>
                &nbsp;
                <span className={styles.place}>{r.place}</span>
              </div>
              <div className={styles.details}>{r.details}</div>
              {r.more && <div className={styles.more}>{r.more}</div>}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
