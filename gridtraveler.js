// Say that you are a traveler on a 2d grid. You begin in the
// top-left corner and your goal is to travel to the bottom right
// corner. You may only move down or right.

// In how many ways can you travel to the goal on a grid with
// dimensions m*n?
const gridTraveler = (r ,c) => {
    if (r === 1 && c === 1) return 1;
    if (r === 0 || c === 0) return 0;
    return gridTraveler(r - 1, c) + gridTraveler(r, c - 1);
};

 console.log(gridTraveler(1,1));
 console.log(gridTraveler(2,3));
 console.log(gridTraveler(3,2));
 console.log(gridTraveler(3,3));
 console.log(gridTraveler(18,18));