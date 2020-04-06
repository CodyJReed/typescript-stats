import fs from "fs";

const matches = fs
  .readFileSync("original.csv", {
    encoding: "UTF-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

console.log(matches);
