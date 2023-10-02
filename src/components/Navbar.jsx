import React from "react";
import { AppBar, Toolbar, Stack, styled, Typography } from "@mui/material";
import Logo from "./logo.png";
const StyledBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#120b48",
});

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: "99 !important",
        paddingInline: "3rem",
        backgroundColor: "white",
        paddingBlock: ".7rem",
        borderBottom: "3px solid rgb(225 2525 225 /.7)",
        boxShadow: "none !important",
      }}
    >
      <StyledBar>
        <Stack spacing={1} direction="row" alignItems="center">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Help Me Out
          </Typography>
        </Stack>

        <Stack spacing={2} direction="row">
          <Typography
            sx={{ fontWeight: "bold", fontSize: "15px", color: "black" }}
          >
            How It Works
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "15px", color: "black" }}
          >
            Features
          </Typography>
        </Stack>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          GetStarted
        </Typography>
      </StyledBar>
    </AppBar>
  );
}
