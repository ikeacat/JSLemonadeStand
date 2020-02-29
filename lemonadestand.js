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
  document.getElementById("rootDIV").innerHTML = "" // Clear Screen
  document.getElementById("rootDIV").innerHTML = "<div class='defaultCardDynamic vertSizableCard'><h1></div>"
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
  if(lsstandname == "") {
    lsstandname = "Lemony";
  }
  return "<div class='defaultCardDynamic homeScreenInfoCard'><h1 class='robotoFont stnamehstext'>" + lsstandname + " Homemade Lemonade</h1><h1 class='robotoFont headertext' style='position:relative; left:50px'><span>Day </span><span class='purpleday'>" + lsDay + "</span></h1></div>";
}
function HSBreak() {
  return "<br><br><br><br>"
}