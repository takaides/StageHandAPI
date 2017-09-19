// test/hello_test.js
const request = require("supertest");
const app = require("../app");

describe("GET /", function() {
  test("should return successfully", function() {
    return request(app)
      .get("/")
      .expect(200)
  });
})
