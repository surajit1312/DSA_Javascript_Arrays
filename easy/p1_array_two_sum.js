const consoleUtils = require("console-log-pattern/src/index");

consoleUtils.logTitle("Leetcode 1. Two Sum: Arrays", "◉", "green");
consoleUtils.logExeBlock(
  `Input: nums = [3, 2, 5, 7, 11, 15]; target = 9`,
  true,
  "magenta",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/two-sum/`,
  true,
  "magenta",
);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  return findTwoSumIndices(nums, target, []);
};

const findTwoSumIndices = function (nums, target, result) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (!map[remainder]) {
      map[nums[i]] = { val: nums[i], index: i };
    } else {
      result = [map[remainder].index, i];
      break;
    }
  }
  return result;
};

const nums = [3, 2, 5, 7, 11, 15],
  target = 9;

const output = twoSum(nums, target);
consoleUtils.logConsole(
  `Indices of numbers with two sum ${target}: ${output}`,
  false,
  "magenta",
);

consoleUtils.logExeBlock("", true, "magenta");
