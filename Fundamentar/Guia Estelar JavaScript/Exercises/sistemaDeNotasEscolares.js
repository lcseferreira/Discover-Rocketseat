/*

    Transformar notas escolares

*/

function getScore(grade) {

    let scoreA = grade >= 90 && grade <= 100;
    let scoreB = grade >= 80 && grade <= 89;
    let scoreC = grade >= 70 && grade <= 79;
    let scoreD = grade >= 60 && grade <= 69;
    let scoreE = grade >= 50 && grade <= 59;
    let scoreF = grade >= 00 && grade <= 49;

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A";
    } else if (scoreB) {
        scoreFinal = "B";
    } else if (scoreC) {
        scoreFinal = "C";
    } else if (scoreD) {
        scoreFinal = "D";
    } else if (scoreE) {
        scoreFinal = "E";
    } else if (scoreF) {
        scoreFinal = "F";
    } else {
        scoreFinal = "INVALID";
    }

    console.log(scoreFinal);
}

getScore(100);
getScore(101);
getScore(-1);
getScore(45);
getScore(75);