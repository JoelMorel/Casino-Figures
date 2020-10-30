function Casino(name, location, rewards, numOfSlots, numOfTables) {
  this.name = name;
  this.location = location;
  this.rewards = rewards;
  this.numOfSlots = numOfSlots;
  this.numOfTables = numOfTables;

  this.UpdateRewards = function (newRewardsProgram) {
    return newRewardsProgram;
  };
}
