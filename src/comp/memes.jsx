import React,{useState} from "react";

import MemesData from "./memesData"
export default function Memes() {
  
  let[meme,setmeme]=useState({topText:"",bottomText:"",randomImage:""})
  let [allMemeImages,setmemeImages]=useState(MemesData)

  function getimg(){
    const marray=allMemeImages.data.memes
    let random=Math.floor(Math.random()*marray.length)
    let urldom=marray[random].url
    setmeme({topText:meme.topText,bottomText:meme.bottomText,randomImage:urldom})
  }

  return (
    <main>
        <div className="form">
            <input type="text" className="form--input" placeholder="text"/>
            <input type="text" className="form--input" placeholder="text"/>
            <button className="form--button" onClick={getimg}>Get a new meme image 🖼</button>
        </div>
        <img src={meme.randomImage} className="meme--img"/>
    </main>
  )
}