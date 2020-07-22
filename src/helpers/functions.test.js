import { calculatePlayedTime } from "./functions";
import moment from "moment";
describe("calculatePlayedTime", () => {
  test("should return a Number in seconds", () => {
    expect(
      typeof calculatePlayedTime(moment(), moment().add(2, "m"), 2, 300)
    ).toBe("number");
  });
  test("should return back correct play time", () => {});
});
