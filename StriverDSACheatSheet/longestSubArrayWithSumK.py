# You are given an array 'a' of size 'n' and an integer 'k'.
# Find the length of the longest subarray of 'a' whose sum is equal to 'k'.

# Solution-1
def longest_sub_array_with_sum_k(a: [int], k: int) -> int:
  sub_arrays = []
  for i in range(len(a)):
    arr = [];
    sum = 0
    for j in range(i, len(a)):
      if ((len(arr) == 0 and a[j] == k) or (a[j] == 0 and len(arr) > 0) or (sum + a[j] <= k)):
        arr.append(a[j]);
        sum += a[j];
      else:
        if (len(arr) > 0 and sum == k):
          sub_arrays.append(arr)
        break;
  maxLength = 0
  for i in range(len(sub_arrays)):
    if len(sub_arrays[i]) > maxLength:
      maxLength = len(sub_arrays[i])
  return maxLength

# Solution-2
def longest_sub_array_with_sum_k_1(a: [int], k: int) -> int:
    sum_till_index = {}
    sum = 0
    max_length = 0
    
    for i in range(len(a)):
      sum += a[i]
      rem = sum - k

      if sum not in sum_till_index:
        sum_till_index[sum] = i

      if sum == k:
        max_length = max(max_length, i + 1)

      if rem in sum_till_index:
        max_length = max(max_length, i - sum_till_index[rem])
    return max_length
