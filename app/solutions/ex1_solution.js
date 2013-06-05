/*REMOVE this file*/

$(function () {

    /* variables */
    var name;
    var location;
    var description;
    var image;


    /* loading first place */
    name = placesManager.getPlaceName(1);
    document.getElementById('title-1').innerHTML = name;

    location = placesManager.getPlaceLocation(1);
    document.getElementById('location-1').innerHTML = location;

    description = placesManager.getPlaceDescription(1);
    document.getElementById('description-1').innerHTML = description;

    image = placesManager.getPlaceImage(1);
    document.getElementById('image-1').src = image;
    document.getElementById('image-1').alt = name;
    document.getElementById('image-1').title = name;


    /* loading second place */
    name = placesManager.getPlaceName(2);
    document.getElementById('title-2').innerHTML = name;

    location = placesManager.getPlaceLocation(2);
    document.getElementById('location-2').innerHTML = location;

    description = placesManager.getPlaceDescription(2);
    document.getElementById('description-2').innerHTML = description;

    image = placesManager.getPlaceImage(2);
    document.getElementById('image-2').src = image;
    document.getElementById('image-2').alt = name;
    document.getElementById('image-2').title = name;


    /* loading third place */
    name = placesManager.getPlaceName(3);
    document.getElementById('title-3').innerHTML = name;

    location = placesManager.getPlaceLocation(3);
    document.getElementById('location-3').innerHTML = location;

    description = placesManager.getPlaceDescription(3);
    document.getElementById('description-3').innerHTML = description;

    image = placesManager.getPlaceImage(3);
    document.getElementById('image-3').src = image;
    document.getElementById('image-3').alt = name;
    document.getElementById('image-3').title = name;


    /* loading forth place */
    name = placesManager.getPlaceName(4);
    document.getElementById('title-4').innerHTML = name;

    location = placesManager.getPlaceLocation(4);
    document.getElementById('location-4').innerHTML = location;

    description = placesManager.getPlaceDescription(4);
    document.getElementById('description-4').innerHTML = description;

    image = placesManager.getPlaceImage(4);
    document.getElementById('image-4').src = image;
    document.getElementById('image-4').alt = name;
    document.getElementById('image-4').title = name;

});
