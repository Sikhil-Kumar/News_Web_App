import React from 'react'

const NewsItem =(props)=>{
  
    let {title, description, imageUrl, newsurl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger" > {source}</span>
        </div>
  <img src={ !imageUrl?"https://st3.depositphotos.com/11245678/36021/i/450/depositphotos_360215620-stock-photo-breaking-news-rendering-virtual-set.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...<span className="badge text-bg-secondary">new</span>
  </h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknow":author} on  {new Date(date).toGMTString()} </small></p>
    <a href={newsurl} target='blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
