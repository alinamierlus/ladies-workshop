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
     * Gets the location of the <index> place
     * @param {integer} index
     * @return {string} the place name
     */
    var getPlaceLocation = function (index) {
        return getPlace(index).location;
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
     * Gets the description of the <index> place
     * @param {integer} index
     * @return {string} the place description
     */
    var getPlaceDescription = function (index) {
        return getPlace(index).description;
    };


    /* private methods */
    //var _allLoadedPlaces;

    /*
     * Reads 'places.txt' file, where the place data is stored
     * @return {place array}  All places that have the file
     */
    //var loadPlaces = function () {

    //    var places = [];
    //    var jqxhr = $.ajax({
    //        url: '/app/data/places.txt',
    //        dataType: 'json',
    //        async: false,
    //        success: function (data) {
    //            $.each(data, function (id, place) {
    //                places.push(place);
    //            });
    //        },

    //    });

    //    return places;
    //};

    /*
     * Gets all the information of the <index> place
     * @param {integer} index
     * @return {place} the place data
     */
    var getPlace = function (index) {
        if (!(_allLoadedPlaces || '')) {
            _allLoadedPlaces = places;
        }
        var selectedPlace;

        if (_allLoadedPlaces.length >= index) {
            selectedPlace = _allLoadedPlaces[index - 1];
        }
        else {
            selectedPlace = _allLoadedPlaces[0]; //  return the first one
        }

        return selectedPlace
    }

    return {
        getPlaceName: getPlaceName,
        getPlaceLocation: getPlaceLocation,
        getPlaceImage: getPlaceImage,
        getPlaceDescription: getPlaceDescription
    }
})();