import photo from "../../ismail.jpg";
import NameAndTitle from "../name_and_title/NameAndTitle";
import "./PhotoAndName.css";

const NAME_AND_TITLE_BOTTOM = "10px";

export default function PhotoAndName() {
  return (
    <div className="photo-wrapper">
      <img src={photo} alt="Supposed to be me :/" />
      <NameAndTitle
        style={{ position: "absolute", bottom: NAME_AND_TITLE_BOTTOM }}
      />
    </div>
  );
}
