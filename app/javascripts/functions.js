function createEntry(id, title, location, description, image) {
  var
    list = $('#places'),
    block = '<li>' +
      '<div class="place">' +
        '<div class="photo">' +
          '<img src="images/' + image + '" id="image-' + id + '" alt="image" title="' + title + '">' +
        '</div><div class="content">' +
          '<h3 id="title-' + id + '">' + title + '</h3>' +
          '<div  class="location"><span>Location: </span> <span id="location-' + id + '">' + location + '</span></div>' +
          '<div id="rating-' + id + '" class="rating">' +
            '<span class="star" data-value="1">☆</span>' +
            '<span class="star" data-value="2">☆</span>' +
            '<span class="star" data-value="3">☆</span>' +
            '<span class="star" data-value="4">☆</span>' +
            '<span class="star" data-value="5">☆</span>' +
          '</div>' +
          '<p id="description-' + id + '" class="description">' + description + '</p>' +
        '</div>' +
      '</div>' +
    '</li>';
  list.append(block);
}

function clone(obj) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

var listEntry = {
  image: '',
  id: '',
  title: '',
  location: '',
  description: '',
  setTitle: function(title) {
    this.title = title;
  },
  setId: function(id) {
    this.id = id;
  },
  setImage: function(image) {
    this.image = image;
  },
  setDescription: function(description) {
    this.description = description;
  },
  setLocation: function(location) {
    this.location = location;
  },
  render: function() {
    createEntry(this.id, this.title, this.location, this.description, this.image);
  }
};