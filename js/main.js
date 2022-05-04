const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
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