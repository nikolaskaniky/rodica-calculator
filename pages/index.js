import React, { useState, useEffect } from "react";
import Birth from "../components/birth";
import Name from "../components/name";
import Results from "../components/results";
import Title from "../components/title";
import classes from "./index.module.scss";
import path from "path";
import fs from "fs";

const HomePage = (props) => {
  const [allResults, setAllResults] = useState([]);
  console.log(allResults, "results");
  const { users } = props;
  const [showResults, setShowResults] = useState(false);
  const showResultsHandler = () =>
    setShowResults((prev) => setShowResults(!prev));

  //? states.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState({
    day: "0",
    month: "0",
    year: "0",
  });
  const [specialNumber, setSpecialNumber] = useState(0);

  let newArray = [];

  //? functions.
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const specialNumberHandler = (e) => {
    setSpecialNumber(e.target.value);
  };

  //* elements.
  const foc1 = ["a", "j", "s"];
  const apa2 = ["b", "k", "t"];
  const aer3 = ["c", "l", "u"];
  const pamant4 = ["d", "m", "v"];
  const foc5 = ["e", "n", "w"];
  const apa6 = ["f", "o", "x"];
  const aer7 = ["g", "p", "y"];
  const pamant8 = ["h", "q"];
  const foc9 = ["i", "r"];

  //? submit handler.
  const submitHandler = (e) => {
    e.preventDefault();

    for (let i = 0; i < birth.day.length; i++) {
      newArray.push(+birth.day.charAt(i));
    }

    for (let i = 0; i < birth.month.length; i++) {
      newArray.push(+birth.month.charAt(i));
    }

    for (let i = 0; i < birth.year.length; i++) {
      newArray.push(+birth.year.charAt(i));
    }

    const sum = newArray.reduce((prev, next) => prev + next, 0);
    let sumResultArray = [];

    if (sum && sum.toString().length === 2) {
      for (let i = 0; i < sum.toString().length; i++) {
        sumResultArray.push(+sum.toString().charAt(i));
      }
      const sumResult = sumResultArray.reduce((prev, next) => next + prev, 0);
    }

    //! conditional if sum result is formed by 2 digits.
    let sumResult2DigitsArray = [];
    let sumResult2Digits;

    if (sumResult && sumResult.toString().length === 2) {
      for (let i = 0; i < sumResult.toString().length; i++) {
        sumResult2DigitsArray.push(+sumResult.toString().charAt(i));
      }

      sumResult2Digits = sumResult2DigitsArray.reduce(
        (prev, next) => prev + next,
        0
      );
    } else {
      console.log("mai mic ca 2");
    }

    //! special number calculation.
    let specialNumberMultiplicationResult;
    let sumMinusSpecialNumber;
    if (birth.day.toString().charAt(0) !== "0") {
      specialNumberMultiplicationResult = +birth.day.charAt(0) * +specialNumber;
      sumMinusSpecialNumber = sum - specialNumberMultiplicationResult;
    } else {
      specialNumberMultiplicationResult =
        +birth.day.toString().charAt(1) * +specialNumber;
      sumMinusSpecialNumber = sum - specialNumberMultiplicationResult;
    }

    //! second special number calculation.
    let specialNumberResultSplitted = [];
    let secondSpecialNumberResult;
    if (sumMinusSpecialNumber.toString().length === 2) {
      for (let i = 0; i < sumMinusSpecialNumber.toString().length; i++) {
        specialNumberResultSplitted.push(
          +sumMinusSpecialNumber.toString().charAt(i)
        );
      }

      secondSpecialNumberResult = specialNumberResultSplitted.reduce(
        (prev, next) => prev + next,
        0
      );
    }

    //! third special number calculation.
    let secondSpecialNumberSplitted = [];
    let thirdSpecialNumberResult;
    if (
      secondSpecialNumberResult &&
      secondSpecialNumberResult.toString().length === 2
    ) {
      for (let i = 0; i < secondSpecialNumberResult.toString().length; i++) {
        secondSpecialNumberSplitted.push(
          +secondSpecialNumberResult.toString().charAt(i)
        );
      }

      thirdSpecialNumberResult = secondSpecialNumberSplitted.reduce(
        (prev, next) => prev + next,
        0
      );
    }

    console.log("THIRD", thirdSpecialNumberResult);

    //! creating name numbers.
    let fullName = lastName.toLowerCase() + " " + firstName.toLowerCase();
    let elementsDigitsArray = [];

    for (let i = 0; i < fullName.length; i++) {
      elementsDigitsArray.push(
        foc1.includes(fullName.charAt(i))
          ? 1
          : apa2.includes(fullName.charAt(i))
          ? 2
          : aer3.includes(fullName.charAt(i))
          ? 3
          : pamant4.includes(fullName.charAt(i))
          ? 4
          : foc5.includes(fullName.charAt(i))
          ? 5
          : apa6.includes(fullName.charAt(i))
          ? 6
          : aer7.includes(fullName.charAt(i))
          ? 7
          : pamant8.includes(fullName.charAt(i))
          ? 8
          : foc9.includes(fullName.charAt(i))
          ? 9
          : "/"
      );
    }

    //! consoane si vocale.
    const vocale = ["a", "e", "i", "o", "u"];
    let consoaneSiVocaleArray = [];
    for (let i = 0; i < fullName.length; i++) {
      consoaneSiVocaleArray.push(
        vocale.includes(fullName.charAt(i))
          ? "V"
          : fullName.charAt(i) === " "
          ? "/"
          : "C"
      );
    }

    const reqBody = {
      firstName: firstName,
      lastName: lastName,
      day: birth.day,
      month: birth.month,
      year: birth.year,
      sum: sum,
      sumResult: sumResult,
      extraResult: sumResult2Digits,
      sumMinusSpecialNumber: sumMinusSpecialNumber,
      secondSpecialNumberResult: secondSpecialNumberResult,
      thirdSpecialNumberResult: thirdSpecialNumberResult,
      elements: elementsDigitsArray,
      vocaleSiConsoane: consoaneSiVocaleArray,
    };

    setAllResults([
      ...allResults,
      {
        firstName: firstName,
        lastName: lastName,
        day: birth.day,
        month: birth.month,
        year: birth.year,
        sum: sum,
        sumResult: sumResult,
        extraResult: sumResult2Digits,
        sumMinusSpecialNumber: sumMinusSpecialNumber,
        secondSpecialNumberResult: secondSpecialNumberResult,
        thirdSpecialNumberResult: thirdSpecialNumberResult,
        elements: elementsDigitsArray,
        vocaleSiConsoane: consoaneSiVocaleArray,
      },
    ]);

    fetch("/api/users-chart-profile", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setBirth({
      day: 0,
      month: 0,
      year: 0,
    });

    setLastName("");
    setFirstName("");
  };

  return (
    <main className={classes["home-page"]}>
      <Title classes={classes} />
      <form className={classes.form} onSubmit={submitHandler}>
        <Name
          classes={classes}
          firstNameHandler={firstNameHandler}
          lastNameHandler={lastNameHandler}
          firstName={firstName}
          lastName={lastName}
        />
        <Birth
          classes={classes}
          setBirth={setBirth}
          birth={birth}
          specialNumber={specialNumber}
          specialNumberHandler={specialNumberHandler}
        />

        <button type="submit" className={classes.submit}>
          submit
        </button>
      </form>

      <div className={classes["btn-wrapper"]}>
        <button onClick={showResultsHandler} className={classes["results-btn"]}>
          Show Results
        </button>
        {showResults && <Results allResults={allResults} users={users} />}
      </div>
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  const usersPath = path.join(process.cwd(), "data", "users-chart.json");
  const usersFile = fs.readFileSync(usersPath);
  const users = JSON.parse(usersFile);

  return {
    props: {
      users: users,
    },
  };
}
