import React,{ useEffect, useState } from 'react';
import Axios  from 'axios';
import Header from './Header';
import './Chapter.css';
import { useParams ,Link } from 'react-router-dom';


const Chapter = () => {
    const { chapter } = useParams();
    console.log("this chapter is ",chapter);
    
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
            // console.log(response.data);
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
        <div className="mantra"><h2> ||ॐ नमो भगवते वासुदेवाय नमः ||</h2></div>
        {/* <form className="chapter_info container-sm  d-flex justify-content-center">
        <input className="input_chapter me-5" type="text" value={chapter} placeholder="Enter chapter's number from 1 to 18 "
        onChange={(e)=>setchapter(e.target.value)} />
        <button className="btn btn-warning"> Search</button>
        </form> */}
        {
            data.map((chap)=>{
                return(
                     <div  key={chap.id}>
                    {
                    chap.chapter_number== chapter &&    
                    <div className="container-sm mt-4 d-flex flex-column">
                    <div className="chapter_head card-header">
                    <p className="chapter_name">{chap.chapter_number} :{chap.name}</p>
                    <p className="Chap_heading">{chap.slug}</p>
                    <p className="total_verses">Number of verses :{chap.verses_count}</p>
                    </div>
                        
                        <p className="chap_summary  container-sm card-body">{chap.chapter_summary}  <br /><br />
                        {chap.chapter_summary_hindi}
                        <div>
                     <Link className="link_chapter mb-5" to={`/home/${chap.chapter_number}`}>
                      <p className="knowmore">Go to verses</p>
                    </Link> </div>
                        </p>
                        {/* <div>
                     <Link className="link_chapter mb-5" to={`/home/${chap.chapter_number}`}>
                      <p className="knowmore">Go to Chapter</p>
                    </Link>
             
              </div>
                         */}
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
