import React,{ useEffect, useState } from 'react';
import Axios  from 'axios';
import Header from './Header';
import './Chapter.css';

const Chapter = () => {
    const [chapter, setchapter] = useState();
    const [data, setdata] = useState([]);
    var option = {
        method: 'GET',
        url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`,
        // params:'18' ,
        headers: {
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
          'x-rapidapi-key': 'ebeff21c32msh98bcf38878851b5p18ac95jsn01f308b87628'
        },
      };
  
      async function getChpter(){
    
        Axios.request(option).then(function (response) {
            console.log(response.data);
            setdata(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getChpter();
        
    }, [])
    
    return (
        <div>
        <Header />
        <form className="chapter_info">
        <input className="input_chapter" type="text" value={chapter} placeholder="Enter chapter's number from 1 to 18 "
        onChange={(e)=>setchapter(e.target.value)} />
        <button className="search_btn"> Search</button>
        </form>
        {
            data.map((chap)=>{
                return(
                    <div key={chap.id}> 
                    {chapter==chap.chapter_number &&                        
                    <div className='chapter_Summary'>
                    <div className='chapter_head'>
                    <h2 className="chapter_name">{chap.chapter_number} :{chap.name}</h2>
                    <h2 className="Chap_heading">{chap.slug}</h2>
                    <h3 className="total_verses">Number of verses :{chap.verses_count}</h3>
                    </div>

                        <p className='chap_summary'>{chap.chapter_summary}</p>
                    </div>
                    }
                    </div>
                )
            })
        }
            
        </div>
    )
}

export default Chapter
