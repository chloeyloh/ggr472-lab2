// Creating the map and setting the access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hsb2Vsb2giLCJhIjoiY21sZ3UwZWYzMDIyazNocHNmcnFvbWZiNCJ9.S_Bvs5AGp4m2AF22M0fdiQ'; // Mapbox access token

// Initializing the map with the specified container, style, center, and zoom level
const map = new mapboxgl.Map({
    container: 'my-map', // container ID
    style: 'mapbox://styles/chloeloh/cmlguusrw00jx01qq87ehggny', // style URL
    center: [-79.3832, 43.6532], // Starting position on Downtown Toronto
    zoom: 12 // Starting zoom position
});

// Sets when the map has finished loading and then adds the GeoJSON source and layer to visualize the film spots data on the map
map.on('load', () => {
    // Adding my GeoJSON source to the map using the raw link from my Lab 1's GitHub repository
    map.addSource('film-spots-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/chloeyloh/ggr472-lab1/refs/heads/main/lab1map.geojson'
    });

    // Adding the layers to the map to visualize the GeoJSON data 
    // Layer 1: Circle layer to represent the film spots data points on the map
    map.addLayer({
        id: 'filming-point',
        type: 'circle',
        source: 'film-spots-data', // Links back to the source added above
        paint: {
            'circle-radius': 5,
            'circle-color': '#e9573aff'
        }
    });

    // Layer 2: Symbol layer to display the name of the film at each data point on the map
    map.addLayer({
        id: 'filming-label',
        type: 'symbol',
        source: 'film-spots-data', // Links back to the same source above
        layout: {
            'text-field': ['get', 'name'], // Gets the 'name' property from the GeoJSON data to display as the label
            'text-size': 12,
            'text-offset': [0, 1.5] // Offsets the label slightly above the circle marker
        },
        paint: {
            'text-color': '#e9573aff'
        },

        'sourcelayer': 'chloeloh.avth8srk' // Links to tileset layer created from the GeoJSON data in Mapbox Studio
    },
        'filming-point' // Puts this layer above the 'filming-point' layer to ensure labels are visible on top of the markers
    );
});

