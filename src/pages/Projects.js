/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography, Tooltip, IconButton } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import { ProjectCard } from '../sections/@dashboard/projects';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function Blog({setAttemptToAddProject, setAttemptToEditProject}) {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Proyectos
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span onClick={()=>{setAttemptToAddProject("open")}}>
            <Button variant="contained" size="large" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Post
            </Button>
          </span>
            <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ background: '#FFFFFF', p: 2, flex: 1, m:2, borderRadius: '24px' }}>
            <Typography variant="h6">
            Todo
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary'}}>
            Activos
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary'}}>
            Pausados
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary'}}>
            Finalizados
          </Typography>
                <Tooltip title="Filter list">
                    <IconButton>
                        <Iconify icon="ic:round-filter-list" />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <ProjectCard key={post.id} post={post} index={index} setAttemptToEditProject={setAttemptToEditProject} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
