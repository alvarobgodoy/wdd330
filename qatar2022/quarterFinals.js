let matches = [
    {
        number: 'B1',
    },
    {
        number: 'B2',
    },
    {
        number: 'B3',
    },
    {
        number: 'B4',
    }
] 
import semiFinals from "./semiFinals.js";

export default class quarterFinals {
    constructor(previousResults) {
        this.results = previousResults;
        this.matches = matches;
        this.renderEl = document.getElementById('quarterFinals');
        
        if(this.renderEl.childNodes.length < 4) {
            this.renderEl.innerHTML = '';
            this.assignMatches(previousResults);

            let nextStageBtn = document.createElement('button');
            nextStageBtn.textContent = 'Semi Finals';
            nextStageBtn.setAttribute('class', 'quarterFinalsBtn');
            nextStageBtn.onclick = (e) => {
                this.getResults();
            }

            this.renderEl.appendChild(nextStageBtn);
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
    assignMatches(previousResults) {
        previousResults.forEach(team => {
            if(team.name === '1') {
                this.matches[0].team1 = team;
            } else if(team.name === '2') {
                this.matches[0].team2 = team;
            } else if(team.name === '3') {
                this.matches[1].team1 = team;
            } else if(team.name === '4') {
                this.matches[1].team2 = team;
            } else if(team.name === '5') {
                this.matches[2].team1 = team;
            } else if(team.name === '6') {
                this.matches[2].team2 = team;
            } else if(team.name === '7') {
                this.matches[3].team1 = team;
            } else if(team.name === '8') {
                this.matches[3].team2 = team;
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
                <label for="B${team1.value}">${team1.value}
                    <input class="quarterFinals" type="radio" name="${match.number}" id="B${team1.value}" value="${team1.value}">
                </label>
                <label for="B${team2.value}">${team2.value}
                    <input class="quarterFinals" type="radio" name="${match.number}" id="B${team2.value}" value="${team2.value}">
                </label>
            `;

            this.renderEl.appendChild(radioContainer);
        });
    }
    getResults() {
        let currentResults = document.querySelectorAll('.quarterFinals');

        let winners = []
        for(const key in currentResults) {
            let match = currentResults[key];
            
            if(match.checked) {
                winners.push(match);
            }
        }
        new semiFinals(winners);
    }
}
