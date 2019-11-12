/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.stack = {};
	this.length = 0;
}

Stack.prototype = {
	push: function(element) {
		this.stack[this.length] = element;
		this.length += 1;
		return this.length;
	}
	pop: function() {
		if (this.length > 0) {
			let lastElement = this.length - 1;
			let returnValue = this.stack[lastElement];
			delete this.stack[lastElement];
			this.length -= 1;
			return returnValue;
		} else {
			return undefined;
		}
	}
}  


/**
* Queue Class
*/


function Queue() {
	this.queue = {};
	this.length = 0;
}

Queue.prototype = {
	push: function(element) {
		this.queue[this.length] = element;
		this.length += 1;
		return this.length;
	}
	shift: function() {
		if (this.length > 0) {
			let returnValue = this.queue[0];
			delete this.queue[0];
			this.length -= 1;
			return returnValue;
		} else {
			return undefined;
		}
	}
}

module.exports = {Stack: Stack, Queue: Queue};
