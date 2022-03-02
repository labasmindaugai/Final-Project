import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, IconButton, TablePagination } from '@mui/material';
import SubscriberService from '../../services/subscriber-service';

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState();
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tablePage, setTablePage] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [tableOrder, setTableOrder] = useState(1);

  const getSubscribers = async (page, limit, order) => {
    setLoading(true);
    const res = await SubscriberService.getSubscribers(page + 1, limit, order);
    setSubscribers(res.subscribers);
    setSubscriberCount(res.subscriberCount);
    setLoading(false);
  };

  useEffect(() => {
    getSubscribers(tablePage, rowsPerPage, tableOrder);
  }, []);

  useEffect(() => {
    getSubscribers(tablePage, rowsPerPage, tableOrder);
  }, [tablePage, rowsPerPage, tableOrder]);

  const handleOrderChange = () => setTableOrder(tableOrder * -1);

  const handleChangePage = (_, newPage) => {
    setLoading(true);
    setTablePage(newPage);
    // getSubscribers(tablePage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLoading(true);
    setTablePage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
    // getSubscribers(tablePage, rowsPerPage);
  };

  return (
    <Box>
      <Table
        size="small"
        sx={{ alignItems: 'center' }}
        square="true"
      >
        <TableHead>
          <TableRow>
            <TableCell>Subscribers</TableCell>
            <TableCell align="right">
              Created At
              <IconButton onClick={handleOrderChange}>
                {
                  tableOrder === 1
                    ? <ArrowDropUpIcon />
                    : <ArrowDropDownIcon />
                }
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !loading && subscribers ? subscribers.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
            </TableRow>
          )) : (
            <TableRow key="Still Loading">
              <TableCell>Still Loading</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={subscriberCount}
        rowsPerPage={rowsPerPage}
        page={tablePage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Subscribers per page:"
      />
    </Box>
  );
};
export default Subscribers;
