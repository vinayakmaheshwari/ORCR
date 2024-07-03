import React, { useState } from "react";
import { advClgs } from "./iits";
import { mainsClgs } from "./mainsClgs";
import Pagination from "./Pagination";

export default function Table(props) {
  // var clgName = props.clgName;
  // var category = props.category;
  // var pool = props.pool;
  // var duration = props.duration;
  // var rank = parseInt(props.rank);
  // var exam = props.exam;
  // var program = props.program;

  // let dataTemp = [];

  // if (exam === "JEE Advanced") {
  //   dataTemp = advClgs;
  // } else if (exam === "JEE Mains") {
  //   dataTemp = mainsClgs;
  // }

  // if (clgName) {
  //   dataTemp = dataTemp.filter((datas) => datas.Institute === clgName + " ");
  // }
  // if (category) {
  //   dataTemp = dataTemp.filter((datas) => datas.Seat_Type === category);
  // }
  // if (pool) {
  //   dataTemp = dataTemp.filter((datas) => datas.Gender === pool);
  // }
  // if (duration) {
  //   dataTemp = dataTemp.filter((datas) => datas.duration === duration);
  // }
  // if (program) {
  //   dataTemp = dataTemp.filter(
  //     (datas) => datas.Academic_Program_Name === program
  //   );
  // }
  // if (rank) {
  //   dataTemp = dataTemp.filter((datas) => datas.Closing_Rank >= rank);
  // }
  console.log(props.data);
  return (
    <div id="tableContainer">
      {props.data.length >0 && (
        <table id="keywords" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Institute</th>
              <th>Program</th>
              <th>Duration</th>
              <th>Degree Type</th>
              <th>Qouta</th>
              <th>Seat Type</th>
              <th>Gender</th>
              <th>Opening Rank</th>
              <th>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((datas) => {
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
              );
            })}
          </tbody>
        </table>
      )}
      {props.data.length===0 &&
       <h1>Nothing Found</h1>
      }
    </div>
  );
}
