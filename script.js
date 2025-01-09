async function runTest(testName) {
    document.getElementById('output').innerText = `Running ${testName}...`;
    // Simulate test running (replace this with actual backend calls if needed)
    setTimeout(() => {
        document.getElementById('output').innerText = `${testName} completed successfully!`;
    }, 2000);
}
