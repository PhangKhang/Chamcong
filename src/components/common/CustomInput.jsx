import React from "react";
import TextField from "@mui/material/TextField";

function CustomInput({ type, placeholder, error,onChange, InputProps, helperText }) {
  return (
    <div>
      <TextField
        required
        error={error}
        type={type}
        helperText={helperText}
        placeholder={placeholder}
        onChange={onChange}
        InputProps={InputProps}
        sx={{
          "& .MuiInputBase-input":{
            padding:0,
          },
          "& .MuiOutlinedInput-root": {
            fontSize:"13px",
            height: "40px",
            width: "400px",
            border: "1px solid #F0F0F0",
            padding:"12px 0px 12px 8px",
            // "&:hover": {
            //   border: "1px solid #303E65",
            // },
            "& > fieldset": {
              top: "0px",
              padding: "0",
              border:"none"
            },
          
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            border: "1px solid #303E65",
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "normal",
            borderRadius: "4px",
            color: "303E65",
          },
          "& .MuiFormHelperText-root.Mui-error": {
            margin: "0"
          },
          marginBottom: helperText ? "-16px" : "0px"
          
        }}
      />
    </div>
  );
}

export default CustomInput;
