import { Box, Container } from "@mui/material";
import React from "react";
import Story from "./Story";
import PostCard from "./PostCard";
import Friend from "./Friend";
import { Stack } from "@mui/system";

const Feed = () => {
  return (
    <Box bgcolor="#FAFAFA">
      <Story />
      <PostCard />
      <PostCard />

      <Friend />
    </Box>
  );
};

export default Feed;
