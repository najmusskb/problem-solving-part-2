// // 3 diye vag gele seita foo,,5 diye gele seita bar
// for (let i = 0; i <= 50; i++) {
//     if (i % 3 == 0) {
//         console.log("foo");
//     }
//     else if (i % 5 == 0) {
//         console.log("bar");
//     }
//     else {
//         console.log(i);
//     }
//     // console.log(i);
// }



// __________ 3 & 5 duita diye vag gele seita hobe   _____________



for (let i = 1; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar");
    }

    else if (i % 3 == 0) {
        console.log("foo");
    }

    else if (i % 5 == 0) {
        console.log("bar");
    }
    else {
        console.log(i);
    }
}