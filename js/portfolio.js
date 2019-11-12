const client_id = "Iv1.bba81ba31b46a78e";
const client_secret = "20e2a59e724ea4f1fec6efccb4fd78d20197c693";

const titleContainer = document.querySelector('#title');
const readmeContainer = document.querySelector('#README');

const fetchRepo = async () => {
    const api_call = await fetch('https://api.github.com/repos/dhuang19/dhuang19.github.io?client_id = ${client_id}&client_secret=${client_secret}');
    const data = await api_call.json();
    return { data }
};

const displayData = () => {
    fetchRepo().then((res) => {
        titleContainer.innerHTML = res.data.name;
        readmeContainer.innerHTML = res.data.description;
    })
};

window.onload = function() {
    displayData();
}