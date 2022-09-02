import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Story from "./Story";
import PostCard from "./PostCard";
import Friend from "./Friend";
import { Stack } from "@mui/system";

const Feed = () => {
  return (
    <Box pt={10} bgcolor="#FAFAFA" width="100%">
      <Stack direction="row" gap={4} justifyContent="center">
        <Stack gap={3}>
          <Story />
          <PostCard />
          <PostCard />
        </Stack>
        <Stack gap={1.5} sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography variant="body2" fontWeight="800" color="#00000080">
            Suggestions For You
          </Typography>
          <Friend />
          <Friend />
          <Friend />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Feed;
