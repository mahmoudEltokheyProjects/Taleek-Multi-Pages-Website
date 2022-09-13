/* ////////////////////////////////// Go Up button //////////////////////////////////	*/
var goUpBtn = document.getElementById("goUpBtnId");

window.onscroll = function()
{
	if(scrollY >= 100)
	{
		goUpBtn.style.display="block";
	}
	else
	{
		goUpBtn.style.display="none";
	}
}
/* ------------------ لما اضغط علي الزرار هطلع للاعلي ------------------ */
goUpBtn.onclick = function()
{
	window.scrollTo(0,0);	
}
