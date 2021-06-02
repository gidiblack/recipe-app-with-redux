const fs = require("fs");
const path2 = require("path");
const mockData = require("./mockData.js");

const { recipeData, authorData } = mockData;
const data = JSON.stringify({ recipeData, authorData });
const filepath = path2.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
