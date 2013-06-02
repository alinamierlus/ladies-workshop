$(function(){

    /* variables */
    var name;
    var location;
    var description;
    var image;


    /* loading first place */
    name = placesManager.getPlaceName(1);
    document.getElementById('title1').innerHTML = name;

    location = placesManager.getPlaceLocation(1);
    document.getElementById('location1').innerHTML = location;

    description = placesManager.getPlaceDescription(1);
    document.getElementById('description1').innerHTML = description;

    image = placesManager.getPlaceImage(1);
    document.getElementById('image1').src = image;
    document.getElementById('image1').alt = name;
    document.getElementById('image1').title = name;


    /* loading second place */
    name = placesManager.getPlaceName(2);
    document.getElementById('title2').innerHTML = name;

    location = placesManager.getPlaceLocation(2);
    document.getElementById('location2').innerHTML = location;

    description = placesManager.getPlaceDescription(2);
    document.getElementById('description2').innerHTML = description;

    image = placesManager.getPlaceImage(2);
    document.getElementById('image2').src = image;
    document.getElementById('image2').alt = name;
    document.getElementById('image2').title = name;


    /* loading third place */
    name = placesManager.getPlaceName(3);
    document.getElementById('title3').innerHTML = name;

    location = placesManager.getPlaceLocation(3);
    document.getElementById('location3').innerHTML = location;

    description = placesManager.getPlaceDescription(3);
    document.getElementById('description3').innerHTML = description;

    image = placesManager.getPlaceImage(3);
    document.getElementById('image3').src = image;
    document.getElementById('image3').alt = name;
    document.getElementById('image3').title = name;


    /* loading forth place */
    name = placesManager.getPlaceName(4);
    document.getElementById('title4').innerHTML = name;

    location = placesManager.getPlaceLocation(4);
    document.getElementById('location4').innerHTML = location;

    description = placesManager.getPlaceDescription(4);
    document.getElementById('description4').innerHTML = description;

    image = placesManager.getPlaceImage(4);
    document.getElementById('image4').src = image;
    document.getElementById('image4').alt = name;
    document.getElementById('image4').title = name;

});
