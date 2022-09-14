const links = [
    {
        label: "Week 1 notes",
        url: "week1/"
    }
]

function loadIndex() {
    const ol = document.querySelector('#linksList');

    links.forEach( link => {
        const li = document.createElement('li');
        const href = document.createElement('a');

        href.setAttribute('href', link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })
}

loadIndex()

let currYear = new Date().getFullYear();

document.getElementById('currYear').textContent = currYear;