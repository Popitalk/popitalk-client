import { calculatePlayedTime } from "./functions";
import moment from "moment";
describe("calculatePlayedTime", () => {
  test("should return a Number in seconds", () => {
    expect(
      typeof calculatePlayedTime(moment(), moment().subtract(2, "m"), 2, 300)
    ).toBe("number");
  });
  test("should return back correct play time", () => {
    expect(
      calculatePlayedTime(moment(), moment().subtract(2, "m"), 2, 300)
    ).toBe(122);
  });
  test("should return back correct play time with timestamp from db", () => {
    expect(
      calculatePlayedTime(
        moment("2020-07-21 23:06:18.779841-07"),
        moment("2020-07-21 23:06:18.779841-07").subtract(2, "m"),
        2,
        300
      )
    ).toBe(122);
  });
});
