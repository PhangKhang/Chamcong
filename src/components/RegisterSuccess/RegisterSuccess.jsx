import React from "react";
import Box from "@mui/material/Box";
import CustomButton from "../common/CustomButton";
import IconButton from '@mui/material/IconButton';
import check from "../../image/check.svg";
import arrowBack from "../../image/arrowBack.svg";
import SideLeft from "../common/SideLeft";

function RegisterSuccess() {
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
        <Box width="400px">
          <Box marginBottom="32px" display="flex" alignItems="center">
            <img src={check} alt=""  width="28px" height="28px"/>
            <h3 className="input-text" style={{fontSize:"20px", margin:"0 0 0 8px"}} >
              Đăng ký thành công
            </h3>
          </Box>
          <Box className="flexCenter" >
            <Box marginBottom="8px">
              <h3 className="input-text" style={{fontSize:"20px", fontWeight:"400", color:"rgba(48, 62, 101, 0.50)"}}>
                Bạn đã đăng kí tài khoản thành công cho
                 email <span style={{fontSize:"20px",fontWeight:"700", color:"#303E65"}}>: abc@gmail.com</span>. Vui lòng kiểm 
                 tra email và làm theo hướng dẫn!hhhhh
              </h3>
            </Box>
          
            <CustomButton title="Quay lại trang đăng nhập" textColor="FFF" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterSuccess;
