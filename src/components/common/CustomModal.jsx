import CustomTable from "./CustomTable";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function CustomModal({
  isOpen,
  handleClose,
  title,
  content,
  stylebutton,
  width,
  stylebuttons,
}) {
  const handleCloseModal = () => {
    handleClose(true);
  };
  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "none",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            border: "1px solid #f0f0f0",
            width: width || 712,
            boxShadow: 24,
            p: "16px",
            display: "flex",
            flexDirection: " column",
            gap: "16px",
          }}
        >
          <Box sx={{ fontSize: "28px" }}>{title}</Box>
          <Box>{content}</Box>
          <Box sx={stylebuttons}>
            <Button
              sx={stylebutton}
              onClick={handleCloseModal}
              variant="contained"
            >
              Đóng
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
