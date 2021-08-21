import photo from "../../../../ismail.jpg";
import NameAndTitle from "../name_and_title/NameAndTitle";
import "./PhotoAndName.css";

export default function PhotoAndName() {
  return (
    <div className="photo-wrapper">
      <img src={photo} alt="Supposed to be me :/" />
      <NameAndTitle />
    </div>
  );
}
