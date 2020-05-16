self.addEventListener('push', function(event) {
    var options= {
  body:'this notification was generated from a push !',
  icon :'image/example.png',
  variable:[100,50,100],
  data:{
      dataOfARRIVAL:Data.now(),
      primaryKey:'2'
  },
  actions :[
  {
    action:'explore',
    title :'explore this new world',
    icon:'image/example.png'
},
    {
        action: 'close', title: 'colse', icon:'image/xmark.png'
    }
  ]
};
 
    event.waitUntil(self.registration.showNotification('hello word!',options));
  });