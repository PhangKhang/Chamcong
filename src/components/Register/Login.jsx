import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import SideLeft from "../common/SideLeft";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Group1 from "../../image/Group1.svg";

function Login() {
  const matches = useMediaQuery("(max-width:1100px)");
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: matches ? "none" : "block" }}
          >
            <Box>
              <SideLeft />
            </Box>
          </Grid>
          <Grid item xs={12} sm={matches ? 12 : 6}>
            <Box
              sx={{
                height: "100vh",
                background: "#fff",
                border: "1px solid #BDC3C7",
                borderLeft: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: matches ? "space-between" : "center",
                flexDirection: "column",
                padding: "32px 0",
              }}
            >
              <Box sx={{ display: matches ? "block" : "none" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
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

                  <Box sx={{ display: "flex", alignItems: "end" }}>
                    <Link
                      className="input-text"
                      style={{ color: "#E74646", fontWeight: "400" }}
                      to="/forget-pass"
                    >
                      Quên mật khẩu?
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: matches ? "block" : "none" }}>
                <Box
                  sx={{
                    color: "#303E65",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Be Vietnam Pro",
                    lineHeight: "20px",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Một sản phẩm của
                </Box>
                <Box
                  sx={{
                    color: "#303E65",
                    fontSize: "14px",
                    fontWeight: "700",
                    fontFamily: "Be Vietnam Pro",
                    lineHeight: "20px",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Rikkei Fukuoka
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}
export default Login;
