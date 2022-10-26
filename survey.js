const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  userName: "What's your name? Nicknames are also acceptable :) ",
  activity: "What's an activity you like doing? ",
  music: "What do you listen to while doing that? ",
  meal: "Which meal is your favorite (eg: dinner, brunch, etc.) ",
  food: "What's your favorite thing to eat for that meal? ",
  sport: "Which sport is your absolute favorite? ",
  superPower: "What is your superpower? In a few words, tell us what you are amazing at! "
};

const answers = {
  userName: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sport: '',
  superPower:'',
};

const keys = Object.keys(questions);

const survey = (index, lastQuestion = false) => {
  rl.question(questions[keys[index]], (answer) => {
    answers[keys[index]] = answer;
    index ++;
    
    if (index < keys.length - 1) {
      survey(index);
    }
    
    if (index === keys.length - 1) {
      survey(index, true);
    }
    
    if (lastQuestion) {
      console.log(`\n${answers.userName} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superPower}.\n`);
      
      rl.close();
    }
    
  });
};

survey(0);