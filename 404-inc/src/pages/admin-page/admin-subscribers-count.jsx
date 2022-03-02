import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import SubscriberService from '../../services/subscriber-service';

const SubscribersCount = () => {
  const [loading, setLoading] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState();
  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await SubscriberService.getSubscribers();
      setSubscriberCount(res.subscriberCount);
      setLoading(false);
    })();
  }, []);

  return (
    <Box
      size="small"
      sx={{
        textAlign: 'center',
      }}
    >
      {' '}
      <Typography>
        Subscribers Count
      </Typography>
      <Typography sx={{ fontSize: '10.27rem' }}>
        {!loading && subscriberCount}
      </Typography>
    </Box>
  );
};
export default SubscribersCount;
