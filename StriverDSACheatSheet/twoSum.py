class Solution:
    def two_sum(self, nums, target):
      obj = {}
      length = len(nums)
      for i in range(length):
        obj[nums[i]] = i

      for i in range(length):
        diff = target - nums[i]
        second_num = obj.get(diff)
        if second_num and i != second_num:
          return [i, second_num]
