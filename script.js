// Here i'm using async and await keyword for to fetching details from Api.

let countries = async () => {
  let countriesInfo = await fetch("https://restcountries.com/v3.1/all");
  let response = await countriesInfo.json();
  // console.log(response);

  // Using try and catch instead of then() and catch() block.
    
  try {
    for (let value of response) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="container">
              
           <div class="card">
           <div class="card-header">${value.name.common}</div>
             <img src="${value.flags.png}" class="card-img-top" alt="country-flag">
             <div class="card-body">
               <p ><b>Capital: ${value.capital}</b></p>
               <p ><b>Region: ${value.region}</b></p>
               <p ><b>Country Code: ${value.cca3}</b></p>
               <p><b>subregion :${value.subregion}</b></p>
               <p><b>population :${value.population}</b></p>
               </div>
             </div>
           </div>
       
        </div>`;
      document.body.append(div);
    }
  } catch (error) {
    console.log(error);
  }
};

countries();

