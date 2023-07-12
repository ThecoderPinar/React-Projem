import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import gradient from '../../../images/gradient.jpg'
import axios from 'axios';

import Registration from './Registration';
import UserLogin from './UserLogin';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRegister = () => {
    const userData = {
      username: 'exampleUsername',
      email: 'example@example.com',
      password: 'examplePassword'
    };

    axios
      .post('http://localhost:5000/register', userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    const loginData = {
      email: 'example@example.com',
      password: 'examplePassword'
    };

    axios
      .post('http://localhost:5000/login', loginData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Grid container sx={{ height: '90vh' }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${gradient})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', sm: 'block' },
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ mx: 3, height: 530 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                  <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                  <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin onLogin={handleLogin} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration onRegister={handleRegister} />
              </TabPanel>
            </Box>
            <Box textAlign='center' sx={{ mt: 2 }}>
              <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
                İncelediğiniz İçin teşekkürler...
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
