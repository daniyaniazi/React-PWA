// import * as firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyAZ_Eyb-AQfDzVnlEsQQ3O_4DI_QaZNYz8",
//     authDomain: "pwa-push-noti-app.firebaseapp.com",
//     projectId: "pwa-push-noti-app",
//     storageBucket: "pwa-push-noti-app.appspot.com",
//     messagingSenderId: "823890112110",
//     appId: "1:823890112110:web:5f669c9c6a9c9c13ffc07f",
//     measurementId: "G-TBMEELWKF4"
// };
// firebase.initializeApp(firebaseConfig)
// const messaging = firebase.messaging();
// export function InitNotification() {
//     Notification.requestPermission().then((permission) => {
//         console.log(permission)
//         if (permission == 'granted') {
//             messaging.getToken().then((currentToken) => {
//                 if (currentToken) {
//                     console.log("TOKEN =>", currentToken)
//                 } else {
//                     console.log('No registration token available. Request permission to generate one.');
//                 }
//             }).catch((err) => {
//                 console.log('An error occurred while retrieving token. ', err);
//             });
//         }
//     })

// }