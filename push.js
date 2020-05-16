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
  let sub ={};
  push.sendNotification(sub,'test message')