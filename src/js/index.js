// variables
const submitForm = document.getElementById('submitForm');
const formSubmissionModal = document.getElementById('formSubmissionModal');
const cancelModal = document.getElementById('cancelModal');

// functions
const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submitted');
    formSubmissionModal.style.display = 'flex';
    e.target.reset();
}

const handleCancelModal = () => {
    formSubmissionModal.style.display = 'none';
}

// event listeners
submitForm.addEventListener('submit', handleSubmitForm);
cancelModal.addEventListener('click', handleCancelModal);