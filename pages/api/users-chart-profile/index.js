import React from "react";
import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "GET") {
    const usersPath = path.join(process.cwd(), "data", "users-chart.json");
    const usersJSON = fs.readFileSync(usersPath);
    const usersData = JSON.parse(usersJSON);

    res.status(201).json(usersData);
  }

  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      day,
      month,
      year,
      sum,
      sumResult,
      extraResult,
      sumMinusSpecialNumber,
      elements,
      vocaleSiConsoane,
      secondSpecialNumberResult,
      thirdSpecialNumberResult
    } = req.body;
    const newUserChart = {
      firstName: firstName,
      lastName: lastName,
      day: day,
      month: month,
      year: year,
      sum: sum,
      sumResult: sumResult,
      extraResult: extraResult,
      sumMinusSpecialNumber: sumMinusSpecialNumber,
      elements: elements,
      vocaleSiConsoane: vocaleSiConsoane,
      secondSpecialNumberResult: secondSpecialNumberResult,
      thirdSpecialNumberResult: thirdSpecialNumberResult
    };

    const usersChartPath = path.join(process.cwd(), "data", "users-chart.json");
    const usersChartFile = fs.readFileSync(usersChartPath);
    const usersChart = JSON.parse(usersChartFile);

    usersChart.push(newUserChart);
    fs.writeFileSync(usersChartPath, JSON.stringify(usersChart));
    res.status(201).json(newUserChart);
  }

  if (req.method === "DELETE") {
    const usersChartPath = path.join(process.cwd(), "data", "users-chart.json");
    const usersChartFile = fs.readFileSync(usersChartPath);
    const usersChart = JSON.parse(usersChartFile);

    const { name } = req.body;
    const index = usersChart.findIndex(user => user.firstName === name);
    // const splice= usersChart.splice(index, 1);

    res.status(201).json(index);
    console.log('TEST', deleteNow)
  }
};

export default handler;
