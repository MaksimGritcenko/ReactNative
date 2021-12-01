export function removeUniqId(str, uid) {
  return str.replace(`.${uid}`, '')
}