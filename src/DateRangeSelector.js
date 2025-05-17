import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function DateRangeSelector() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Select Date Range
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row' }}>
          <DatePicker
            label="From Date"
            value={fromDate}
            onChange={setFromDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="To Date"
            value={toDate}
            onChange={setToDate}
            minDate={fromDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        {fromDate && toDate && (
          <Typography sx={{ mt: 2 }}>
            Selected Range: {fromDate.format('YYYY-MM-DD')} to {toDate.format('YYYY-MM-DD')}
          </Typography>
        )}
      </Box>
    </LocalizationProvider>
  );
}

export default DateRangeSelector;
