// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBiBueQchiuP9dRQv5ThUOIN_op6NEFp_Y',
    authDomain: 'genus-car-service-4b764.firebaseapp.com',
    projectId: 'genus-car-service-4b764',
    storageBucket: 'genus-car-service-4b764.appspot.com',
    messagingSenderId: '835348421878',
    appId: '1:835348421878:web:957a4b6187489fafa0a0d7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
