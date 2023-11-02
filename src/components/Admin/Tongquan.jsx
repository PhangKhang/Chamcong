import React, { useEffect } from "react";
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
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DataGrid } from "@mui/x-data-grid";
import Layoutbody from "../Layout/Layout";

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
    id: 1,
    hvt: "Phan Minh Phong",
    mnv: "MGTRPQ",
    gcc: 35,
    gc: "8H",
  },
  {
    id: 1,
    hvt: "Phan Minh Phong",
    mnv: "MGTRPQ",
    gcc: 35,
    gc: "8H",
  },
  {
    id: 1,
    hvt: "Phan Minh Phong",
    mnv: "MGTRPQ",
    gcc: 35,
    gc: "8H",
  },
  {
    id: 1,
    hvt: "Phan Minh Phong",
    mnv: "MGTRPQ",
    gcc: 35,
    gc: "8H",
  },
  {
    id: 1,
    hvt: "Phan Minh Phong",
    mnv: "MGTRPQ",
    gcc: 35,
    gc: "8H",
  },
];
const columnsmodal = [
  { field: "id", headerName: "STT", width: 50 },
  {
    field: "hvt",
    headerName: "Họ và tên",
    width: 220,
  },
  {
    field: "mnv",
    headerName: "Mã nhân viên",
    type: "email",
    width: 150,
  },
  {
    field: "gcc",
    headerName: "Giờ chấm công",
    type: "number",
    width: 120,
  },
  {
    field: "gc",
    headerName: "Ghi chú",
    width: 150,
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

function Tongquan() {
  const columns = [
    { field: "id", headerName: "STT", width: 40 },
    {
      field: "hvt",
      headerName: "Họ và tên",
      width: 220,
      editable: false,
    },
    {
      field: "mnv",
      headerName: "Mã nhân viên",
      type: "email",
      width: 150,
      editable: false,
    },
    {
      field: "gvl",
      headerName: "Giờ vào làm",
      type: "number",
      width: 120,
      editable: false,
    },
    {
      field: "gtl",
      headerName: "Giờ tan làm",
      width: 120,
      editable: false,
    },
    {
      field: "tl",
      headerName: "Thực làm",
      width: 100,
      editable: false,
    },
    {
      field: " trt",
      headerName: "Trạng thái",
      width: 150,
      editable: false,
    },
    {
      field: "gch",
      headerName: "Ghi chú",
      width: 185,
      editable: false,
    },
    {
      field: "tht",
      headerName: "Thao tác",
      width: 148,
      editable: false,
      renderCell: (params) => (
        <Tooltip
          arrow
          placement="left"
          PopperProps={{
            disablePortal: true,
          }}
          onClose={closeModal}
          open={params.row.id === selectedRowId}
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
                        <MenuItem value={10}>bình thường</MenuItem>
                        <MenuItem value={20}>đi muộn</MenuItem>
                        <MenuItem value={30}>nghỉ làm</MenuItem>
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
                      onClick={handSave}
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
            onClick={() => handleEditButtonClick(params.row.id)}
            className="edit-button"
          >
            chỉnh sửa
          </Link>
        </Tooltip>
      ),
    },
  ];
  const rowss = [
    {
      id: 1,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 35,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 2,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 42,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 3,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 45,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 4,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 16,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 5,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 4,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 6,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 150,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 7,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 44,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 8,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 36,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
    {
      id: 9,
      hvt: "Phan Minh Phong",
      mnv: "MGTRPQ",
      gvl: 65,
      gtl: "9:00",
      tl: "8H",
      trt: "Binh thuong",
      gch: "Di Muon",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleEditButtonClick = (rowId) => {
    setIsModalOpenEdit(true);
    setSelectedRowId(rowId);
  };

  const closeModal = (rowId) => {
    setIsModalOpenEdit(false);
    setSelectedRowId(rowId);
  };
  const handSave = () => {
    closeModal();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layoutbody
      content={
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* titile */}
          <Box
            sx={{
              width: "100%",
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
                Tổng quan
              </h1>
            </Box>

            <Box>
              <img src={kosin} alt="" />
            </Box>
          </Box>
          {/* status */}
          <Box className="display-flexbody">
            <Box
              display="flex"
              justifyContent="space-between"
              marginBottom="16px"
            >
              <h4
                className="title-text"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                Chấm công hôm nay
              </h4>
              <h4 className="title-text" style={{ fontSize: "14px" }}>
                08:56:32 thứ 3 ngày 03 tháng 10
              </h4>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Box sx={{ width: "24%" }}>
                <CustomBox
                  onclick={handleOpenModal}
                  background="rgba(107, 203, 119, 0.20)"
                  colorTitle="#6BCB77"
                  title="35"
                  detail="Vào làm"
                  height="70px"
                  width="100%"
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
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                  content={
                    <Box sx={{ height: 322, width: "100%" }}>
                      <DataGrid
                        sx={{
                          "& .MuiDataGrid-cell": {
                            border: "1px solid #F0F0F0",
                            borderRadius: "2px",
                            margin: "0 8px",
                            maxHeight: "28px !important",
                            minHeight: "28px !important",
                          },

                          "& .MuiDataGrid-columnHeader": {
                            background: " #F0F0F0",
                            margin: "6px 8px",
                          },
                          "& .MuiDataGrid-columnHeaders": {
                            background: " #F0F0F0",
                          },
                          "& .MuiDataGrid-row": {
                            margin: "6px",
                            maxHeight: "28px !important",
                            minHeight: "28px !important",
                          },
                          "& .MuiDataGrid-row:hover": {
                            background: "rgba(0, 0, 0, 0.0) !important",
                          },
                          "& .MuiDataGrid-row.Mui-selected": {
                            background: "rgba(0, 0, 0, 0.0) !important",
                          },
                        }}
                        rows={rowsmodal}
                        columns={columnsmodal}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 10,
                            },
                          },
                        }}
                      />
                    </Box>
                  }
                />
              </Box>
              <Box sx={{ width: "24%" }}>
                <CustomBox
                  background="rgba(255, 217, 61, 0.20)"
                  title="5"
                  detail="Đi muộn"
                  height="70px"
                  width="100%"
                  borderRadius="10px"
                  marginBottom="8px"
                  colorTitle="#FFD93D"
                />
                {/* <CommonModal
                stylebuttons={{
                  width: "679px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                width="712"
                title="Danh sách nhân viên vào làm"
                content={
                  <Customization
                    styledTable={columnsmodal}
                    styledTableRow={rowsmodal}
                  />
                }
                isOpen={isModalOpen2}
                handleClose={handleCloseModal2}
              /> */}
              </Box>

              <Box sx={{ width: "24%" }}>
                <CustomBox
                  background="rgba(231, 76, 60, 0.20)"
                  colorTitle="#E74C3C"
                  title="12"
                  detail="Chưa vào"
                  height="70px"
                  width="100%"
                  borderRadius="10px"
                  marginBottom="8px"
                />
                {/* <CommonModal
                stylebuttons={{
                  width: "679px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                width="712"
                title="di muon"
                content={
                  <Customization
                    styledTable={columnsmodal}
                    styledTableRow={rowsmodal}
                  />
                }
                isOpen={isModalOpen3}
                handleClose={handleCloseModal3}
              /> */}
              </Box>

              <Box sx={{ width: "24%" }}>
                <CustomBox
                  background="rgba(187, 153, 129, 0.20)"
                  colorTitle="#BB9981"
                  title="2"
                  detail="Nghỉ phép"
                  height="70px"
                  width="100%"
                  borderRadius="10px"
                  marginBottom="8px"
                />
                {/* <CommonModal
                stylebuttons={{
                  width: "679px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                width="712"
                title="Danh sách nhân viên vào làm"
                content={
                  <Customization
                    styledTable={columnsmodal}
                    styledTableRow={rowsmodal}
                  />
                }
                isOpen={isModalOpen4}
                handleClose={handleCloseModal4}
              /> */}
              </Box>
            </Box>
          </Box>

          {/* detail */}
          <Box className="display-flexbody" marginTop="16px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="16px"
            >
              <h4
                className="title-text"
                style={{ fontSize: "17px", fontWeight: "500" }}
              >
                Lịch sử chấm công
              </h4>
              <Box
                sx={{
                  "& .MuiInputBase-input": {
                    height: "8px !important",
                    width: " 95px !important",
                  },
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      "DatePicker",
                      "MobileDatePicker",
                      "DesktopDatePicker",
                      "StaticDatePicker",
                    ]}
                  >
                    <DemoItem>
                      <DesktopDatePicker defaultValue={dayjs("2023/10/25")} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #303E65"
                fontTitle="12px"
                fontDetail="12px"
              />
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #303E65"
                fontTitle="12px"
                fontDetail="12px"
              />
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #F0F0F0"
                fontTitle="12px"
                fontDetail="12px"
              />
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #F0F0F0"
                fontTitle="12px"
                fontDetail="12px"
              />
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #F0F0F0"
                fontTitle="12px"
                fontDetail="12px"
              />
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #F0F0F0"
                fontTitle="12px"
                fontDetail="12px"
              />
              <CustomBox
                width="13.7%"
                title="T2 2 Th.10"
                detail="Chi tiết"
                border="1px solid #F0F0F0"
                fontTitle="12px"
                fontDetail="12px"
              />
            </Box>
            <Box sx={{ height: "100%", width: "100%", marginTop: "14px" }}>
              <DataGrid
                sx={{
                  "& .MuiDataGrid-columnHeader": {
                    color: "#303E65 ",
                    fontWeight: 700,
                    fontSize: 12,
                    background: " #F0F0F0",
                    minHeight: "50px !important",
                    maxHeight: "50px !important",
                  },
                  "& .MuiDataGrid-row": {
                    color: "#303E65 ",
                    fontWeight: 400,
                    fontSize: 12,
                    minHeight: "40px !important",
                    maxHeight: "40px !important",
                  },
                  "& .MuiDataGrid-cell": {
                    minHeight: "40px !important",
                    maxHeight: "40px !important",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    background: " #F0F0F0",
                  },
                  "& .MuiDataGrid-row:hover": {
                    background: "rgba(0, 0, 0, 0.0) !important",
                  },
                  "& .MuiDataGrid-row.Mui-selected": {
                    background: "rgba(0, 0, 0, 0.0) !important",
                  },
                }}
                rows={rowss}
                columns={columns}
              />
            </Box>
          </Box>
        </Box>
      }
    />
  );
}

export default Tongquan;
