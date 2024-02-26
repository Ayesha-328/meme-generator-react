import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import {useState,useEffect} from 'react';
import Contact from './components/Contact';




function App() {
  // const [things,setThing]=useState(["Thing 1","Thing 2"]);
  
  // function addthing(){
  //   setThing(prevThingArray=>[...prevThingArray,`Thing ${things.length+1}`])
  // }
  
  // const thingElement=things.map(thing=>{
  //   return <p key={thing}>{thing}</p>
  // })


  // counter exercise
  // const [count,setCount]=useState(1);
  
  // console.log("component rendered")

  // function handleAdd(){
  //   setCount(prevCount=> prevCount+1);
  // }
  // function handleSub(){
  //   setCount(prevCount=> prevCount-1);
  // }
  // useEffect(function(){
  //   console.log("Effect Function ran")
  // },[count])

  // ************* API get request *************
  // const [starWarsData,setStarWarsData]=useState({})

  
  // side effect 
  // useEffect(function(){
  //   console.log("use effect ran")
  //   fetch(`https://swapi.dev/api/people/${count}/`)
  //   .then(res => res.json())
  //   .then(data=> setStarWarsData(data))

  // },[count])

  return (
    <>
    <Header />
    <Meme />

    {/* Things exercise Props & State  */}
    {/* <button onClick={addthing}>add item</button>

    {thingElement} */}

    {/* contact exercise  */}
    {/* <Contact /> */}


    {/* counter exercise  */}
    {/* <div>
      <Contact number={count}/>
      <button className="add" onClick={handleAdd}>Get Next Character</button> */}
      {/* <button className="sub" onClick={handleSub}>-</button>   */}
    {/* </div> */}
    
    {/**************** API get request *******************/}
    {/* <div>
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
    </div> */}

    

    </>
  );
}

export default App;


  // Challege 
  function greet(name){
    const date=new Date();
    const hours=date.getHours() ;

    if(hours>=4 && hours<11){
      return "Good Morning "+ name;
    }
    else if(hours>=12 && hours<17){
      return "Good Afternoon "+ name
    }
    else if(hours>=17 && hours<20){
      return "Good Evening "+ name
    }
    else {
      return "Good Night "+ name;
    }
    }

  console.log(greet("Ayesha"));
