import React from "react";
import Grid from "@mui/material/Grid";


function Layout({ content }) {
  return (
    <Grid container>
      <Grid item xs></Grid>
      <Grid item xs={8} sx={{padding:"0 20px"}}>
        {content}
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}

export default Layout;
