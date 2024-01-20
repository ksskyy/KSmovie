function formatReleaseDate(date) {
  // const dateObject = new Date(data);
  // const option;
}
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
export { formatReleaseDate, truncate };
