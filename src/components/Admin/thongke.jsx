import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../Header/header";
import { Button } from "@mui/material";
import Modoal from "../Modal/Modal"

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
            Thống Kê
          </h1>
        </Box>
      </Box>
      {/* <Button onClick={handleOpen}>click</Button> */}
      {/* bang thong ke */}
      <Box
        className="wapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "428px",
        }}
      >
        <Box>Biểu đồ thời gian</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "150px",
          }}
        >
          <Box
            sx={{
              width: "360px",
              height: "360px",
              borderRadius: "360px",
              background: "#D9D9D9",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box
                sx={{ width: "60px", height: "30px", background: "#6BCB77" }}
              ></Box>
              <Box>Đúng giờ</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box
                sx={{ width: "60px", height: "30px", background: "#FFD93D" }}
              ></Box>
              <Box>Trể Giờ</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box
                sx={{ width: "60px", height: "30px", background: "#E74C3C" }}
              ></Box>
              <Box>Quản Chấm Công</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box
                sx={{ width: "60px", height: "30px", background: "#BB9981" }}
              ></Box>
              <Box>Nghỉ Phép</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default chamcong;
