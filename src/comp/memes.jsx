import React,{useState} from "react";

import MemesData from "./memesData"
export default function Memes() {
  let [mimg,setmimg]=useState("")

  function getimg(){
    const marray=MemesData.data.memes
    let random=Math.floor(Math.random()*marray.length)
    let urldom=marray[random].url
    setmimg(urldom)
  }

  return (
    <main>
        <div className="form">
            <input type="text" className="form--input" placeholder="text"/>
            <input type="text" className="form--input" placeholder="text"/>
            <button className="form--button" onClick={getimg}>Get a new meme image 🖼</button>
        </div>
        <img src={mimg} className="meme--img"/>
    </main>
  )
}