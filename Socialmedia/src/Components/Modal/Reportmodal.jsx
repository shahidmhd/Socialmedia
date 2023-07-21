import { MenuItem, Popover } from '@mui/material'
import React from 'react'

const Reportmodal = ({id,open,setAnchorEl,anchorEl}) => {
    const handleClosePopover = () => {
        setAnchorEl(null);
      };
  return (
   <>
   <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClosePopover}>Edit</MenuItem>
        <MenuItem onClick={handleClosePopover}>Delete</MenuItem>
      </Popover>

   </>
  )
}

export default Reportmodal

