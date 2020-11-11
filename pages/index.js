import {useState} from 'react';
import styled from "styled-components";
import Title from '../components/Title';
import Card from '../components/Card';
import {MainCon,TotalSty,CursosCon} from'../styles/style';


const arr = [
  {
    title: "Curso de Frontend",
    color: "#5cc1b3",
    tags: ["Frontend", "Test"],
    price: 1200
  },
  {
    title: "Curso de Backend",
    color: "violet",
    tags: ["Backend", "Infra"],
    price: 1000
  },
  {
    title: "Curso de UX/UI",
    color: "red",
    tags: ["UX", "UI"],
    price: 1100
  }
]

export default function Home() {
  const [total,setTotal] = useState(0);

function handleCb(data,name){
 if(name==="agregar"){
  setTotal(prevState => prevState+data)
}else if(total>0 && total-data>=0){
  setTotal(prevState => prevState-data)
}
}
  return (
  <MainCon>
    <CursosCon>
      {/* <Title content="test" color="green">no se que paso</Title>
      <Title content="test" color="blue">aaaa</Title> */}
{arr.map((curso,key)=>{return(
  <Card maintitle={curso.title} color={curso.color} cb={handleCb} price={curso.price} tags={curso.tags}/>

)})}


    </CursosCon>
      <TotalSty>Total: ${total}</TotalSty>
  </MainCon>
  )
}
