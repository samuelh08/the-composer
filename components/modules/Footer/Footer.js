import { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import { useRouter } from 'next/router';

import FooterMenu from './constants/FooterMenu';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  //TODO: navegate when pages are ready
  const theme = useTheme();
  const { pathname } = useRouter();
  const clipboardRef = useRef(null);
  const [activeClipBoard, setActiveClipBoard] = useState(false);

  const logo = require('assets/img/SymbolLogo-01.svg');

  const handleClipBoard = () => {
    navigator.clipboard.writeText('eddbeatmusic.contact@gmail.com');
    setActiveClipBoard(true);
  };

  useEffect(() => {
    activeClipBoard &&
      setTimeout(() => {
        console.log('despues de un segundo');
        setActiveClipBoard(false);
      }, 2000);

    console.log(clipboardRef.current.offsetTop);
  }, [activeClipBoard]);

  return (
    <Box bgcolor="#000">
      <Grid container sx={{ paddingBottom: 6 }}>
        {FooterMenu.map((item, i) => {
          return (
            <Grid
              item
              xs={12}
              sx={{
                borderBottom: '1px solid white',
                paddingLeft: '8%',
                cursor: pathname === item.path ? '' : 'pointer',
              }}
              className={
                pathname === item.path ? 'active-footer' : 'footer-title'
              }
              key={i}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ pr: 5, textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '173.783px',
                    height: '116.7278px',
                    borderRadius: '50%',
                    border: '1px solid black',
                  }}
                >
                  <Typography
                    variant="subtitle5"
                    color="secondary"
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {item.sub}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
        <Grid
          item
          container
          xs={12}
          sx={{ paddingTop: 6 }}
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Grid item xs={12} md={6} sx={{ paddingLeft: '7%' }}>
            <Image src={logo} alt="Eduardo's Logo" height="150%" />
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid item xs={7}>
              <Typography variant="subtitle4" color="primary">
                Drop me a line
              </Typography>
              <Typography
                color="primary"
                sx={{ overflowWrap: 'break-word', paddingTop: 2 }}
                variant="h6"
                id="contact-footer"
                ref={clipboardRef}
                onClick={() => handleClipBoard()}
              >
                <span>Eddbeatmusic</span>
                <br />
                <span>.contact@gmail.com</span>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Stack spacing={2}>
                <Link variant="subtitle4" underline="none" href="#">
                  <Box
                    component="span"
                    sx={{
                      paddingBottom: 0.7,
                      borderBottom: '1px solid white',
                      paddingRight: '7px',
                    }}
                  >
                    Sound Cloud
                  </Box>
                </Link>
                <Link variant="subtitle4" underline="none" href="#">
                  <Box
                    component="span"
                    sx={{
                      paddingBottom: 0.7,
                      borderBottom: '1px solid white',
                      paddingRight: '7px',
                    }}
                  >
                    Band Camp
                  </Box>
                </Link>
                <Link variant="subtitle4" underline="none" href="#">
                  <Box
                    component="span"
                    sx={{
                      paddingBottom: 0.7,
                      borderBottom: '1px solid white',
                      paddingRight: '7px',
                    }}
                  >
                    Instagram
                  </Box>
                </Link>
                <Link variant="subtitle4" underline="none" href="#">
                  <Box
                    component="span"
                    sx={{
                      paddingBottom: 0.7,
                      borderBottom: '1px solid white',
                      paddingRight: '7px',
                    }}
                  >
                    Twitter
                  </Box>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: 6 }}>
              <Typography
                variant="subtitle4"
                sx={{ color: 'rgba(255, 255, 255, 0.16)' }}
              >
                &copy; 2022 Eduardo Hincapie - All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          visibility: activeClipBoard ? 'visible' : 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '173.783px',
          height: '116.7278px',
          borderRadius: '50%',
          border: '1px solid white',
          textAlign: 'center',
          position: 'absolute',
          top: clipboardRef.current && clipboardRef.current.offsetTop + 'px',
          right:
            clipboardRef.current && clipboardRef.current.offsetWidth + 'px',
          zIndex: '50',
          backgroundColor: theme.palette.secondary.main,
        }}
        className={activeClipBoard ? 'clip-board' : ''}
      >
        <Typography
          variant="subtitle5"
          color="primary"
          sx={{ textTransform: 'uppercase' }}
        >
          Copied to ClipBoard
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
