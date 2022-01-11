import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import blue from "@mui/material/colors/blue";
import yellow from "@mui/material/colors/yellow";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import Register from "./pages/registration/Register";
import Login from "./pages/registration/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme)");

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
					primary: {
						main: blue[500],
						contrastText: "#fff",
					},
					secondary: {
						main: yellow[900],
						contrastText: "#fff",
					},
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
