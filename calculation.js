function calculateWatchTime () {
  // Retrieve the values for the input fields
  let channelPoints = document.getElementById("channel-points-input").value;
  let originalChannelPoints = channelPoints; // Store user input value for channel points
  let nonSub = document.getElementById("non-sub").checked;
  let tier1 = document.getElementById("Tier1").checked;
  let tier2 = document.getElementById("Tier2").checked;
  let tier3 = document.getElementById("Tier3").checked;
  let activeWatcherYes = document.getElementById("active-watcher-yes").checked;
  let activeWatcherNo = document.getElementById("active-watcher-no").checked;
  let watchStreakNo = document.getElementById("watch-streak-no").checked;
  let watchStreak2 = document.getElementById("watch-streak-2").checked;
  let watchStreak3 = document.getElementById("watch-streak-3").checked;
  let watchStreak4 = document.getElementById("watch-streak-4").checked;
  let watchStreak5 = document.getElementById("watch-streak-5+").checked;
  let giftSubYes = document.getElementById("giftSubYes").checked;
  let giftSubNo = document.getElementById("giftSubNo").checked;
  let bitsCheeredYes = document.getElementById("bitsCheeredYes").checked;
  let bitsCheeredNo = document.getElementById("bitsCheeredNo").checked;
  
  // Perform the necessary calculations

  let watchTime = channelPoints *.5; //Assuming channel point = .5 minutes of watchtime
  if (activeWatcherYes) {
    watchTime = channelPoints / 3.83; // active watcher earns 3.83 points per minute.
  }
  let mathWatchTime = watchTime; // Store non bonus watchTime for calculations
  if (watchStreakNo) {
    channelPoints = channelPoints; // Apply no bonus
  } else if (watchStreak2) {
    channelPoints -= 300; // Apply a 300 channel point bonus
  } else if (watchStreak3) {
    channelPoints -= 350; // Apply a 350 channel point bonus
  } else if (watchStreak4) {
    channelPoints -= 400; // Apply a 400 channel point bonus
  } else if (watchStreak5) {
    channelPoints -= 450; // Apply a 450 channel point bonus
  }

  if (bitsCheeredNo) {
    channelPoints = channelPoints; // Apply no bonus
  } else if (bitsCheeredYes) {
    channelPoints -= 350; // Apply a 350 channel point bonus
  }
  if (nonSub) {
    watchTime = watchTime; // Apply no bonus 
  } else if (tier1) {
    watchTime = watchTime / 1.2; // Apply 20% bonus
  } else if (tier2) {
    watchTime = watchTime / 1.4; // Apply 40% bonus
  } else if (tier3) {
    watchTime = watchTime / 2; // Apply 100% bonus
  } 
  if (watchTime < 0) {
    watchTime = 0;
  }
  if (giftSubYes) {
    let numSubMonths = Math.floor((mathWatchTime / 43200)+1); // Calculate the number of months in watchTime
    let giftSubPoints = numSubMonths * 500; // Calculate the gift sub points
    channelPoints -= giftSubPoints; // Subtact bonus points from total 
  }
  //Update the HTML to display the results
  document.getElementById("watch-time").innerHTML = "You need to watch for " + watchTime.toFixed(2) + " minutes to recieve " + originalChannelPoints + " Channel Points"
}


//  make it so if bit and sub are yes and time = more than 1 month it applies for how many months it is for. Output in days, hours, minutes. 

