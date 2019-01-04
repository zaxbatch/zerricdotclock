const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
	const now = new Date();
	
	//seconds
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60)* 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	

	//minutes
	const minutes = now.getMinutes();
	const minuteDegrees = ((minutes / 60)* 360) + 90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	//hours
	const hour = now.getHours();
	const hourDegrees = ((hour / 12)* 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}



 setInterval(setDate, 1000)