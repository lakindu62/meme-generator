
import React, { useState, useEffect } from "react"
import Navbar from "./components/navBar"
import Controls from "./components/inputAndControl"
import MemeImage from "./components/meme"
import Footer from "./components/footer"





export default function App() {

 


  const [meme, setMeme] = useState(
    {
      topText: '',
      bottomText: '',
      randomImage:"http://i.imgflip.com/1bij.jpg"
    }
  )



  

  useEffect(()=>{
    (fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemesData(data.data.memes)))
  },[])

  const [memesData , setMemesData] = useState([])
  


  console.log(memesData) // Add this line

function getMeme(){
  const randomNumber =  Math.floor(Math.random() * memesData.length)
  const randomMemeUrl = memesData[randomNumber].url
  setMeme(p =>({
    ...p,
    randomImage:randomMemeUrl
  }))
}




  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }




  return (
    <div>
      <Navbar />
      <Controls
        handleChange={handleChange}
        value={{ input01: meme.topText, input02: meme.bottomText }}
        handleClick={getMeme}
      />
      <MemeImage
        value={{ input01: meme.topText, input02: meme.bottomText }}
        image={meme.randomImage}
      />
      <Footer />

    </div>
  )
}

