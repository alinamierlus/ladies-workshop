var placesManager = (function () {
    

    var getPlaceName = function (index) {   
        return getPlace(index).title;
    };

    var getPlaceLocation = function (index) {
        return getPlace(index).location;
    };

    var getPlaceImage = function (index) {
        return getPlace(index).image;
    };

    var getPlaceDescription = function (index) {
        return getPlace(index).description;
    };

    /* private methods */

    var _allLoadedPlaces;

    var loadPlaces = function () {

        var places = [];
        var jqxhr = $.ajax({
            url: '/app/data/places.txt',
            dataType: 'json',
            async: false,
            success: function(data){
                $.each(data, function (id, place) {
                    places.push(place);
                });
            },

        });

        return places;
    };

    var getPlace = function (index)
    {
        if (!(_allLoadedPlaces || '')) {
            _allLoadedPlaces = loadPlaces();
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