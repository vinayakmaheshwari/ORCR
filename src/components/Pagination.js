import React, { useState } from 'react';
import { advClgs } from "./iits";
import { mainsClgs } from "./mainsClgs";

export default function Pagination(props) {


    var clgName = props.clgName
    var category = props.category
    var pool = props.pool
    var duration = props.duration
    var rank = parseInt(props.rank)
    var exam = props.exam
    var program = props.program
  
    let dataTemp = []
  
    if(exam==="JEE Advanced"){
      dataTemp = advClgs
    }
    else if(exam==="JEE Mains"){
      dataTemp = mainsClgs
    }
    
    if(clgName){
      dataTemp = dataTemp.filter((datas)=>
        datas.Institute===clgName + ' '
      )
    }
    if(category){
      dataTemp = dataTemp.filter((datas)=>
        datas.Seat_Type===category
      )
    }
    if(pool){
      dataTemp = dataTemp.filter((datas)=>
        datas.Gender===pool
      )
    }
    if(duration){
      dataTemp = dataTemp.filter((datas)=>
        datas.duration===duration
      )
    }
    if(program){
      dataTemp = dataTemp.filter((datas)=>
        datas.Academic_Program_Name===program
    )
    }
    if(rank){
      dataTemp = dataTemp.filter((datas)=>
        datas.Closing_Rank>=rank
    )
    }
    const pages = Math.ceil(dataTemp.length/10)
    console.log(pages)
      

  const [currPage, setCurrPage] = useState('1');
  const rowsPerPage = 10;
  const [lastRowIndex, setLastRowIndex] = useState(10);
  const [firstRowIndex, setFirstRowIndex] = useState(0);

  return (
    <div>


      
    </div>
  )
}

