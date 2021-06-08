import firebase from 'firebase'
// import firebase-firestore from 'firebase'
// import { ref, onUnmounted } from 'vue'

const config = {
  // Firebase config here
  apiKey: "AIzaSyD5F2KooUgE4PLsA9TJjjyphyni-jS6zWM",
  authDomain: "redcoalv3.firebaseapp.com",
  projectId: "redcoalv3",
  storageBucket: "redcoalv3.appspot.com",
  messagingSenderId: "118869332116",
  appId: "1:118869332116:web:55ad9890c08fa4f613a481",
  measurementId: "G-600KT7LRM5"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const testCollection = db.collection('test')

export const createTest = test => {
  console.log('test');
  return testCollection.add(test)
}
