import React from "react";
import Button from "@mui/material/Button";

function CustomButton({ title, textColor, bgColor, padding, onClick }) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          color: textColor || "#FFF3E2",
          textTransform: "none",
          padding: padding || "12px 0px",
          fontSize: "13px",
          display: "flex",
          fontWeight: "700",
          width: "400px",
          height:"40px",
          background: bgColor || "#E74646",
          borderRadius: "10px",
          boxShadow:"none",
          "&:hover": {
            backgroundColor: "#E74646",
          },
        }}
      >
        {title}
      </Button>
    </div>
  );
}

export default CustomButton;
