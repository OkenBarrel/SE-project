import {Button,DialogContent,Grid,Typography,TextField,Box} from '@mui/material';
import React,{Component, useEffect, useState} from "react";
import CreateBookPage from './CreateBookPage';
import Book from "./Book";
import UpdateBookPage from './UpdateBookPage';
import LoginPage from './LoginPage';
import RegisterPage from "./RegisterPage";
import SearchHome from './SearchHome';
import NavigateButton from './Navigate';

import SearchResults from './SearchResults';
import HelloComponent from './HelloComponent';
import { getCookie,getCsrfToken } from './CSRFToken';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import UserPage from "./UserPage";

async function handleLogout(){
  const csrftoken=getCsrfToken();

  const requestOption={

    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken
    },
    credentials: 'include',
  }

  let response=await fetch("http://localhost:8000/api/logout",requestOption);
  if(!response.ok){
    console.log("log out failed");
    return;
  }
  console.log("log out success");

}

function HomePage() {

  useEffect(()=>{
    getLog();


  },[]);
  const getLog=async ()=>{
    let response=await fetch("http://localhost:8000/api/is-loggedin",{
      credentials:'include'
    });
    

  }
  
    function renderHomePage() {
      return (
        <div>
          <Grid container spacing={2} direction={'column'}>
            <Grid item>
              <Grid container spacing={2} direction="row" justifyContent={'center'}>
                <Grid item margin={1.5} xs={7} sm={7} md={7} lg={7} xl={7}>
                  <Box display="flex" flexDirection="row" justifyContent="flex-start">
                    <Button variant='contained' to="/create" component={Link}>创建书籍</Button>
                    {!getCookie('user_id')&&(<Button variant='contained' to="/login" component={Link}>登录</Button>)}
                    <Button variant='contained' to="/register" component={Link}>注册</Button>
                    <Button variant='contained' to={`/user/${getCookie('user_id')}`} component={Link}>用户信息</Button>
                    <Button variant='contained' to="/search" component={Link}>搜索</Button>
                    <Button variant='contained' onClick={handleLogout}>退出登录</Button>
                  </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} justifyContent="flex-end">
                  <Box display="flex" justifyContent="flex-end">
                    <HelloComponent />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                border="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="40vh"
                width="100%"
                sx={{textAligh:'right'}}
              >
                  <Box width="80%" alignItems="left">
                      <NavigateButton />
                  </Box>
                  <Box width="80%">
                      <SearchHome />
                  </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      );
    }
  
    return (
      renderHomePage()
    );
  }
  
  export default HomePage;


