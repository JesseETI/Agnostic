import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import propTypes from "prop-types";
import Post from "./Post";
import { ResponsiveSharer, MainSharer } from "./postshare/PostSharer";

const Wrapper = styled("div")(() => ({
	minHeight: "100vh",
	borderRight: "1px solid grey",
	display: "flex",
	flexDirection: "column",
	overflow: "auto",
}));

export default function Feed({ profile }) {
	return (
		<Wrapper sx={{ rowGap: { xs: 1, md: 3 } }}>
			<Box p={2} borderBottom="1px solid grey">
				<Typography variant="title2" component="h2">
					{profile ? "Profile" : "Feed"}
				</Typography>
			</Box>
			<MainSharer />
			<ResponsiveSharer />
			<Post />
			<Post />
		</Wrapper>
	);
}

Feed.propTypes = {
	profile: propTypes.bool,
};

Feed.defaultProps = {
	profile: false,
};
