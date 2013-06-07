
var placesManager = (function () {
    
    /** public methods**/
    /*
     * Gets the name of the <index> place
     * @param {integer} index
     * @return {string} the place name
     */
    var getPlaceName = function (index) {
        return getPlace(index).title;
    };

    /*
     * Sets the name of the <index> place
     * @param {integer} index
     * @return {string} the place name
     */
    var setPlaceName = function (index, name) {
        document.getElementById('title-'+index).innerHTML = name;
    };


    /*
     * Gets the location of the <index> place
     * @param {integer} index
     * @return {string} the place name
     */
    var getPlaceLocation = function (index) {
        return getPlace(index).location;
    };

    /*
     * Gets the location of the <index> place
     * @param {integer} index
     * @return {string} the place name
     */
    var setPlaceLocation = function (index, location) {
        document.getElementById('location-'+index).innerHTML = location;
    };
    

    /*
     * Gets the image of the <index> place
     * @param {integer} index
     * @return {string} the place image
     */
    var getPlaceImage = function (index) {
        return getPlace(index).image;
    };

    /*
     * Sets the image of the <index> place
     * @param {integer} index
     * @return {string} the place image
     */
    var setPlaceImage = function (index, image, name) {
        document.getElementById('image-' + index).src = image;
        document.getElementById('image-' + index).alt = name;
        document.getElementById('image-' + index).title = name;
    };

    /*
     * Gets the description of the <index> place
     * @param {integer} index
     * @return {string} the place description
     */
    var getPlaceDescription = function (index) {
        return getPlace(index).description;
    };

    /*
     * Sets the description of the <index> place
     * @param {integer} index
     * @return {string} the place description
     */
    var setPlaceDescription = function (index, description) {
        document.getElementById('description-' + index).innerHTML = description;
    };
    


    /* private methods */
    var allLoadedPlaces;

    /*
     * Gets all the information of the <index> place
     * @param {integer} index
     * @return {place} the place data
     */
    var getPlace = function(index) {
        if (!(allLoadedPlaces || '')) {
            allLoadedPlaces = places;
        }
        var selectedPlace;

        if (allLoadedPlaces.length >= index) {
            selectedPlace = allLoadedPlaces[index - 1];
        } else {
            selectedPlace = allLoadedPlaces[0]; //  return the first one
        }

        return selectedPlace;
    };

    return {
        getPlaceName: getPlaceName,
        getPlaceLocation: getPlaceLocation,
        getPlaceImage: getPlaceImage,
        getPlaceDescription: getPlaceDescription,
        setPlaceName: setPlaceName,
        setPlaceLocation: setPlaceLocation,
        setPlaceImage: setPlaceImage,
        setPlaceDescription: setPlaceDescription,
    };
})();
