// Creating the map and setting the access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hsb2Vsb2giLCJhIjoiY21sZ3UwZWYzMDIyazNocHNmcnFvbWZiNCJ9.S_Bvs5AGp4m2AF22M0fdiQ';

// Initializing the map with the specified container, style, center, and zoom level
const map = new mapboxgl.Map({
    container: 'my-map', // container ID
    style: 'mapbox://styles/chloeloh/cmlguusrw00jx01qq87ehggny', // style URL
    center: [-79.3832, 43.6532], // Starting position on Downtown Toronto
    zoom: 12 // starting zoom position
});

map.on('load', () => {
    // Adding my GeoJSON source to the map using the raw link from my Lab 1's GitHub repository
    map.addSource('film-spots-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/chloeyloh/ggr472-lab1/refs/heads/main/lab1map.geojson'
    });

    // Adding the layers to the map to visualize the GeoJSON data with specified styling
    map.addLayer({
        id: 'American Psycho',
        type: 'circle',
        source: 'film-spots-data',
        paint: {
            'circle-radius': 5,
            'circle-color': '#bcbf00ff'        
        }   
        });
});
