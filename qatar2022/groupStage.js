export default class groupStage {
    constructor(groups) {
        // groups.forEach((group, i) => {
        //     i++;
        //     this[`Group ${i}`] = group;
        // });
        this.groups = groups;
    }
    renderOneGroup(group) {
        let container = document.createElement('div');

        group.forEach(team => {
            let html = `
            <div>
                <h2>Team
            </div>
            `;
            container.appendChild(html);
        });
    }
    renderStage(groups) {
        let container = document.createElement('div');

        groups.map((group) => {
            let group = this.renderOneGroup(group);
            container.appendChild(group);
        })
        return container;
    }
    renderTeam(team) {

    }
}