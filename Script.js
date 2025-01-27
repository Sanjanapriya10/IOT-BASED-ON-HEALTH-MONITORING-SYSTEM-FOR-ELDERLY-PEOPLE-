const getRandomHealthData = () => ({
  heartRate: Math.floor(Math.random() * (100 - 60) + 60),
  oxygenLevel: Math.floor(Math.random() * (100 - 90) + 90),
  bodyTemp: (36 + Math.random() * 1.5).toFixed(1),
  fallDetected: Math.random() > 0.9,
});

document.getElementById("updateButton").addEventListener("click", () => {
  const data = getRandomHealthData();

  document.getElementById("heartRate").textContent = data.heartRate;
  document.getElementById("oxygenLevel").textContent = data.oxygenLevel;
  document.getElementById("bodyTemp").textContent = data.bodyTemp;

  const fallStatus = document.getElementById("fallStatus");
  fallStatus.textContent = data.fallDetected
    ? "Fall Detected! Alert Sent!"
    : "No Fall Detected";
  fallStatus.style.color = data.fallDetected ? "red" : "green";
});
