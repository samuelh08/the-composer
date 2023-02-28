import Box from '@mui/material/Box';

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
