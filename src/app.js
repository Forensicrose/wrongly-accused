/* eslint-disable no-undef */ const main = document.getElementById('main')

async function fetchData() {
  // eslint-disable-next-line no-undef
  const response = await fetch('http://localhost:3000/api/crime')

  const data = await response.json()

  displayTitle(data)
}

fetchData()

function displayTitle(data) {
  let html = ''

  data.forEach((article) => {
    html += `<div id="main">
      <div class="title">
        <h3 class='sub-title'>${article.title}</h3>
        
        <div><p class='text'>${article.story}</p></div>
      </div>`
  })
  main.innerHTML = html
}
