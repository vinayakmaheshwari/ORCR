import React, { useState } from "react";
import { NIT } from "./NIT";
import { IIIT } from "./IIIT";
import { GFTI } from "./GFTI";
import { advClgs } from "./iits";
import Pagination from "./Pagination";
import { BITSClg } from "./BITS";
import { JACClgs } from "./JAC";

export default function Choicefield() {
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("");
  const [typeOfInstituteName, setTypeOfInstituteName] = useState("IIT");
  const [exam, setExam] = useState("JEE Advanced");
  const [clgName, setClgName] = useState("");
  const [pool, setPool] = useState("");
  const [duration, setDuration] = useState("");
  const [program, setProgram] = useState("");
  const [quota, setQuota] = useState("");

  let dataTemp = [];
  let RankorMarks;

  if (exam === "BITSAT") {
    RankorMarks = "Marks";
  } else if (exam !== "BITSAT") {
    RankorMarks = "Rank";
  }

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

  const getUniqueProgram = () => {
    let val = dataTemp.map((currElem) => {
      return currElem.Academic_Program_Name;
    });
    return (val = [...new Set(val)]);
  };
  const uniqueProgram = getUniqueProgram();

  const getUniqueQuota = () => {
    let val = dataTemp.map((currElem) => {
      return currElem.Quota;
    });
    return (val = [...new Set(val)]);
  };
  const uniqueQuota = getUniqueQuota();

  const getUniqueCategory = () => {
    let val = dataTemp.map((currElem) => {
      return currElem.Seat_Type;
    });
    return (val = [...new Set(val)]);
  };
  const uniqueCategory = getUniqueCategory();

  const getUniqueGender = () => {
    let val = dataTemp.map((currElem) => {
      return currElem.Gender;
    });
    return (val = [...new Set(val)]);
  };
  const uniqueGender = getUniqueGender();

  const getUniqueClgName = () => {
    let val = dataTemp.map((currElem) => {
      return currElem.Institute;
    });
    return (val = [...new Set(val)]);
  };
  const uniqueClgName = getUniqueClgName();

  const handleExamChange = (event) => {
    setExam(event.target.value);
    setCategory("");
    setPool("");
    setClgName("");
    setProgram("");
    setQuota("");
    if (event.target.value === "JEE Advanced") {
      setTypeOfInstituteName("IIT");
    } else if (event.target.value === "JEE Mains") {
      setTypeOfInstituteName("");
    } else if (event.target.value === "BITSAT") {
      setTypeOfInstituteName("BITS");
    }
  };

  const handleTypeOfInstituteChange = (event) => {
    setTypeOfInstituteName(event.target.value);
    setClgName("");
    setCategory("");
    setProgram("");
    setQuota("");
    setPool("");
  };

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
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="JEE Mains">JEE Mains</option>
                <option value="BITSAT">BITSAT</option>
              </select>
            </div>
            <div id="rankInfo">
              <button className="infoButton">{RankorMarks}</button>
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
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">ALL</option>
                {uniqueCategory.map((val) => {
                  return <option value={val}>{val}</option>;
                })}
              </select>
            </div>
            <div id="quotaInfo">
              <button className="infoButton">Qouta</button>
              <select
                className="dropdownSelect"
                id="quota"
                onChange={(e) => {
                  setQuota(e.target.value);
                }}
              >
                <option value="">ALL</option>
                {uniqueQuota.map((val) => {
                  return <option value={val}>{val}</option>;
                })}
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
                    setClgName("");
                    setProgram("");
                  }}
                >
                  <option value="">ALL</option>
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
                    setClgName("");
                    setProgram("");
                  }}
                >
                  <option value="BITS">BITS</option>
                </select>
              )}
            </div>
            <div id="clgNameInfo">
              <button className="infoButton">Institute Name</button>
              <br />
              <select className="dropdownSelect" id="clgName" onChange={(e) => setClgName(e.target.value)}>
                {uniqueClgName.map((val) => {
                  return <option value={val}>{val}</option>;
                })}
              </select>
            </div>
            <div id="programInfo">
              <button className="infoButton">Program</button>
              <select
                id="program"
                className="dropdownSelect"
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value="">ALL</option>
                {uniqueProgram.map((prog) => {
                  if (prog) {
                    return <option value={prog}>{prog}</option>;
                  }
                })}
              </select>
            </div>
            <div id="poolInfo">
              <button className="infoButton">Pool</button>
              <select
                id="pool"
                className="dropdownSelect"
                onChange={(e) => setPool(e.target.value)}
              >
                <option value="">ALL</option>
                {uniqueGender.map((val) => {
                  return <option value={val}>{val}</option>;
                })}
              </select>
            </div>
            <div id="durationInfo">
              <button className="infoButton">Duration</button>
              <select
                id="duration"
                className="dropdownSelect"
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">ALL</option>
                <option value="4 Years">4-Year</option>
                <option value="5 Years">5-Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div id="table">
        <Pagination
          exam={exam}
          rank={rank}
          category={category}
          typeOfInstituteName={typeOfInstituteName}
          clgName={clgName}
          pool={pool}
          duration={duration}
          program={program}
          quota={quota}
        />
      </div>
    </>
  );
}
