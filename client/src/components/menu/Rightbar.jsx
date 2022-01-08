import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CakeIcon from "@mui/icons-material/Cake";
import Typography from "@mui/material/Typography";
import OnlineUser from "../OnlineUser";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 20,
  minHeight: "100vh",
  top: 0,
  position: "sticky",
  overflowY: "auto",
  rowGap: 30,
}));

export default function Rightbar() {
  return (
    <Wrapper>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for posts, friends and more..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Box sx={{ display: "flex" }}>
        <CakeIcon htmlColor="pink" fontSize="large" />
        <Typography variant="body2" component="span">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
        </Typography>
      </Box>

      <img
        width="100%"
        src="https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        alt=""
      />

      <Box>
        <Typography variant="subtitle1">Online Friends</Typography>
        <OnlineUser />
        <OnlineUser />
        <OnlineUser />
        <OnlineUser />
        <OnlineUser />
      </Box>
    </Wrapper>
  );
}
