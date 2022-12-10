let matches = [
    {
        number: '1',
    }
] 
export default class finals {
    constructor(previousResults) {
        this.results = previousResults;
        this.matches = matches;
        this.renderEl = document.getElementById('final');
        this.resultsRenderEl = document.getElementById('result');
        
        if(this.renderEl.childNodes.length === 0) {
            this.renderEl.innerHTML = '';
            this.assignMatches(previousResults);

            let nextStageBtn = document.createElement('button');
            nextStageBtn.textContent = 'Winner';
            nextStageBtn.setAttribute('class', 'finalsBtn');
            nextStageBtn.onclick = (e) => {
                this.getResults();
            }

            this.renderEl.appendChild(nextStageBtn);
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
    assignMatches(previousResults) {
            previousResults.forEach(team => {
                if(team.name === 'C1') {
                    this.matches[0].team1 = team;
                } else if(team.name === 'C2') {
                    this.matches[0].team2 = team;
                }
        });
        this.renderMatches();
    }
    renderMatches() {
        this.matches.forEach(match => {
            let radioContainer = document.createElement('div');
            let team1 = match.team1;
            let team2 = match.team2;

            radioContainer.innerHTML = `
                <label for="D${team1.value}">${team1.value}
                    <input class="finals" type="radio" name="${match.number}" id="D${team1.value}" value="${team1.value}">
                </label>
                <label for="D${team2.value}">${team2.value}
                    <input class="finals" type="radio" name="${match.number}" id="D${team2.value}" value="${team2.value}">
                </label>
            `;

            this.renderEl.appendChild(radioContainer);
        });
    }
    getResults() {
        let currentResults = document.querySelectorAll('.finals');

        let winner = []
        for(const key in currentResults) {
            let match = currentResults[key];
            
            if(match.checked) {
                winner.push(match);
            }
        }
        this.displayResult(winner);
    }
    displayResult(winner) {
        let container = document.createElement('div');

        container.innerHTML = `
            <img src="./img/trophy.png" class="trophy" alt="World Cup Trophy">
            <h3>The winner is:</h3>
            <h2>${winner[0].value}</h2>
        `;
        if(this.resultsRenderEl.childNodes.length === 0) {
            this.resultsRenderEl.appendChild(container);
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
}
