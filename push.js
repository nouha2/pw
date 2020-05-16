var push = require ('web-push');

let vapidKeys = {
    publicKey: 'BP8aGUcjAbtM6EMhiSureu25W7ECUvddj8k91i5C8RXQmyqdpOM4pInKttnfAomSIjRctoC7y5MHVNGtnBu_iag',
    privateKey: 'FBSxUzrv425EDZXZjtzstHKukapV0wyCmGk8DBXq7jI'
  }
  push.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )
  let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/dp_LdMJ3Mt8:APA91bEc4lCvWCh32nr9mwLuzSijG4riXRJBOo0DPnY0blW1v1y64kX7rHfjOZpw8vllRn1pQHLqw11mCzux4dMRQ9KLQ8mazBxgr1-rXKzdXgP_ZMDImkaTV344XNou_cWw21d1kLZ7","expirationTime":null,"keys":{"p256dh":"BMfr1y8fZiGCBZpbO0dTxOJwN_-ekxfyf8rYaS5isFd86tQdxra478BjGE10tY9TrWIS7fE02D2lLT2u-8Du6gQ","auth":"VTDfajx021UQkU57ccy07A"}}
  push.sendNotification(sub,'test message')

   /* const port =5000;
    app.listen(port,()=>console.log('server started on port ${port}'));  */