// import { calculatePlayerStatus } from "./videoSyncing";
// import moment from "moment";

// const playlist = [{ length: 300 }, { length: 400 }, { length: 500 }];

// describe("calculatePlayerStatus", () => {
//   test("should return an object", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(2, "m"),
//       status: "Paused"
//     };
//     expect(typeof calculatePlayerStatus(playerStatus, playlist)).toBe("object");
//   });
//   test("should return empty object when playlist is empty", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(2, "m"),
//       status: "Paused"
//     };
//     expect(calculatePlayerStatus(playerStatus, [])).toStrictEqual({});
//   });
//   test("should return new playerStatus at current time based on previous playerStatus when time elapsed is within one video when playing", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(2, "m"),
//       status: "Playing"
//     };
//     expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
//       queueStartPosition: playerStatus.queueStartPosition,
//       videoStartTime: 122,
//       status: playerStatus.status
//     });
//   });
//   test("should return same playerStatus at current time based on previous playerStatus when time elapsed is within one video when paused", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(2, "m"),
//       status: "Paused"
//     };
//     expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
//       queueStartPosition: playerStatus.queueStartPosition,
//       videoStartTime: playerStatus.videoStartTime,
//       status: playerStatus.status
//     });
//   });
//   test("should return new playerStatus at current time based on previous playerStatus when time elapsed is goes to next video", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(6, "m"),
//       status: "Playing"
//     };
//     expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
//       queueStartPosition: 1,
//       videoStartTime: 62,
//       status: playerStatus.status
//     });
//   });
//   test("should return new playerStatus at current time based on previous playerStatus when time elapsed is goes to next next video", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(900, "s"),
//       status: "Playing"
//     };
//     expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
//       queueStartPosition: 2,
//       videoStartTime: 202,
//       status: playerStatus.status
//     });
//   });

//   test("should return new PlayerStatus 'Ended' when time elapsed is longer than the video length of the playlist", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment().subtract(20, "m"),
//       status: "Playing"
//     };
//     expect(calculatePlayerStatus(playerStatus, playlist)).toEqual({
//       queueStartPosition: 0,
//       videoStartTime: 0,
//       status: "Ended"
//     });
//   });
//   test("should return back correct play time with timestamp from db", () => {
//     const playerStatus = {
//       queueStartPosition: 0,
//       videoStartTime: 2,
//       clockStartTime: moment("2020-07-21 23:06:18.779841-07").subtract(2, "m"),
//       status: "Playing"
//     };
//     expect(
//       calculatePlayerStatus(
//         playerStatus,
//         playlist,
//         moment("2020-07-21 23:06:18.779841-07")
//       )
//     ).toEqual({
//       queueStartPosition: playerStatus.queueStartPosition,
//       videoStartTime: 122,
//       status: playerStatus.status
//     });
//   });
// });
