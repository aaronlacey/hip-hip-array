const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

i = 0
let mySplice = dinosaurs.splice(4,3);

while(i < dinosaurs.length){
    console.log(dinosaurs[i]);
    i++
}

console.log(dinosaurs);