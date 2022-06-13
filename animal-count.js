// jungle tiger operation 


function anymalCount(miles) {

    const animalDesnsityfirst10miles = 10;

    const animalDesnsitySecond10miles = 10;


    if (miles <= 10) {

        const count = miles * animalDesnsityfirst10miles;


        return count;
    }
    else if (miles <= 20) {

        const first10 = 10 * animalDesnsityfirst10miles;

        const restmiles = miles - 10;

        const secondDenseAnimals = restmiles * animalDesnsitySecond10miles

        const totalanimals = first10 + secondDenseAnimals;

        return totalanimals;
    }
}
const animals = anymalCount(17);


console.log(animals);
