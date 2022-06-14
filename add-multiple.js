/* 

wood chair --3 cft per chair 
tablewood --- 10cft per table
bedwood -- 10cft  per bed


 */

function woodcalculation(chairQuantity, tableQuantity, bedQuantity){



    const perChairWood = 3;

    const perTableWood=10;

    const perbedWood=50;



    // wood calculation
    const chairWoodQuantit = chairQuantity * perChairWood;


    // table calculation 
    const tablewoodQuantity= tableQuantity * perTableWood;


    //  bed calculation 
    const bedWoodQuantity= bedQuantity * perbedWood;
    

    const totalWood = chairWoodQuantit + tablewoodQuantity + bedWoodQuantity ;


     return totalWood;
}

const firstOption = woodcalculation(1,1,1);


console.log(firstOption);