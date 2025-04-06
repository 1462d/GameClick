// Import Firebase SDK (if using ES Modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"; 
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCsRoW-82-0USTcxEKxg4mOSX7EPiC4BNI",
    authDomain: "gameclick-3542d.firebaseapp.com",
    databaseURL: "https://gameclick-3542d-default-rtdb.firebaseio.com",
    projectId: "gameclick-3542d",
    storageBucket: "gameclick-3542d.appspot.com",  // FIXED STORAGE BUCKET
    messagingSenderId: "802237840120",
    appId: "1:802237840120:web:fe368494c997349238990d",
    measurementId: "G-857B19VPR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore initialization

// Event listener for the sign-up form submission
document.getElementById("sign-up").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const username = document.getElementById("username").value;
    const userhandle = document.getElementById("userhandle").value;
    const age = document.getElementById("age").value;
    const use = document.querySelector('input[name="use"]:checked')?.value;

    // Validate form values
    console.log("Form Values:", email, password, username, userhandle, age, use);

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!document.getElementById("termsCheckbox").checked) {
        alert("You must agree to the Terms of Service.");
        return;
    }

    // Create user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);

            // Update the user's display name
            return updateProfile(user, {
                displayName: username
            }).then(() => {
                // After profile updated, save user data to Firestore
                return saveUserData(user.uid, username, userhandle, age, use);
            }).then(() => {
                alert("Account created successfully!");
                // Redirect to profile setup page after sign-up
                window.location.href = "profile-setup.html"; // Redirect to profile setup page
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
            alert("Error creating account: " + errorMessage);
        });
});

// Function to save user data to Firestore
function saveUserData(userId, username, userhandle, age, use) {
    // Firestore user data save operation
    return setDoc(doc(db, "users", userId), {
        username: username,
        userhandle: userhandle,
        age: age,
        use: use
    }).then(() => {
        console.log("User data saved successfully!");
    }).catch((error) => {
        console.error("Error saving user data:", error);
    });
}
