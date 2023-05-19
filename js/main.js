

function createTodo() {
    const title = document.querySelector('#todo-title').value;
    const description = document.querySelector('#todo-des').value;
    const date = document.querySelector('#todo-date').value;
    const time = document.querySelector('#todo-time').value;
    if (title === '' || description === '' || date === '' || time === '') {
        alert('Enter all fields');
        return;
    } else {
    const box = document.getElementById('box');
    const todo = document.createElement('div');
    todo.style.width = '300px';
    todo.onmouseover = function() {
        todo.style.backgroundColor = '#547cff';
        todo.style.color = 'rgb(0, 0, 0)';
        todo.style.transition = '0.5s';
        todo.style.cursor = 'pointer';
        todo.style.borderRadius = '10px';
        todo.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.75)';
        todo.style.position='center'
    }
    todo.onmouseout = function() {
        todo.style.backgroundColor = '#a2a5b6';
    }
    let todoTitle = document.createElement('h3');
    let descriptionHeading = document.createElement('h4');
    descriptionHeading.innerHTML = 'Description';
    let todoDescription = document.createElement('p');
    let dateHeading = document.createElement('h4');
    dateHeading.innerHTML = 'Date';
    let todoDate = document.createElement('p');
    let timeHeading = document.createElement('h4');
    timeHeading.innerHTML = 'Time';
    let todoTime = document.createElement('p');
    let todoDelete = document.createElement('button');
    todoTitle.innerHTML = title;
    todoDescription.innerHTML = description;
    todoDate.innerHTML = date;
    todoTime.innerHTML = time;
    todoDelete.setAttribute('onclick', '(this.parentNode.remove())');
    todoDelete.innerHTML = 'Done';
    todoDelete.style.backgroundColor = '#a6baef';
    todoDelete.style.borderRadius = '5px';
    todo.appendChild(todoTitle);
    todo.appendChild(descriptionHeading);
    todo.appendChild(todoDescription);
    todo.appendChild(dateHeading);
    todo.appendChild(todoDate);
    todo.appendChild(timeHeading);
    todo.appendChild(todoTime);
    todo.appendChild(todoDelete);
    box.appendChild(todo);
    todo.addEventListener('click', (e) => {
        e.preventDefault();
        todo.remove();
    })
    }
    document.querySelector('#todo-title').value = '';
    document.querySelector('#todo-des').value = '';
    document.querySelector('#todo-date').value = '';
    document.querySelector('#todo-time').value = '';

}



addEventListener('submit', (event) => {
    createTodo()
    event.preventDefault()
    })
    

