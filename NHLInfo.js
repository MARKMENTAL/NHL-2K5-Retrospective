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


var gameTitle = "ESPN NHL 2K5 Fantasy Season Results <br> Game Date: December 13, 2004";

var division = ["Atlantic Division", "Northeast Division", "Southeast Division", "Pacific Division",
    "Northwest Division", "Central Division"
];

var team = [
    ["New York Rangers", "New Jersey Devils", "New York Islanders", "Pittsburgh Penguins", "Philadelphia Flyers"],
    ["Buffalo Sabres", "Montreal Canadiens", "Toronto Maple Leafs","Boston Bruins", "Ottawa Senators"],
    ["Carolina Hurricanes", "Tampa Bay Lightning", "Washington Capitals","Florida Panthers", "Atlanta Thrashers"],
    ["Los Angeles Kings","San Jose Sharks","Phoenix Coyotes","Anaheim Ducks", "Dallas Stars"],
    ["Edmonton Oilers", "Vancouver Canucks", "Colorado Avalanche", "Minnesota Wild", "Calgary Flames"],
    ["Nashville Predators", "Columbus Blue Jackets", "Chicago Blackhawks", "St. Louis Blues", "Detroit Red Wings"]
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
    [10, 10, 5, 5, 3],
    [8, 5, 6, 6, 5],
    [8, 7, 5, 5, 3],
//Eastern end
//Western start
    [11, 8, 6, 4, 5],
    [9, 7, 6, 6, 5],
    [10, 7, 7, 6, 4],
//Western end
];

var losses = [
//Eastern start
    [4, 3, 6, 7, 5],
    [3, 3, 3, 7, 6],
    [5, 7, 4, 8, 9],
//Eastern end
//Western start
    [3, 5, 10, 5, 12],
    [5, 8, 8, 6, 6],
    [2, 4, 7, 4, 5],
//Western end
];

var AFCProQB =["Brett Favre","Kansas City Chiefs"];
var NFCProQB =["Peyton Manning","Philadelphia Eagles"];

