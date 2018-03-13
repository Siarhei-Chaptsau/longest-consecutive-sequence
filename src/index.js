module.exports = function longestConsecutiveLength(array) {
  var count = 1;
  var maxCount = 1;

  array.sort(function(a, b) {
    return a - b;
  });

  if (!array.length) {
    maxCount = 0;
  }

  for (let i = array.length; i > 0; i--) { // удаление от конца массива дубликатов
    if (array[i + 1] == array[i]) {
      array.splice(i, 1);
    }
  }

  array.forEach(function(item, i, array) {
    if (array[i + 1] - array[i] == 1) {
      count++;
    }
    if (array[i + 1] - array[i] != 1) {
      if (count > maxCount) {
        maxCount = count;
      }
      count = 1;
    }
  });

  return maxCount;
}
