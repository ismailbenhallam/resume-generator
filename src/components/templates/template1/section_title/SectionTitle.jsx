import capitalize from "../../../../utilities/capitalize";

export default function SectionTitle({ title }) {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1rem",
        margin: "5px 0 10px 0",
      }}>
      {capitalize(title)}
    </div>
  );
}
