import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
 
const Wrapper = styled("div")(({theme}) => ({
    minHeight: "50vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
        width: "50vw",
        height: "100vh"
    }
}));

export default function Register() {

    const [open, setOpen] = useState(false);

    const modalHandler = () => {
        setOpen(!open);
    }

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Wrapper sx={{bgcolor: "primary.main", color: "primary.contrastText"}}>
                    <Typography component="h1" variant="h3">
                        Agnostic
                    </Typography>
                    <Divider variant="middle" sx= {{borderBottomWidth: 5, borderStyle: "dotted", margin: 2, width: "30%"}}/>
                    <Typography component="h3" variant="span">
                        We don't care where you come from, we just want you to connect.
                    </Typography>
                </Wrapper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Wrapper sx={{ rowGap: {xs: 1, md: 3}}}>
                    <Typography component="h2" variant="h4">
                        Join Us Today
                    </Typography>
                    <Typography variant="body1">
                        Sign up with
                    </Typography>
                    <Grid container spacing={{xs: 3,md: 4}}>
                        <Grid item xs={12} md={4}>
                            <Button sx={{backgroundColor: "#FF0000"}} size="medium" variant="contained" startIcon={<GoogleIcon />}>Google</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button sx={{backgroundColor: "#1877F2"}} size="medium" variant="contained" startIcon={<FacebookIcon />}>Facebook</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button sx={{backgroundColor: "#1DA1F2"}} size="medium" color="secondary" variant="contained" startIcon={<TwitterIcon />}>Twitter</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button sx={{backgroundColor: "#F00073"}} size="medium" color="secondary" variant="contained" startIcon={<InstagramIcon />}>Instagram</Button>
                        </Grid>
                        <Grid item  xs={12} md={4}>
                            <Button sx={{backgroundColor: "#25D366"}} size="medium" color="secondary" variant="contained" startIcon={<WhatsAppIcon />}>Whatsapp</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button sx={{backgroundColor: "#FF4500"}} size="medium" color="secondary" variant="contained" startIcon={<RedditIcon />}>Reddit</Button>
                        </Grid>
                    </Grid>
                    <Typography variant="body1">OR</Typography>
                    <Button variant="contained" color="secondary" onClick={modalHandler}>Sign up with Email</Button>
                    <Modal
                        open={open}
                        onClose={modalHandler}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: {xs: "relative", md: 'absolute'},
                            top: {md : '50%'},
                            left: {md : '50%'},
                            height: {xs: "100vh", md: "auto"},
                            overflow: "auto",
                            backgroundColor: "background.paper",
                            transform: {md: 'translate(-50%, -50%)'},
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 2,
                            display:"flex",
                            textAlign: "center",
                            flexDirection: "column"
                        }}>
                        
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        />
                                    </Grid>
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
                                Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Modal>
                </Wrapper>
            </Grid>
        </Grid>
    )
}
