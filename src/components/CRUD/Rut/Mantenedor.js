/* eslint-disable react/prop-types */
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Page from '../../Page';
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import SearchNotFound from '../../SearchNotFound';
import { ListHead } from '../ListHeader';
import { ListToolbar } from '../ListToolbar';
import { MoreMenu } from '../ListMoreMenu';
// mock

// ----------------------------------------------------------------------
const Lists = [
  {
    item1: "13743933-6", 
    item2: "Muñoz", 
    item3: "Ortiz", 
    item4: "Marco",
    item5: "Electricista",
    item6: "CAPITAL",
    item7: "FONASA",
    status:"Active"
  }
];

const TABLE_HEAD = [
  { id: 'item1', label: 'Dirección', alignCenter: true },
  { id: 'item2', label: 'Número', alignCenter: true },
  { id: 'item3', label: 'Comuna', alignCenter: false },
  { id: 'item4', label: 'Teléfono', alignCenter: false },
  { id: 'item5', label: 'Fax', alignCenter: false },
  { id: 'item6', label: 'Observaciones', alignCenter: false },
  { id: 'item7', label: 'Activa', alignCenter: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.item1.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}


export default function Mantenedor({setAttemptToAdd, setAttemptToEdit}) {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('item1');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = Lists.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Lists.length) : 0;

  const filteredLists = applySortFilter(Lists, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredLists.length === 0;
  return (
    <>
      <Page title="Personal">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              MANTENEDOR DE DIRECCIONES
            </Typography>
          </Stack>

          <Card>
            <ListToolbar setAttemptToAdd={setAttemptToAdd} numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <ListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={Lists.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredLists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,i) => {
                      const { item1, item2, item3, item4, item5, item6, item7, status } = row;
                      const isItemSelected = selected.indexOf(item1) !== -1;

                      return (
                        <TableRow
                          hover
                          key={i}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          {/* <TableCell padding="checkbox">
                            <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, name)} />
                          </TableCell> */}
                          <TableCell component="th" scope="row">
                            <RouterLink to='Rut'>
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography variant="subtitle2" noWrap sx={{ color:'text.secondary' }}>
                                  {item1}
                                </Typography>
                              </Stack>
                            </RouterLink>
                          </TableCell>
                          <TableCell align="left" sx={{ color:'text.secondary' }}>{item2}</TableCell>
                          <TableCell align="left" sx={{ color:'text.secondary' }}>{item3}</TableCell>
                          <TableCell align="left" sx={{ color:'text.secondary' }}>{item4}</TableCell>
                          <TableCell align="left" sx={{ color:'text.secondary' }}>{item5}</TableCell>
                          <TableCell align="left" sx={{ color:'text.secondary' }}>{item6}</TableCell>
                          <TableCell align="left" sx={{ color:'text.secondary' }}>{item7}</TableCell>
                          <TableCell align="left">
                            <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                              {sentenceCase(status)}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <MoreMenu setAttemptToEdit={setAttemptToEdit} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={Lists.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      </Page>
    </>
  );
}
