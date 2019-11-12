const client_id = "Iv1.bba81ba31b46a78e";
const client_secret = "20e2a59e724ea4f1fec6efccb4fd78d20197c693";

const profileContainer = document.querySelector('#profile');

const fetchProfile = async () => {
    const api_call = await fetch('https://api.github.com/users/dhuang19?client_id = ${client_id}&client_secret=${client_secret}');
    const data = await api_call.json();
    return { data }
};

const displayData = () => {
    fetchProfile().then((res) => {
        console.log(res);
        console.log(profileContainer == null)
        profileContainer.innerHTML = res.data.name;
    })
};

window.onload = function() {
    displayData();
}