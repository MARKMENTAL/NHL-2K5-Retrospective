"use strict";


/*    
        @licstart The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2021  Mark Robillard Jr

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
        *
        @licend */

/* Callback Function to calculate an array sum */
function calcSumWin(value) {
    totalWins += value;
}

function calcSumLoss(value) {
    totalLosses += value;
}


function teamRows(divisionNum, totalWins, totalLosses) {
    var rowHTML = '';
    rowHTML += "<table>" + "<caption>" + division[i] + "</caption>" + "<tr><th>Team</th><th> W/L </th>";
    rowHTML += "<th> Visual  </th></tr>";
    for (var j = 0; j < 5; j++) {
        var teamName = team[divisionNum][j];
        var teamConference = conference[divisionNum][j];
        var teamWins = wins[divisionNum][j];
        var teamLosses = losses[divisionNum][j];
		// adds color to the team that is player-controlled
        	if (teamName == "Ottawa Senators"){
			rowHTML += '<tr>' + '<td style= "color: darkred;"> <b>' + teamName + '</b></td>';
		}
		else {
        		rowHTML += '<tr>' + '<td>' + teamName + '</td>';
		}
        rowHTML += '<td>' + teamWins.toLocaleString() + '</td>';
        rowHTML += '<td>' + teamLosses.toLocaleString() + '</td>';
        for (var k = 0; k < teamWins; k++) {
            rowHTML += createBar(teamConference, totalWins);
        }
        rowHTML += '</tr>';
        var divisionleader = team[divisionNum][0];
    }
    rowHTML += '<tr> <td><b> Division leader is: ' + divisionleader + '</td> </b></tr>'
    return rowHTML;
}

//function to create bar graphs and conference logo meters
function createBar(confType) {

    var barHTML = "";


    switch (confType) {
        case "Eastern":
            barHTML = "<img src ='easternlogo.png' id ='easternlogo' ><td class='Eastern'></td>";
            return barHTML;
        case "Western":
            barHTML = "<img src ='westernlogo.png' id ='westernlogo' ><td class='Western'></td>";
            return barHTML;
    }
}
//function gets ProBowlQB info from NFLInfo.js and shows as html
function ConferenceBest() {
    var proHTML = "";
    proHTML += "<table id ='BestEast'>" + "<caption> Eastern Conference Leader </caption>";
    proHTML += "<tr><th style = 'text-align:center;'> Team</th></tr>";
    proHTML += "<tr><td>" + "New York Rangers" + "</td>" + "</tr> </table>";
    proHTML += "<table id ='BestWest'>" + "<caption> Western Conference Leader </caption>";
    proHTML += "<tr><th style = 'text-align:center;'> Team</th></tr>";
    proHTML += "<tr><td>" + "Los Angeles Kings" + "</td>" + "</tr>";
    return proHTML;
}


var reportHTML = "<h1>" + gameTitle + "</h1>";
var i;
for (i = 0; i < division.length; i++) {
    var totalWins = 0;
    var totalLosses = 0;
    wins[i].forEach(calcSumWin);
    losses[i].forEach(calcSumLoss);
    reportHTML += teamRows(i, totalWins, totalLosses);
    reportHTML += "</table>";
}

reportHTML += ConferenceBest()
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
