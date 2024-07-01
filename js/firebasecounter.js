import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc, onSnapshot, increment } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTbM2-14x-6ru8cRi_SNhO6umyokqO5F4",
  authDomain: "protfoliowebsite-7e7e6.firebaseapp.com",
  projectId: "protfoliowebsite-7e7e6",
  storageBucket: "protfoliowebsite-7e7e6.appspot.com",
  messagingSenderId: "364537547652",
  appId: "1:364537547652:web:682f9f41ad821c6fa02bd1",
  measurementId: "G-FZ0EHMZZZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ziyaretçi sayısını güncelleme fonksiyonu
function updateVisitorCount() {
    const countRef = doc(db, 'counter', '3tUNUGuaaNewQ4d6URx8');

    getDoc(countRef).then(docSnap => {
        if (docSnap.exists()) {
            updateDoc(countRef, {
                count: increment(1)
            });
        } else {
            setDoc(countRef, { count: 1 });
        }
    }).catch(error => {
        console.error("Error updating document: ", error);
    });
}

// Ziyaretçi sayısını çek ve ekranda göster
function displayVisitorCount() {
    const countRef = doc(db, 'counter', '3tUNUGuaaNewQ4d6URx8');
    
    onSnapshot(countRef, docSnap => {
        if (docSnap.exists()) {
            const count = docSnap.data().count;
            document.getElementById('visitorCount').innerText = `Visitor Count: ${count}`;
        } else {
            document.getElementById('visitorCount').innerText = 'No data available';
        }
    });
}

// Sayfa yüklendiğinde ziyaretçi sayısını güncelle ve göster
window.onload = () => {
    updateVisitorCount();
    displayVisitorCount();
};
