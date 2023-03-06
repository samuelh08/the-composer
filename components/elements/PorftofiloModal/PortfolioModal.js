import React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import Image from "next/image";

import CloseIcon from "assets/img/close_icon.svg"

export default function MaxWidthDialog({open=false, handleClose, ...props }) {

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
        scroll="body"
      >
        <Box
          sx={{ cursor: "pointer", position: "fixed", top: 50, right: 50, borderRadius: "50%" }}
          onClick={handleClose}
        >
          <Image src={CloseIcon} alt="Close Icon" />
        </Box>
        <DialogContent>
          <Box
            margin={0}
            padding={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowX: 'hidden'
            }}
          >
            {props.children}
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}