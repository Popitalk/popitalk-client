import { calculatePlayerStatus } from "./functions";
import moment from "moment";

const playlist = [{ length: 300 }, { length: 400 }, { length: 500 }];

describe("calculatePlayerStatus", () => {
  test("should return an object", () => {
    const playerStatus = {
      queueStartPosition: 0,
      videoStartTime: 2,
      clockStartTime: moment().subtract(2, "m"),
      status: "Paused"
    };
    expect(typeof calculatePlayerStatus(playerStatus, playlist)).toBe("object");
  });
  test("should return empty object when playlist is empty", () => {
    const playerStatus = {
      queueStartPosition: 0,
      videoStartTime: 2,
      clockStartTime: moment().subtract(2, "m"),
      status: "Paused"
    };
    expect(calculatePlayerStatus(playerStatus, [])).toStrictEqual({});
  });
  test("should return new playerStatus at current time based on previous playerStatus when time elapsed is within one video", () => {
    const playerStatus = {
      queueStartPosition: 0,
      videoStartTime: 2,
      clockStartTime: moment().subtract(2, "m"),
      status: "Paused"
    };
    expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
      ...playerStatus,
      videoStartTime: 122
    });
  });
  test("should return new playerStatus at current time based on previous playerStatus when time elapsed is goes to next video", () => {
    const playerStatus = {
      queueStartPosition: 0,
      videoStartTime: 2,
      clockStartTime: moment().subtract(4, "m"),
      status: "Paused"
    };
    expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
      ...playerStatus,
      queueStartPosition: 1,
      videoStartTime: 62
    });
  });
  test.skip("should return back correct play time with timestamp from db", () => {
    expect(
      calculatePlayerStatus(
        moment("2020-07-21 23:06:18.779841-07"),
        moment("2020-07-21 23:06:18.779841-07").subtract(2, "m"),
        2,
        300
      )
    ).toBe(122);
  });
});
