import React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  

function WindowTable() {
    let today = new Date();

    const [val, setVal] = useState('');
    const [comment, setComment] = useState('');
    const [rows, setRows] = useState([
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
      ]);
    const setCommentInfo = event => {
        setComment(event.target.value);
    };

    const setValInfo = event => {
        setVal(event.target.value);
    };

    function getDataFromFrom () {
        if ((val !== '') && (comment !== '')){
            let date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
            let newRows = [...rows];
            newRows.push(createData(val, date, 'Admin', comment));
            setRows(newRows);
            setVal('');
            setComment('');
        }
    }
  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell align="center" sx={{ minWidth: 500 }}>Date</TableCell>
            <TableCell align="center" sx={{ minWidth: 500 }}>User</TableCell>
            <TableCell align="center" sx={{ minWidth: 500 }}>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
                      <TableRow>
                <TableCell ><input onChange={setValInfo} value={val} type="number" name="value" /></TableCell>
                <TableCell >{today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate()}</TableCell>
                <TableCell >Admin</TableCell>
                <TableCell ><input onChange={setCommentInfo} value={comment} type="text" name="comment" /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={getDataFromFrom}>Add</Button>
    </>
  )
}

export default WindowTable