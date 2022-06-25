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
  startDate,
  endDate,
  imports,
  exports,
  action
) {
  return { Company, imports, exports, startDate, endDate, action };
}

const rows = [
  createData('Frozen yoghurt', 2018, 2022, 34000, 3300, `Edit`),
  createData('Ice cream sandwich', 2017, 2021, 53200, 37000, `Edit`),
  createData('Eclair', 2019, 2023, 16000, 24000, `Edit`),
  createData('Cupcake', 2020, 2024, 37000, 67000, `Edit`),
  createData('Gingerbread', 2017, 2025, 160000, 49000, `Edit`),
  createData('Eclair', 2018, 2026, 16000, 24000, `Edit`),
  createData('Gingerbread', 2020, 2022, 160000, 49000, `Edit`),
  createData('Ice cream sandwich', 2017, 2023, 53200, 37000, `Edit`),
  createData('Eclair', 2020, 2022, 16000, 24000, `Edit`),
  createData('Cupcake', 2019, 2021, 37000, 67000, `Edit`),
  createData('Cupcake', 2023, 2025, 37000, 67000, `Edit`),
  createData('Eclair', 2026, 2030, 16000, 24000, `Edit`),
  createData('Cupcake', 2026, 2028, 37000, 67000, `Edit`),
  createData('Gingerbread', 2021, 2025, 160000, 49000, `Edit`),
  createData('Gingerbread', 2019, 2022, 160000, 49000, `Edit`),
  createData('Ice cream sandwich', 2018, 2020, 53200, 37000, `Edit`),
  createData('Cupcake', 2021, 2023, 37000, 67000, `Edit`),
];

export default function Contract({setAttemptToAddContract, setAttemptToEditContract}) {
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
              Contract
            </Typography>
          </Stack>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span onClick={()=>{setAttemptToAddContract("open")}} className='add-new-user' style={{marginBottom: "30px"}}><Button variant="contained" gutterbottom={`${true}`} component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nuevo Contract
          </Button></span>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Company</StyledTableCell>
                  <StyledTableCell align="right">Start Contract</StyledTableCell>
                  <StyledTableCell align="right">End Contract</StyledTableCell>
                  <StyledTableCell align="right">Import&nbsp;($)</StyledTableCell>
                  <StyledTableCell align="right">Export&nbsp;($)</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((row,i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {row.Company}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.startDate}</StyledTableCell>
                    <StyledTableCell align="right">{row.endDate}</StyledTableCell>
                    <StyledTableCell align="right">{row.imports}</StyledTableCell>
                    <StyledTableCell align="right">{row.exports}</StyledTableCell>
                    <StyledTableCell align="right">
                      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                      <span onClick={()=>{setAttemptToEditContract("open")}} className="action-edit">
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