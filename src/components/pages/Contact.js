import { Grid } from "@mui/material";

const Contact = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Contact Page</h1>
        <hr />
        <h2>Kişisel Bilgilerim</h2>
        <p><strong>Adınız:</strong> Pınar</p>
      <p><strong>Soyadınız:</strong> Topuz</p>
      <p><strong>Projenin GitHub Linki:</strong> <a href="https://github.com/ThecoderPinar/React-RegLogt">GitHub</a></p>

      </Grid>
    </Grid>
  </>;
};

export default Contact;
