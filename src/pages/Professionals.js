import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


import {
    Stack,
    Container,
    Grid
  } from '@mui/material';
  // components
import Page from '../components/Page';

export default function Professionals() {
  return (
    <div className="professionals">
        <Page title="professionals">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                    Professionals
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_1.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                John Reimen
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Data Scientist
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                 Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_2.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Randy Orton
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 CEO
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_3.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Triple H
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Software Egineer
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_4.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Steve Austin
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Data Scientist
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_5.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Kevin Own
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Financial
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_6.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Samy Zyn
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Data Scientist
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_7.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Sauske Uchiha
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Marketting Manager
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_8.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                David Bekham
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Digital Marketer
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/mock-images/professionals/prof_9.jpg" 
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Stephani Mechmen
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Production Maager
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    </div>
  );
}
