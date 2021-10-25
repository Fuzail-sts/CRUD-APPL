import React, { useState } from "react";
import _ from "lodash";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableContainer,
} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import axios from "axios";

const List = ({ students, getStudentList, setStudents }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/students/${id}`);

      getStudentList();
    } catch (error) {
      console.error("something went wrong");
    }
  };
  const [order, setOrder] = useState("desc");
  const sortingByName = (col) => {
    console.log(_.orderBy(students, ["name"], [order]));
    setStudents(_.orderBy(students, ["name"], [order]));
    if (order === "desc") {
      setOrder("asc");
    } else if (order === "asc") {
      setOrder("desc");
    }
  };

  const sortingById = () => {
    console.log(_.orderBy(students, ["id"], [order]));
    setStudents(_.orderBy(students, ["id"], [order]));
    if (order === "desc") {
      setOrder("asc");
    } else if (order === "asc") {
      setOrder("desc");
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
              <TableCell align="center">
                <button
                  onClick={(e) => {
                    sortingById("id");
                  }}
                >
                  NO
                </button>
              </TableCell>
              <TableCell align="center">
                <button
                  onClick={(e) => {
                    sortingByName("name");
                  }}
                >
                  NAME
                </button>
              </TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((value, i) => {
                return (
                  <TableRow key={i} data-testid="item">
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
                      >
                        D
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default List;
