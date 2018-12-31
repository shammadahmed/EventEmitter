function delay (milliseconds) {
    return new Promise((resolve, reject) => {
	setTimeout(() => resolve(milliseconds), milliseconds);
    });
}

function countDown (milliseconds) {
    milliseconds ? console.log(milliseconds) : console.log('Done!');
    return new Promise(resolve => {
	setTimeout(() => {
	    resolve(milliseconds - 100);
        }, 100);
    });
}


delay(1000).then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown);
