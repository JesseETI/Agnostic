import Grid from "@mui/material/Grid";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/menu/Rightbar";
import Feed from "../components/Feed";

export default function Home() {
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
          <Feed />
        </Grid>
        <Grid item sx={{ display: { xs: "none", sm: "block" } }} sm={5} md>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}
