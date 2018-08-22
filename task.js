// Create a constructor to create Task objects
//
// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed

const Task = function(difficulty, urgency, reward, completion){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = completion;
};

module.exports = Task;
