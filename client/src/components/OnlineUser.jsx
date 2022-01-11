import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function OnlineUser() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 3,
				mt: 2,
			}}
		>
			<Avatar
				sx={{ objectFit: "cover" }}
				src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
			>
				JE
			</Avatar>
			<Typography>Jesse Emamalie</Typography>
		</Box>
	);
}
