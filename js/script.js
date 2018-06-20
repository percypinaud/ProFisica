function calcular(){
	var distancia=document.getElementById("distancia").value;
	var frecuencia=document.getElementById("frecuencia").value;
	var r=0.0;
	var d=parseFloat(distancia);
	var f=parseFloat(frecuencia);
	r=(17.32)*(Math.sqrt(d/(4*f)));
	document.getElementById("radio").value=r;
}