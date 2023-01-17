let btn = document.getElementById('btn')
let quote = document.getElementById('quote')
let author = document.getElementById('author')

let url = 'https://api.quotable.io/random'

function Generate() {
    fetch(`${url}`)
	.then(response => response.json())
	.then( data => {
        console.log(data);
        quote.textContent = data.content
        author.textContent = data.author

    })
	
}