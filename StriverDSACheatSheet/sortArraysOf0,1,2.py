# Given an array consisting of only 0s, 1s, and 2s.
# Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

class Solution:
    def sort_colors(self, nums) -> None:
      obj = {}
      colors = [0, 1, 2]
      index = 0
      for i in range(len(nums)):
        if obj.get(nums[i]):
          obj[nums[i]] += 1
        else:
          obj[nums[i]] = 1

      for i in range(len(colors)):
        if not obj.get(colors[i]):
          continue
        occurences = obj[colors[i]]
        for _ in range(occurences):
          nums[index] = colors[i]
          index += 1
