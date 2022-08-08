function generateWeaponTable() {
    document.getElementById("Step_1").open = false;
    document.getElementById("Step_2").open = true;
    document.getElementById("Step_3").open = true;

    let table = document.getElementById('teamTable');
    table.innerHTML = ""
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    row = generateWeaponAddHeading();
    tbody.appendChild(row);

    var RedTeamInvolved = document.getElementById('RedTeamInvolved');
    if (RedTeamInvolved.checked){
        generateWeaponAddTeam("Red", tbody);
    }
    var BlueTeamInvolved = document.getElementById('BlueTeamInvolved');
    if (BlueTeamInvolved.checked){
        generateWeaponAddTeam("Blue", tbody);
    }
    var YellowTeamInvolved = document.getElementById('YellowTeamInvolved');
    if (YellowTeamInvolved.checked){
        generateWeaponAddTeam("Yellow", tbody);
    }
}

function generateWeaponAddTeam(teamColor, tbody){
    generateWeaponAddCommander(teamColor, tbody);
    generateWeaponAddMarines(teamColor, tbody);
}

function generateWeaponAddCommander(teamColor, tbody){
    var weapon_selection = 
            `<select id = "weaponCommander_${teamColor}">     
                <option value="PistolAxe">Bolt Pistol/ Power Axe</option>
                <option value="GloveSword">Power Glove + Sword</option>
                <option value="HeavyBolter">Heavy Bolter</option>
            </select>`
    var entries = [`${teamColor}`, 
                   "Commander", 
                   weapon_selection, 
                   "todo"];
    let row = document.createElement('tr');
    for (let i = 0; i < entries.length; i++) {
        let row_data = document.createElement('td');
        row_data.innerHTML = entries[i];
        row.appendChild(row_data);
    }
    tbody.appendChild(row);
}

function generateWeaponAddMarines(teamColor, tbody){
    for (let j = 0; j < 4; j++) {
        let row = document.createElement('tr');
        var weapon_selection = 
        `<select id = "weaponMarine_${teamColor}_${j}">        
            <option value="AssaultCannon">Assault Cannon</option>
            <option value="MissleLauncher">Missle Launcher</option>
            <option value="PlasmaGun">Plasma Gun</option>
            <option value="Bolter">Bolter</option>
        </select>`
        var entries = [" ", 
                       "Marine", 
                       weapon_selection, 
                       "todo"];
        for (let i = 0; i < entries.length; i++) {
            let row_data = document.createElement('td');
            if(i==1) row_data.innerHTML = entries[i] + "_" + j.toString();
            else row_data.innerHTML = entries[i];
            row.appendChild(row_data);
        }
        tbody.appendChild(row);
    }
}
    
function generateWeaponAddHeading(){
    var entries = ["Team", "Member", "Weapon", "Special Features"];
    let row = document.createElement('tr');
    for (let i = 0; i < entries.length; i++) {
        let row_data = document.createElement('th');
        row_data.innerHTML = entries[i];
        row.appendChild(row_data);
    }
    return  row; 
}