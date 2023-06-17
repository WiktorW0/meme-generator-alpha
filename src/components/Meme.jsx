import React from 'react'


function Form(){
  const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImg:"http://i.imgflip.com/1bij.jpg"
  })

  const [allMeme,setAllMeme]=React.useState([])
  
  function handleChange(event){
    const {name,value}=event.target
    setMeme(prevMeme=>{
      return{
        ...prevMeme,
        [name]:value
      } 
    })
  }
  
  function randomMeme(){
    let randomNum=Math.floor(Math.random()*allMeme.length)
    let memeURL=allMeme[randomNum].url
    setMeme(prevMeme=>{
      return{
        ...prevMeme,
        randomImg:memeURL
      }
    })
  }

  React.useEffect(function() {
    console.log("Effect ran")
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMeme(data.data.memes))
  },[])


  return(
    <main className='form--main'>
      <div className='form--container'>
        <input 
          type="text" 
          className='form--Text' 
          placeholder='Top Text'
          onChange={handleChange}
          name='topText'
          value={meme.topText}
        />
        <input 
          type="text" 
          className='form--Text' 
          placeholder='Bottom Text'
          onChange={handleChange}
          name='bottomText'
          value={meme.bottomText}
        />
        <button className="form--generateBtn" onClick={randomMeme}>Get a new meme image 🖼️</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImg} alt="meme" className='meme--image'/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      
    </main>
  )
}


export default Form