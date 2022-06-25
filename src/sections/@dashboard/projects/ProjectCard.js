/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Stack, Divider } from '@mui/material';
// utils
import { faker } from '@faker-js/faker';
import { fDate } from '../../../utils/formatTime';
//
import SvgIconStyle from '../../../components/SvgIconStyle';
import Iconify from '../../../components/Iconify';


// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  padding: 'calc(100% * 0.25 / 4)',
});

const TitleStyle = styled(Link)({
  overflow: 'hidden',
  WebkitLineClamp: 2,
  color: '#307FE2',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function ProjectCard({ post, index, setAttemptToEditProject }) {
  const { title, view, comment, author, createdAt } = post;
//   const latestPostLarge = index === 0;
//   const latestPost = index === 1 || index === 2;

  const POST_INFO = [
    { number: comment, icon: 'bi:pencil-fill' },
    { number: view, icon: 'bi:three-dots-vertical' },
  ];

  return (
    <Grid item xs={3} 
    // sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}
    >
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
        //   sx={{
        //     ...((latestPostLarge || latestPost) && {
        //       pt: 'calc(100% * 4 / 3)',
        //       '&:after': {
        //         top: 0,
        //         content: "''",
        //         width: '100%',
        //         height: '100%',
        //         position: 'absolute',
        //         bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
        //       },
        //     }),
        //     ...(latestPostLarge && {
        //       pt: {
        //         xs: 'calc(100% * 4 / 3)',
        //         sm: 'calc(100% * 3 / 4.66)',
        //       },
        //     }),
        //   }}
        >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <TitleStyle
                    to="#"
                    color="inherit"
                    variant="subtitle2"
                    underline="hover"
                    component={RouterLink}
                    sx={{
                    //   ...(latestPostLarge && { typography: 'h5', height: 60 }),
                    //   ...((latestPostLarge || latestPost) && {
                    //     color: 'common.white',
                    //   }),
                    }}
                  >
                    {title.slice(0, 12)}...
                  </TitleStyle>

                  <InfoStyle>
                    {POST_INFO.map((info, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        //   ml: index === 0 ? 0 : 1.5,
                        //   ...((latestPostLarge || latestPost) && {
                        //     color: 'grey.500',
                        //   }),
                        }}
                      >
                       {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                       <span onClick={()=>{setAttemptToEditProject("open")}}>
                          <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                        </span> 
                      </Box>
                    ))}
              </InfoStyle>
        </Box>

        <Box>
          <Box sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#00BD99',
          display: 'inline-block',
          mr: 1,
          }}/>
          <Typography gutterBottom variant="caption" sx={{ color: '#00BD99' }}>
            Activo
          </Typography>
        </Box>
          {/* <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          /> */}
          {/* <CoverImgStyle alt={title} src={cover} /> */}
        </CardMediaStyle>


        <CardContent
          sx={{
            pt: 0,
            // ...((latestPostLarge || latestPost) && {
            //   bottom: 0,
            //   width: '100%',
            //   position: 'absolute',
            // }),
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Stack direction='row' spacing={2}>
              <Stack>
                <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: 8 }}>
                  Fecha de inicio
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: 8  }}>
                  {fDate(createdAt)}
                </Typography>
              </Stack>
              <Stack direction='row' divider={<Divider orientation="vertical" flexItem />}>
                <Box sx={{ background: '#F4F7FE', p: 0.5, textAlign: 'center', borderRadius: '25% 0 0 25%' }}>
                  <Typography variant="subtitle1" sx={{ color: '#307FE2' }}>
                    12
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    Tareas
                  </Typography>
                </Box>
                <Box sx={{ background: '#F4F7FE', p: 0.5, textAlign: 'center', borderRadius: '0 25% 25% 0' }}>
                  <Typography variant="subtitle1" sx={{ color: '#307FE2' }}>
                    03
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    Usuarios
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Miembros
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <AvatarStyle
            alt={author.name}
            src={`/static/mock-images/avatars/avatar_${faker.datatype.number(20)}.jpg`}
            // sx={{
            //   ...((latestPostLarge || latestPost) && {
            //     zIndex: 9,
            //     top: 24,
            //     left: 24,
            //     width: 40,
            //     height: 40,
            //   }),
            // }}
          />
          <AvatarStyle
            alt={author.name}
            src={`/static/mock-images/avatars/avatar_${faker.datatype.number(20)}.jpg`}
            // sx={{
            //   ...((latestPostLarge || latestPost) && {
            //     zIndex: 9,
            //     top: 24,
            //     left: 24,
            //     width: 40,
            //     height: 40,
            //   }),
            // }}
          />
          <AvatarStyle
            alt={author.name}
            src={`/static/mock-images/avatars/avatar_${faker.datatype.number(20)}.jpg`}
            // sx={{
            //   ...((latestPostLarge || latestPost) && {
            //     zIndex: 9,
            //     top: 24,
            //     left: 24,
            //     width: 40,
            //     height: 40,
            //   }),
            // }}
          />
          <AvatarStyle
            alt={author.name}
            src={`/static/mock-images/avatars/avatar_${faker.datatype.number(20)}.jpg`}
            // sx={{
            //   ...((latestPostLarge || latestPost) && {
            //     zIndex: 9,
            //     top: 24,
            //     left: 24,
            //     width: 40,
            //     height: 40,
            //   }),
            // }}
          />
          <AvatarStyle
            alt={author.name}
            src={'/static/icons/add.svg'}
            // sx={{
            //   ...((latestPostLarge || latestPost) && {
            //     zIndex: 9,
            //     top: 24,
            //     left: 24,
            //     width: 40,
            //     height: 40,
            //   }),
            // }}
          />
          </Box>
   
        </CardContent>
      </Card>
    </Grid>
  );
}
