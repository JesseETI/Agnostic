import Leftbar from "../components/Leftbar";
import Rightbar from "../components/menu/Rightbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Feed from "../components/Feed";

const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  borderRight: "1px solid grey",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  overflow: "auto",
}));

const MyProfile = () => {
  return (
    <Wrapper sx={{ rowGap: { xs: 1, md: 3 } }}>
      <Box sx={{ position: "relative", minHeight: "300px" }}>
        <img
          width="100%"
          height="250"
          sx={{ objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          alt=""
        />
        <Avatar
          sx={{
            position: "absolute",
            top: "150px",
            left: 0,
            right: 0,
            margin: "auto",
            height: 150,
            width: 150,
            objectFit: "contain",
            border: "4px solid black",
          }}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
      </Box>
      <Box className="profileInfo">
        <Typography variant="h5" component="h3">
          Jesse Emamalie
        </Typography>
        <Typography variant="span" component="h4">
          This is my bio.
        </Typography>
      </Box>
      <Feed profile />
    </Wrapper>
  );
};
export default function Profile() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          md="auto"
          lg={3}
        >
          <Leftbar />
        </Grid>
        <Grid item xs={12} sm={7} md={6}>
          <MyProfile />
        </Grid>
        <Grid item sx={{ display: { xs: "none", sm: "block" } }} sm={5} md>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}
