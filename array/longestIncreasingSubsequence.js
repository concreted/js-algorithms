function longestIncreasingSubsequence(array) {
  var start = 0;
  var peak = 0;
  var bestStart = 0;
  var bestPeak = 0;

  for (var i = 1; i < array.length; i++) {
    if (array[i] < array[start]) {
      start = i;
      peak = i;
    }
    else if (array[i] > array[peak]) {
      peak = i;
    }
    if (peak - start > bestPeak - bestStart) {
      bestStart = start;
      bestPeak = peak;
    }
  }

  return [bestStart, bestPeak]
}