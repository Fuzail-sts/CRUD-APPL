import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
const Edit = () => {
  const { id } = useParams();
  const [old, setOld] = useState([])
  useEffect(() => {
   oldData()
  }, [])
  const oldData = async()=>{
    try{
      const show = await axios.get(`http://localhost:3333/students/${id}`)
      setOld(show.data)
    }catch(error){
      console.log('something went wrong')
    }
  }
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
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fname"
                  label="fname"
                  value={old.fname}
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
                  value={old.email}
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
