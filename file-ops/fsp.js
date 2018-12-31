const fs = require('fs');

fsp = {
    readFile (path) {
		return new Promise((resolve, reject) => {
		    fs.readFile(path, 'utf8', (err, data) => {
				err ? reject(err) : resolve(data);
		    });
		});
    },
    writeFile (path, data) {
		return new Promise((resolve, reject) => {
		    fs.writeFile(path, data, 'utf8', err => {
				if (err) reject(err);
				resolve(fs.readFileSync(path, 'utf8'));
		    });
		});
    },
    appendFile (path, data) {
		return new Promise((resolve, reject) => {
		    fs.appendFile(path, data, 'utf8', err => {
				if (err) reject(err);
				resolve(fs.readFileSync(path, 'utf8'));
		    });
		});
    }
};

module.exports = fsp;
