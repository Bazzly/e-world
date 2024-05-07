// imports
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 

// variables
const downloadEmailsBtn = document.getElementById('downloadEmails');
const downloadNamesAndEmailsBtn = document.getElementById('downloadNamesAndEmails');

// functions
const getEmailsFromFirestore = async () => {
    const emails = [];
    const colRef = collection(db, "subscribers");
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => {
        const email = doc.data().email;
        if (email) {
            emails.push(email);
        }
    })

    return emails;
}

const getNamesAndEmailsFromFirestore = async () => {
    const data = [];
    const colRef = collection(db, "subscribers");
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => {
        const name = doc.data().name;
        const email = doc.data().email;
        if (name && email) {
            data.push({name, email});
        }
    })

    return data;
}

const downloadEmailsCSV = (emails) => {
    const csvData = emails.join(",");
    const dataURI = `data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`;
    downloadEmailsBtn.href = dataURI;
    downloadEmailsBtn.download = 'emails.csv';
}

const downloadNamesAndEmailsCSV = (data) => {
    let csvData = `Name,Email\n`;
    data.forEach((obj) => {
        csvData += `${obj.name}, ${obj.email}\n`;
    })
    const encodedData = encodeURIComponent(csvData);
    const dataURI = `data:text/csv;charset=utf-8,${encodedData}`;
    downloadNamesAndEmailsBtn.href = dataURI;
    downloadNamesAndEmailsBtn.download = 'names_and_emails.csv';
}

const handleDownloadEmails = async() => {
    const emails = await getEmailsFromFirestore();
    downloadEmailsCSV(emails)
}

const handleDownloadNamesAndEmails = async() => {
    const data = await getNamesAndEmailsFromFirestore();
    downloadNamesAndEmailsCSV(data);
}

// event listeners
downloadEmailsBtn.addEventListener('click', handleDownloadEmails);
downloadNamesAndEmailsBtn.addEventListener('click', handleDownloadNamesAndEmails);