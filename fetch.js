document.getElementById('load-data').addEventListener('click',function(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>allCounrty(data))
    
    
    
    function allCounrty(countries){
        const slice=countries.slice(0,20);
        slice.map(country=>{
            const container=document.getElementById('country');
            
            const div=document.createElement('div');
            div.className='country-box'
            div.innerHTML=`<h1> Name:${country.name.common}</h1>
                <h2>Capital: ${country.capital} </h2>
                <h2 >Population:${country.population}</h2>
                <img src=${country.flags.png}>
            `
            container.appendChild(div)
        })
    }
})