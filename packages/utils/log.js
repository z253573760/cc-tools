export function warn(errMsg) {
  const title = "[cc-tools-warn]";
  throw `${title}   ${errMsg}`;
}
