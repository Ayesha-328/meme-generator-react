import React from 'react'
import "./styles.css"
// import memesData from "../data"
import { useState, useEffect } from 'react';

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/23ls.jpg",
  })

  const [allmemes, setAllMemes] = useState([]);


  function getmemeImage() {
    let random = Math.floor(Math.random() * 100)
    let url = allmemes[random].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  useEffect(function () {
    console.log("Use Effect ran")
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])
  return (
    <div className="form">
      <div className="input-container">
        <div className="entry">
          <label className='entry-label' htmlFor="top-text">Top text</label>
          <input
            className="entry-input-box"
            type="text"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
            id="top-text" />
        </div>
        <div className="entry">
          <label className='entry-label' htmlFor="bottom-text">Bottom text</label>
          <input
            className="entry-input-box"
            type="text"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
            id="bottom-text" />
        </div>
      </div>

      <button className="btn" onClick={getmemeImage}>Get a new meme image
        <span>🖼</span>
      </button>

      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="meme" />
        <h2 className="meme-text meme-text-top">{meme.topText}</h2>
        <h2 className="meme-text meme-text-bottom">{meme.bottomText}</h2>

      </div>

    </div>


  )
}

export default Meme