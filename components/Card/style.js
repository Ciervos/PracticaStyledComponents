import styled from "styled-components";


export const CardSty = styled.div`
border: 2px solid grey;
border-left: 10px solid ${(props)=>props.color};

margin: 10px;
height: 250px;
width: 350px;
padding-left: 20px;
 `;

export const TagCon = styled.div`
display: flex;
flex-flow: row;
flex-wrap: wrap;
height: 50px;
width: 100%;
 `; 

export const TagSty = styled.div`
background-color: ${(props)=>props.color};
border-radius: 15px;
color: white;
text-align: center;
margin: 2px;
height: 30px;
width: 80px;
 `;


export const ButSty = styled.button`
border-radius: 15px;
color: black;
height: 40px;
width: 80px;
 `;
 