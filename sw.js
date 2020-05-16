self.addEventListener('push', function(e) {
   
     var options= {
  body:'this notification was generated from a push !',
  icon :" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1200px-Archlinux-icon-crystal-64.svg.png",
  variable:[100,50,100],
  data:{
      dateOfArrival:Date.now(),
      primaryKey:'2'
  },
  actions :[
  {
    action:'explore',
    title :'explore this new world',
    icon:"https://icon2.cleanpng.com/20180330/sxw/kisspng-check-mark-computer-icons-clip-art-green-tick-5abe6e2d88aca0.5352612615224294855598.jpg"
},
    {
        action: 'close', title: 'colse', icon:" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1200px-Archlinux-icon-crystal-64.svg.png"
    }
  ]
};
 
    e.waitUntil(self.registration.showNotification('hello word!',options));
  });