import React from "react";
import Box from "@mui/material/Box";
import kosin from "../../image/kosin.svg";
import CustomBox from "../common/CustomBox";
import { Link } from "react-router-dom/dist";
import CommonModal from "../common/CustomModal";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = [
  {
    id: "name",
    label: "STT",
    maxWidth: 40,
  },
  { id: "code", label: "Họ và tên", maxWidth: 220 },

  {
    id: "population",
    label: "Mã nhân viên",
    maxWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Giờ vào làm",
    maxWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Giờ tan làm",
    maxWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Thực làm",
    maxWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Trạng thái",
    maxWidth: 150,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Ghi chú",
    maxWidth: 200,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Thao tác",
    maxWidth: 148,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const rows = [
  {
    id: 1,
    vn: "Trương Bá Đông",
    nu: "DongND",
    so: "08:03",
    mu: "08:00",
    noo: "09:00",
    lpo: "Bình Thường",
    l: "Hỏng xe",
  },
  {
    id: 1,
    vn: "Trương Bá Đông",
    nu: "DongND",
    so: "08:03",
    mu: "08:00",
    noo: "09:00",
    lpo: "Bình Thường",
    l: "Hỏng xe",
  },
  {
    id: 1,
    vn: "Trương Bá Đông",
    nu: "DongND",
    so: "08:03",
    mu: "08:00",
    noo: "09:00",
    lpo: "Bình Thường",
    l: "Hỏng xe",
  },
  {
    id: 1,
    vn: "Trương Bá Đông",
    nu: "DongND",
    so: "08:03",
    mu: "08:00",
    noo: "09:00",
    lpo: "Bình Thường",
    l: "Hỏng xe",
  },
];
const rowsmodal = [
  {
    name: 1,
    vn: "Trương Bá Đông",
    nu: "DuongTB2",
    so: "09:12",
    mu: "Muộn 1p",
  },
  {
    name: 2,
    vn: "Trương Bá Đông",
    nu: "Hoang023",
    so: "09:06",
    mu: "Muộn 2p",
  },
  {
    name: 3,
    vn: "Trương Bá Đông",
    nu: "KhangPm",
    so: "07:20",
    mu: "Muộn 3p",
  },
  {
    name: 4,
    vn: "Trương Bá Đông",
    nu: "kienmon",
    so: "01:03",
    mu: "Muộn 4p",
  },
];
const columnsmodal = [
  {
    id: "name",
    label: "STT",
    maxWidth: 40,
  },
  { id: "code", label: "Họ và tên", maxWidth: 220 },

  {
    id: "population",
    label: "Mã nhân viên",
    maxWidth: 150,
  },
  {
    id: "size",
    label: "Giờ Chấm Công",
    maxWidth: 120,
  },
  {
    id: "density",
    label: "Ghi chú",
    maxWidth: 120,
  },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F0F0",
    color: "#303E65",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(240, 240, 240, 0.30)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Chitiet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(
    Array(rows.length).fill(false)
  );

  const handleTooltipClose = (index) => {
    const updatedTooltipOpen = [...tooltipOpen];
    updatedTooltipOpen[index] = false;
    setTooltipOpen(updatedTooltipOpen);
  };

  const handleTooltipOpen = (index) => {
    const updatedTooltipOpen = [...tooltipOpen];
    updatedTooltipOpen[index] = true;
    setTooltipOpen(updatedTooltipOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal4 = () => {
    setIsModalOpen4(true);
  };

  const handleCloseModal4 = () => {
    setIsModalOpen4(false);
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };
  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
  };

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
  };
  const handleCloseModa1 = () => {
    setIsModalOpen1(false);
  };

  const handleEdit = () => {
    setIsModalOpen1(true);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          flexDirection: "column",
        }}
      >
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
              Phan Minh Phong
            </h1>
          </Box>

          <Box>
            <img src={kosin} alt="" />
          </Box>
        </Box>
        {/* status */}
        <Box className="display-flex1280">
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="16px"
          >
            <h4
              className="title-text"
              style={{ fontSize: "14px", fontWeight: "400" }}
            >
              Trong Tháng 10 Phan Minh Phong đã: Đi muộn 10 lần
            </h4>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Box>
              <CustomBox
                onclick={handleOpenModal}
                background="rgba(107, 203, 119, 0.20)"
                colorTitle="#6BCB77"
                title="35"
                detail="Đúng giờ"
                width="405px"
                height="70px"
                borderRadius="10px"
                marginBottom="8px"
              />
              <CommonModal
                stylebuttons={{
                  width: "679px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                width="712"
                title="Danh sách nhân viên vào làm"
                content={<p></p>
                  // <Customization
                  //   styledTable={columnsmodal}
                  //   styledTableRow={rowsmodal}
                  // />
                }
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
              />
            </Box>
            <Box>
              <CustomBox
                onclick={handleOpenModal2}
                background="rgba(255, 217, 61, 0.20)"
                title="5"
                detail="Đi muộn"
                height="70px"
                width="405px"
                borderRadius="10px"
                marginBottom="8px"
                colorTitle="#FFD93D"
              />
              <CommonModal
                stylebuttons={{
                  width: "679px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                width="712"
                title="Danh sách nhân viên vào làm"
                content={<p></p>
                  // <Customization
                  //   styledTable={columnsmodal}
                  //   styledTableRow={rowsmodal}
                  // />
                }
                isOpen={isModalOpen2}
                handleClose={handleCloseModal2}
              />
            </Box>

            <Box>
              <CustomBox
                onclick={handleOpenModal3}
                background="rgba(231, 76, 60, 0.20)"
                colorTitle="#E74C3C"
                title="12"
                detail="Nghỉ phép"
                height="70px"
                width="405px"
                borderRadius="10px"
                marginBottom="8px"
              />
              <CommonModal
                stylebuttons={{
                  width: "679px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                width="712"
                title="di muon"
                content={
                  <p></p>
                  // <Customization
                  //   styledTable={columnsmodal}
                  //   styledTableRow={rowsmodal}
                  // />
                }
                isOpen={isModalOpen3}
                handleClose={handleCloseModal3}
              />
            </Box>
          </Box>
        </Box>

        {/* detail */}
        <Box className="display-flex1280" marginTop="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="16px"
          >
            <h4
              className="title-text"
              style={{ fontSize: "14px", fontWeight: "400" }}
            >
              Chi Tiết Tháng 10
            </h4>
            <Button>TextField</Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Ngày</StyledTableCell>
                  <StyledTableCell align="center">Giờ Vào Làm</StyledTableCell>
                  <StyledTableCell align="center">Giờ tan làm</StyledTableCell>
                  <StyledTableCell align="center">
                    Mã QR đã sử dụng
                  </StyledTableCell>
                  <StyledTableCell align="center">Trạng thái</StyledTableCell>
                  <StyledTableCell align="center">Ghi chú</StyledTableCell>
                  <StyledTableCell align="center">Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={row.index}>
                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.vn}</StyledTableCell>
                    <StyledTableCell align="center">{row.nu}</StyledTableCell>
                    <StyledTableCell align="center">{row.so}</StyledTableCell>
                    <StyledTableCell align="center">{row.mu}</StyledTableCell>
                    <StyledTableCell align="center">{row.noo}</StyledTableCell>
                    <StyledTableCell align="center">
                      {
                        <Box>
                          <ClickAwayListener
                            onClickAway={() => handleTooltipClose(index)}
                          >
                            <Box>
                              <Tooltip
                                arrow
                                PopperProps={{
                                  disablePortal: true,
                                }}
                                onClose={() => handleTooltipClose(index)}
                                open={tooltipOpen[index]}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title={
                                  <Box
                                    sx={{
                                      background: "#fff",
                                      width: "200px",
                                      height: "260px",
                                      p: "8px",
                                    }}
                                  >
                                    <Box sx={{ color: "black", mb: "10px" }}>
                                      <Box>
                                        <Box>Trương Bá Tây - TayTb</Box>
                                        <Box
                                          sx={{ m: "10px 0" }}
                                          component="form"
                                          noValidate
                                          autoComplete="off"
                                          display={"flex"}
                                        >
                                          <TextField
                                            id="outlined-size-small"
                                            defaultValue="08:00"
                                            size="small"
                                          />
                                          <Box
                                            sx={{
                                              m: "0 10px",
                                              alignItems: "center",
                                              display: "flex",
                                            }}
                                          >
                                            -
                                          </Box>
                                          <TextField
                                            id="outlined-size-small"
                                            defaultValue="08:00"
                                            size="small"
                                          />
                                        </Box>
                                        <Box sx={{ minWidth: 120 }}>
                                          <FormControl fullWidth size="small">
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select
                                              id="demo-select-small"
                                              labelId="demo-select-small-label"
                                              value={age}
                                              onChange={handleChange}
                                            >
                                              <MenuItem value={10}>
                                                bình thường
                                              </MenuItem>
                                              <MenuItem value={20}>
                                                đi muộn
                                              </MenuItem>
                                              <MenuItem value={30}>
                                                nghỉ làm
                                              </MenuItem>
                                            </Select>
                                          </FormControl>
                                        </Box>
                                        <Box sx={{ m: "15px 0" }}>
                                          <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={1.5}
                                            defaultValue=""
                                          />
                                        </Box>
                                        <Box>
                                          <Button
                                            sx={{ width: "100%" }}
                                            size="small"
                                            variant="contained"
                                          >
                                            Lưu
                                          </Button>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                }
                              >
                                <Link
                                  color="red"
                                  underline="none"
                                  component="button"
                                  variant="body2"
                                  onClick={() => handleTooltipOpen(index)}
                                >
                                  chỉnh sửa
                                </Link>
                              </Tooltip>
                            </Box>
                          </ClickAwayListener>
                        </Box>
                      }
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* <Box sx={{ width: "1280px", marginTop: "10px" }}>
          <Customization
            styledTable={columns}
            styledTableRow={rows}
            stylededit={"Chỉnh sửa"}
            handledit={handleEdit}
          />
          <CommonModal
            stylebuttons={{}}
            width={"220px"}
            stylebutton={{ width: "187px" }}
            content={
              <Box>
                <Box>Trương Bá Tây - TayTb</Box>
                <Box
                  sx={{ m: "15px 0" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                  display={"flex"}
                >
                  <TextField
                    id="outlined-size-small"
                    defaultValue="08:00"
                    size="small"
                  />
                  <Box
                    sx={{ m: "0 10px", alignItems: "center", display: "flex" }}
                  >
                    -
                  </Box>
                  <TextField
                    id="outlined-size-small"
                    defaultValue="08:00"
                    size="small"
                  />
                </Box>
                <Box>
                  <FormControl sx={{ width: 185 }} size="small">
                    <InputLabel id="demo-select-small-label"></InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      defaultValue="ssssssssss"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Bình Thường</MenuItem>
                      <MenuItem value={20}>Đi Muộn</MenuItem>
                      <MenuItem value={30}>Nghỉ Làm</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ m: "15px 0 0 0" }}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue=""
                  />
                </Box>
              </Box>
            }
            isOpen={isModalOpen1}
            handleClose={handleCloseModa1}
          />
        </Box> */}
      </Box>
    </>
  );
}

export default Chitiet;
