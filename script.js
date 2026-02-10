mapboxgl.accessToken = 'pk.eyJ1IjoiY2hsb2Vsb2giLCJhIjoiY21sZ3UwZWYzMDIyazNocHNmcnFvbWZiNCJ9.S_Bvs5AGp4m2AF22M0fdiQ';

const map = new mapboxgl.Map({
    container: 'my-map', // container ID
    style: 'mapbox://styles/chloeloh/cmlguusrw00jx01qq87ehggny', // style URL
    center: [-122.4194, 37.7749], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

