import React,{useState} from "react";
import { useEffect } from "react";


export default function Memes() {
  
  let[meme,setmeme]=useState({
    topText:"",
    bottomText:"",
    randomImage:""
  })
  let [allMemes,setAllMemes]=useState([])
  useEffect(()=>{
    async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
  }
  getMemes()
  },[])

  function getimg(){
    
    let random=Math.floor(Math.random()*allMemes.length)
    let urldom=allMemes[random].url
    setmeme({topText:meme.topText,bottomText:meme.bottomText,randomImage:urldom})
  }
  function handle(event){
    let {name,value}=event.target
    setmeme(prev=>({
      ...prev,
      [name]:value

    }))
  }

  return (
    <main>
        <div className="form">
            <input type="text" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handle}/>
            <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handle}/>
            <button className="form--button" onClick={getimg}>Get a new meme image</button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--img"/>
          <h2 className="meme-top meme-text">{meme.topText}</h2>
          <h2 className="meme-bot meme-text">{meme.bottomText}</h2>
        </div>
    </main>
  )
}