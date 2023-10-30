import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import IconButton from '@mui/material/IconButton';
import arrowBack from "../../image/arrowBack.svg";
import SideLeft from "../common/SideLeft";
function Register() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SideLeft/>
      {/* side right */}
      
      <Box
        sx={{
          padding: "32px",
          width: "50vw",
          height: "100vh",
          background: "#fff",
          border: "1px solid #BDC3C7",
          borderLeft:"none",
          opacity:"0.98",
          boxShadow:"4px 0px 4px 0px rgba(0, 0, 0, 0.30)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position:"relative"
        }}
      >
        <Box sx={{width:"40px", height:"40px",  position:"absolute", 
        border:"1px solid #BDC3C7",
        borderRadius:"12px",
        background:"#FFF",
       
        top :"32px", left:"32px"}}>
        <IconButton 
          onClick={{}}
        sx={{
           "&:hover": {
            borderRadius:"12px",
          },
        }}>
            <img src={arrowBack} alt="back" />
        </IconButton>
        </Box>
        <Box>
          <Box marginBottom="32px">
            <h2 className="input-text" style={{fontSize:"20px"}} >
              Đăng ký
            </h2>
          </Box>
          <Box className="flexCenter">
            <Box>
              <h3 className="input-text">Tên tài khoản</h3>
              <CustomInput type="text" placeholder="Nhập tên tài khoản" />
            </Box>
            <Box>
              <h3 className="input-text">Địa chỉ email</h3>
              <CustomInput type="text" placeholder="Nhập vào địa chỉ email" />
            </Box>
            <Box>
              <h3 className="input-text">Mật khẩu</h3>
              <CustomInput type="password" placeholder="Nhập mật khẩu" />
            </Box>
            <Box marginBottom="16px">
              <h3 className="input-text">Xác nhận mật khẩu</h3>
              <CustomInput
                type="password"
                placeholder="Xác nhận lại mật khẩu"
              />
            </Box>
            <CustomButton title="Đăng ký" textColor="FFF" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
