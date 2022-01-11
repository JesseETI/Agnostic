import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";

export default function Leftbar() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const renderMenu = (
		<Menu
			id="basic-menu"
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={open}
			onClose={handleClose}
			MenuListProps={{
				"aria-labelledby": "basic-button",
			}}
		>
			<MenuItem component={Link} href="/profile">
				My Profile
			</MenuItem>
			<MenuItem component={Link} href="/login">
				Log out
			</MenuItem>
		</Menu>
	);

	const Wrapper = styled("div")(({ theme }) => ({
		height: "100vh",
		borderRight: "1px solid grey",
		top: 0,
		position: "sticky",
		[theme.breakpoints.down("lg")]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	}));

	return (
		<Wrapper>
			<nav>
				<List>
					{/* Logo */}
					<ListItem sx={{ display: { xs: "none", lg: "block" } }}>
						<ListItemButton component={Link} href="/">
							<ListItemText primary="Agnostic" />
						</ListItemButton>
					</ListItem>
					{/* Profile */}
					<ListItem>
						<ListItemButton
							aria-controls="basic-menu"
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleOpen}
						>
							<ListItemIcon>
								<Avatar
									alt="Jesse Emamalie"
									src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
								/>
							</ListItemIcon>
							<ListItemText
								primary="Jesse Emamalie"
								sx={{ display: { xs: "none", lg: "block" } }}
							/>
						</ListItemButton>
						{renderMenu}
					</ListItem>
					{/* Feed */}
					<ListItem>
						<ListItemButton component={Link} href="/">
							<ListItemIcon>
								<RssFeedIcon />
							</ListItemIcon>
							<ListItemText
								primary="Feed"
								sx={{ display: { xs: "none", lg: "block" } }}
							/>
						</ListItemButton>
					</ListItem>
					{/* Follow Requests */}
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<Badge badgeContent={5} color="error">
									<PersonIcon />
								</Badge>
							</ListItemIcon>
							<ListItemText
								primary="Follow Requests"
								sx={{ display: { xs: "none", lg: "block" } }}
							/>
						</ListItemButton>
					</ListItem>
					{/* Messages */}
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<Badge badgeContent={3} color="error">
									<ChatIcon />
								</Badge>
							</ListItemIcon>
							<ListItemText
								primary="Messages"
								sx={{ display: { xs: "none", lg: "block" } }}
							/>
						</ListItemButton>
					</ListItem>
					{/* Notifications */}
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<Badge badgeContent={3} color="error">
									<NotificationsIcon />
								</Badge>
							</ListItemIcon>
							<ListItemText
								primary="Notifications"
								sx={{ display: { xs: "none", lg: "block" } }}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Wrapper>
	);
}
