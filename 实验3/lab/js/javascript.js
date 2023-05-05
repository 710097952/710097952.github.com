var li = document.querySelectorAll("li");

li[0].onclick = function() {
	this.style.color = 'red';
    alert('This is p1');
}

li[1].onclick = function() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	month = month.toString().padStart(2, "0");
	day = day.toString().padStart(2, "0");
	this.innerHTML = year + "-" + month + "-" + day;
    alert('This is p2');
}

li[2].onclick = function() {
	this.classList.add('fn-active');
    alert('This is p3');
}
li[3].onclick = function() {
	li[7].parentNode.removeChild(li[7]);
    alert('This is p4');
}
li[4].onclick = function() {
	window.open("https://www.taobao.com/");
    alert('This is p5');
}
li[5].onclick = function() {
		var new_li = document.createElement("li");
		var node = document.createTextNode("p9");
		new_li.appendChild(node);
		li[5].parentNode.appendChild(new_li);
        alert('This is p6');
}

li[6].onclick = function() {
	console.log(screen.availWidth);
	document.querySelector(".m-box").style.width = screen.availWidth + 'px';
    alert('This is p7');
}

li[7].onclick = function() {
	alert('This is p8');
}