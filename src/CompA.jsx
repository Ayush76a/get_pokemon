import React, { useEffect, useState } from 'react'
import axios from "axios";

const CompA = () => {

    const [num, setNum]=useState(1);
    const [name, setName]=useState();
    const [moves, setMoves]=useState();
    const [type, setType]=useState();
    const [img, setImg]=useState();

    useEffect(()=>{
        // alert("Hi");

        async function getData(){
            //   USE   ->     axios.get("url")
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            console.log(res);
            // since the "moves" element recived from the pokemion api is an array can't directly access the using 
            // (res.data.moves);
            setMoves(res.data.moves.length);
            setImg(res.data.sprites.other.dream_world.front_default);
            setType(res.data.types[0].type.name);
        } 
        getData();
    });

  return (<>

     <input type='number' placeholder='Enter Pokemon No.'
     ></input>
     <button onClick={()=>{
        setNum( document.querySelector('input').value);
     }}>☑️</button>

    <h1>Pokemon no. :<span style={{color:'red'}}>  {num}  </span></h1>
    <img className="IMG" src={img}></img>
    <h1>Pokemon name : <span style={{color:'red'}}>  {name}  </span></h1>
    <h1>Pokemon type :<span style={{color:'red'}}>  {type}   </span></h1>
    <h1>Moves availble :<span style={{color:'red'}}>  {moves}  </span></h1>
    </>
  )
}

export default CompA