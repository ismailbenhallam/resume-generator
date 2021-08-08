import photo from "../../../../ismail.jpg";
import "./Photo.css";

export default function Photo() {
  return (
    <div className="photo-wrapper">
      <img src={photo} alt="Me :)" />
    </div>
  );
}
