# Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array.
# You may consider that such an element always exists in the array.

import math

class Solution:
  def majority_element(self, nums) -> int:
    length = len(nums)
    obj = {}

    for i in range(length):
      if obj.get(nums[i]):
        obj[nums[i]] += 1

        if obj[nums[i]] > math.floor(length / 2):
            return nums[i]
      else:
        obj[nums[i]] = 1

    return nums[0]
