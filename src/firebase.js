// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'; // นำเข้าฟังก์ชันที่เกี่ยวข้องกับการใช้งาน Authentication

const firebaseConfig = {
    apiKey: "AIzaSyBEjvI5nXUksdkaTeowk39XQnGe6RGI-Ro",
    authDomain: "firework-shop.firebaseapp.com",
    projectId: "firework-shop",
    storageBucket: "firework-shop.firebasestorage.app",
    messagingSenderId: "248651094552",
    appId: "1:248651094552:web:19d3553360ecff12cf416d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// กำหนด collection สำหรับสินค้า
const productsCollection = collection(db, 'products');

export { auth, db, productsCollection, getDocs, addDoc, deleteDoc, doc, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
