(()=>{"use strict";document.querySelector("#cityName"),document.querySelector("#citySubmit"),async function(t,n){try{const t=await fetch("https://api.weatherapi.com/v1/current.json?key=732d76b905324f7288a105918242803&q=Tashkent");return await t.json()}catch(t){return console.error("Error!:",t),null}}().then((t=>{console.log(function(t){const{name:n,country:c}=t.location,{temp_c:e,humidity:o,wind_kph:r}=t.current,{condition:i}=t.current;return{location:{name:n,country:c},temp_c:e,humidity:o,wind_kph:r,condition:i}}(t))}))})();