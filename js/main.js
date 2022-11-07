const links = [
    {
        label: "Week 1 notes",
        url: "week1/"
    },
    {
        label: "Week 2 notes",
        url: "week2/"
    },
    {
        label: "Week 3 notes",
        url: "week3/"
    },
    {
        label: "Week 4 notes",
        url: "week4/"
    },
    {
        label: "Week 5 notes",
        url: "week5/"
    },
    {
        label: "To-do App",
        url: "todo-app/"
    },
    {
        label: "Week 7 notes",
        url: "week7/"
    },
    {
        label: "Week 8 notes",
        url: "week8/"
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