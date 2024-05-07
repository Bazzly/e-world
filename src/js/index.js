// imports
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 

// variables
const submitForm = document.getElementById('submitForm');
const formSubmissionModal = document.getElementById('formSubmissionModal');
const cancelModal = document.getElementById('cancelModal');

// functions
const handleSubmitForm = async (e) => {
    e.preventDefault();
    // add form details to firestore db
    try {
        const docRef = await addDoc(collection(db, "subscribers"), {
          name: e.target.name.value,
          email: e.target.email.value
        });
        console.log('submitted');
        formSubmissionModal.style.display = 'flex';
        e.target.reset();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const handleCancelModal = () => {
    formSubmissionModal.style.display = 'none';
}

// event listeners
submitForm.addEventListener('submit', handleSubmitForm);
cancelModal.addEventListener('click', handleCancelModal);