// Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10].
// For each query, we need to find out how many times the number appears in the array.
// For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0.

const getQueryCounts = (integers = [], queries = []) => {
  const count = {};
  integers.forEach(integer => {
    count[integer] ? count[integer]++ : count[integer] = 1;
  });
  return queries.map(query => count[query] || 0);
};

const counts = getQueryCounts([1, 2, 1, 3, 2], [1, 3, 4, 2, 10]);
console.log(counts);
