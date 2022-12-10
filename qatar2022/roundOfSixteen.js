let matches = [
    {
        number: '1',
    },
    {
        number: '2',
    },
    {
        number: '3',
    },
    {
        number: '4',
    },
    {
        number: '5',
    },
    {
        number: '6',
    },
    {
        number: '7',
    },
    {
        number: '8',
    },
    
] 

import quarterFinals from "./quarterFinals.js";

export default class roundOfSixteen {
    constructor(groupStageResults) {
        this.results = groupStageResults;
        this.matches = matches;
        this.renderEl = document.getElementById('roundOfSixteen');
        
        if(this.renderEl.childNodes.length < 8) {
            this.renderEl.innerHTML = '';
            this.assignMatches(groupStageResults);
            
            let nextStageBtn = document.createElement('button');
            nextStageBtn.textContent = 'Quarter Finals';
            nextStageBtn.setAttribute('class', 'quarterFinalsBtn');
            nextStageBtn.onclick = (e) => {
                this.getResults();
            }
            
            this.renderEl.appendChild(nextStageBtn);
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
    assignMatches(groupStageResults) {
        // console.log(groupStageResults);
        
        groupStageResults.forEach(team => {
            if(team.dataset.group === 'A') {
                if (team.dataset.rank === '1') {
                    this.matches[0].team1 = team.value;
                } else {
                    this.matches[2].team2 = team.value;
                }
            } else if(team.dataset.group === 'B') {
                if (team.dataset.rank === '1') {
                    this.matches[2].team1 = team.value;
                } else {
                    this.matches[0].team2 = team.value;
                }
            } else if(team.dataset.group === 'C') {
                if (team.dataset.rank === '1') {
                    this.matches[1].team1 = team.value;
                } else {
                    this.matches[3].team2 = team.value;
                }
            } else if(team.dataset.group === 'D') {
                if (team.dataset.rank === '1') {
                    this.matches[3].team1 = team.value;
                } else {
                    this.matches[1].team2 = team.value;
                }
            } else if(team.dataset.group === 'E') {
                if (team.dataset.rank === '1') {
                    this.matches[4].team1 = team.value;
                } else {
                    this.matches[6].team2 = team.value;
                }
            } else if(team.dataset.group === 'F') {
                if (team.dataset.rank === '1') {
                    this.matches[6].team1 = team.value;
                } else {
                    this.matches[4].team2 = team.value;
                }
            } else if(team.dataset.group === 'G') {
                if (team.dataset.rank === '1') {
                    this.matches[5].team1 = team.value;
                } else {
                    this.matches[7].team2 = team.value;
                }
            } else if(team.dataset.group === 'H') {
                if (team.dataset.rank === '1') {
                    this.matches[7].team1 = team.value;
                } else {
                    this.matches[5].team2 = team.value;
                }
            } 
        });
        this.renderMatches(this.matches);
    }
    renderMatches(matches) {
        matches.forEach(match => {
            let radioContainer = document.createElement('div');

            radioContainer.innerHTML = `
                <label for="${match.team1}">${match.team1}
                    <input class="round16" type="radio" name="${match.number}" id="${match.team1}" value="${match.team1}">
                </label>
                <label for="${match.team2}">${match.team2}
                    <input class="round16" type="radio" name="${match.number}" id="${match.team2}" value="${match.team2}">
                </label>`;

            this.renderEl.appendChild(radioContainer);
        });
    }
    getResults() {
        let currentResults = document.querySelectorAll('.round16');

        let winners = []
        for(const key in currentResults) {
            let match = currentResults[key];
            
            if(match.checked) {
                winners.push(match);
            }
        }
        new quarterFinals(winners);
    }
}
