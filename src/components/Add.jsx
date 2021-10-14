import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";
import List from "./students/List";
import axios from "axios";
const Add = () => {
  const [addData, setAddData] = useState({
    name: "",
    email: "",
  });
  const onTextFieldChange = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };
  console.log(addData);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3333/students/`, addData)
      .then(() => {
        setAddData({
          name: "",
          email: "",
        });
        getStudentList();
      })
      .catch((error) => {
        console.error("something went wrong");
      });
  };
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudentList();
  }, []);
  const getStudentList = () => {
    axios
      .get("http://localhost:3333/students")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("something went wrong");
      });
  };

  return (
    <>
      <Box textAlign="center" mt={3}>
        <Typography variant="h3">CRUD STUDENT APPLICATION </Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" mt={6}>
            <Typography variant="h4">ADD STUDENT</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  label="NAME"
                  required
                  fullWidth
                  id="name"
                  value={addData.name}
                  onChange={(e) => {
                    onTextFieldChange(e);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="EMAIL"
                  value={addData.email}
                  onChange={(e) => {
                    onTextFieldChange(e);
                  }}
                ></TextField>
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                required
                fullWidth
                id="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                ADD
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <List students={students} getStudentList={getStudentList} />
        </Grid>
      </Grid>
    </>
  );
};

export default Add;
