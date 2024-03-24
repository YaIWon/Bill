// background.js

// Perform background tasks or operations here

// Example background task
function performBackgroundTask() {
  // Code for background task
  console.log("Performing background task");
}

// Example function to communicate with the content script
function sendMessageToContentScript(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
}

// Example event listener for receiving messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Code for handling received messages
  if (request.action === "doSomething") {
    // Perform specific action based on the received message
    console.log("Received message from content script:", request);
    // Send response back to content script if needed
    sendResponse({ message: "Action completed successfully" });
  }
});

// Example function to execute background tasks at regular intervals
function startPeriodicTask() {
  setInterval(function () {
    // Perform periodic task
    console.log("Executing periodic task");
  }, 5000); // Execute every 5 seconds
}

// Example function to set up alarms for scheduled tasks
function setAlarmForTask() {
  chrome.alarms.create("taskAlarm", {
    when: Date.now() + 60000, // Set alarm to trigger after 1 minute
  });
}

// Example event listener for handling alarm triggers
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "taskAlarm") {
    // Perform scheduled task
    console.log("Executing scheduled task");
  }
});

// Example function to interact with storage
function saveDataToStorage(data) {
  chrome.storage.local.set({ myData: data }, function () {
    console.log("Data saved to storage");
  });
}

// Example function to retrieve data from storage
function getDataFromStorage() {
  chrome.storage.local.get("myData", function (result) {
    console.log("Retrieved data from storage:", result.myData);
  });
}

// Example function to open a new tab
function openNewTab(url) {
  chrome.tabs.create({ url: url }, function (tab) {
    console.log("Opened new tab:", tab);
  });
}

// Call the functions or set up listeners as needed
performBackgroundTask();
sendMessageToContentScript("Hello content script!");
startPeriodicTask();
setAlarmForTask();
saveDataToStorage({ key: "value" });
getDataFromStorage();
openNewTab("https://example.com");