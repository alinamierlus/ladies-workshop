/*REMOVE this file*/

$(function () {

    /* variables */
    var name;
    var location;
    var description;
    var image;


    /* loading first place */
    name = placesManager.getPlaceName(1);
    placesManager.setPlaceName(1, name);
    
    location = placesManager.getPlaceLocation(1);
    placesManager.setPlaceLocation(1, location);

    description = placesManager.getPlaceDescription(1);
    placesManager.setPlaceDescription(1, description);

    image = placesManager.getPlaceImage(1);
    placesManager.setPlaceImage(1, image, name);
    

    /* loading second place */
    name = placesManager.getPlaceName(2);
    placesManager.setPlaceName(2, name);

    location = placesManager.getPlaceLocation(2);
    placesManager.setPlaceLocation(2, location);

    description = placesManager.getPlaceDescription(2);
    placesManager.setPlaceDescription(2, description);

    image = placesManager.getPlaceImage(2);
    placesManager.setPlaceImage(2, image, name);


    /* loading third place */
    name = placesManager.getPlaceName(3);
    placesManager.setPlaceName(3, name);

    location = placesManager.getPlaceLocation(3);
    placesManager.setPlaceLocation(3, location);

    description = placesManager.getPlaceDescription(3);
    placesManager.setPlaceDescription(3, description);

    image = placesManager.getPlaceImage(3);
    placesManager.setPlaceImage(3, image, name);


    /* loading forth place */
    name = placesManager.getPlaceName(4);
    placesManager.setPlaceName(4, name);

    location = placesManager.getPlaceLocation(4);
    placesManager.setPlaceLocation(4, location);

    description = placesManager.getPlaceDescription(4);
    placesManager.setPlaceDescription(4, description);

    image = placesManager.getPlaceImage(4);
    placesManager.setPlaceImage(4, image, name);

});
