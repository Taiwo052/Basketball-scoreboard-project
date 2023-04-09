let homeScoreEl = document.getElementById("home_score")
let guestScoreEl = document.getElementById("guest_score")
let homeScoreBtn1 = document.getElementById("home_score_btn1")
let homeScore = 0
let guestScore = 0

function start(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    
} 

function homeIncrementOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
} 

function homeIncrementTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
} 

function homeIncrementThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
} 

function guestIncrementOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
} 

function guestIncrementTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
} 

function guestIncrementThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
} 
