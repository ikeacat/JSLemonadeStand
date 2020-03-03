function startGame() {
  document.getElementById("rootDIV").innerHTML = spawnSmallHeader() + `<center><h1 class='robotoFont' style='font-size:40'>Stand Setup</h1><br>
  <span class="robotoFont"><p>Stand Name <input id='standnameinput'></input></p></span><br>
  <p class="robotoFont" style="color:red;">WARNING!!! This game does not yet save. Sorry bout that.</p><br>
  <button class="defaultbutton robotoFont" onclick="startDay(0)">Save & Start Game</button></center>`;
  console.log("Loaded new game.");
}

function startDay(num) {
  if(num === 0) {
    localStorage.clear()
    localStorage.setItem("day","1")
    localStorage.setItem("money","0.50")
    var standnameval = document.getElementById("standnameinput").value;
    localStorage.setItem("standname",standnameval);
    document.getElementById("rootDIV").innerHTML = spawnSmallHeader() + `<div class="robotoFont"><p class='headertext'>Intro</p>
    <p>Welcome to Lemonsville, California!</p><br>
    <p>At the start, you will have to make a few decisions a day (you can unlock more through research):<br></p>
    <ul>
    <li>How many glasses of Lemonade to make.</li>
    <li>How much to sell them for.</li>
    </ul>
    <br>
    <p>Your mom has decided to provide you with 50 cents to start out your business.</p>
    <p>For now... Thats it!</p><br>
    <button class='defaultbutton' onclick='homeMenu()'>Alright...</button></div>`;
  }
}

function startNewDay() {
  var lsday = localStorage.getItem("day")
  document.getElementById("rootDIV").innerHTML = "" // Clear Screen
  document.getElementById("rootDIV").innerHTML = `<div class='weatherReportCardDynamic defaultCardDynamic vertSizableCard robotoFont'>
  <div class='vertSizableCard longInsideDCD leftfifty'><h1>LEMONVILLE WEATHER REPORT</h1></div>
  <div id="weatherpic" class='robotoFont leftfifty'></div>
  </div>`
  /*
  0 - Sunny
  1 - Sunny
  2 - Sunny
  3 - Hot and Dry
  4 - Hot and Dry
  5 - Flood (49/50 -> Rain)
  6 - Windy
  7 - Windy
  8 - Windy
  9 - Windy
  10 - Sunny
  11 - Sunny 
  12 - Rain
  13 - Rain
  14 - Rain
  15 - Thunderstorms Flood (99/100 -> Rain)
  */
  var weatherArray = new Array;
  weatherArray[0] = "sunny"
  weatherArray[1] = "sunny"
  weatherArray[2] = "sunny"
  weatherArray[3] = "hotanddry"
  weatherArray[4] = "hotanddry"
  weatherArray[5] = "flood"
  weatherArray[6] = "windy"
  weatherArray[7] = "windy"
  weatherArray[8] = "windy"
  weatherArray[9] = "windy"
  weatherArray[10] = "sunny"
  weatherArray[11] = "sunny"
  weatherArray[12] = "rain"
  weatherArray[13] = "rain"
  weatherArray[14] = "rain"
  weatherArray[15] = "thunderflood"
  weatherArray[16] = "sunny"
  weatherArray[17] = "sunny"
  weatherArray[18] = "sunny"
  weatherArray[19] = "sunny"
  var todaysweather;
  if(lsday == "1") {
    todaysweather = weatherArray[0]
  } else {
    todaysweathernum = Math.floor( Math.random() * 20)
    todaysweather = weatherArray[todaysweathernum]
    if(todaysweather == weatherArray[5]) {
      var checkForFlood = Math.floor( Math.random() * 50)
      var checkForFloodMatch = Math.floor ( Math.random() * 50)
      if(checkForFlood == checkForFloodMatch) {
        todaysweather = weatherArray[5]
      } else {
        todaysweather = weatherArray[12]
      }
    }
    if(todaysweather == weatherArray[15]) {
      var checkForTF = Math.floor( Math.random() * 100)
      var checkForTFM = Math.floor( Math.random() * 100)
      if(checkForTF == checkForTFM) {
        todaysweather = weatherArray[15]
      } else {
        todaysweather = weatherArray[12]
      }
    }

  }
  if(todaysweather == "sunny") {
    document.getElementById("weatherpic").innerHTML = "<img src='pics/sunny.png' class='weatherimg defaultCardDynamic' /><br><h1>Sunny</h1>";
    localStorage.setItem("weather","sunny");
  }
  if(todaysweather == "hotanddry") {
    document.getElementById("weatherpic").innerHTML = "<img src='pics/hotanddry.png' class='weatherimg defaultCardDynamic' /><br><h1>Hot and Dry</h1>";
    localStorage.setItem("weather","hotanddry");
  }
  if(todaysweather == "flood") {
    document.getElementById("weatherpic").innerHTML = "<img src='pics/flood.png' class='weatherimg defaultCardDynamic' /><br><h1>Flood!</h1>";
    localStorage.setItem("weather","flood");
  }
  if(todaysweather == "windy") {
    document.getElementById("weatherpic").innerHTML = "<img src='pics/windy.png' class='weatherimg defaultCardDynamic' /><br><h1>Windy</h1>";
    localStorage.setItem("weather","windy");
  }
  if(todaysweather == "rain") {
    document.getElementById("weatherpic").innerHTML = "<img src='pics/rain.png' class='weatherimg defaultCardDynamic' /><br><h1>Raining</h1>";
    localStorage.setItem("weather","rain");
  }
  if(todaysweather == "thunderflood") {
    document.getElementById("weatherpic").innerHTML = "<img src='pics/thunderflood.png' class='weatherimg defaultCardDynamic' /><br><h1>Flood with Thunderstorms</h1>";
    localStorage.setItem("weather","thunderflood")
  }
  document.getElementById("rootDIV").innerHTML += HSBreak() + "<div id='dayInputCard' class='defaultCardDynamic robotoFont vertSizableCard'><h1 class='leftfifty'>DAILY REPORT</h1></div>"
}

function spawnSmallHeader() {
  return "<center><h1 class='robotoFont'><span class='title-lem'>Lemonade </span><span class='title-stand'>Stand</span></h1><hr /></center>";
}

function homeMenu() {
  localStorage.setItem("basicThreads","true")
  document.getElementById("rootDIV").classList.remove("startrootdiv") // Free up space
  document.getElementById("rootDIV").innerHTML = "" // Clear HTML
  document.getElementById("rootDIV").innerHTML = InfoBlock() + HSBreak() + "<a href='javascript:startNewDay()'><div class='homeScreenCard defaultCardDynamic sndCard robotoFont'><div class='HSCardText'><h1>Start Day</h1><h4>Start the day (you cannot come back to this screen once day is started!)</h4></div></div></input>"; // FIRST TWO CARDS
  document.getElementById("rootDIV").innerHTML += HSBreak() + "<div class='homeScreenCard defaultCardDynamic robotoFont HSResearchCard'><div class='HSCardText HSResearchTextSize'><h1>Research</h1></div></div>" // Research Block
  document.getElementById("rootDIV").innerHTML += ResearchUnlock(); // Cards unlocked with research (if any, idk yet)
}

function InfoBlock() {
  var lsDay = localStorage.getItem("day");
  var lsstandname = localStorage.getItem("standname");
  var lsmoney = localStorage.getItem("money");
  if(lsstandname == "") {
    lsstandname = "Lemony";
    localStorage.setItem("standname","Lemony");
  }
  return "<div class='defaultCardDynamic homeScreenInfoCard'><h1 class='robotoFont stnamehstext'>" + lsstandname + " Homemade Lemonade</h1><h1 class='robotoFont headertext' style='position:relative; left:50px'><span>Day </span><span class='purpleday'>" + lsDay + "</span></h1><h2 class='robotoFont leftmoney'>Money: " + lsmoney + "</h2></div>";
}
function HSBreak() {
  return "<br><br><br><br>"
}