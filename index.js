var tips = function(params) {
	var params = params;
	var div = document.createElement("div");
	div.innerHTML = params.text;
	div.classList.add("box", "addAni");
	div.style.cssText = params.css;

	// 判断是否存在
	var box = document.querySelectorAll(".box"),
		len = box.length;

	document.body.appendChild(div);

	if (len > 0) {
		div.style.bottom = Math.abs(box[len - 1].style.bottom.replace("px", "")) + 5 + "px";
		console.log(box[len - 1].style.bottom);
	} else {
		div.style.bottom = "50px";
	}

	div.style.zIndex = 10 + len + 1;

	setTimeout(function() {
		div.style.animation = "hide " + params.animTime + "s";
		div.classList.remove("addAni");
		div.classList.add("removeAni");

		setTimeout(function() {
			document.body.removeChild(div);
		}, 1500)
	}, 3000)
}
