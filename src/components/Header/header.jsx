import React from "react";
import Box from "@mui/material/Box";
import logo from "../../image/logo.svg";
import account from "../../image/account.svg";
import { Link } from "react-router-dom";
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

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
      <Box
        sx={{
          minWidth: "1280px",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #F0F0F0",
          position: "sticky",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box marginRight="48px">
            <img src={logo} alt="rikkeiLogo" />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center">
            <Box className="item-heading">
              <Link to="/" className="link-heading">
                <h2 className="title-heading">Tổng quan</h2>
              </Link>
            </Box>

            <Box className="item-heading">
              <Link to="/nhansu" className="link-heading">
                <h2 className="title-heading">Nhân sự</h2>
              </Link>
            </Box>

            <Box className="item-heading">
              <Link to="/thongke" className="link-heading">
                <h2 className="title-heading">Thống kê</h2>
              </Link>
            </Box>
            <Box className="item-heading">
              <Link to="/lich" className="link-heading">
                <h2 className="title-heading">Lịch Làm</h2>
              </Link>
            </Box>
            <Box className="item-heading">
              <Link className="link-heading">
                <h2 className="title-heading">QRCode Checkin</h2>
              </Link>
            </Box>

            <Box />
          </Box>
        </Box>

        {/* icon admin */}

        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Box display="flex" alignItems="center">
              <img src={account} alt="" />
              <h2
                className="title-heading"
                style={{ fontWeight: "400", paddingLeft: "4px" }}
              >
                admin
              </h2>
            </Box>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>admin@rikkeisoft.com</MenuItem>
            <MenuItem onClick={handleClose}>Cập nhập thông tin</MenuItem>
            <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* titile */}
    </Box>
  );
}

export default Header;
