import React from 'react';
import './footer.styles.scss';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
export const Footer = () => {
    return (
        <footer>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs:5, sm:10}} bgcolor="text.secondary" color="white">
                <Container max-width="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><h2 className="footer-head">Help</h2></Box>
                            <Box >
                                <Link href="/" color="inherit"><h3>Contact</h3></Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit"><h3>Support</h3></Link>
                            </Box>
                            <Box b>
                                <Link href="/" color="inherit"><h3>Privacy</h3></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><h2 className="footer-head">Account</h2></Box>
                            <Box >
                                <Link href="/" color="inherit"><h3>Login</h3></Link>
                            </Box>
                            <Box b>
                                <Link href="/" color="inherit"><h3>Register</h3></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><h2 className="footer-head">Help</h2></Box>
                            <Box >
                                <Link href="/" color="inherit"><h3>Contact</h3></Link>
                            </Box>
                            <Box >
                                <Link href="/" color="inherit"><h3>Contact</h3></Link>
                            </Box>
                            <Box >
                                <Link href="/" color="inherit"><h3>Contact</h3></Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}><b>Ecommerce &reg; {new Date().getFullYear()}</b></Box>
                </Container>
            </Box>
        </footer>
    )
}