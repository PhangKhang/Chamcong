import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function Capnhap() {
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
      <Box sx={{ display: "flex", gap: "16px", minWidth: 1280 }}>
        <Box
          sx={{
            border: "1px solid #F0F0F0",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            minWidth: 632,
            padding: "16px",
          }}
        >
          <Box>Tên tổ chức</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid #F0F0F0",
              borderRadius: "4px",
              padding: "8px",
            }}
          >
            Công ty phát triển phần mềm ABCDEF
          </Box>
          <Box>
            <Box>
              <Box>Thời gian làm 08:00</Box>
              <Box>09:00</Box>
              <Box>18:00</Box>
            </Box>
            <Box>
              <Box>Thời gian nghỉ trưa : 01:00</Box>
              <Box>12:00</Box>
              <Box>13:00</Box>
            </Box>
          </Box>
          <Box>
            <Box>Đến công ty trước</Box>
            <Box>5</Box>
            <Box>phút</Box>
          </Box>
          <Box>Lưu</Box>
        </Box>
        <Box
          sx={{
            border: "1px solid #F0F0F0",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            minWidth: 632,
            padding: "16px",
          }}
        >
          <Box>Link chấm công</Box>
          <Box></Box>
          <Box>Ngày làm việc</Box>
          <Box>
            <Button>Thứ hai</Button>
            <Button>Thứ ba</Button>
            <Button>Thứ tư</Button>
            <Button>Thứ năm</Button>
            <Button>Thứ sáu</Button>
          </Box>
          <Box>
            <Button>Cập nhật</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Capnhap;
