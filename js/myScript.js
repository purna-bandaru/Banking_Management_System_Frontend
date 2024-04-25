class EasyHTTP {
    // Make an HTTP GET Request
    async get(url) {
        // Awaiting for fetch response
        const response = await fetch(url);
        // Awaiting for response.json()
        const resData = await response.json();
        // Returning result data
        return resData;
    }
    // Make an HTTP POST Request
    async post(url, data) {
        // Awaiting for fetch response and
        // defining method, headers and body
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        // Awaiting response.json()
        const resData = await response.json();
        // Returning result data
        return resData;
    }
}

function sendRequest(postData) {
     // Instantiating EasyHTTP
     const http = new EasyHTTP;
    // Post prototype method
    http.post(
        'https://jsonplaceholder.typicode.com/users',
        postData)
        // resolving promise for response data
        .then(data => displayResult('POST Request:', data))
        // resolving promise for error
        .catch(err => console.error('POST Error:', err));
}

// Function to display results
function displayResult(title, data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>${title}</strong><br>${JSON.stringify(data,
        null, 2)}<br><br>`;

}