chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.startsWith("http")) {
    const url = new URL(tab.url);
    const site = url.hostname;

    fetch("http://localhost:5000/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        site,
        timeSpent: 10, // dummy time spent
      }),
    }).catch((err) => console.error("Error tracking site:", err));
  }
});
