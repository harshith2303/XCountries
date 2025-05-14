let FETCH = fetch("https://xcountries-backend.azurewebsites.net/all");

FETCH.then((rawData) => {
  return rawData.json();
}).then((finalData) => {
  xCountries(finalData);
}).catch((err) => {
  console.error("Error fetching data: "+err);
});


function xCountries(data) {
  const pele = document.querySelector(".second");

  data.forEach(ele => {
    const countryDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = ele.flag;
    img.alt = ele.abbr;

   
    const para = document.createElement("p");
    para.textContent = ele.name;

    countryDiv.appendChild(img);
    countryDiv.appendChild(para);

    pele.appendChild(countryDiv);
  });
}
