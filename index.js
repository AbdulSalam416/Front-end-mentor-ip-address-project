
let map = L.map('map').setView([51,-0.5],10)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51,-0.5]).addTo(map);



 function results(user_input){


    let link = `https://geo.ipify.org/api/v2/country,city?apiKey=at_VPyviLaJUEpdZEySadxbZpvIeJnNo&ipAddress=${user_input}`
    

    fetch(link,{ cache: 'no-cache' })
    .then((endpoint)=>endpoint.json() )
    .then((data)=>{
        
       showData(data)
        showMap(data)
       
       
    })
}



function showData(data){
    console.log(data)
    document.getElementById("ip-value").innerText= data.ip;
    document.getElementById("location-value").innerText =`${data.location.city}, ${data.location.region}`
    document.getElementById("timezone-value").innerText = data.location.timezone;
    document.getElementById("isp-value").innerText = data.isp;
   
  
}

function showMap(data){
    map.setView([data.location.lat, data.location.lng],10)
    marker.setLatLng([data.location.lat, data.location.lng])
}





document.getElementById("input-form").addEventListener("submit", (e)=>{
    e.preventDefault;
    user_input = (e.target[0].value);
    results(user_input)
})




