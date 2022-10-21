import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAF48ggCBV4v2HnIVtR9HI_Z3N_VjCI_VM",
    authDomain: "dealup-ed72b.firebaseapp.com",
    projectId: "dealup-ed72b",
    storageBucket: "dealup-ed72b.appspot.com",
    messagingSenderId: "333119729145",
    appId: "1:333119729145:web:fb2fbf78983515a6a82128",
    measurementId: "G-5MJSM323YN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

async function logInWithEmailAndPassword(event, emailLogin, passwordLogin) {
    event.preventDefault();
    // console.log(emailLogin, passwordLogin)
    try {
        await signInWithEmailAndPassword(getAuth(app), emailLogin, passwordLogin ).then((response) => {
            localStorage.setItem('session', JSON.stringify(response));
            window.location.href  = '/'
            // JSON.parse(localStorage.getItem('is-open')) || false
        });
        // viniciuscabral456@gmail.com
    } catch (err) {
        window.location.href = '/login'
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: "",
            authProvider: "local",
            email: "",
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

function logout (event) {
    event.preventDefault()
    // signOut(auth);
    localStorage.removeItem('session');
    console.log(JSON.parse(localStorage.getItem('is-open')) || false)
    window.location.href = '/'
};

export {
    auth,
    db,
    //   signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    //   sendPasswordReset,
    logout,
};