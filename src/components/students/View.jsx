import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
} from "@material-ui/core";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
  const { id } = useParams();
  console.log(id);
  const [views, setViews] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`http://localhost:3333/students/${id}`)
      .then((datas) => {
        setViews(datas.data);
        console.log(datas);
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  };
  return (
    <>
      <Box textAlign="center" mt={6}>
        <Typography variant="h4">STUDENT DETAIL</Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">FNAME</TableCell>
              <TableCell align="center">EMAIL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{views.id}</TableCell>
              <TableCell align="center">{views.fname}</TableCell>
              <TableCell align="center">{views.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="center">
        <Link to="/">
          <Button variant="contained">BACK TO HOME</Button>
        </Link>
      </Box>
    </>
  );
};

export default View;
