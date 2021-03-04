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
  @licend*/
        
        
"use strict";


var gameTitle = "ESPN NHL 2K5 Fantasy Season Results <br>  All Star Break: February 12, 2005";

var division = ["Atlantic Division", "Northeast Division", "Southeast Division", "Pacific Division",
    "Northwest Division", "Central Division"
];

var team = [
    ["New Jersey Devils", "Pittsburgh Penguins", "New York Rangers", "Philadelphia Flyers", "New York Islanders"],
    ["Ottawa Senators", "Boston Bruins", "Buffalo Sabres","Montreal Canadiens", "Toronto Maple Leafs"],
    ["Florida Panthers", "Washington Capitals", "Carolina Hurricanes","Atlanta Thrashers", "Tampa Bay Lightning"],
    ["Los Angeles Kings","San Jose Sharks","Phoenix Coyotes","Dallas Stars", "Anaheim Ducks"],
    ["Vancouver Canucks", "Edmonton Oilers", "Calgary Flames", "Colorado Avalanche", "Minnesota Wild"],
    ["Nashville Predators", "Chicago Blackhawks", "Detroit Red Wings", "Columbus Blue Jackets", "St. Louis Blues"]
];

var conference = [
    ["Eastern","Eastern","Eastern","Eastern","Eastern"],
    ["Eastern","Eastern","Eastern","Eastern","Eastern"],
    ["Eastern","Eastern","Eastern","Eastern","Eastern"],
    ["Western","Western","Western","Western","Western"],
    ["Western","Western","Western","Western","Western"],
    ["Western","Western","Western","Western","Western"]
];

var wins = [
//Eastern start
    [14, 13, 12, 10, 10],
    [17, 15, 15, 11, 12],
    [12, 12, 10, 9, 9],
//Eastern end
//Western start
    [16, 14, 12, 12, 9],
    [16, 16, 13, 9, 10],
    [19, 13, 11, 11, 9],
//Western end
];

var losses = [
//Eastern start
    [14, 10, 9, 12, 11],
    [8, 11, 8, 8, 10],
    [10, 12, 14, 17, 15],
//Eastern end
//Western start
    [8, 9, 13, 19, 11],
    [10, 11, 13, 12, 16],
    [3, 12, 8, 12, 8],
//Western end
];
var ties = [
//Eastern start
    [0, 2, 2, 1, 2],
    [0, 1, 0, 3, 2],
    [0, 0, 0, 3, 2],
//Eastern end
//Western start
    [4, 2, 0, 0, 4],
    [2, 0, 0, 1, 0],
    [1, 3, 4, 2, 5],
//Western end
];
var overtimeL = [
//Eastern start
    [0, 0, 2, 4, 2],
    [0, 1, 0, 3, 0],
    [3, 3, 1, 0, 0],
//Eastern end
//Western start
    [1, 2, 0, 0, 1],
    [0, 1, 1, 4, 1],
    [1, 1, 3, 1, 1],
//Western end
];
