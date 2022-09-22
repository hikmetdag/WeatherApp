
export const geoLocation= ()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=()=>{
            long=position.cords.longitude;
            lat=position.cords.latitude;
        })
    }
}