import React from "react";
import Box from "@mui/material/Box";
import Header from "../Header/header";

function chamcong() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* heading */}
      <Header />
      {/* titile */}
      <Box
        sx={{
          minWidth: "1280px",
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <h1
            className="title-heading"
            style={{ fontSize: "32px", paddingLeft: "0" }}
          >
            Cập Nhập Thông Tin
          </h1>
        </Box>
      </Box>
      {/* bảng cập nhập */}
      <Box></Box>
      <Box></Box>
    </Box>
  );
}

export default chamcong;
