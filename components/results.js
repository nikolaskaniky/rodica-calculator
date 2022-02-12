import React, { useState, useEffect } from "react";
import classes from "./results.module.scss";

const Results = (props) => {
  const { users, allResults } = props;
  const [deleteIndex, setDeleteIndex] = useState(0);
  const deleteHandler = (name) => {
    fetch(`/api/users-chart-profile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
  };

  return (
    <ul className={classes.results}>
      {allResults.map((user, index) => (
        <li key={index}>
          <div
            className={classes.delete}
            onClick={() => deleteHandler(user.firstName)}
          >
            <p>delete</p>
          </div>
          <h4>Last Name: {user.lastName}</h4>
          <h4>First Name: {user.firstName}</h4>

          <p className={classes.elements}>
            {user.elements.map((item, index) => (
              <span
                key={index}
                className={`${
                  item === 1 || item === 5 || item === 9
                    ? classes.foc
                    : undefined
                } ${item === 2 || item === 6 ? classes.apa : undefined} ${
                  item === 3 || item === 7 ? classes.aer : undefined
                } ${item === 4 || item === 8 ? classes.pamant : undefined}`}
              >
                {item}
              </span>
            ))}
          </p>
          <p className={classes.vocale}>
            {user.vocaleSiConsoane.map((item, index) => (
              <span
                key={index}
                className={`${item === "C" ? classes.consoana : undefined} ${
                  item === "V" ? classes.vocala : undefined
                }`}
              >
                {item}
              </span>
            ))}
          </p>

          <h4>
            ID:{" "}
            <span>
              {user.day} {user.month} {user.year} {user.sum} {user.sumResult}{" "}
              {user.extraResult} {user.sumMinusSpecialNumber}{" "}
              {user.secondSpecialNumberResult} {user.thirdSpecialNumberResult}
            </span>
          </h4>

          <p>day: {user.day}</p>
          <p>moth: {user.month}</p>
          <p>year: {user.year}</p>
          <p>sum: {user.sum}</p>
          <p>sumResult: {user.sumResult}</p>
          <p>extraResult: {user.extraResult}</p>
          <p>special number: {user.sumMinusSpecialNumber}</p>
          <p>second special number: {user.secondSpecialNumberResult}</p>
          <p>third special number: {user.thirdSpecialNumberResult}</p>
        </li>
      ))}
    </ul>
  );
};

export default Results;
