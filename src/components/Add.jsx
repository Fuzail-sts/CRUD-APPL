import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";
import List from "./students/List";
import axios from "axios";
const Add = () => {
  const [adds, setAdds] = useState({
    fname: "",
    email: "",
  });
  const onTextFieldChange = (e) => {
    setAdds({ ...adds, [e.target.name]: e.target.value });
  };
  console.log(adds);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/students/`, adds);
      setAdds({
        fname: "",
        email: "",
      });
    } catch (error) {
      console.error("something went wrong");
    }
  };
  const [students, setStudents] = useState([]);
  useEffect(() => {
    studentData();
  }, []);
  const studentData = async () => {
    try {
      const studentsT = await axios.get("http://localhost:3333/students");
      console.log(studentsT.data);
      setStudents(studentsT.data);
    } catch (error) {
      console.error("something went wrong");
    }
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
                  name="fname"
                  variant="outlined"
                  label="FNAME"
                  required
                  fullWidth
                  id="fname"
                  value = {adds.fname}
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
                  value={adds.email}
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
          <List students={students} />
        </Grid>
      </Grid>
    </>
  );
};

export default Add;
