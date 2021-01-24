/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutosuggestionField(props) {
  const { city } = props;
  const { getSelectedCity } = props;
  const [inputValue, setInputValue] = React.useState("");
  // const [value, setValue] = React.useState(null);
  // console.log(value);

  return (
    <div className="search-box">
      <Autocomplete
        id="free-solo-demo"
        freeSolo={false}
        options={city}
        clearOnBlur
        selectOnFocus
        autoSelect={true}
        inputValue={inputValue}
        onChange={(event, newValue) => {
          getSelectedCity(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="search city..."
            margin="normal"
            // variant="outlined"
            className="search-bar"
          />
        )}
      />
    </div>
  );
}
