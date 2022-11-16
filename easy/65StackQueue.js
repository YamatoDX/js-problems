// https://leetcode.com/problems/implement-stack-using-queues/
// https://www.youtube.com/watch?v=t3OvIcsaXjk&list=PLko32sysgiEPJL_t3A7UAZQIUUixV_sw2&index=65&ab_channel=TerribleWhiteboard

// Queue definitions starts
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

// Queue definitions starts

// ************************************************

var MyStack = function () {
    this.elements = new MyQueue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.elements.push(x);
    return;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    const poppedElement = this.elements.first[this.elements.length - 1];
    delete this.elements.first[this.elements.length - 1];
    this.elements.length -= 1;
    this.elements.currentFirstElement += 1;
    return poppedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const poppedElement = this.elements.first[this.elements.length - 1];
    return poppedElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.elements.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
