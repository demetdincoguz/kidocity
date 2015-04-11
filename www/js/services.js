angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Blender Amsterdam',
    lastText: 'Ruysdaelstraat 9-11-13\n1071 WX Amsterdam\n020 8452615',
    face: 'http://metowelive.vanons.netdna-cdn.com/wp-content/uploads/2014/11/Blender.jpg?a182d9'
  }, {
    id: 1,
    name: 'Cafe Restaurant Amsterdam',
    lastText: 'Watertorenplein 6, Amsterdam\n020 682 2666',
    face: 'http://www.caferestaurantamsterdam.nl/fotoalbum/1026_temp.jpg'
  }, {
    id: 2,
    name: 'Dish Global Kitchen',
    lastText: 'Overtoom 255, 1054 HW Amsterdam\n020 616 5835',
    face: 'http://lh4.ggpht.com/_tK2IgltJehQ/SfWi1DtesVI/AAAAAAAAAPg/nUWudguv2wg/s640/IMGP1216.JPG'
  }, {
    id: 3,
    name: '1900',
    lastText: 'Hogeweg 48, 1098 CE',
    face: 'http://michaeldurgaram.com/wp-content/uploads/2013/10/b1.jpg'
  },  {
    id: 4,
    name: 'Kantijl & De Tijger',
    lastText: 'Spuistraat 291/293, 1012 VS',
    face: 'http://farm7.static.flickr.com/6054/6282234163_e92d7cc9f0.jpg'
  },{
    id: 5,
    name: 'Het Groot Melkhuis',
    lastText: 'Vondelpark 2, 1071 AA',
    face: 'http://www.booza.nl/images/melkhuis.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
