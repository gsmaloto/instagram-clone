import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Stack, Container, Input, Avatar, IconButton } from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      height={60}
      width="100%"
      position="fixed"
      zIndex="100"
      sx={{ backgroundColor: "white", borderBottom: "2px solid #00000020" }}
    >
      <Container sx={{ width: "1000px" }}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            height={30}
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="logo"
          />
          <Stack direction="row" sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ background: "#EFEFEF" }}
              borderRadius={2}
              mr={10}
            >
              <SearchIcon
                fontSize="medium"
                opacity={0.3}
                sx={{ mx: ".5rem" }}
              />
              <Input
                placeholder="Search"
                disableUnderline
                width="450px"
                sx={{
                  border: "none",
                  outline: "none",
                  marginY: ".2rem",
                }}
              />
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <HomeIcon sx={{ cursor: "pointer" }} />
              <SendOutlinedIcon sx={{ cursor: "pointer" }} />
              <AddOutlinedIcon sx={{ cursor: "pointer" }} />
              <ExploreOutlinedIcon sx={{ cursor: "pointer" }} />
              <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
              <Avatar
                src="https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg"
                sx={{ width: 24, height: 24 }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
