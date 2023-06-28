import React from 'react'

export default function Movieitem(props) {
  const getposterurl = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }
  return (<div className="card" style={{width: "18rem"}}>
  <img src={getposterurl(props.imageurl)} className="card-img-top" alt={props.title}/>
  <div className="card-body">
  <h5 className="flex-bold">{props.title}</h5>
    <p className="card-text">{props.date}</p>
  </div>
</div>
  )
}
