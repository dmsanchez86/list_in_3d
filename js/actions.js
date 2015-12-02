window.onload = function(){
	var header_rigth = document.querySelector('ul.rigth li.header');
	var ul_right = document.querySelector('ul.rigth');
	var toggle = true;

	header_rigth.onclick = function(){
		if(toggle){
			toggle = false;
			ul_right.className = "rigth open";
		}else{
			toggle = true;			
			ul_right.className = "rigth";
		}
	};
}