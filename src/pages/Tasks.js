/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// @mui
import { Stack, Divider, Checkbox, MenuItem, IconButton, FormControlLabel, Box, Typography, Button } from '@mui/material';
// utils
import { faker } from '@faker-js/faker';
// components
import Iconify from '../components/Iconify';
import MenuPopover from '../components/MenuPopover';

// ----------------------------------------------------------------------

const list = [
    { id: '1', label: 'Create FireStone Logo' },
    { id: '2', label: 'Add SCSS and JS files if required' },
    { id: '3', label: 'Stakeholder Meeting' },
    { id: '4', label: 'Scoping & Estimations' },
    { id: '5', label: 'Sprint Showcase' },
  ];


export default function Tasks({setAttemptToAddTask,setAttemptToEditTask, ...other }) {
  const formik = useFormik({
    initialValues: {
      checked: [list[2].id],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <Box {...other}>
        <Typography variant='h3' paragraph>
            Tareas
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span onClick={()=>{setAttemptToAddTask("open")}}>
          <Button variant='contained' size='large'>
              Nuevo
          </Button>
        </span>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          {list.map((task) => (
            <TaskItem key={task.id} task={task} setAttemptToEditTask={setAttemptToEditTask} checked={values.checked.includes(task.id)} formik={formik} />
          ))}
        </Form>
      </FormikProvider>
    </Box>
  );
}

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  formik: PropTypes.object,
  checked: PropTypes.bool,
  task: PropTypes.object,
};

function TaskItem({ setAttemptToEditTask, formik, task, checked, ...other}) {
  const { getFieldProps } = formik;

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleMarkComplete = () => {
    handleCloseMenu();
    console.log('MARK COMPLETE', task);
  };

  const handleShare = () => {
    handleCloseMenu();
    console.log('SHARE', task);
  };

  const handleEdit = () => {
    handleCloseMenu();
    console.log('EDIT', task);
    setAttemptToEditTask('open');
  };

  const handleDelete = () => {
    handleCloseMenu();
    console.log('DELETE', task);
  };

  return (
    <Stack
      direction="row"
      sx={{
        px: 2,
        py: 0.75,
        m: 2,
        borderRadius: '14px',
        background: "#FFFFFF",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...(checked && {
          color: 'text.disabled',
          textDecoration: 'line-through',
        }),
      }}
    >
        <Typography variant='body1' sx={{ color: '#307FE2' }}>
            11:00-12:00
        </Typography>
        <Typography variant='body1'>
            Tarea
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary' }}>
            Proyecto: Perteneciente
        </Typography>
    
      {/* <FormControlLabel
        control={<Checkbox {...getFieldProps('checked')} value={task.id} checked={checked} {...other} />}
        label={task.label}
        sx={{ flexGrow: 1, m: 0 }}
      /> */}

      <MoreMenuButton
        open={open}
        onClose={handleCloseMenu}
        onOpen={handleOpenMenu}
        actions={
          <>
            <MenuItem onClick={handleMarkComplete}>
              <Iconify icon={'eva:checkmark-circle-2-fill'} />
              Mark Complete
            </MenuItem>

            <MenuItem onClick={handleEdit}>
              <Iconify icon={'eva:edit-fill'} />
              Edit
            </MenuItem>

            <MenuItem onClick={handleShare}>
              <Iconify icon={'eva:share-fill'} />
              Share
            </MenuItem>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} />
              Delete
            </MenuItem>
          </>
        }
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

MoreMenuButton.propTypes = {
  actions: PropTypes.node,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.object,
};

function MoreMenuButton({ actions, open, onOpen, onClose }) {
  return (
    <>
      <IconButton size="large" color="inherit" sx={{ opacity: 0.48 }} onClick={onOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={onClose}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 'auto',
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 },
          },
        }}
      >
        {actions}
      </MenuPopover>
    </>
  );
}
