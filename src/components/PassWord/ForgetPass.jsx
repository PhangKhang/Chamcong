import React from "react";
import Box from "@mui/material/Box";
import CustomButton from "../common/CustomButton";
import IconButton from "@mui/material/IconButton";
import arrowBack from "../../image/arrowBack.svg";
import SideLeft from "../common/SideLeft";
import CustomInput from "../common/CustomInput";
import { useNavigate } from 'react-router-dom';


function ForgetPass() {
  const history = useNavigate();

  const handleClick = () => {
    history('/');
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SideLeft />
      {/* side right */}

      <Box
        sx={{
          padding: "32px",
          width: "50vw",
          height: "100vh",
          background: "#fff",
          border: "1px solid #BDC3C7",
          borderLeft: "none",
          opacity: "0.98",
          boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.30)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <Box 
          sx={{
            width: "40px",
            height: "40px",
            position: "absolute",
            border: "1px solid #BDC3C7",
            borderRadius: "12px",
            background: "#FFF",

            top: "32px",
            left: "32px"
          }}
        >
          <IconButton
            onClick={handleClick}
            sx={{
              "&:hover": {
                borderRadius: "12px"
              }
            }}
          >
            <img src={arrowBack} alt="back" />
          </IconButton>
        </Box>
        <Box width="400px">
          <Box marginBottom="32px">
            <h3
              className="input-text"
              style={{
                fontSize: "20px",
                margin: "0 0 8px 0",
                color: "rgba(48, 62, 101, 0.85)"
              }}
            >
              Quên mật khẩu
            </h3>
            <h3 className="text-blur">
              Nhập vào tên tài khoản hoặc địa chỉ email đã đăng ký, mật khẩu mới
              sẽ được gửi về!
            </h3>
          </Box>
          <Box className="flexCenter">
            <Box marginBottom="16px">
              <h3
                className="input-text"
              >
                Tên tài khoản hoặc địa chỉ email
              </h3>
              <CustomInput
                type="text"
                placeholder="Nhập tên tài khoản hoặc địa chỉ email"
              />
            </Box>
            <CustomButton title="Quay lại trang đăng nhập" textColor="FFF" 
            onClick={handleClick} /> 
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ForgetPass;
