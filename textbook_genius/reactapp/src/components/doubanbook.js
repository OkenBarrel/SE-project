// import './App.css';
import {Button,TextField} from '@mui/material';
import { useState,useEffect } from 'react';

function Texbook(props) {

  const [count,setCount]=useState(0);
  const[isbn,setIsbn]=useState(0);
  const[info,setInfo]=useState("");
  const[cover,setCover]=useState("");
  // const[teacher,setTeacher]=useState("");
  // const[couserName,setCourseName]=useState("");

  async function handleSearchISBN(){
    let response= await fetch("http://8.130.18.80:80/api/get-douban-book"+"?isbn="+isbn)
    console.log(await response.json().then((data)=>{setInfo(data.title);
                                                    }))
  }
  return (
    <div className="Bpp">
      <title>you clicked {count} times</title>
      <h2>hi, {props.name}</h2>
      <Button onClick={()=>setCount(count+1)} variant="contained">ckick me</Button>
      <p>you ve clicked {count} times</p>
      <TextField label={"输入ISBN号"} onChange={(e)=>{setIsbn(e.target.value)}}></TextField>
      <Button variant="contained" color="secondary" onClick={handleSearchISBN}>搜索</Button>
      <p>{info}</p>
      <img src={cover}></img>
    </div>
  );
}

export default Texbook;
