import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Favorite from "@mui/icons-material/Favorite";
import { Box, Checkbox, Stack } from "@mui/material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

const PostCard = () => {
  return (
    <Card
      sx={{ maxWidth: "100%", border: "1px solid #00000030" }}
      borderRadius={30}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={{ objectFit: "cover" }}
        component="img"
        height="511"
        image="https://go-models.com/uploads/page-images/part-time-modeling-jobs.webp"
        alt="Paella dish"
      />
      <Box p={2}>
        <Stack direction="row" alignItems="center" gap={2} mb={1}>
          <FavoriteBorderOutlined
            sx={{ cursor: "pointer", "&:hover": { opacity: ".7" } }}
          />
          <CommentOutlinedIcon
            sx={{ cursor: "pointer", "&:hover": { opacity: ".7" } }}
          />
          <ShareIcon sx={{ cursor: "pointer", "&:hover": { opacity: ".7" } }} />
        </Stack>
        <Typography variant="body2" fontWeight="800" pb={2}>
          4,145 likes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Box>
    </Card>
  );
};

export default PostCard;
