import React from "react";
//import Memedata from "./Memedata"
export default function Meme() {

    const [memeimage,setmemeimage]=React.useState("")

    const[meme,setmeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randomimage:"https://i.imgflip.com/46e43q.png",
    })
    //const [allmemeimages,setallmemeimages]=React.useState(Memedata) 
    const [allmemeimages,setallmemeimages]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallmemeimages(data.data.memes))
    })

    function getmemeimg(){
        //const memearr = Memedata.data.memes
        const randomno = Math.floor(Math.random() * allmemeimages.length)
        const url=allmemeimages[randomno].url
        setmeme(prevmeme=>({
            ...prevmeme,
            randomimage:url
        }))
    }

    function handleChange(event){
        const {name,value}=event.target
        setmeme(prevmeme=>({
            ...prevmeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomtext"
                    value={meme.bottomtext}
                    onChange={handleChange}
                />
                <button className="form--button"
                    onClick={getmemeimg}
                >Get a new meme image</button>
            </div>
            <div className="meme">
            <img src={meme.randomimage} className="meme--image"/>
            <h2 className="meme--textt">{meme.toptext}</h2>
            <h2 className="meme--textb">{meme.bottomtext}</h2>
            </div>
        </main>
    )
}