import React ,{ useState, useEffect }from 'react'
import Header from './Header'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Chapter from './Chapter';
import './landing.css'

const Landing = (props) => {
  
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
        <>
        <Header />
        <div className="mantra"><h2> ||ॐ नमो भगवते वासुदेवाय नमः ||</h2></div>
        
        {
          data.map((e)=>
          {
            return(
              <div>
              <div className="landing_page">
              <div className="card">
                <div className="card-header">
                अध्याय - {e.chapter_number}:{e.name}
                </div>
              <div className="card-body">
                <h5  className="card-title"> Chapter - {e.name_translated}</h5>
              <p className="card-text"> meaning : {e.name_meaning} <br /> 
              total verse : {e.verses_count} 

              </p>                 
            </div>
            
        </div>
        <div key={e.id}>
              <Link className="link_chapter" to={`/Chapter/${e.chapter_number}`}>
              <p className="knowmore">Go to Chapter</p>
              </Link>
             
              </div>
              </div>
        
              </div>
            )
          })
        }
        
            
        </>
    )
}

export default Landing
