import * as React from 'react';
import uuid from 'react-uuid'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import text from '../testData.json';
import TableHeader from './TableHeader';
import PopupWindow from './PopupWindow';

let regions = Object.keys(text);

export default function ColumnGroupingTable() {



  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
            <TableHeader/>
          <TableBody>
              {regions.map((item, index) =>{
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={regions[index]}>
                    <TableCell align='center'>{item}</TableCell>
                    {text[item].G[2017]?<><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2017].XX.value}</PopupWindow></TableCell><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2017].YY.value}</PopupWindow></TableCell><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2017].ZZ.value}</PopupWindow></TableCell></>:<><TableCell/><TableCell/><TableCell/></>}
                    {text[item].G[2018]?<><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2018].XX.value}</PopupWindow></TableCell><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2018].YY.value}</PopupWindow></TableCell><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2018].ZZ.value}</PopupWindow></TableCell></>:<><TableCell/><TableCell/><TableCell/></>}
                    {text[item].G[2019]?<><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2019].XX.value}</PopupWindow></TableCell><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2019].YY.value}</PopupWindow></TableCell><TableCell key={uuid()} align='center'><PopupWindow>{text[item].G[2019].ZZ.value}</PopupWindow></TableCell></>:<><TableCell/><TableCell/><TableCell/></>}
                  </TableRow>
                  )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <PopupWindow/>
    </Paper>
  );
}