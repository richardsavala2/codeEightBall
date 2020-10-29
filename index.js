function eightBall(){
    const answer = Math.floor(Math.random() * 8 + 1);
    var fortunes = ["odinProject.com", "freeCodeCamp.com", "Udemy.com", "leetCode.com", "algoExpert.com", "techInterviewPro.com", "commit daily.", "take a break."];

    console.log(fortunes[answer]);
}

eightBall()