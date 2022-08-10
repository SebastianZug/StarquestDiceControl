function collectConfigData(){
    var teams_dict = []
    for (let j = 0; j < team_colors.length; j++) {
        team_elements = document.querySelectorAll(`[id*="${team_colors[j]}"]`);
        if (team_elements){
            var team_dict = []
            for (let i = 0; i < team_elements.length; i++) {
                team_dict.push({
                    key: team_elements[i].id,
                    value: team_elements[i].value
                })
            }
            teams_dict.push({
                key: team_colors[j],
                value: team_dict
            })
        }
    }
    console.log(JSON.stringify(teams_dict,null,'  '));
    return teams_dict
}

function saveConfiguration(){
    // ?
}