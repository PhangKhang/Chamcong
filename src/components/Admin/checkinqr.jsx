import React from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Group1 from "../../image/Group1.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

function CheckinQr() {
  const [scanResult, setcanResult] = useState(null);
  const matches = useMediaQuery("(max-width:391px)");
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: "25rem",
        height: "25rem",
      },
      fps: 5,
    });
    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      setcanResult(result);
    }
    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={Group1} />
          <Box
            sx={{
              color: "#E74C3C",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "Be Vietnam Pro",
              lineHeight: "20px",
              fontStyle: "italic",
            }}
          >
            <Box>Rikkei</Box>
            <Box>Fukuoka</Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            padding: "2rem 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                padding: "0 20px",
                justifyContent: "center",
                alignItems: "center",
                color: "#303E65",
                fontSize: matches ? "0.7rem" : "1rem",
                fontWeight: 400,
              }}
            >
              Thứ 2, ngày 06 tháng 10 năm 2023 _giờ hiện tại :08:56:32
            </Box>
            <Box sx={{ width: "25rem" }}>
              {scanResult ? (
                <Box>
                  {" "}
                  MãQR: <Box>{scanResult}</Box>
                </Box>
              ) : (
                <Box id="reader"></Box>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              color: "#303E65",
              fontSize: matches ? "0.7rem" : "1rem",
              fontWeight: 700,
            }}
          >
            ĐƯA MÃ QR TRƯỚC CAMERA ĐỂ CHẤM CÔNG
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            color: "#303E65",
            fontSize: matches ? "0.7rem" : "1rem",
            fontWeight: 700,
          }}
        >
          Lịch sử chấm công hôm nay :
        </Box>
        <Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckinQr;
