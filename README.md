# Interactive Web Map of Film Spots throughout Toronto
## GGR472 Lab 2 - Introducing Mapbox GL JS
https://chloeyloh.github.io/ggr472-lab2/ 

### Project Overview
My project builds on Lab 1 by transitioning from a webpage to an interactive web map using the **Mapbox GL JS** library. The map visualizes filming locations across Toronto, combining a custom basemap with live-loaded spatial data layers.

### Map Features
* **Basemap**: A map style created in Mapbox Studio, featuring star-shaped icons for each location used as set. 
* **Layer 1 (Circle Layer)**: Points added using JavaScript to highlight exact filming coordinates with styled circle markers.
* **Layer 2 (Symbols Layer)**: A label layer that pulls data from the GeoJSON to identify movies directly on the map.

### Implementation
* **Data Source**: External GeoJSON from Lab 1 on GitHub via `addSource`. 
* **Layers**: Utilizes the `map.on('load')` event listener to ensure all layers render in the correct order over the basemap.
* **Layout**: Embedded within a Bootstrap-enabled container.

### File Structure
* `index.html`: Main webpage structure.
* `script.js`: Mapbox GL JS initialization and data visualization logic.
* `style.css`: Positions the map container and defines the visual theme.

**Author**: Chloe Loh  
**Course**: GGR472 - Developing Web Maps
