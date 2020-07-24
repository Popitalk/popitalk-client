import { calculatePlayedTime } from "./functions";
import moment from "moment";

const playlist = [{ length: 300 }, { length: 400 }, { length: 500 }];

describe("calculatePlayedTime", () => {
  test("should return a Number in seconds", () => {
    expect(
      typeof calculatePlayedTime(0, moment().subtract(2, "m"), 2, playlist)
    ).toBe("number");
  });
  test.skip("should return -1 when playlist is empty", () => {});
  test.skip("should return back correct play time within same video length where clockStartTime was recorded", () => {
    expect(calculatePlayedTime(0, moment().subtract(2, "m"), 2, playlist)).toBe(
      122
    );
  });
  test.skip("should return back correct play time with curr time passes the length of video where clockStartTime was recorded", () => {});
  test.skip("should return back correct play time with timestamp from db", () => {
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
