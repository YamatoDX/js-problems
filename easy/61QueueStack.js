// https://www.youtube.com/watch?v=BI3JzvNyV3o&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=61&ab_channel=TerribleWhiteboard
// https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function () {
    this.first = [];
    this.length = 0;
    this.currentFirstElement = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.first.push(x);
    this.length++;
    return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const poppedElement = this.first[this.currentFirstElement];
    this.currentFirstElement++;
    this.length--;
    return poppedElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.first[this.currentFirstElement];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.length === 0;
};

// const allInputs = [1, 2, 3];
// var obj = new MyQueue();
// allInputs.forEach(each => obj.push(each));
// var param_2 = obj.pop();
// var param_3 = obj.peek();
// var param_4 = obj.empty();
// console.log(param_2, param_3, param_4);
