import React, { useEffect, useState } from 'react'
import Movieitem from './Movieitem'
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Moive(props) {
 const [movies , setMovies]= useState([]);
 const [page, setPage]= useState([1]);
 //const [totalresult,setTotalresult]=useState([0]);
  //paste array here
 

useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/${props.category}?api_key=8d658ffbd8bce382fe03afa1963e6583&language=en-US&page=1`).then((response)=>{
    setMovies(response.data.results)
    //setTotalresult(response.data.total_results)
    console.log(props.category)
    console.log(response.data.results);
  }).catch(err =>console.log(err))
  },[props])
//${props.category}
const  fetchMoreData = async() => {
  setPage(page + 1);
    axios.get(`https://api.themoviedb.org/3/movie/${props.category}?api_key=8d658ffbd8bce382fe03afa1963e6583&language=en-US&page=${page}`).then((response) => {
      setMovies(movies.concat(response.data.results));
      //setTotalresult(response.data.total_results)
    }).catch(err => console.log(err));
  }
  return (
    <> 
      
         <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreData}
          hasMore={page !== 499}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
      <div className='row'>
       {movies.map((element,i)=>{
       return <div className="col-md-4 " key={i}>
          <Movieitem title={element.title} date={element.release_date} imageurl={element.poster_path}/>
              </div>
     })}
       </div>

     </div>

     </InfiniteScroll>
     
    </>
  )
}
