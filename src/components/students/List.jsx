import React  from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  TableContainer,
} from "@material-ui/core";
import { Link } from "react-router-dom";


const List = ({students}) => {
  
  return (
    <>
    
      <Box textAlign="center" mt={6}>
        <Typography variant="h4">STUDENT LIST</Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">NO</TableCell>
              <TableCell align="center">FNAME</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((value, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{value.fname}</TableCell>
                  <TableCell align="center">{value.email}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <Link to={`view/${value.id}`}>V</Link>
                    </IconButton>

                    <IconButton>
                      <Link to={`edit/${value.id}`}>E</Link>
                    </IconButton>

                    <IconButton>
                      <Link to="d">D</Link>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
