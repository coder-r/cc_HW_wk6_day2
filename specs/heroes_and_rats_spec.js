const assert = require("assert");
const Hero = require("../hero.js")
const Task = require("../task.js")
const Food = require("../food.js")

let hero;
let task;
let food;

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Superman", 20, "CryptoKnite", "Look, up in the sky, it's a bird, it's a plane, it's Superman")
  });
  it("should have a name", function(){
    const actual = hero.name;
    assert.deepStrictEqual(actual, "Superman");
  });

  it("should have a health rating", function(){
    const actual = hero.health;
    assert.deepStrictEqual(actual, 20);
  });

  it("should have a favourite food", function(){
    const actual = hero.food;
    assert.deepStrictEqual(actual, "CryptoKnite");
  });

  it("should have a phrase", function(){
    const actual = hero.phrase;
    assert.deepStrictEqual(actual, "Look, up in the sky, it's a bird, it's a plane, it's Superman");
  });
  it("should have a collection of tasks", function(){
    const actual = hero.tasks;
    assert.deepStrictEqual(actual, []);
  });
  it("should be able to eat food", function(){
    let food = new Food("Donuts", 10)
    hero.eatFood(food);
    const actual = hero.health;
    assert.deepStrictEqual(actual, 30)
  });
  it("check if favourite food", function(){
    let food = new Food("Donut", 20)
    hero.eatFood(food);
    const actual = hero.health;
    assert.deepStrictEqual(actual, 50)
  });
  it("count number of tasks", function(){
    const actual = hero.countNumberOfTasks();
    assert.strictEqual(actual, 0)
  })
  it("add task to list of tasks", function(){
    let task1 = new Task(10, 5, "Save someone", true)
    hero.addTask(task1)
    const actual = hero.countNumberOfTasks();
    assert.deepStrictEqual(actual, 1)
  });
  xit("sort tasks by difficulty", function(){
    let task1 = new Task(10, 6, "Save someone", true)
    let task2 = new Task(8, 2, "Kill bad guy", false)
    hero.addTask(task1);
    hero.addTask(task2);
    const actual = hero.sortTasksByDifficulty();
    assert.deepStrictEqual(actual, [task1, task2])
  });
  xit("sort tasks by urgency");
  it("sort tasks by reward", function(){
    let task1 = new Task(10, 6, "Save someone", true)
    let task2 = new Task(8, 2, "Kill bad guy", false)
    hero.addTask(task1);
    hero.addTask(task2);
    const actual = hero.sortTasksByReward();
    assert.deepStrictEqual(actual, [task1, task2])
  });
  xit("view if tasks are complete or incomplete");
});
