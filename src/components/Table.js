import React from "react";
export default function Table(props) {
  console.log(props.data);
  return (
    <div id="tableContainer">
      {props.data.length > 0 && (
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
      {props.data.length === 0 && <h1>Nothing Found</h1>}
    </div>
  );
}
