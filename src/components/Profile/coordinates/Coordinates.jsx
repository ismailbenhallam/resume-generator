import "./Coordinates.css";

export default function Coordinates() {
  return (
    <div className="coordinates">
      <label htmlFor="input-firstName">First Name</label>
      <input id="input-firstName" name="firstName" type="text" />
      <label htmlFor="input-lastName">Last Name</label>
      <input id="input-lastName" name="lastName" type="text" />
      <label htmlFor="input-title">Title</label>
      <input id="input-title" name="title" type="text" />
      <label htmlFor="input-email">Email</label>
      <input id="input-email" name="email" type="email" />
      <label htmlFor="input-address">Address</label>
      <input id="input-address" name="address" type="text" />
      <label htmlFor="input-birthDate">Birth Date</label>
      <input id="input-birthDate" name="birthDate" type="date" />
      <label htmlFor="input-website">Website</label>
      <input id="input-website" name="website" type="url" />
      <label htmlFor="input-github">GitHub</label>
      <input id="input-github" name="gitHub" type="url" />
      <label htmlFor="input-linkedin">LinkedIn</label>
      <input id="input-linkedin" name="linkedIn" type="url" />
    </div>
  );
}
