import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import {Box, Button, Pagination, Typography } from '@mui/material';


export default function StickyHeadTable() {

  return (
    <>
      <Typography mt={5} variant="h3" component="h1" align="center" gutterBottom>
        Users Page
      </Typography>
      
      <Box justifyContent={'center'} py={3} display={'flex'}>
            <TableContainer component={Paper} sx={{maxWidth: '80vw', maxHeight: '40vh'}}>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{bgcolor:'black',color:'white'}}>userName</TableCell>
                            <TableCell sx={{bgcolor:'black',color:'white'}}>Email</TableCell>
                            <TableCell sx={{bgcolor:'black',color:'white'}}>phonenumber</TableCell>
                            <TableCell sx={{bgcolor:'black',color:'white'}}>total posts</TableCell>
                            <TableCell sx={{bgcolor:'black',color:'white'}}>Report</TableCell>
                            <TableCell sx={{bgcolor:'black',color:'white'}}>action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                                <TableRow>
                                    <TableCell>xdsvxdfvc</TableCell>
                                    <TableCell>tyht</TableCell>
                                    <TableCell>fdgfdgfd</TableCell>
                                    <TableCell>rfghftgfg</TableCell>
                                    <TableCell>fdgfdgfd</TableCell>
                                    <TableCell>
                                    <Button
                          variant='outlined'
                          color='secondary'       >
                          Deactivate
                        </Button>
                                    </TableCell>
                                </TableRow>
                         
                         
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
       
    </>
  );
}
