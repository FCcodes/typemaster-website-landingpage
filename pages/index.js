import styles from "../styles/Home.module.css"

//next js
import Link from "next/link"
import Head from "next/head"

//Material-ui
import {
  Box,
  Grid,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material"

export default function Home() {
  return (
    <>
      <Head>
        <title>TYPEMASTER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="div" sx={{ px: {xs: 1.5, sm: 4, md: 8} }}>
        <Box component="header" sx={{borderRadius: "10px", mb: 6 }}>
          <AppBar position="relative" sx={{ pb: { sm: 5 }, backgroundColor: 'white', boxShadow: '0 0 0 rgb(0, 0, 0, 0)' }}>
            <Toolbar>
              <Typography
                variant="h3"
                component="h6"
                sx={{ flexGrow: 1, letterSpacing: "5px", fontSize: {xs: "2vw"}, color: 'black' }}
              >
                TM
              </Typography>
              <Button sx={{color: "rgb(233,102,41)", fontSize: {xs: "2vw", md: "1.5vw"}}}>Pre-Order Now</Button>
            </Toolbar>
          </AppBar>

          <Box className="headerContent">
            <Grid container sx={{pt: 10}}>
              <Grid item xs={12} sm={6} sx={{ pb: { xs: 5, sm: 0 } }}>
                <Paper elevation={0}>
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 6,
                      fontWeight: "800",
                      fontSize: { xs: "9vw", sm: "5vw", md: "4vw" },
                      letterSpacing: {xs: "5px", sm:  "none"},
                      lineHeight: { xs: "10vw", sm: "6.5vw", md: "6vw" },                      
                    }}
                  >
                    TYPEMASTER KEYBOARD
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 5,
                      fontWeight: "700",
                      opacity: "0.4",
                      fontSize: { xs: "4vw", sm: "3vw", md: "2vw" },                      
                      lineHeight: { xs: "4vw", md: "3vw" },
                    }}
                  >
                    Improve your productivity and gaming without breaking the
                    bank. Upgrade to a high quality mechanical typing experience
                  </Typography>
                  <Grid container>
                    <Grid item xs={6} sx={{mr: {xs: 3, md: 2}}}>
                      <Button    
                        variant="contained"    
                        color='inherit'                
                        sx={{                          
                          py: 1,
                          px: 1.5,
                          width: { xs:  '100%', md: '80%'},
                          fontSize: { xs: "3vw", sm: '1.7vw', md: '1vw' },
                          backgroundColor: "rgb(233,102,41)",
                          //color: "white",
                          fontWeight: "700",
                          letterSpacing: "2px",                          
                          //border: '1px solid rgb(233,102,41)'
                        }}
                      >
                        PRE-ORDER NOW
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h3"
                        component="p"
                        sx={{
                          fontSize: { xs: "3vw", sm: '1.7vw', md: '1vw' },
                          opacity: "0.6",
                          fontWeight: "800",
                        }}
                      >
                        RELEASE ON 5/27
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={5} sx={{ml: 'auto'}}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "rgb(47,51,62)",
                    width: "100%",
                    height: { xs: "50vh" },
                    borderRadius: "10px",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box component="main">
          <Grid container component="section" sx={{mb: {md: 20}}}>
            <Grid item xs={4} md={3} sx={{ mx: { xs: 2, md: 0 }, mr: {md: 4}}}>
              <Box
                sx={{                  
                  backgroundColor: "rgb(217,91,38)",
                  borderRadius: "10px",
                  width: "100%",
                  height: { xs: "40vh" },
                }}
              ></Box>
            </Grid>
            <Grid item xs={6} md={4} sx={{mr: {md: 4}}} >
              <Box
                sx={{                  
                  backgroundColor: "rgb(145,126,110)",
                  borderRadius: "10px",
                  width: "100%",
                  height: { xs: "40vh" },
                }}
              ></Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{py: { xs: 10, md: 0 }, pb: { xs: 15 } }}
            >
              <Paper elevation={0} sx={{mx: {xs: 'auto'}, display: {sm: "flex", md: 'inherit'}, maxWidth: {xs: "80%"} }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: 3,
                    pb: { xs: 3 , md: 0},
                    pr: { xs: 3, md: 0 },
                    px: { xs: 'auto', md: 0},
                    textAlign: { xs: "center", sm: "inherit" },
                    fontWeight: "750",
                    fontSize: { xs: "6vw", sm: "3.8vw", md: "2vw"},
                    letterSpacing: "5px",                    
                  }}
                >
                  MECHANICAL WIRELESS KEYBOARD
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    opacity: "0.6",
                    textAlign: { xs: "center", sm: "inherit" },
                    fontSize: { xs: "3vw", sm: "2.3vw", md: "1.3vw" },
                  }}
                >
                  The Typemaster keyboard boast top notch build and practical
                  design. It offers a wide variety of switches and keycaps along
                  with reliable wireless connectivity.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid container component="section">
            <Grid item xs={12} sm={6} md={3} sx={{px: { xs: 5, sm: 0}, pb: { xs: 15 } }}>
              <Paper elevation={0} sx={{mx: 'auto', maxWidth: {sm: "60%"}}}>
                <Box component="div" className="icon" sx={{mb: 5, mx: {xs: 'auto', sm: '0px'}, width: {xs: "18vw", sm: "13vw", md: "8vw"}, height: {xs: "18vw", sm: "13vw", md: "8vw"}, backgroundColor: "rgb(233,102,41)", borderRadius: '10px'}}></Box>
                <Typography
                  variant="h3"
                  sx={{
                    pb: { xs: 4 },
                    textAlign: { xs: "center", sm: "inherit" },
                    fontWeight: "800",
                    fontSize: { xs: "5vw", sm: "3.3vw", md: '1.5vw' },
                    
                  }}
                >
                  HIGHLY COMPATIBLE
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    opacity: "0.6",
                    textAlign: { xs: "center", sm: "inherit" },
                    fontSize: { xs: "3vw", sm: '2vw', md: "1vw" },
                    lineHeight: "1.5rem",
                  }}
                >
                  The Typemaster keyboard boast top notch build and practical
                  design. It offers a wide variety of switches and keycaps along
                  with reliable
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 5, sm: 0}, pb: { xs: 15 } }}>
              <Paper elevation={0} sx={{mx: 'auto', maxWidth: {sm: "60%"}}}>
              <Box component="div" className="icon" sx={{mb: 5, mx: {xs: 'auto', sm: '0px'}, width: {xs: "18vw", sm: "13vw", md: "8vw"}, height: {xs: "18vw", sm: "13vw", md: "8vw"}, backgroundColor: "rgb(233,102,41)", borderRadius: '10px'}}></Box>
                <Typography
                  variant="h3"
                  sx={{
                    pb: { xs: 3 },
                    textAlign: { xs: "center", sm: "inherit" },
                    fontWeight: "800",
                    fontSize: { xs: "5vw", sm: "3.3vw", md: "1.5vw" },
                    
                  }}
                >
                  WIRELESS WITH BLUETOOTH
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    opacity: "0.6",
                    textAlign: { xs: "center", sm: "inherit" },
                    fontSize: { xs: "3vw", sm: "2vw", md: "1vw"  },
                    lineHeight: "1.5rem",
                  }}
                >
                  The Typemaster keyboard boast top notch build and practical
                  design. It offers a wide variety of switches and keycaps along
                  with reliable
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 5, sm: 0}, pb: { xs: 15 } }}>
              <Paper elevation={0} sx={{mx: 'auto', maxWidth: {sm: "60%"}}}>
              <Box component="div" className="icon" sx={{mb: 5, mx: {xs: 'auto', sm: '0px'}, width: {xs: "18vw", sm: "13vw", md: "8vw"}, height: {xs: "18vw", sm: "13vw", md: "8vw"}, backgroundColor: "rgb(233,102,41)", borderRadius: '10px'}}></Box>
                <Typography
                  variant="h3"
                  sx={{
                    pb: { xs: 3 },
                    textAlign: { xs: "center", sm: "inherit" },
                    fontWeight: "800",
                    fontSize: { xs: "5vw", sm: "3.3vw", md: "1.5vw" },
                    
                  }}
                >
                  HIGH CAPACITY BATTERY
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    opacity: "0.6",
                    textAlign: { xs: "center", sm: "inherit" },
                    fontSize: { xs: "3vw", sm: "2vw", md: "1vw" },
                    lineHeight: "1.5rem",
                  }}
                >
                  The Typemaster keyboard boast top notch build and practical
                  design. It offers a wide variety of switches and keycaps along
                  with reliable
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 5, sm: 0}, pb: { xs: 15 } }}>
              <Paper elevation={0} sx={{mx: 'auto', maxWidth: {sm: "60%"}}}>
              <Box component="div" className="icon" sx={{mb: 5, mx: {xs: 'auto', sm: '0px'}, width: {xs: "18vw", sm: "13vw", md: "8vw"}, height: {xs: "18vw", sm: "13vw", md: "8vw"}, backgroundColor: "rgb(233,102,41)", borderRadius: '10px'}}></Box>
                <Typography
                  variant="h3"
                  sx={{
                    pb: { xs: 3 },
                    textAlign: { xs: "center", sm: "inherit" },
                    fontWeight: "800",
                    fontSize: { xs: "5vw", sm: "3.3vw", md: "1.5vw" },
                    
                  }}
                >
                  RGB BACKLIT MODES
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    opacity: "0.6",
                    textAlign: { xs: "center", sm: "inherit" },
                    fontSize: { xs: "3vw", sm: "2vw", md: "1vw"},
                    lineHeight: "1.5rem",
                  }}
                >
                  The Typemaster keyboard boast top notch build and practical
                  design. It offers a wide variety of switches and keycaps along
                  with reliable
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        <Box component="footer">
          <Grid container direction='row' alignItems="center" justifyContent="center">
            <Grid item xs={6}>
              <Typography variant='h6' align='center' sx={{fontSize: {xs: '3vw', sm: "1.9vw", md: "1vw"}, opacity: "0.5", fontWeight: "700"}}>Typemaster 2021 | All Rights Reserved</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
