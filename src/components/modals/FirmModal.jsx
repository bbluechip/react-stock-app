import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import { TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const { postFirm } = useStockCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    postFirm(info);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexCenter}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info?.phone || ""}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" size="large">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
