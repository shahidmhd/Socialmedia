import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Box, Button, Typography } from '@mui/material';
import { getAllUsers, userHandle } from '../../api/adminRequest/Adminrequest';
import { useSelector } from 'react-redux';


export default function StickyHeadTable() {
  const [users, setUsers] = useState([]);
const [hanle,sethanle]=useState(true)
  const token = useSelector((state) => state.Authslice.adminToken);



  const handleUser = async (userId,token) => {
    const user = await userHandle(userId, token);
    if(user){
      console.log(user,"blockkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      sethanle(!hanle)
    }

  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getAllUsers(token);
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [hanle])


  return (
    <>
      <Typography mt={5} variant="h3" component="h1" align="center" gutterBottom>
        Users Page
      </Typography>

      <Box justifyContent={'center'} py={3} display={'flex'}>
        <TableContainer component={Paper} sx={{ maxWidth: '80vw', maxHeight: '40vh' }}>
          <Table stickyHeader>
            <TableHead >
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }}>userName</TableCell>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }}>Email</TableCell>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }}>phonenumber</TableCell>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }}>action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map((item) => {
                  return (
                    <TableRow key={item._id}>
                      <TableCell>{item.userName}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.number ? item.number : "0000000000"}</TableCell>
                      <TableCell>
                      {item.isBlocked ? (
                        <Button
                          variant='outlined'
                          color='primary'
                          onClick={() => handleUser(item._id)}
                        >
                          Reactivate
                        </Button>
                      ) : (
                        <Button
                          variant='outlined'
                          color='secondary'
                          onClick={() => handleUser(item._id)}
                        >
                          Deactivate
                        </Button>
                      )}
                      </TableCell>
                    </TableRow>
                  )
                })



              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>
  );
}
