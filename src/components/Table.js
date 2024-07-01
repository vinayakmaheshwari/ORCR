import React from "react";
import { advClgs } from "./iits";
import { mainsClgs } from "./mainsClgs";

export default function Table(props) {
  var clgName = props.clgName
  var category = props.category
  var pool = props.pool
  var duration = props.duration
  var rank = props.rank
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
  
  
  // console.log(dataTemp)

  // console.log(clgName)
  //           console.log(category)
  //           console.log(pool)

  return (
    <div id="tableContainer">
      <table id="keywords" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>
              <span>Institute</span>
            </th>
            <th>
              <span>Program</span>
            </th>
            <th>
              <span>Duration</span>
            </th>
            <th>
              <span>Degree Type</span>
            </th>
            <th>
              <span>Qouta</span>
            </th>
            <th>
              <span>Seat Type</span>
            </th>
            <th>
              <span>Gender</span>
            </th>
            <th>
              <span>Opening Rank</span>
            </th>
            <th>
              <span>Closing Rank</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTemp.map((datas)=>{
             return (
              <tr>
                <td>{datas.Institute}</td>
                <td>{datas.Academic_Program_Name}</td>
                <td>{datas.duration}</td>
                <td>{datas.Degree_Type}</td>
                <td>{datas.Quota}</td>
                <td>{datas.Seat_Type}</td>
                <td>{datas.Gender}</td>
                <td>{datas.Opening_Rank}</td>
                <td>{datas.Closing_Rank}</td>
              </tr>
             )
          }
          )}
        </tbody>
      </table>
    </div>
  );
}
