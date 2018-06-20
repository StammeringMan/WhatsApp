let mainPageContent = document.getElementById("mainPageContent");
let firstUserMsg = document.getElementById("indivisualMsgUserOne");
let changeProfile = document.getElementById('changeIdentity');
let showHiddenMessages = document.getElementById('showMessages');
let lsChatView = document.getElementById('lSCMColMsgDisplayCol');
let indivisualChatView = document.getElementById('lSIndivisualChat');
let lsMainPage = document.getElementById("lSCMColMsgDisplayCol");
let lSChangeProfile = document.getElementById('lSChangeDisplayPicture');
let lSHiddenMsg = document.getElementById('lSShowMessagesSection');

// function to return to main page

let backToMain = () =>{
	firstUserMsg.style.display = "none";
	mainPageContent.style.display = "block";
}


// function to read indivisual messages

let displayMsg = () =>{
	mainPageContent.style.display = "none";
	changeProfile.style.display = "none";
	showHiddenMessages.style.display = "none"
	firstUserMsg.style.display ="block";
}

// function to change profile picture

let changeIdentity = () =>{
	mainPageContent.style.display = "none";
	showHiddenMessages.style.display = "none"
	firstUserMsg.style.display ="none";
	changeProfile.style.display = "block";
}

// function to show hidden messages

let showMessages = () =>{
	mainPageContent.style.display = "none";
	changeProfile.style.display = "none";
	firstUserMsg.style.display ="none";
	showHiddenMessages.style.display = "block"
}



// Function for large Screen


let displaylSMsg = () =>{
	lsChatView.style.display = "none";
	lSChangeProfile.style.display = "none";
	lSHiddenMsg.style.display = "none";
	indivisualChatView.style.display = "block";	
}

let backTolSMain = () =>{
	lSHiddenMsg.style.display = "none";
	lSChangeProfile.style.display = "none";
	indivisualChatView.style.display = "none";
	lsMainPage.style.display = "block";	
}

let lSChangeIdentity = () =>{
	lsChatView.style.display = "none";
	indivisualChatView.style.display = "none";
	lSHiddenMsg.style.display = "none";
	lSChangeProfile.style.display = "block";		
}

let lSShowMessages = () =>{
	lsChatView.style.display = "none";
	indivisualChatView.style.display = "none";
	lSChangeProfile.style.display = "none";
	lSHiddenMsg.style.display = "block"
}
