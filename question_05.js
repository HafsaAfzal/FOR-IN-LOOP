// Create a Map called `scores` with keys as names and values as scores. Use a `for...in`
// loop to iterate over the Map and log each name and score pair.
const scores= new Map();
scores.set("Hafsa",90);
scores.set("Horrain",85);
scores.set("Hareem",94);
for ( let [items,value] in scores){         // for in loop does not iterate the map
    console.log( `Name= ${items} scores=${value}`);
}
