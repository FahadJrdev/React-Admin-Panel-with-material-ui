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
  name,
  imports,
  exports,
  sales,
  profits,
  year,
  action
) {
  return { name, imports, exports, sales, profits, year, action };
}

const rows = [
  createData('1700', 15900, 60000, 34000, `48%`, `2001`, `Edit`),
  createData('3100', 34200, 53200, 37000, `59%`, `2002`, `Edit`),
  createData('1200', 26200, 16000, 24000, `-10%`, `2003`, `Edit`),
  createData('1500', 30500, 37000, 67000, `78%`, `2004`, `Edit`),
  createData('2010', 35600, 160000, 49000, `39%`, `2005`, `Edit`),
  createData('2100', 26200, 16000, 24000, `-10%`, `2006`, `Edit`),
  createData('2300', 35600, 160000, 49000, `39%`, `2007`, `Edit`),
  createData('2500', 34200, 53200, 37000, `59%`, `2008`, `Edit`),
  createData('1900', 26200, 16000, 24000, `-10%`, `2009`, `Edit`),
  createData('2200', 30500, 37000, 67000, `78%`, `2010`, `Edit`),
  createData('2500', 30500, 37000, 67000, `78%`, `2011`, `Edit`),
  createData('1800', 26200, 16000, 24000, `-10%`, `2012`, `Edit`),
  createData('2300', 30500, 37000, 67000, `78%`, `2013`, `Edit`),
  createData('2700', 35600, 160000, 49000, `39%`, `2014`, `Edit`),
  createData('2600', 35600, 160000, 49000, `39%`, `2015`, `Edit`),
  createData('2400', 34200, 53200, 37000, `59%`, `2016`, `Edit`),
  createData('2600', 30500, 37000, 67000, `78%`, `2017`, `Edit`),
];

export default function EquipmentsDetails({setAttemptToAddEquipmentDetails, setAttemptToEditEquipmentDetails}) {
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
              EquipmentsDetails
            </Typography>
          </Stack>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span onClick={()=>{setAttemptToAddEquipmentDetails("open")}} className='add-new-user' style={{marginBottom: "30px"}}><Button variant="contained" gutterbottom={`${true}`} component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nuevo EquipmentsDetails
          </Button></span>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Redo Air Max Zephyr&nbsp;(No.)</StyledTableCell>
                  <StyledTableCell align="right">Import&nbsp;($)</StyledTableCell>
                  <StyledTableCell align="right">Export&nbsp;($)</StyledTableCell>
                  <StyledTableCell align="right">Sales&nbsp;($)</StyledTableCell>
                  <StyledTableCell align="right">Profit&nbsp;($)</StyledTableCell>
                  <StyledTableCell align="right">Year</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((row,i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.imports}</StyledTableCell>
                    <StyledTableCell align="right">{row.exports}</StyledTableCell>
                    <StyledTableCell align="right">{row.sales}</StyledTableCell>
                    <StyledTableCell align="right">{row.profits}</StyledTableCell>
                    <StyledTableCell align="right">{row.year}</StyledTableCell>
                    <StyledTableCell align="right">
                      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                      <span onClick={()=>{setAttemptToEditEquipmentDetails("open")}} className="action-edit">
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