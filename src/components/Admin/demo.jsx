
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Box,Link } from "@mui/material";
import { useState } from "react";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function CustomizedTooltips() {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
    };
     const [age, setAge] = React.useState("");

     const handleChange = (event) => {
       setAge(event.target.value);
     };
  return (
    <div>
      <LightTooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <Box
            sx={{
              background: "#fff",
              width: "250px",
              p: "16px",
            }}
          >
            <Box sx={{ color: "black", mb: "10px" }}>
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
                    rows={4}
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
        <Button onClick={handleTooltipOpen}>Click</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </div>
  );
}
