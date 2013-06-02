(function(root, $) {

    /*
     * Gets all Ratings blocks
     * @return {Node Array} An Array of Nodes that have the class
     * 'raiting'
     */
    function getAllRatings () {
        return $('.rating').toArray();
    }
    root.getAllRatings = getAllRatings;

    /*
     * Gets all Stars blocks
     * @param {HTML Node} rating
     * @return {Node Array} All Nodes that have a class 'star',
     * inside the rating param
     */
    function getStarsFor (rating) {
        return $(rating).find('.star').toArray();
    }
    root.getStarsFor = getStarsFor;

    /*
     * convinience method to add the class 'active' to a Star
     * this will be use to set the color of the star
     * @param {HTML Node} star
     * @return void
     */
    function makeStarActive (star) {
        $(star).addClass('active');
    }
    root.makeStarActive = makeStarActive;

    /*
     * @param {HTML node} star
     * @return {boolean} true if the star has the 'active'
     * class; false otherwise
     */
    function isStarActive (star) {
        return $(star).hasClass('active');
    }
    root.isStarActive = isStarActive;

    /*
     * Convinience method to remove the class 'active' of a node
     * @param {HTML Node} star
     * @return void
     */
    function makeStarInactive (star) {
        $(star).removeClass('active');
    }
    root.makeStarInactive = makeStarInactive;

    /*
     * convinience method to add the class 'selected' to a Star
     * the 'selected' class is the same as the 'active', but this
     * makes more readable the code later on
     * @param {HTML Node} star
     * @return void
     */
    function makeStarSelected (star) {
        $(star).addClass('selected');
    }
    root.makeStarSelected = makeStarSelected;

    /*
     * @param {HTML node} star
     * @return {boolean} true if the star has the 'selected'
     * class; false otherwise
     */
    function isStarSelected (star) {
        return $(star).hasClass('selected');
    }
    root.isStarSelected = isStarSelected;

    /*
     * Convinience method to remove the class 'selected' of a node
     * @param {HTML Node} star
     * @return void
     */
    function makeStarNotSelected (star) {
        $(star).removeClass('selected');
    }
    root.makeStarNotSelected = makeStarNotSelected;

    /*
     * Changes the content of the 'star' element to a full star (★)
     * @param {HTML Node} star
     * @return void
     */
    function makeSolidStar (star) {
        $(star).html('★');
    }
    root.makeSolidStar = makeSolidStar;

    /*
     * Changes the content of the 'star' element to a full star (☆)
     * @param {HTML Node} star
     * @return void
     */
    function makeOutlineStar (star) {
        $(star).html('☆');
    }
    root.makeOutlineStar = makeOutlineStar;

    /*
     * Retrieves the value of the star, this could be one of [1, 2, 3, 4, 5]
     * @param {HTML Node} star
     * @return integer
     */
    function getValueFor (star) {
        return $(star).data('value');
    }
    root.getValueFor = getValueFor;


    /*
     * Wrapper around the events to facilitate the creating new behaviors
     * in the context of new HTML nodes, during loops
     *
     * *Implementations:*
     * - onMouseOver
     * - onMouseOut
     * - onClick
     */
    function curriedEvents (event) {
        return function (fn) {
            return function (element) {
                $(element).on(event, function() {
                    fn(element);
                });
            }
        }
    }

    /*
     * Convinience function to work with mouseover event in the rating
     * system
     *
     * Usage:
     * // Create a behavior when the mouseover event happens
     * var makeFilledStar = onMouseOver(makeSolidStar);
     * // Then execute the new behavior in the context of a new HTML Node
     * makeFilledStar(<Node>)
     */
    root.onMouseOver = curriedEvents('mouseover.star');

    /*
     * Convinience function to work with mouseout event in the rating
     * system
     *
     * Usage:
     * // Create a behavior when the mouseout event happens
     * var makeFilledStar = onMouseOut(makeSolidStar);
     * // Then execute the new behavior in the context of a new HTML Node
     * makeFilledStar(<Node>)
     */
    root.onMouseOut = curriedEvents('mouseout.star');

    /*
     * Convinience function to work with click event in the rating
     * system
     *
     * Usage:
     * // Create a behavior when the click event happens
     * var makeFilledStar = onClick(makeSolidStar);
     * // Then execute the new behavior in the context of a new HTML Node
     * makeFilledStar(<Node>)
     */
    root.onClick = curriedEvents('click.star');

}(window, jQuery));

/* REFERENCE IMPLMENTATION OF THE RATING SYSTEM */

(function(root) {

    /*
     * Creates an instance of a Rating System
     *
     * @constructor
     * @param {HTML Node} The block that contains the stars
     */
    function Rating (ratingBlock) {
        // aliases for the dom elements to be easy accesible
        this.html = {
            container: ratingBlock,
            stars: getStarsFor(ratingBlock)
        }
        // keep the the internal rating
        this.rating = 0;

        // initialize all events handlers
        this.initEvents();
    };
    // expose the Rating Object
    root.Rating = Rating;

    /*
     * Sets all the necesary events DOM handlers
     * @return void
     */
    Rating.prototype.initEvents = function() {
        var stars = this.html.stars;
        // This can be scoped so we could avoid individual handlers on the
        // stars nevertheless it's easier to understand this way
        stars.forEach(onClick(this.onStarClick.bind(this)));
        stars.forEach(onMouseOver(this.onStarMouseOver.bind(this)));
        stars.forEach(onMouseOut(this.onStarMouseOut.bind(this)));
    };

    /*
     * Makes an star active
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.activateStar = function(star) {
        makeSolidStar(star);
        makeStarActive(star);
    };

    /*
     * Makes an star inactive
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.deactivateStar = function(star) {
        makeOutlineStar(star);
        makeStarInactive(star);
    };

    /*
     * Gets the previous stars that are not selected
     * @param {HTML Node} star
     * @return {Node Array}
     */
    Rating.prototype.getPreviousStars = function(star) {
        var stars    = this.html.stars,
            maxValue = getValueFor(star);

        return stars.filter(function(star){
            return getValueFor(star) <= maxValue && !isStarSelected(star);
        });
    };

    /*
     * Internal method lo look for the nexts stars
     * @param {HTML Node} star
     * @return {Node Array}
     */
    Rating.prototype.getNextStars = function(star) {
        var stars    = this.html.stars,
            maxValue = getValueFor(star);

        return stars.filter(function(star){
            return getValueFor(star) > maxValue;
        });
    };

    /*
     * Handler for the click event
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.onStarClick = function(star) {
        var previousStars = this.getPreviousStars(star),
            nextStars     = this.getNextStars(star);

        previousStars.forEach(this.selectStar);
        nextStars.forEach(this.unselectStar);
        this.setRating(getValueFor(star));
    };

    /*
     * Handler for the mouseout event
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.onStarMouseOut = function(star) {
        if (isStarSelected(star)) return;

        var previousStars = this.getPreviousStars(star);

        previousStars.forEach(this.deactivateStar);
    };

    /*
     * Handler for the mouseover event
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.onStarMouseOver = function(star) {
        if (isStarSelected(star)) return;

        var previousStars = this.getPreviousStars(star);

        previousStars.forEach(this.activateStar);
    };

    /*
     * Make a star selected
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.selectStar = function(star) {
        makeStarActive(star);
        makeStarSelected(star);
        makeSolidStar(star);
    };

    /*
     * Sets the internal value of the rating
     * @param {integer} value
     * @return void
     */
    Rating.prototype.setRating = function(value) {
        this.rating = value;
    };

    /*
     * Make a star not selected
     * @param {HTML Node} star
     * @return void
     */
    Rating.prototype.unselectStar = function(star) {
        makeStarNotSelected(star);
        makeStarInactive(star);
        makeOutlineStar(star);
    };

}(window));