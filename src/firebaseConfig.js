import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyAqxOYN3msgy2KB6glOOXqKhwlm_-UEruY",
    authDomain: "vuegram-bcc16.firebaseio.com",
    databaseURL: "https://vuegram-bcc16.firebaseio.com",
    projectId: "vuegram-bcc16",
    storageBucket: "vuegram-bcc16.appspot.com"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser



// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const studentsCollection = db.collection('students')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection,
    studentsCollection
}