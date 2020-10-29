function eightBall(){
    const answer = Math.floor(Math.random() * 8 + 1);
    const fortunes = ["odinProject.com", "freeCodeCamp.com", "Udemy.com", "leetCode.com", "algoExpert.com", "techInterviewPro.com", "commit daily.", "take a break."];

    fortune = fortunes[answer];
    console.log(fortune);
}

eightBall()