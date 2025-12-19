const aboutBtn = document.getElementById('about-btn')
const eduBtn = document.getElementById('edu-btn')
const hobbyBtn = document.getElementById('hobby-btn')

const customAlert = (message) =>{
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.append(overlay);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    overlay.append(contentDiv);

    const messageH1 = document.createElement('h1');
    messageH1.textContent = message;
    contentDiv.append(messageH1);

    const closeButton = document.createElement('button');
    closeButton.className = 'closeBtn';
    closeButton.textContent = 'oke';
    contentDiv.append(closeButton);
    
    closeButton.addEventListener('click', () =>{
        overlay.remove();
    })

    overlay.addEventListener('click', (event) => {
        if (event.target.className === 'overlay'){
            overlay.remove();
        }
    })
}

const hobbies = ['music', 'it', 'movies', 'cooking']



aboutBtn.addEventListener('click', () => {
    customAlert('My name is Samira, im 16. My birthday: 02.03.2009. Im second year student at compass college. I have an orange cat, he is 3 years old. His bd: 04.02.2009.')
})
eduBtn.addEventListener('click', () => {
    customAlert('Im a second year student at compass college, ITB departament.')
})
