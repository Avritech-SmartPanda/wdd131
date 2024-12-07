const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const addChapter = () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);           
        });
        input.focus();
    } else {
        alert('Please enter a chapter');
        input.focus(); 
    }
}


button.addEventListener('click', addChapter);