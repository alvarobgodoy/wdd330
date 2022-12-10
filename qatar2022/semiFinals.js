let matches = [
    {
        number: '1',
    },
    {
        number: '2',
    }
] 

import finals from "./finals.js";

export default class semiFinals {
    constructor(previousResults) {
        this.results = previousResults;
        this.matches = matches;
        this.renderEl = document.getElementById('semiFinals');
        
        if(this.renderEl.childNodes.length < 2) {
            this.renderEl.innerHTML = '';
            this.assignMatches(previousResults);

            let nextStageBtn = document.createElement('button');
            nextStageBtn.textContent = 'Final Game!';
            nextStageBtn.setAttribute('class', 'semiFinalsBtn');
            nextStageBtn.onclick = (e) => {
                this.getResults();
            }

            this.renderEl.appendChild(nextStageBtn);
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
    assignMatches(previousResults) {
            previousResults.forEach(team => {
                if(team.name === 'B1') {
                    this.matches[0].team1 = team;
                } else if(team.name === 'B2') {
                    this.matches[1].team1 = team;
                } else if(team.name === 'B3') {
                    this.matches[0].team2 = team;
                } else if(team.name === 'B4') {
                    this.matches[1].team2 = team;
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
                <label for="C${team1.value}">${team1.value}
                    <input class="semiFinals" type="radio" name="C${match.number}" id="C${team1.value}" value="${team1.value}">
                </label>
                <label for="C${team2.value}">${team2.value}
                    <input class="semiFinals" type="radio" name="C${match.number}" id="C${team2.value}" value="${team2.value}">
                </label>
            `;

            this.renderEl.appendChild(radioContainer);
        });
    }
    getResults() {
        let currentResults = document.querySelectorAll('.semiFinals');

        let winners = []
        for(const key in currentResults) {
            let match = currentResults[key];
            
            if(match.checked) {
                winners.push(match);
            }
        }
        new finals(winners);
    }
}
