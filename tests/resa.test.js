const request = require("supertest");
const app = require("../routes/resa");

describe("GET /resa", function() {
  test("should return successfully", function() {
    return request(app)
      .get("/resa")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function(res) {
        // expect(res.body['hello']).toBe("world");
      });
  });
});
