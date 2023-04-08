import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const todoTitle = "Call Family";

const date = new Date();

const year1 = date.getFullYear();
const month1 = date.getMonth();
const day1 = date.getDay();

// const headingStyle = {
//   backgroundColor: "purple",
//   color: "red",
//   fontSize: "3rem"
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < div >
  <
  h1 className = 'headingStyle textStyle' > Bismillahir Rahmanir Rahim < /h1>  

  <
  h4 > {

    todoTitle

  } < /h4>

  <
  h1 > Alhamdulillah < /h1> <
  p > {
    new Date().getFullYear()
  } < /p>

  <
  p > {
    day1 + " /" + month1 + " /" + year1
  } < /p> < /
  div >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals