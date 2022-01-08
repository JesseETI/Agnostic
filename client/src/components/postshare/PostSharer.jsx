import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import GifBoxIcon from "@mui/icons-material/GifBox";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

export function ResponsiveSharer() {
  const [open, setOpen] = useState(false);

  const modalHandler = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Tooltip title="Create Post">
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 10,
            right: 10,
            mx: 3,
            display: { xs: "fixed", sm: "none" },
          }}
          onClick={modalHandler}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      {/* modal */}

      <Modal
        open={open}
        onClose={modalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: { md: "absolute" },
            top: { md: "50%" },
            left: { md: "50%" },
            height: { xs: "100vh", md: "auto" },
            overflow: "auto",
            backgroundColor: "background.paper",
            transform: { md: "translate(-50%, -50%)" },
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            rowGap: { xs: 2, md: 3 },
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            rowGap={2}
          >
            <Grid item xs={12} sx={{ display: "flex" }}>
              <IconButton onClick={modalHandler}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                rowGap={2}
                sx={{ display: { xs: "fixed", sm: "none" } }}
              >
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80">
                    J
                  </Avatar>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    fullWidth
                    id="post"
                    label="What's on your mind?"
                    name="post"
                    variant="standard"
                    multiline
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    sx={{ height: "100%" }}
                    startIcon={<PermMediaIcon htmlColor="LimeGreen" />}
                  >
                    Photo / Video
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    startIcon={<GifBoxIcon htmlColor="HotPink" />}
                  >
                    Gif
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    startIcon={<EmojiEmotionsIcon htmlColor="GoldenRod" />}
                  >
                    Feeling / Activity
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    startIcon={<RoomIcon htmlColor="Crimson" />}
                  >
                    Location
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export const MainSharer = () => (
  <Box p={1} borderBottom="1px solid grey">
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowGap={2}
        sx={{ display: { xs: "none", sm: "fixed" } }}
      >
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80">
            J
          </Avatar>
        </Grid>
        <Grid item xs={10}>
          <TextField
            required
            fullWidth
            id="post"
            label="What's on your mind?"
            name="post"
            variant="standard"
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{ height: "100%" }}
            startIcon={<PermMediaIcon htmlColor="LimeGreen" />}
          >
            Photo / Video
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth startIcon={<GifBoxIcon htmlColor="HotPink" />}>
            Gif
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            startIcon={<EmojiEmotionsIcon htmlColor="GoldenRod" />}
          >
            Feeling / Activity
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth startIcon={<RoomIcon htmlColor="Crimson" />}>
            Location
          </Button>
        </Grid>
      </Grid>
    </div>
  </Box>
);
