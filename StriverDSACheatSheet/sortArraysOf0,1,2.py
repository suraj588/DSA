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
