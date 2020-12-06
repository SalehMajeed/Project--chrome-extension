console.log('Chrome extension go');

let paragraphs = document.getElementsByTagName('p');

for (elt of paragraphs) {
	elt.style['background-color'] = 'grey';
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
}
