import React, { useState } from "react";
// import Typeofinstitute from './Typeofinstitute';
import { iits, iiits, nits, GFTI, JAC, BITS } from "./Values";
import Table from "./Table";
export default function Choicefield() {
  const [rank, setRank] = useState(1);
  const [category, setCategory] = useState("General");
  const [typeOfInstituteName, setTypeOfInstituteName] = useState("ALL");
  const [exam, setExam] = useState("JEE Advanced");
  const [clgName, setClgName] = useState("ALL");

  const categorySelect = (event) => {
    setCategory(event.target.value);
  };
  const handleExamChange = (event) => {
    setExam(event.target.value);
    if (event.target.value === "JEE Advanced") {
      setTypeOfInstituteName("IIT");
    } else if (event.target.value === "JEE Mains") {
      setTypeOfInstituteName("ALL");
    } else if (event.target.value === "BITSAT") {
      setTypeOfInstituteName("BITS");
    }
  };

  const handleTypeOfInstituteChange = (event) => {
    setTypeOfInstituteName(event.target.value);
    setClgName("ALL");
  };
  
  if (rank===''){
    setRank(1);
  }

  console.log(exam);
  console.log(typeOfInstituteName);
  console.log(clgName);
  console.log(rank);

  return (
    <>
      <div id="filters">
        <h3 id="filter-heading">Filters:</h3>
        <div id="choices">
          <div id="personalInfo">
            <div id="examinationInfo">
              <button className="infoButton">Examination</button>
              <br />
              <select
                className="dropdownSelect"
                id="examination"
                onChange={handleExamChange}
              >
                <option value="">SELECT</option>
                <option value="JEE Mains">JEE Mains</option>
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="BITSAT">BITSAT</option>
              </select>
            </div>
            <div id="rankInfo">
              <button className="infoButton">Rank</button>
              <br />
              <input
                id="rank"
                onChange={(e) => {
                  setRank(e.target.value);
                }}
              />
            </div>
            <div id="categoryInfo">
              <button className="infoButton">Category</button>
              <br />
              <select
                className="dropdownSelect"
                id="category"
                onChange={categorySelect}
              >
                <option value="OPEN">General</option>
                <option value="OBC-NCL">OBC</option>
                <option className="genews" value="EWS">
                  GEN-EWS
                </option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OPEN (PWD)">PWD</option>
              </select>
            </div>
          </div>
          <div id="clgInfo">
            <div id="typeClgInfo">
              <button className="infoButton">Type of Institute</button>
              <br />
              {exam === "JEE Advanced" && (
                <select
                  className="dropdownSelect"
                  id="typeOfInstitute"
                  onChange={handleTypeOfInstituteChange}
                >
                  <option value="IIT">IIT</option>
                </select>
              )}
              {exam === "JEE Mains" && (
                <select
                  className="dropdownSelect"
                  id="typeOfInstitute"
                  onChange={(e) => {
                    setTypeOfInstituteName(e.target.value);
                  }}
                >
                  <option value="ALL">ALL</option>
                  <option value="NIT">NIT</option>
                  <option value="IIIT">IIIT</option>
                  <option value="GFTI">GFTI</option>
                  <option value="JAC">JAC</option>
                </select>
              )}
              {exam === "BITSAT" && (
                <select
                  className="dropdownSelect"
                  id="typeOfInstitute"
                  onChange={(e) => {
                    setTypeOfInstituteName(e.target.value);
                  }}
                >
                  <option value="BITS">BITS</option>
                </select>
              )}
            </div>
            <div id="clgNameInfo">
              <button className="infoButton">Institute Name</button>
              <br />
              {typeOfInstituteName === "IIT" && (
                <select
                  id="clgName"
                  className="dropdownSelect"
                  onChange={(e) => {
                    setClgName(e.target.value);
                  }}
                >
                  {iits.map((iit) => {
                    return <option value={iit.name}>{iit.shortName}</option>;
                  })}
                </select>
              )}

              {typeOfInstituteName === "NIT" && (
                <select
                  id="clgName"
                  className="dropdownSelect"
                  onChange={(e) => {
                    setClgName(e.target.value);
                  }}
                >
                  {nits.map((nit) => {
                    return <option>{nit}</option>;
                  })}
                </select>
              )}

              {typeOfInstituteName === "IIIT" && (
                <select
                  id="clgName"
                  className="dropdownSelect"
                  onChange={(e) => {
                    setClgName(e.target.value);
                  }}
                >
                  {iiits.map((iiit) => {
                    return <option>{iiit}</option>;
                  })}
                </select>
              )}

              {typeOfInstituteName === "GFTI" && (
                <select
                  id="clgName"
                  className="dropdownSelect"
                  onChange={(e) => {
                    setClgName(e.target.value);
                  }}
                >
                  {GFTI.map((gfti) => {
                    return <option>{gfti}</option>;
                  })}
                </select>
              )}

              {typeOfInstituteName === "JAC" && (
                <select
                  id="clgName"
                  className="dropdownSelect"
                  onChange={(e) => {
                    setClgName(e.target.value);
                  }}
                >
                  {JAC.map((jac) => {
                    return <option value={jac.name}>{jac.shortName}</option>;
                  })}
                </select>
              )}
              {typeOfInstituteName === "BITS" && (
                <select id="clgName" className="dropdownSelect">
                  {BITS.map((bits) => {
                    return <option value={bits}>{bits}</option>;
                  })}
                </select>
              )}
            </div>
            <div id="programInfo">
              <button className="infoButton">Program</button>
              <select id="program" className="dropdownSelect">
                <option value="">SELECT</option>
              </select>
            </div>
            <div id="poolInfo">
              <button className="infoButton">Pool</button>
              <select id="pool" className="dropdownSelect">
                <option value="all">ALL</option>
                <option value="gender-neutral">Gender-Neutral</option>
                <option value="female">Female-Only</option>
              </select>
            </div>
            <div id="durationInfo">
              <button className="infoButton">Duration</button>
              <select id="duration" className="dropdownSelect">
                <option value="all">ALL</option>
                <option value="4">4-Year</option>
                <option value="5">5-Year</option>
              </select>
            </div>
          </div>
          
        </div>
      </div>
      <div id="table">
        <Table exam={exam} rank={rank} category={category} typeOfInstituteName={typeOfInstituteName} clgName={clgName}/>
      </div>
    </>
  );
}
