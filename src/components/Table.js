import React from "react";

export default function Table(props) {
  const { data, exam, onSort, sortConfig } = props;

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ▲" : " ▼";
    }
    return "";
  };
  return (
    <div id="tableContainer">
      {exam === "BITSAT" ? (
        <table id="keywords" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Institute</th>
              <th>Program</th>
              <th>Duration</th>
              <th>Degree Type</th>
              <th>Quota</th>
              <th>Seat Type</th>
              <th>Gender</th>
              <th onClick={() => onSort("Closing_Rank")}>
                Cutoff Marks{renderSortIcon("Closing_Rank")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas, index) => (
              <tr key={index}>
                <td>{datas.Institute}</td>
                <td>{datas.Academic_Program_Name}</td>
                <td>{datas.duration}</td>
                <td>{datas.Degree_Type}</td>
                <td>{datas.Quota}</td>
                <td>{datas.Seat_Type}</td>
                <td>{datas.Gender}</td>
                <td>{datas.Closing_Rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table id="keywords" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Institute</th>
              <th>Program</th>
              <th>Duration</th>
              <th>Degree Type</th>
              <th>Quota</th>
              <th>Seat Type</th>
              <th>Gender</th>
              <th onClick={() => onSort("Opening_Rank")}>
                Opening Rank{renderSortIcon("Opening_Rank")}
              </th>
              <th onClick={() => onSort("Closing_Rank")}>
                Closing Rank{renderSortIcon("Closing_Rank")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas, index) => (
              <tr key={index}>
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
            ))}
          </tbody>
        </table>
      )}
      {data.length === 0 && <h1>Nothing Found</h1>}
    </div>
  );
}
