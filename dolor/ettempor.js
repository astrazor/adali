function isNullOrFalse(x) {
  return x === null || x === undefined || Object.prototype.toString.call(x) === '[object Null]' || Object.prototype.toString.call(x) === '[object Undefined]';
}
