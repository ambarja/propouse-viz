// config map
    let config = {
        minZoom: 1,
        maxZoom: 18,
    };
// magnification with which the map will start
    const zoom = 11;
// co-ordinates
    const lat = -13.74131;
    const lng = -71.01907;
    const map = L.map("map", config).setView([lat, lng], zoom);
    
// BaseMap
    L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'}
        ).addTo(map);
    
// custom popup image + text
    const customPopup = `<div class="customPopup">
        <ul class="tabs-example" data-tabs>
            <li><a data-tabby-default href="#sukiennice">Sukiennice</a></li>
            <li><a href="#town-hall-tower">Town Hall Tower</a></li>
        </ul>
        <div id="sukiennice">
            <figure><img src="https://user-images.githubusercontent.com/23284899/190207527-ad082aff-2fef-473a-90e7-b57b0b8317bf.jpg"><figcaption>Source: wikipedia.org</figcaption></figure><div>En los Andes Peruanos son importantes los glaciares porque son fuentes de agua para diferentes actividades de la población durante la época seca ...<a href="#" target="_blank">→ más información</a></div>
        </div>
        <div id="town-hall-tower">
            <video src="https://gitlab.com/ambarja/videos/-/raw/main/test.mp4" style="height: 202px; width: 300px; margin: auto;" controls></video>
            <sourcevideo>Source: wikipedia.org</figcaption>
            <div>En los Andes Peruanos son importantes los glaciares porque son fuentes de agua para diferentes actividades de la población durante la época seca ...<a href="#" target="_blank">→ más información</a></div>
        </div>
        </div>`;
    
// specify popup options
    const customOptions = {
        minWidth: "220", // set max-width
        keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
    };
    
// create marker object, pass custom icon as option, pass content and options to popup, add to map
    const marker = L.marker([-13.76783,-71.04474])
        .bindPopup(customPopup, customOptions)
        .on("click", runTabs);
        
    marker.addTo(map);
    
// center map when click on marker
    function runTabs() {
        const tabs = new Tabby("[data-tabs]");
    }

// create info legend
    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = function () {
    let div = L.DomUtil.create("div", "description");
    L.DomEvent.disableClickPropagation(div);
    const text =
        "<b>Descripcion ⛰️ </b><br>En los Andes Peruanos son importantes los glaciares porque son fuentes de agua para diferentes actividades de la población durante la época seca. Además, el derretimiento de los glaciares aporta a la disponibilidad hídrica contribuyendo a formar lagunas, riachuelos y aguas subterráneas.";
    div.insertAdjacentHTML("beforeend", text);
    return div;
    };
    legend.addTo(map);
