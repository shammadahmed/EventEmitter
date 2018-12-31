function Emitter () {
	const eventTypes = [];
	const eventListeners = [];
}

Emitter.prototype.on = function (eventType, callback) {
	this.eventListeners.push({eventType, callback})
}

Emitter.prototype.emit = function (eventType) {
	this.eventListeners.forEach(listener => {
		if (listener.eventType === eventType) listener.callback();
	});
}

Emitter.prototype.removeListener = function (eventType, callback) {
	this.eventListeners.splice(this.eventListeners.indexOf({eventType, callback}), 1);
}

Emitter.prototpe.removeAllListeners = function (eventType) {
	this.eventListeners = [];
}

module.exports = Emitter;