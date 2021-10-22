import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    oldData();
  }, []);

  const oldData = () => {
    axios
      .get(`http://localhost:3333/students/${id}`)
      .then((show) => {
        setData(show.data);
      })
      .catch((error) => {
        console.error("something went wrong");
      });
  };

  const onTextChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, data);
      setData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("something went wrong");
    }
  };
  
  return (
    <>
      <Box textAlign="center" m={3}>
        <Typography variant="h3">CRUD STUDENT APPLICATION </Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" m={6}>
            <Typography variant="h4">EDIT STUDENT</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="id"
                  variant="outlined"
                  label="id"
                  required
                  fullWidth
                  id="id"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  value={data.name}
                  onChange={(e) => {
                    onTextChange(e);
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="EMAIL"
                  value={data.email}
                  onChange={(e) => {
                    onTextChange(e);
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
                  handleSubmitEdit(e);
                }}
              >
                ADD
              </Button>
            </Box>
          </form>
          <Box textAlign="center">
            <Link to="/">
              <Button variant="contained">BACK TO HOME</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
