const apiKey = "878eb74f33a85a4e1a7cebf35a8f225d"; // 여기에 OpenWeatherMap API 키 입력

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("도시를 찾을 수 없습니다.");
      }
      return response.json();
    })
    .then(data => {
      const resultDiv = document.getElementById("result");
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      resultDiv.innerHTML = `
        <h2>${city}</h2>
        <img src="${iconUrl}" alt="${desc}" />
        <p>온도: ${temp}°C</p>
        <p>상태: ${desc}</p>
      `;
    })
    .catch(error => {
      document.getElementById("result").innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}
