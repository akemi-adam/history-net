document.getElementById('commentButton').addEventListener('click', (e) => {
    let name = document.getElementById('inputName').value
    let message = document.getElementById('textMessage').value
    let today = (new Date(Date.now())).toDateString()
    const section = document.getElementById('list-comments')
    
    section.innerHTML += `
        <li>
            <div class="comment-avatar">
            <h4 class="comment-author">${name}</h4>
            <span>${today}</span>
            <p class="mt-1">
                ${message}
            </p>
            </div>
        </li>
    `
})