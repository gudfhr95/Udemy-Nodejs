const { parse } = require("csv-parse");
const fs = require("fs");

const reuslts = [];

fs.createReadStream("kepler_data.csv")
  .on("data", (data) => {
    reuslts.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(reuslts);
    console.log("done");
  });
// parse();
