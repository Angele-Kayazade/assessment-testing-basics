// Write your tests here!
const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect;

describe("partitionStudentsByScore", ()=> {
    it("should partition students into appropriate arrays", ()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const score = 8;
          const expected = [
            [{ name: "Morgan Sutton", score: 7.4 }],
            [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Natalee Vargas", score: 9.2 },
            ],
          ];
          const actual = partitionStudentsByScore(students, score);
          expect(actual).to.eql(expected);
    })

    it("the students could go into one of the two arrays", ()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const score = 6;
        const expected = [
            [],
            [ { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Morgan Sutton", score: 7.4 },
              { name: "Natalee Vargas", score: 9.2 },
            ],
          ];
        const actual = partitionStudentsByScore(students, score);
        expect(actual).to.eql(expected);
    })

    it("should return an array of two empty arrays if there are no students", ()=> {
        const students = [];
        const score = 7;
        const expected = [[],[]]
        const actual = partitionStudentsByScore(students,score);
        expect(actual).to.eql(expected);
    })
})
