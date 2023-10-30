import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Login from "../../image/login.svg";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
function SideLeft() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems:"center",
        width: "50vw",
        height: "100vh",
        flexShrink: 0,
        backgroundImage:
          "linear-gradient(181deg, rgba(231, 76, 60, 0.69) 0.53%, #E74646 99.57%)",
        borderBottomRightRadius: "80px",
        
      }}
    >
      <Box></Box>
      <Box width="480px" height="392px">
        <Box>
          <img src={Login} alt="login"
          style={{width:"400px", height:"280px",marginBottom:"32px"}}
          />
        </Box>
        <Typography
          sx={{
            color: "#FFF3E2",
            fontWeight: "700",
            width:"100%",
            fontSize: "32px",
            lineHeight: "normal"
          }}
        >
          Giải pháp quản lý chấm công 
          miễn phí & tốt nhất hiện nay.
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#FFF3E2",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "32px",
            marginBottom:"16px",
          }}
        >
          Một sản phẩm của <strong>Rikkei Fukuoka</strong>
        </Typography>
      </Box>
    </Box>
  );
}
export default SideLeft;
