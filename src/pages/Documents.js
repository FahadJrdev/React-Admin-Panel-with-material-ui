/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './pageStyle.css';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Button,
  Stack,
  Container,
  Typography,
  TablePagination,
} from '@mui/material';
// components
import Iconify from '../components/Iconify';
import Page from '../components/Page';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  Company,
  document,
  action
) {
  return { Company, document, action };
}

const rows = [
  createData('Frozen yoghurt', `Documentos`, `Edit`),
  createData('Ice cream sandwich', `Documentos`, `Edit`),
  createData('Eclair', `Documentos`, `Edit`),
  createData('Cupcake', `Documentos`, `Edit`),
  createData('Gingerbread', `Documentos`, `Edit`),
  createData('Eclair', `Documentos`, `Edit`),
  createData('Gingerbread', `Documentos`, `Edit`),
  createData('Ice cream sandwich', `Documentos`, `Edit`),
  createData('Eclair', `Documentos`, `Edit`),
  createData('Cupcake', `Documentos`, `Edit`),
  createData('Cupcake', `Documentos`, `Edit`),
  createData('Eclair', `Documentos`, `Edit`),
  createData('Cupcake', `Documentos`, `Edit`),
  createData('Gingerbread', `Documentos`, `Edit`),
  createData('Gingerbread', `Documentos`, `Edit`),
  createData('Ice cream sandwich', `Documentos`, `Edit`),
  createData('Cupcake', `Documentos`, `Edit`),
];

export default function Documents({setAttemptToAddDocument, setAttemptToEditDocument}) {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = rows.slice(page,rowsPerPage);
  return (
    <Page title="Expenses">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Document
            </Typography>
          </Stack>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span onClick={()=>{setAttemptToAddDocument("open")}} className='add-new-user' style={{marginBottom: "30px"}}><Button variant="contained" gutterbottom={`${true}`} component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nuevo Documet
          </Button></span>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Company</StyledTableCell>
                  <StyledTableCell align="right">Document</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((row,i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {row.Company}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <span className="action-edit">
                        {row.document}
                      </span>
                      </StyledTableCell>
                    <StyledTableCell align="right">
                      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                      <span onClick={()=>{setAttemptToEditDocument("open")}} className="action-edit">
                        {row.action}
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Container>
    </Page>
  );
}