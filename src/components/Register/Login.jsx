import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import SideLeft from "../common/SideLeft";
import { Link } from "react-router-dom";
function Login() {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{

          }}
        >
          <Box marginBottom="32px">
            <h2 className="input-text" style={{ fontSize: "20px" }}>
              Đăng nhập
            </h2>
          </Box>
          <Box className="flexCenter">
            <Box>
              <h3 className="input-text">Tên tài khoản</h3>
              <CustomInput type="text" placeholder="Nhập tên tài khoản" />
            </Box>
            <Box marginBottom="16px">
              <h3 className="input-text">Mật khẩu</h3>
              <CustomInput type="password" placeholder="Nhập mật khẩu" />
            </Box>
            <CustomButton title="Đăng nhập" textColor="FFF" />

            <Box sx={{display:"flex", alignItems:"end"}}>
              <Link
                className="input-text"
                style={{ color: "#E74646", fontWeight: "400" }}
                to ="/forget-pass"
              >
                Quên mật khẩu?
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Login;
