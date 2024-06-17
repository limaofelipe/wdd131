document.addEventListener('DOMContentLoaded', (event) => {
    const lastModifiedDate = new Date(document.lastModified);
    const secondParagraph = document.querySelector('p:nth-of-type(2)');
    if(secondParagraph) {
        secondParagraph.textContent = `Last Modified Date: ${lastModifiedDate}`;
    }
});

const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();