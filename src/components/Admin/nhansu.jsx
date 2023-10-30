import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import upload from "../../image/ic_baseline-upload.svg";
import kosin from "../../image/kosin.svg";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LinkButton from "@mui/material/Link";
import { Link } from "react-router-dom";
import CommonModal from "../common/CustomModal";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useState } from "react";
import Dowloadd from "../../image/bxs_download.svg";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, lastName: null, email: null, stt: 35 },
  { id: 2, lastName: null, email: null, stt: 42 },
  { id: 3, lastName: null, email: null, stt: 45 },
  { id: 4, lastName: null, email: null, stt: 16 },
  { id: 5, lastName: null, email: null, stt: null },
  { id: 6, lastName: null, email: null, stt: 150 },
  { id: 7, lastName: null, email: null, stt: 44 },
  { id: 8, lastName: null, email: null, stt: 36 },
  { id: 9, lastName: null, email: null, stt: 65 },
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

function Nhansu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handEdit = () => {
    setIsModalEdit(true);
  };
  const heandEditClose = () => {
    setIsModalEdit(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (rowId) => {
    setIsModalDelete(true);
    setSelectedRowId(rowId);
  };

  const closehandleDelete = (rowId) => {
    setIsModalDelete(false);
    setSelectedRowId(rowId);
  };

  const handleOpenModalTest = () => {
    setIsModalOpen(true);
  };

  const handledelete = () => {
    alert("Đã Xóa");
    // handleTooltipClose(rowId);
  };
  const columns = [
    { field: "id", headerName: "STT", width: 40 },
    {
      field: "hvt",
      headerName: "Họ và tên",
      width: 220,
    },
    {
      field: "email",
      headerName: "Địa chỉ email",
      type: "number",
      width: 250,
    },
    {
      field: "sdt",
      headerName: "Số điện thoại",
      width: 150,
    },
  
  ];
  const rowss = [
    {
      id: 1,
      hvt: "Phan Minh Phong",
      email: 35,
      sdt: "86079670707",
    },
    {
      id: 1,
      hvt: "Phan Minh Phong",
      email: 35,
      sdt: "86079670707",
    },
    {
      id: 1,
      hvt: "Phan Minh Phong",
      email: 35,
      sdt: "86079670707",
    },
    {
      id: 1,
      hvt: "Phan Minh Phong",
      email: 35,
      sdt: "86079670707",
    },
    {
      id: 1,
      hvt: "Phan Minh Phong",
      email: 35,
      sdt: "86079670707",
    },{
      id: 1,
      hvt: "Phan Minh Phong",
      email: 35,
      sdt: "86079670707",
    },
  ];

  return (
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
      <CommonModal
        stylebuttons={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        width="450px"
        title="Phan Minh Phong"
        content={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box>ID/Mã nhân viên</Box>
              <Box>Tên nhân viên*</Box>
              <Box>Email*</Box>
              <Box>QR-Code*</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box>
                <TextField
                  id="outlined-size-small"
                  defaultValue="PhongPM"
                  size="small"
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-size-small"
                  defaultValue="Phan Minh Phong"
                  size="small"
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-size-small"
                  defaultValue="PhongThuy@LOve.com"
                  size="small"
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-size-small"
                  defaultValue="zasfffg"
                  size="small"
                />
              </Box>
            </Box>
          </Box>
        }
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      />

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
            Quản Lý Nhân Sự
          </h1>
        </Box>

        <Box>
          <Button
            sx={{
              right: "10px",
              background: "#6BCB77",
              "&:hover": {
                background: "#4CAF50",
              },
            }}
            variant="contained"
          >
            <img src={upload} alt="" />
            Nhập file Excel
          </Button>
          <Button
            onClick={() => handEdit()}
            sx={{
              background: "#6BCB77",
              "&:hover": {
                background: "#4CAF50",
              },
            }}
            variant="contained"
            color="success"
          >
            <Box>+</Box>
            Thêm
          </Button>
          <CommonModal
            width={692}
            title="Thêm nhân viên"
            handleClose={heandEditClose}
            isOpen={isModalEdit}
            content={
              <Box sx={{ height: 566, width: "100%" }}>
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
                  rows={rowss}
                  columns={columns}
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
      </Box>
      <Box className="display-flex1280">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: "15px",
            alignItems: "center",
          }}
        >
          <img src={Dowloadd} alt="" />
          <Link>Xuất File Excel</Link>
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
        {/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">STT</StyledTableCell>
                <StyledTableCell align="center">Họ và tên</StyledTableCell>
                <StyledTableCell align="center">Mã nhân viên</StyledTableCell>
                <StyledTableCell align="center">Địa chỉ email</StyledTableCell>
                <StyledTableCell align="center">Mã QR</StyledTableCell>
                <StyledTableCell align="center">Ghi chú</StyledTableCell>
                <StyledTableCell align="center">Thao Tác</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to="/chitiet">{row.vn}</Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.nu}</StyledTableCell>
                  <StyledTableCell align="center">{row.so}</StyledTableCell>
                  <StyledTableCell align="center">{row.mu}</StyledTableCell>
                  <StyledTableCell align="center">{row.noo}</StyledTableCell>
                  <StyledTableCell key={row.index} align="center">
                    {
                      <Box
                        key={row.index}
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "center",
                        }}
                      >
                        <Box>
                          <LinkButton
                            underline="none"
                            component="button"
                            variant="body2"
                            onClick={() => handleOpenModal(index)}
                          >
                            Sửa
                          </LinkButton>
                          <CommonModal
                            stylebuttons={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                            width="450px"
                            title="Phan Minh Phong"
                            content={
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                  }}
                                >
                                  <Box>ID/Mã nhân viên</Box>
                                  <Box>Tên nhân viên*</Box>
                                  <Box>Email*</Box>
                                  <Box>QR-Code*</Box>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                  }}
                                >
                                  <Box>
                                    <TextField
                                      id="outlined-size-small"
                                      defaultValue="PhongPM"
                                      size="small"
                                    />
                                  </Box>
                                  <Box>
                                    <TextField
                                      id="outlined-size-small"
                                      defaultValue="Phan Minh Phong"
                                      size="small"
                                    />
                                  </Box>
                                  <Box>
                                    <TextField
                                      id="outlined-size-small"
                                      defaultValue="PhongThuy@LOve.com"
                                      size="small"
                                    />
                                  </Box>
                                  <Box>
                                    <TextField
                                      id="outlined-size-small"
                                      defaultValue="zasfffg"
                                      size="small"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            }
                            isOpen={isModalOpen[index]}
                            handleClose={() => handleCloseModal(index)}
                          />
                        </Box>
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
                                      width: "215px",
                                      height: "92px",
                                      p: "8px",
                                    }}
                                  >
                                    <Box sx={{ color: "black", mb: "8px" }}>
                                      <Typography
                                        sx={{
                                          color: "#303E65",
                                          fontSize: "12px",
                                          fontWeight: 400,
                                          height: "40px",
                                        }}
                                      >
                                        Bạn có chắc muôn xóa nhân viên: Phan
                                        Minh Phong không?
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      <Button
                                        sx={{ width: "50px" }}
                                        onClick={() =>
                                          handleTooltipClose(index)
                                        }
                                        variant="outlined"
                                      >
                                        hủy
                                      </Button>
                                      <Button
                                        sx={{ width: "50px" }}
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handledelete(index)}
                                      >
                                        xóa
                                      </Button>
                                    </Box>
                                  </Box>
                                }
                              >
                                <LinkButton
                                  color="red"
                                  underline="none"
                                  component="button"
                                  variant="body2"
                                  onClick={() => handleTooltipOpen(index)}
                                >
                                  Xóa
                                </LinkButton>
                              </Tooltip>
                            </Box>
                          </ClickAwayListener>
                        </Box>
                      </Box>
                    }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </Box>
    </Box>
  );
}

export default Nhansu;
