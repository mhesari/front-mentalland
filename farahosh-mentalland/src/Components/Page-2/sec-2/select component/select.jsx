import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {FormControl, FormHelperText } from '@mui/material';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




export default function MultipleSelectChip({id ,labelText ,  name ,value , onChange  , error, labelId  ,helperText , items , ...rest}) {
  const theme = useTheme();


  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  return (
    <>
      <FormControl sx={{ m: 1, width: {sm:"200px",xs:"200px"}, borderRadius:"40px"}} error={error} {...rest}>
        <InputLabel id={labelId}>{labelText}</InputLabel>
        <Select
        labelStyle={{ color: '#ff0000' }}
        
        sx={{color: "#818181",
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: '#02979D',
          borderRadius:"17px"
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#02979D',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#00888D',
        },
        '.MuiSvgIcon-root ': {
          fill: "#818181 !important",
        },
        width:{sx:"100px"}
      }}
          labelId={labelId}
          id={id}
          value={value}
          onChange={onChange}
          MenuProps={MenuProps}

        >
          {items.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{zIndex:"9999"}}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
}