const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const planets = require("./planets.mongo");


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
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    ) // Being read in as a stream
      .pipe(
        parse({
          comment: "#", // Filter out columns that start with # or Comments
          columns: true, // Create list of Objects
        })
      ) // Connects readable stream source to a parse destination
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
           savePlanet(data);
        }
      })
      .on("error", (error) => {
        console.log("Error: " + error);
        reject(error);
      })
      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await planets.find({}, {
    '_id': 0, '__v': 0,
  });
}

async function savePlanet(planet) {
  // insert + update = upsert
  try {
    await planets.updateOne(
      {
        kepler_name: planet.kepler_name,
      },
      {
        kepler_name: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(`Could not save a planet ${err}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
