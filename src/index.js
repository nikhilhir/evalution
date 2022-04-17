// import React from 'react';
// import  ReactDOM  from 'react-dom';

// const fname= " Nikhil"
 
// const currentdate = new Date().toLocaleDateString();

// const currenttime =  new Date().toLocaleTimeString()

// ReactDOM.render(
// <>
//   <h1>Hello, My Name is {fname}</h1>
//   <h2> Curent Date is = {currentdate}</h2>
//   <h2> Curent Time is ={currenttime} </h2>


//   </>,

//   document.getElementById("root")

// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"

// const name ="Nilesh";
// const img1= "https://picsum.photos/200/300";
// const img2= "https://picsum.photos/201/300"
// const img3= "https://picsum.photos/202/300"


// const link= "https://www.masaischool.com"


// ReactDOM.render(
//   <>
//   {/* //global attribute constent contentEditable
//   // img creation glllecry ancholr tag */}
//   {/* <h1 contentEditable="true">My Name is {name}</h1> */}
//   <h1 className='heading'>My Name is {name}</h1>
//   <div className='imgurl'>
//   <img src={img1} alt="random images" />
//   <img src={img2} alt="random images" />
  
//   <a href={link} target="_kahibii"><img src={img3} alt="random images" /></a>
//   </div>
//   </>,
//   document.getElementById("root")
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'

// //year,month,day,hours
//  let currDate=new Date(2022,4,17,13).getHours()
//  let greeting="";
//  const cssStyle={};

//  if(currDate >= 1 && currDate<12){
//       greeting="Good Morning";
//       cssStyle.color='green';
// }else if(currDate >=12 && currDate < 19){
//      greeting="Good Afternoon"
//      cssStyle.color='orange';
//   }else{
//     greeting='Good Night'
//     cssStyle.color='black';
//   }

// ReactDOM.render(
//   <>
//   <div>

//   <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>

//   </div>

//   </>,
//   document.getElementById("root")
// )

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Heading from './component/Heading'
// import Para from './component/Para'
// import List from './component/List'


ReactDOM.render(
  <>
  {/* <h1>My name is Nikhil</h1> */}
  <App/>
  {/* <Heading/>
  <Para/>
  <List/> */}
  {/* <p>This is my machin</p> */}
  {/* <ol>
    <li>first</li>
    <li>Second</li>
    <li>Third</li>
    <li>Fourth</li>
  </ol> */}

  </>,
  document.getElementById('root')
)