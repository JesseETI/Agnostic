import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Login() {
	const open = true;
	return (
		<Modal
			open={open}
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
				<Typography component="h1" variant="h5">
					Log In
				</Typography>
				<Grid container spacing={{ xs: 3, md: 4 }}>
					<Grid item xs={12} md={4}>
						<Button
							sx={{ backgroundColor: "#FF0000" }}
							size="medium"
							variant="contained"
							startIcon={<GoogleIcon />}
						>
							Google
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button
							sx={{ backgroundColor: "#1877F2" }}
							size="medium"
							variant="contained"
							startIcon={<FacebookIcon />}
						>
							Facebook
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button
							sx={{ backgroundColor: "#1DA1F2" }}
							size="medium"
							color="secondary"
							variant="contained"
							startIcon={<TwitterIcon />}
						>
							Twitter
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button
							sx={{ backgroundColor: "#F00073" }}
							size="medium"
							color="secondary"
							variant="contained"
							startIcon={<InstagramIcon />}
						>
							Instagram
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button
							sx={{ backgroundColor: "#25D366" }}
							size="medium"
							color="secondary"
							variant="contained"
							startIcon={<WhatsAppIcon />}
						>
							Whatsapp
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button
							sx={{ backgroundColor: "#FF4500" }}
							size="medium"
							color="secondary"
							variant="contained"
							startIcon={<RedditIcon />}
						>
							Reddit
						</Button>
					</Grid>
				</Grid>
				<Box component="form" noValidate sx={{ mt: 2 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Log In
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/register" variant="body2">
								Don&apos;t have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Modal>
	);
}
