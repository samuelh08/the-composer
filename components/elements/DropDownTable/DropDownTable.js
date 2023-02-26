import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { CollapsibleItem } from './components';

const DropDownTable = ({rows, ...props}) => {
  return (
    <Box paddingTop={5}>
      {rows.map((item, i) => (
        <Box key={i}  sx={{ width: '100%' }}>
          <CollapsibleItem item={item} isOpen={false}/>
        </Box>
      ))}
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default DropDownTable;
