const planets = [];

const { parse } = require("csv-parse");
const fs = require("fs");
const path = require('path');

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

function loadPlanetsData() {
  // .on('example') === Event Loop logic
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')) // Being read in as a stream
    .pipe(
      parse({
        comment: "#", // Filter out columns that start with # or Comments
        columns: true, // Create list of Objects
      })
    ) // Connects readable stream source to a parse destination
    .on("data", (data) => {
      if (isHabitablePlanet(data)) {
        habitablePlanets.push(data); // Push each chunk of data to results
      }
    })
    .on("error", (error) => {
      console.log("Error: " + error);
      reject(error);
    })
    .on("end", () => {
      resolve();
    });
  })
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
