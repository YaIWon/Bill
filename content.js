// content.js

// Function to send a POST request to the server
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return response.json();
}

// Function to handle form submission for processing data
async function processData(url) {
  try {
    const response = await postData('/process', { url });
    console.log(response);
    // Handle the response and display the result on the web page
  } catch (error) {
    console.error('An error occurred:', error);
    // Display an error message on the web page
  }
}

// Function to handle form submission for training the model
async function trainModel(url) {
  try {
    const response = await postData('/train', { url });
    console.log(response);
    // Handle the response and display the result on the web page
  } catch (error) {
    console.error('An error occurred:', error);
    // Display an error message on the web page
  }
}

// Function to handle form submission for answering a question
async function answerQuestion(question) {
  try {
    const response = await postData('/answer', { question });
    console.log(response);
    // Handle the response and display the answer on the web page
  } catch (error) {
    console.error('An error occurred:', error);
    // Display an error message on the web page
  }
}

// Function to handle button click event for evolution
async function evolve() {
  try {
    const response = await fetch('/evolve');
    console.log(response);
    // Handle the response and display the result on the web page
  } catch (error) {
    console.error('An error occurred:', error);
    // Display an error message on the web page
  }
}

// Example usage
const urlInput = document.getElementById('urlInput');
const processButton = document.getElementById('processButton');
const trainButton = document.getElementById('trainButton');
const questionInput = document.getElementById('questionInput');
const answerButton = document.getElementById('answerButton');
const evolveButton = document.getElementById('evolveButton');

processButton.addEventListener('click', () => {
  const url = urlInput.value;
  processData(url);
});

trainButton.addEventListener('click', () => {
  const url = urlInput.value;
  trainModel(url);
});

answerButton.addEventListener('click', () => {
  const question = questionInput.value;
  answerQuestion(question);
});

evolveButton.addEventListener('click', () => {
  evolve();
});