import React, { useState } from "react";
import { advClgs } from "./iits";
import { NIT } from "./NIT";
import { IIIT } from "./IIIT";
import { GFTI } from "./GFTI";
import Table from "./Table";
import { MainsClgAll } from "./MainsClgAll";

export default function Pagination(props) {
  var clgName = props.clgName;
  var category = props.category;
  var pool = props.pool;
  var duration = props.duration;
  var rank = parseInt(props.rank);
  var exam = props.exam;
  var program = props.program;
  var typeOfInstituteName = props.typeOfInstituteName;

  let dataTemp = [];

  if (exam === "JEE Advanced") {
    dataTemp = advClgs;
  } else if (exam === "JEE Mains") {
    if (typeOfInstituteName === "") {
      dataTemp = MainsClgAll;
    } else if (typeOfInstituteName === "NIT") {
      dataTemp = NIT;
    } else if (typeOfInstituteName === "IIIT") {
      dataTemp = IIIT;
    } else if (typeOfInstituteName === "GFTI") {
      dataTemp = GFTI;
    }
  }

  if (clgName) {
    dataTemp = dataTemp.filter((datas) => datas.Institute === clgName + " ");
  }
  if (category) {
    dataTemp = dataTemp.filter((datas) => datas.Seat_Type === category);
  }
  if (pool) {
    dataTemp = dataTemp.filter((datas) => datas.Gender === pool);
  }
  if (duration) {
    dataTemp = dataTemp.filter((datas) => datas.duration === duration);
  }
  if (program) {
    dataTemp = dataTemp.filter(
      (datas) => datas.Academic_Program_Name === program
    );
  }
  if (rank) {
    dataTemp = dataTemp.filter((datas) => datas.Closing_Rank >= rank);
  }
  const pages = Math.ceil(dataTemp.length / 10);
  const [currPage, setCurrPage] = useState("1");
  const rowsPerPage = 10;
  const lastRowIndex = rowsPerPage * currPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;

  const pageData = dataTemp.slice(firstRowIndex, lastRowIndex);
  let pageNumber = [];

  for (let i = 1; i <= pages; i++) {
    pageNumber.push(i);
  }
  return (
    <div id="pagination">
      <Table data={pageData} />
      <div id="paginationButtons">
        
        {currPage !== 1 && (
          <button className="pageButton" onClick={() => setCurrPage(1)}>
            FirstPage
          </button>
        )}
        {currPage !== 1 && (
          <button
            className="pageButton"
            onClick={() => setCurrPage(currPage - 1)}
          >
            Previous
          </button>
        )}
        <button id="currPage">
          {currPage} of {pages}
        </button>
        {currPage !== pageNumber.length && (
          <button
            className="pageButton"
            onClick={() => setCurrPage(parseInt(currPage) + 1)}
          >
            Next
          </button>
        )}
        {currPage !== pageNumber.length && (
          <button
            className="pageButton"
            onClick={() => setCurrPage(pageNumber.length)}
          >
            LastPage
          </button>
        )}
      </div>
    </div>
  );
}
