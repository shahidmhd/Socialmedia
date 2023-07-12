import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import {Typography } from '@mui/material';


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sample data, replace it with your actual data
  const rows = [
    { name: 'John', email: 'john@example.com', gender: 'Male', ipAddress: '192.168.0.1' },
    { name: 'Jane', email: 'jane@example.com', gender: 'Female', ipAddress: '192.168.0.2' },
    { name: 'John', email: 'john@example.com', gender: 'Male', ipAddress: '192.168.0.1' },
    { name: 'Jane', email: 'jane@example.com', gender: 'Female', ipAddress: '192.168.0.2' },

    // Add more data here
  ];

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <Typography mt={5} variant="h3" component="h1" align="center" gutterBottom>
        Users Page
      </Typography>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bolder' }}>Name</TableCell>
                <TableCell style={{ fontWeight: 'bolder' }}>Email</TableCell>
                <TableCell style={{ fontWeight: 'bolder' }}>Gender</TableCell>
                <TableCell style={{ fontWeight: 'bolder' }}>IP Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.ipAddress}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={4} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
