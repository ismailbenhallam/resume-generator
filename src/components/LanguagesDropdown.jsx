import { FormControl, MenuItem, Select } from "@material-ui/core";
import i18next from "i18next";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function LanguageDropdown() {
  return (
    <div
      style={{
        margin: "20px",
        // , backgroundColor: "white"
      }}>
      {/* <GlobeIcon /> */}
      <FormControl variant="outlined">
        <Select
          labelId="language-select-label"
          id="language-select"
          defaultValue="fr"
          style={{ height: 45, width: "150px", backgroundColor: "white" }}
          onChange={(event) => {
            i18next.changeLanguage(event.target.value);
          }}>
          {languages.map(({ code, name }) => (
            <MenuItem key={code} value={code}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default LanguageDropdown;
