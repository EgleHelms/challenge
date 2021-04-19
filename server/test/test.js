const request = require("supertest");
const app = require("../index.js");
const {passwordArrayGenerator} = require("../controller/controller");

describe('GET request', () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
      });
  });

  describe('1 password with default values', () => {
    test("MinLength 8, nums 1, specCars 1, passwordAmt 1", async () => {
        const response = await request(app).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1);
      });
  });

  describe('2 password with default values', () => {
    test("MinLength 8, nums 1, specChars 1, passwordAmt 2", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=1&numberOfSpecCharacters=5&numberOfPasswords=3`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text)).toBe(2);
      });
  });
