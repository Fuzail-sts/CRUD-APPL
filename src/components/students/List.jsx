import React from "react";
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
import axios from "axios";

const List = ({ students, getStudentList }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/students/${id}`);

      getStudentList();
    } catch (error) {
      console.log("something went wrong");
    }
  };
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
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((value, i) => {
              console.log(value);
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{value.name}</TableCell>
                  <TableCell align="center">{value.email}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <Link to={`view/${value.id}`}>V</Link>
                    </IconButton>

                    <IconButton>
                      <Link to={`edit/${value.id}`}>E</Link>
                    </IconButton>

                    <IconButton
                      onClick={(e) => {
                        handleDelete(value.id);
                      }}
                    >D
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
