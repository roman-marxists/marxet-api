// // Import the functions you need from the SDKs you need
// const { initializeApp } = require('firebase/app');
// const { getStorage, ref, uploadBytes } = require('firebase/storage');
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyC5GQwH78Y2cUQSa8oDMcf3PQL-M8HGb0Q',
//   authDomain: 'marxet-ef77d.firebaseapp.com',
//   projectId: 'marxet-ef77d',
//   storageBucket: 'marxet-ef77d.appspot.com',
//   messagingSenderId: '933239701355',
//   appId: '1:933239701355:web:c8519f0e5f19416c53562e',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// const storageRef = ref(storage, 'some-child');

// // 'file' comes from the Blob or File API
// const doUploadBytes = (file) =>
//   uploadBytes(storageRef, file).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   });

// module.exports = {
//   doUploadBytes,
// };
