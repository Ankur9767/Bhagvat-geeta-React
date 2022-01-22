import React,{ useEffect, useState } from 'react'
import Axios from 'axios';
import "./Home.css"
import Header from './Header';
import bgvideo from './media/bg.mp4';
import { useParams } from 'react-router-dom';


const Home = () => {
    
const { chapter } =useParams();
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
 useEffect(() => {
        getChpters();
        
       
        
        
    }, [])

    return (
        <div className="Home">
        <Header />
        <div className="mantra"><h2> ||ॐ नमो भगवते वासुदेवाय नमः ||</h2></div>
        {/* <div className="back-vid">
        <video src={bgvideo} type="video/mp4" loop autoPlay muted> 
        </video>
        </div>
        <form className="container-sm chapter_form d-flex justify-content-center" onClick={onsubmit}>
        <input className="chapter_inp input-group-sm" type="number" value={chapter}  
        placeholder="Enter chapter's number from 1 to 18"
        onChange={(event)=>setChapter(event.target.value)} />           
               
          
       
       
      
       
       <button className="btn btn-warning ms-4" > Search </button> 
        </form>  */}
        <div className='chapter'>
        { user.map((use)=>{
        return(
        <div>
        {chapter==use.chapter_number &&
           <div key={use.id} className="border-0 d-flex flex-column me-1 ms-1"> 
           <h1 className="heading">{use.slug}</h1>                    
            <p className="slok container-sm card-header">{use.text}</p>
            <div className="summary container-sm card-body">
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
