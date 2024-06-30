import React from "react";
import { data } from "./data_final_(2)";

export default function Table(props) {
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
          
            {
              data.map((datas) => {
                if (datas.Institute===props.clgName+' ' && datas.Closing_Rank>=parseInt(props.rank) && datas.Seat_Type===props.category){
                  return <tr><td classNameName="lalign">{datas.Institute}</td>
                <td>{datas.Academic_Program_Name} </td>
                <td>{datas.duration}</td>
                <td>{datas.Degree_Type}</td>
                <td>{datas.Quota}</td>
                <td>{datas.Seat_Type}</td>
                <td>{datas.Gender}</td>
                <td>{datas.Opening_Rank}</td>
                <td>{datas.Closing_Rank}</td></tr>;
                }
                
                
              })
            }
          
          
        </tbody>
      </table>
    </div>
  );
}
