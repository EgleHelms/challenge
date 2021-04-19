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
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('2 password with default values', () => {
    test("MinLength 8, nums 1, specChars 1, passwordAmt 2", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=1&numberOfSpecCharacters=1&numberOfPasswords=2&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(2);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('10 password with default values', () => {
    test("MinLength 8, nums 1, specChars 1, passwordAmt 10", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=1&numberOfSpecCharacters=1&numberOfPasswords=10&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(10);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('1000 password limit', () => {
    test("MinLength 8, nums 1, specChars 1, passwordAmt 10001", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=1&numberOfSpecCharacters=1&numberOfPasswords=10001&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1000);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('4 passwords with 2 nums numbers', () => {
    test("MinLength 8, nums 2, specChars 1, passwordAmt 4", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=2&numberOfSpecCharacters=1&numberOfPasswords=4&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(4);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(2);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('Adding more numbers and specChars', () => {
    test("MinLength 8, nums 4, specChars 4, passwordAmt 1", async () => {
        let URL = `http://localhost:5000?minLength=20&numberOfNumbers=4&numberOfSpecCharacters=4&numberOfPasswords=1&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(20);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(4);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(4);
      });
  });

  describe('Password not allowing min length >8', () => {
    test("MinLength 4, nums 1, specChars 1, passwordAmt 1", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=1&numberOfSpecCharacters=1&numberOfPasswords=1&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('Password not allowing input >1', () => {
    test("MinLength 8, nums 0, specChars 0, passwordAmt 1", async () => {
        let URL = `http://localhost:5000?minLength=8&numberOfNumbers=0&numberOfSpecCharacters=0&numberOfPasswords=1&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(8);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('Password minLngth change', () => {
    test("MinLength 16, nums 0, specChars 0, passwordAmt 1", async () => {
        let URL = `http://localhost:5000?minLength=16&numberOfNumbers=0&numberOfSpecCharacters=0&numberOfPasswords=1&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(16);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(1);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(1);
      });
  });

  describe('Inputs higher >5', () => {
    test("MinLength 10, nums 8, specChars 7, passwordAmt 1", async () => {
        let URL = `http://localhost:5000?minLength=10&numberOfNumbers=8&numberOfSpecCharacters=7&numberOfPasswords=1&`;
        const response = await request(URL).get("/", passwordArrayGenerator);
        expect(JSON.parse(response.text).length).toBe(1);
        expect(JSON.parse(response.text)[0].length).toBeGreaterThanOrEqual(10);
        expect(JSON.parse(response.text)[0].match(/\d+/).join("").length).toBe(8);
        expect(JSON.parse(response.text)[0].match(/[\W\S_]/).join("").length).toBe(7);
      });
  });