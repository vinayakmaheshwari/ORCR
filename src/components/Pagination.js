import React, { useState, useMemo } from "react";
import { advClgs } from "./iits";
import { NIT } from "./NIT";
import { IIIT } from "./IIIT";
import { GFTI } from "./GFTI";
import Table from "./Table";
import { MainsClgAll } from "./MainsClgAll";
import { BITSClg } from "./BITS";
import { JACClgs } from "./JAC";

export default function Pagination(props) {
  const {
    clgName,
    category,
    pool,
    duration,
    rank,
    exam,
    program,
    typeOfInstituteName,
    quota,
  } = props;
  const [currPage, setCurrPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const filteredAndSortedData = useMemo(() => {
    let dataTemp = [];
    if (exam === "JEE Advanced") {
      dataTemp = advClgs;
    } else if (exam === "JEE Mains") {
      if (typeOfInstituteName === "") {
        dataTemp = NIT.concat(IIIT, GFTI, JACClgs);
      } else if (typeOfInstituteName === "NIT") {
        dataTemp = NIT;
      } else if (typeOfInstituteName === "IIIT") {
        dataTemp = IIIT;
      } else if (typeOfInstituteName === "GFTI") {
        dataTemp = GFTI;
      } else if (typeOfInstituteName === "JAC") {
        dataTemp = JACClgs;
      }
    } else if (exam === "BITSAT") {
      dataTemp = BITSClg;
    }

    if (clgName)
      dataTemp = dataTemp.filter(
        (datas) => datas.Institute.trim() === clgName.trim()
      );
    if (category)
      dataTemp = dataTemp.filter((datas) => datas.Seat_Type === category);
    if (pool) dataTemp = dataTemp.filter((datas) => datas.Gender === pool);
    if (duration)
      dataTemp = dataTemp.filter((datas) => datas.duration === duration);
    if (program)
      dataTemp = dataTemp.filter(
        (datas) => datas.Academic_Program_Name === program
      );
    if (quota) dataTemp = dataTemp.filter((datas) => datas.Quota === quota);

    // filtering logic based on sorting
    if (exam === "BITSAT" && rank) {
      const inputMarks = parseInt(rank);
      if (!isNaN(inputMarks)) {
        dataTemp = dataTemp.filter((datas) => {
          const closingRank = parseInt(datas.Closing_Rank);
          return closingRank <= inputMarks;
        });
      }
    } else if (rank) {
      const numericRank = parseInt(rank, 10);
      if (!isNaN(numericRank)) {
        dataTemp = dataTemp.filter((datas) => {
          const closingRank = parseInt(datas.Closing_Rank, 10);
          return closingRank >= numericRank;
        });
      }
    }

    // sorting logic
    if (sortConfig.key) {
      dataTemp.sort((a, b) => {
        if (
          a[sortConfig.key] === undefined ||
          b[sortConfig.key] === undefined
        ) {
          return 0;
        }
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        const aNum = Number(aValue);
        const bNum = Number(bValue);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return sortConfig.direction === "ascending"
            ? aNum - bNum
            : bNum - aNum;
        } else {
          return sortConfig.direction === "ascending"
            ? aValue.toString().localeCompare(bValue.toString())
            : bValue.toString().localeCompare(aValue.toString());
        }
      });
    }

    return dataTemp;
  }, [
    clgName,
    category,
    pool,
    duration,
    rank,
    exam,
    program,
    typeOfInstituteName,
    sortConfig,
    quota,
  ]);

  const rowsPerPage = 10;
  const pages = Math.ceil(filteredAndSortedData.length / rowsPerPage);
  const lastRowIndex = rowsPerPage * currPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const pageData = filteredAndSortedData.slice(firstRowIndex, lastRowIndex);

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    }));
    setCurrPage(1);
  };

  return (
    <div id="pagination">
      <Table
        data={pageData}
        exam={exam}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
      <div id="paginationButtons">
        {currPage !== 1 && (
          <button className="pageButton" onClick={() => setCurrPage(1)}>
            First Page
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
        {currPage !== pages && (
          <button
            className="pageButton"
            onClick={() => setCurrPage(currPage + 1)}
          >
            Next
          </button>
        )}
        {currPage !== pages && (
          <button className="pageButton" onClick={() => setCurrPage(pages)}>
            Last Page
          </button>
        )}
      </div>
    </div>
  );
}
