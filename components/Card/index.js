import React,{useState} from 'react'
import {CardSty,TagSty,ButSty,TagCon} from './style'

function Card({maintitle,tags,color,price,cb}) {


  function handleClick(e){
   cb(price,e.target.name)

  };

  return (<CardSty color={color}>
    <h1>{maintitle}</h1>
 <TagCon> {tags.map((tag,key)=>{return(
  <TagSty key={key} color={color}>{tag}</TagSty>
  );})
    
  }</TagCon>
  <p>Precio: {price}</p>
  <ButSty name="agregar" onClick={handleClick}>Agregar a carro</ButSty>
  <ButSty name="eliminar" onClick={handleClick}>Sacar de carro</ButSty>
  </CardSty>)
}

export default Card;