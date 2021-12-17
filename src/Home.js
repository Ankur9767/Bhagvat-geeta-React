import React,{ useEffect, useState } from 'react'
import Axios from 'axios';
import "./Home.css"
import Header from './Header';

const Home = () => {
    
const [chapter, setChapter]= useState();
const [user, setUser] = useState([]);
const [slok,setSlok] =useState();


var options = {
    method: 'GET',
    url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`,
    // params:'18' ,
    headers: {
      'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
      'x-rapidapi-key': 'ebeff21c32msh98bcf38878851b5p18ac95jsn01f308b87628'
    },
  };
  console.log(chapter);
  
  
async function getChpters(){
    
    Axios.request(options).then(function (response) {
        console.log(response.data);
        setUser(response.data);
    }).catch(function (error) {
        console.error(error);
    });


   
}
const onsubmit =(e)=>{
    e.preventDefault();
    getChpters();
}

    return (
        <div className="Home">
        <Header />
        <form className='chapter_form' onClick={onsubmit}>
        <input className="chapter_inp" type="number" value={chapter}  
        placeholder="Enter chapter's number from 1 to 18"
        onChange={(event)=>setChapter(event.target.value)} />           
               
          
       
       
      
       
       <button className="submit_button" >Submit</button> 
        </form> 
        <div className='chapter'>
        { user.map((use)=>{
        return(
        <div>
        {chapter==use.chapter_number &&
           <div key={use.id} className="chapters"> 
           <h1 className="heading">{use.slug}</h1>                    
            <p className="slok">{use.text}</p>
            <div className='summary'>
            <p className="translation">{use["translations"]["0"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["0"]["author_name"]}</p>
            <p className="translation">{use["translations"]["1"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["1"]["author_name"]}</p>
            <p className="translation">{use["translations"]["2"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["2"]["author_name"]}</p>
            <p className="translation">{use["translations"]["3"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["3"]["author_name"]}</p>
            <p className="translation">{use["translations"]["4"]["description"]}</p>
            <p className="author"> Written by {use["translations"]["6"]["author_name"]}</p>
            </div>
            

            </div>
            

        
        
        }
       
        </div>
        )
        })
        }

        </div>
        </div>
        
        
        
            
        
    )
}

export default Home
