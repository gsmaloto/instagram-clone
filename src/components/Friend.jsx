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
import React from "react";

const Friend = () => {
  return (
    <Box sx={{ width: "100%", display: { xs: "none", sm: "block" } }}>
      <Typography variant="body2" fontWeight="800" color="#00000080">
        Suggestions For You
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            sx={{ fontSize: 1 }}
            primary="john_doeee"
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Follows you
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Friend;
