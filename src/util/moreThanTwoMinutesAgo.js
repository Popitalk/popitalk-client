export default function moreThanTwoMinutesAgo(date) {
  return new Date(date) < new Date() - 120000;
}
