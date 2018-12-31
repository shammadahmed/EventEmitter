function square(num) {
	return new Promise((resolve, reject) => {
		typeof num === 'number' ? resolve(num**2) : reject('Not a number!');
	});
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => square(n));

Promise.all(arr).then(results => console.log(results));


