// XMLHttpReqeust object
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// JSON data
// xhr.responseType = 'json';

xhr.onload = function () {
	console.log(xhr.response);
	console.log(JSON.parse(xhr.response));
};

xhr.send();

// promisifying XMLHttpReqeust
function sendHttpRequest(method, url) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';

		xhr.onload = function () {
			resolve(xhr.response);
		};

		xhr.send();
	});

	return promise;
}

sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
	(responseData) => {
		console.log(responseData);
	}
);
