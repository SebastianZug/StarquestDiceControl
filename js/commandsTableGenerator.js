function generateCommandTable() {
    let table = document.getElementById('commandTable');
    table.innerHTML = ""
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    row = generateCommandTableAddHeading();
    tbody.appendChild(row);

    var RedTeamInvolved = document.getElementById('teamInvolved_Red');
    if (RedTeamInvolved.checked){
        generateCommandTableAddTeam("Red", tbody);
    }
    var BlueTeamInvolved = document.getElementById('teamInvolved_Blue');
    if (BlueTeamInvolved.checked){
        generateCommandTableAddTeam("Blue", tbody);
    }
    var YellowTeamInvolved = document.getElementById('teamInvolved_Yellow');
    if (YellowTeamInvolved.checked){
        generateCommandTableAddTeam("Yellow", tbody);
    }
}

function generateCommandTableAddTeam(teamColor, tbody){
    for (let j = 0; j < 4; j++) {
        var command_selection = 
        `<select id = "commands_${teamColor}_${j}">     
            <option value="none">none</option>
            <option value="ThermalGrenade">Thermal Grenade</option>
            <option value="?????">????</option>
        </select>`
        var entries = [`${teamColor}`, 
                       command_selection];
        if (j > 0) entries[0] = "";
        let row = document.createElement('tr');
        for (let i = 0; i < entries.length; i++) {
            let row_data = document.createElement('td');
            row_data.innerHTML = entries[i];
            row.appendChild(row_data);
        }
        tbody.appendChild(row);
    }
}

function generateCommandTableAddHeading(){
    var entries = ["Team", "Commands"];
    let row = document.createElement('tr');
    for (let i = 0; i < entries.length; i++) {
        let row_data = document.createElement('th');
        row_data.innerHTML = entries[i];
        row.appendChild(row_data);
    }
    return  row; 
}