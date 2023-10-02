import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Woman from "./woman-using-smartphone-technology 2.png";
import lady from "./AdobeStock_362497671 1.png";
import lap from "./AdobeStock_400053098 1 (1).png";
import Features from "../components/Features";
const Home = () => {
  return (
    <Box
      pt={5}
      pb={1}
      sx={{ textAlign: "center", minHeight: "80vh", paddingInline: "4rem" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        pt={15}
      >
        <Box sx={{ maxWidth: "40ch", textAlign: "left" }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "2.8rem", color: "black" }}
          >
            Show Them Dont Just Tell Them
          </Typography>
          <Typography variant="body2" fontSize="16px" pt={2}>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </Typography>
          <Box pt={2}>
            <Button
              sx={{
                background: "#120B48",
                paddingBlock: ".8rem !important",
                color: "white !important",
                paddingInline: "3rem !important",
                borderRadius: ".6rem",
                textTransform: "capitalize",
                fontWeight: "500",
                "&:hover": {
                  color: "white",
                  background: "#120B44",
                },
              }}
            >
              Install Help Me Out
            </Button>
          </Box>
        </Box>
        <Box>
          <Stack direction="row" gap={1}>
            <Stack direction="column" gap={1}>
              <img src={lap} width="300px" height="200px" />
              <img src={lady} width="300px" height="200px" />
            </Stack>

            <Box>
              <img src={Woman} width="300px" height="400px" />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box pt={5}>
        <Features />
      </Box>
    </Box>
  );
};

export default Home;
