const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// add({
//     orderID: this.state.orderID,
//     token: this.state.token,
// });

exports.store = functions.https.onRequest((request, response) => {
    const db = admin.firestore();
    const order = {
      orderID: 'E2H45JW',
      token: 'dsafdsafdsafdsafasf'
    };
    db.collection('orders').add(order);
    response.send('Done');
});
