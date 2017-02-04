# Leetcode 解题#

## Hamming Distance##

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.

Given two integers `x` and `y`, calculate the Hamming distance.

我的解答：

```javascript
var hammingDistance = function(x, y) {
    var temp = x ^ y;
    var bin = temp.toString(2).split("")
    return bin.reduce((x ,y) => Number(x) + Number(y), 0);
};
```

体会：本题主要为位运算的相关知识，得到两个数异或运算后的二进制数后再得到其中1的个数即可，为了得到1的个数，将每一个数相加。一开始由于没有传入初始参数而导致答案错误。

## Add Digits##

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

For example:

Given `num = 38`, the process is like: `3 + 8 = 11`, `1 + 1 = 2`. Since `2` has only one digit, return it.

我的解答：

```javascript
var addDigits = function(num) {
  num += "";
  if(num.length == 1){
    return Number(num);
  }else{
    num = num.split("").reduce(function(a, b){return Number(a) + Number(b)});
  }
  return addDigits(num);
};
```

体会：自己想的主要用递归解决，把每一个数直接加起来，基本上就是实打实的算，看到最简单的使用数学知识一行解决：`1 + (num - 1) % 9` 在做算法题时使用数学知识确实可以极快地解决问题

## Move Zeroes##

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

For example, given `nums = [0, 1, 0, 3, 12]`, after calling your function, `nums` should be `[1, 3, 12, 0, 0]`.

我的解答：

```javascript
var moveZeroes = function(nums) {       
    for(var i = nums.length;i >= 0; i--){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0);
        }
    }
};
```

体会：由于题目要求不能复制数组，filter等方法就不能使用，在数组上直接操作的方法有splice，push，sort，shift等等方法，于是利用条件判断句筛选出0，再取代即可。

## Reverse String##

Write a function that takes a string as input and returns the string reversed.

我的解答：

```javascript
var reverseString = function(s) {
    s = s.split("").reverse();
    return s.join("");
};
```

体会：这题主要是将字符串变为数组处理即可。

## Max Consecutive Ones##

Given a binary array, find the maximum number of consecutive 1s in this array.

我的解答：

```javascript
var findMaxConsecutiveOnes = function(nums) {
    var numArr = nums.join("").split("0");
    return Math.max(...numArr.map(n => n.length));
};
```

体会：使用ES6的新特性后写起来简洁许多，将数组化为字符串再拆分成只有1的部分后，最后求出连续1的个数最大值即可。扩展运算符对于数组来说提供了很大的便利







