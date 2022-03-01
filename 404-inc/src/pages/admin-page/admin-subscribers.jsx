import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import SubscriberService from '../../services/subscriber-service';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return {
//     id, date, name, shipTo, paymentMethod, amount,
//   };

// function preventDefault(event) {
//   event.preventDefault();
// }

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState();
  const [loading, setLoading] = useState(false);
  // const [subscriberCount, setSubscriberCount] = useState();
  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await SubscriberService.getSubscribers();
      setSubscribers(res.subscribers);
      // setSubscriberCount(res.subscriberCount);
      setLoading(false);
    })();
  }, []);

  return (
    <Table
      size="small"
      sx={{ alignItems: 'center' }}
    >
      <TableHead>
        <TableRow>
          <TableCell>Subscribers</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { !loading && subscribers ? subscribers.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        )) : (
          <TableRow key="Still Loading">
            <TableCell>Still Loading</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default Subscribers;
