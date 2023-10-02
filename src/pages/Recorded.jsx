import React from "react";
import { Box, Typography, Stack, TextField } from "@mui/material";
const Recorded = () => {
  // useEffect(())
  return (
    <Box
      pt={5}
      pb={1}
      sx={{
        minHeight: "80vh",
        paddingInline: "4rem",
        textAlign: "left",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        pt={15}
      >
        <Stack direction="column" gap={3}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2.8rem", color: "black" }}
            >
              Your Video Is Ready
            </Typography>
          </Box>
          <Box>
            <Typography variant="body">Name</Typography>
            <Stack direction="row" gap={3} alignItems="center">
              <Typography
                pt={1}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                  color: "#120b48",
                }}
              >
                Untitled-video_12345
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginLeft: "5px", cursor: "pointer" }}
              >
                Copy
              </Typography>
            </Stack>
            <Box pt={3}>
              <TextField
                placeholder="Enter Your Mail"
                sx={{ background: "white", width: "100%" }}
              />
            </Box>
            <Box pt={6} pb={4}>
              <Typography>Video Url</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: "1rem",
                backgorund: "whitesmoke",
                borderRadius: ".6rem",
                border: "1px solid black",
              }}
            >
              www.hhelpmeout.com/file/2888
            </Box>
          </Box>
        </Stack>
        <Stack direction="column" gap={3}>
          <Box>
            <video src="" controls autoPlay></video>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Transcript</Typography>
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>
            No Transcript Available
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Recorded;
