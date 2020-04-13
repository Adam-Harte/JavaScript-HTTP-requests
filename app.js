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
function sendHttpRequest(method, url, data = null) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';

		xhr.onload = function () {
			resolve(xhr.response);
		};

		xhr.send(JSON.stringify(data));
	});

	return promise;
}

sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
	(responseData) => {
		console.log(responseData);
	}
);

// POST request
const xhrPost = new XMLHttpRequest();

xhrPost.open('POST', 'https://jsonplaceholder.typicode.com/posts');

xhrPost.onload = function () {
	console.log(xhrPost.response);
	console.log(JSON.parse(xhrPost.response));
};

xhrPost.send(
	JSON.stringify({
		title: 'POST request',
		body: 'This is a POST request',
		userId: Math.random(),
	})
);

sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
	title: 'POST request',
	body: 'This is a POST request',
	userId: Math.random(),
});

// DELETE
const xhrDelete = new XMLHttpRequest();

xhrDelete.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');

xhrDelete.onload = function () {
	console.log(xhrDelete.response);
	console.log(JSON.parse(xhrDelete.response));
};

xhrDelete.send();

sendHttpRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
