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
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response);
			} else {
				reject(new Error('Something went wrong'));
			}
		};

		xhr.onerror = function () {
			reject(new Error('Request failed to send!'));
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

// error handling
const xhr2 = new XMLHttpRequest();

xhr2.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');

xhr2.onload = function () {
	if (xhr2.status >= 200 && xhr2.status < 300) {
		console.log(xhr2.response);
		console.log(JSON.parse(xhr2.response));
	} else {
		throw new Error('Something went wrong');
	}
};

xhr2.onerror = function () {
	console.log(xhr2.response);
	console.log(xhr2.status);
};

xhr2.send();

// fetch
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => {
		console.log(response);
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});
