function doBadThing (forRealz) {
	return  !forRealz ? Promise.resolve('Yay!') :  Promise.reject('No!');
}

doBadThing(true).then(msg => console.log(msg), msg => console.log(msg));
