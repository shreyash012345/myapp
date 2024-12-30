import React from "react";
import Card from "./Card";
import sData from "./sData";
const profile=sData;

function App(){
    return (
     <>
     {/* <Card 
    //  {...profile[0]}
  
    //  img1 = {profile[0].img1}
    //  name1= {profile[0].name1}
    //  dis  = {profile[0].dis}
    //  vid  = {profile[0].vid}
     />
  
  <Card 
  // {...profile[1]}
  
  
    //  img1 = {profile[1].img1}
    //  name1= {profile[1].name1}
    //  dis  = {profile[1].dis}
    //  vid  = {profile[1].vid}
     />
     <Card 
    //  {...profile[2]}
  
  
    //  img1 = {profile[2].img1}
    //  name1= {profile[2].name1}
    //  dis  = {profile[2].dis}
    //  vid  = {profile[2].vid}
     /> */}
  
     {profile.map(p=>{
  return <Card {...p}/>
  })}
      
  </>
    );
  }
  export default App;