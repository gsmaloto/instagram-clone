import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Friend = () => {
  return (
    <Box sx={{ width: "319px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap={2} alignItems="center">
          <Avatar />
          <Box>
            <Typography variant="body2" fontWeight="600">
              jwasss_axx
            </Typography>
            <Typography variant="body2" sx={{ opacity: ".7" }}>
              Follows you
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body2" fontWeight="600" color="#0095f6">
          Follow
        </Typography>
      </Stack>
    </Box>
  );
};

export default Friend;
