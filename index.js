function eightBall(){
    const answer = Math.floor(Math.random() * 8 + 1);
    const fortunes = ["odinProject.com", "freeCodeCamp.com", "Udemy.com", "leetCode.com", "algoExpert.com", "commit daily.", "take a break.", "techInterviewPro.com"];

    fortunes.push('gitHub.com')

    fortunes.pop()

    fortunes.unshift('gitHub.com')

    fortunes.pop();

    //fortune = fortunes[answer];
    //console.log(fortune);

    for (i = 0; i < fortunes.length; i++) {
      console.log(fortunes[i]);
    }
}

eightBall()