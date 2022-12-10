const groups = [
    {
        name: 'A',
        teams: ['Qatar', 'Ecuador', 'Senegal', 'Netherlands']},
    {
        name: 'B',
        teams: ['England', 'Iran', 'USA', 'Wales']},
    {
        name: 'C',
        teams: ['Argentina', 'Saudi Arabia', 'Mexico', 'Poland']},
    {
        name: 'D',
        teams: ['France', 'Australia', 'Denmark', 'Tunisia']},
    {
        name: 'E',
        teams: ['Spain', 'Costa Rica', 'Germany', 'Japan']},
    {
        name: 'F',
        teams: ['Belgium', 'Canada', 'Morocco', 'Croatia']},
    {
        name: 'G',
        teams: ['Cameroon', 'Switzerland', 'Serbia', 'Brazil']},
    {
        name: 'H',
        teams: ['Portugal', 'Ghana', 'South Korea', 'Uruguay']}
];

import roundOfSixteen from "./roundOfSixteen.js";

export default class groupStage { 
    constructor(groups) {
        this.mainView = document.getElementById('groupStage');

        groups.forEach(group => {
            this.mainView.appendChild(this.renderGroup(group));
        })

        let nextStageBtn = document.createElement('button');
        nextStageBtn.textContent = 'Round of 16';
        nextStageBtn.setAttribute('class', 'groupBtn');
        nextStageBtn.onclick = (e) => {
            this.getResults();
        };
        this.mainView.appendChild(nextStageBtn);
    }
    renderGroup(group) {
        // Return html markup for an individual group.
        let firstTeam = document.createElement('select');
        firstTeam.setAttribute('class', 'firstTeam');
        firstTeam.setAttribute('data-group', group.name);
        firstTeam.setAttribute('data-rank', '1');
        let secondTeam = document.createElement('select');
        secondTeam.setAttribute('class', 'secondTeam');
        secondTeam.setAttribute('data-group', group.name);
        secondTeam.setAttribute('data-rank', '2');

        let selectOptionText = document.createElement('option');
        selectOptionText.textContent = "First Team";
        selectOptionText.value = 0;
        selectOptionText.setAttribute("selected", "");
        selectOptionText.setAttribute("disabled", "");

        firstTeam.appendChild(selectOptionText);

        let selectOptionText2 = selectOptionText.cloneNode();
        selectOptionText2.textContent = 'Second Team';
        secondTeam.appendChild(selectOptionText2);

        let groupHTML = document.createElement('div'); 
        let groupTitle = document.createElement('h2');
        groupTitle.textContent = `Group ${group.name}`;
        
        let teams = group.teams;
        teams.forEach(team => {
            firstTeam.appendChild(this.createTeamOption(team));
            secondTeam.appendChild(this.createTeamOption(team));
        });

        groupHTML.appendChild(groupTitle);
        groupHTML.appendChild(firstTeam);
        groupHTML.appendChild(secondTeam);

        groupHTML.onclick = (e) => {
            let siblingSelector = e.target.nextSibling;
            if (!siblingSelector) {
                siblingSelector = e.target.previousSibling;
            }

            let targetValue = e.target.value;
            let siblingTargetValue = siblingSelector.value;

            if (targetValue === siblingTargetValue) {
                siblingSelector.selectedIndex = 0;
            }
        }

        return groupHTML;
    }
    createTeamOption(team) {
        let teamOption = document.createElement('option');
        teamOption.textContent = team;
        teamOption.value = team;
        return teamOption;
    }
    disableSelects(allTeams) {
        for (const key in allTeams) {
            let select = allTeams[key];

            let options = select.childNodes;
            for (const key in options) {
                let opt = options[key];
                if(opt.tagName === 'OPTION') {
                    opt.setAttribute('disabled', '');
                }
            };
        };
    }
    getResults() {
        let allTeams = document.getElementsByTagName('select');

        let chosenTeams = [];
        for (const key in allTeams) {
            let select = allTeams[key];

            if(select.value == 0) {
                alert('Please select a team for all groups');
                chosenTeams = [];
                break;
            } else {
                if(select.tagName === 'SELECT') {
                    chosenTeams.push(select);
                }
            }
        };
        if(chosenTeams.length > 0) {
            this.disableSelects(allTeams);
            new roundOfSixteen(chosenTeams);
        }
    }
}

let game = new groupStage(groups);