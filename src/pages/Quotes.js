import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


import {
    Stack,
    Container
  } from '@mui/material';
  // components
import Page from '../components/Page';

export default function Quotes() {
  return (
    <div className="quotes provider">
        <Page title="Quotes">
            <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                Quotes
                </Typography>
            </Stack>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/mock-images/provider/provider_1.svg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="ShutterStock"
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            ShutterStock
                        </Typography>
                        {" — Transform Marketing Campaigns, Social Media, Website and Designs with Shutterstock."}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/mock-images/provider/provider_2.svg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Unity"
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Unity
                        </Typography>
                        {" — Build real-time 3D projects for various industries across games, animation, automotive, architecture"}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/mock-images/provider/provider_3.svg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Netflix"
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Netflix
                        </Typography>
                        {' — Netflix is a streaming service that offers a wide variety of award-winning TV Show'}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/mock-images/provider/provider_4.svg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Nasa"
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Nasa
                        </Typography>
                        {' — The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civil space program, ...'}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/mock-images/provider/provider_5.svg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Amazon"
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Amazon
                        </Typography>
                        {' — Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of ...'}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/mock-images/provider/provider_6.svg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Spotify"
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Spotify
                        </Typography>
                        {' — Spotify is all the music you\'ll ever need.'}
                        </>
                    }
                    />
                </ListItem>
            </List>
            </Container>
        </Page>
    </div>
  );
}
