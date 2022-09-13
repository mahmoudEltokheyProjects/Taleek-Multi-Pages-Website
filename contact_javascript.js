/* *************************************************** contact form section ********************************************************* */
var checkIconEl = document.getElementById("contactCheckboxId") ,
	checkBoxContainerEl = document.getElementById("checkboxContainerId");
/* ===================== check icon ===================== */
checkBoxContainerEl.onclick =  function()
{
	/* هيضيفه ولو موجود هيحذفه icon مش موجود في ال active لو الكلاس  */
	checkIconEl.classList.toggle("active") ;
}

var  usernameEl = document.getElementById("usernameId"),
	 emailEl = document.getElementById("emailId"),
	 textareaEl = document.getElementById("textareaId");
/* ################## username inputField ################## */
usernameEl.onfocus = function()
{
	if( usernameEl.getAttribute("placeholder") !=="" )
	{
		usernameEl.setAttribute("placeholder","");
	}
}
usernameEl.onblur = function()
{
	if( usernameEl.getAttribute("placeholder") =="" )
	{
		usernameEl.setAttribute("placeholder","Enter Your Name");
	}
}
/* ################## email inputField ################## */
emailEl.onfocus = function()
{
	if( emailEl.getAttribute("placeholder") !=="" )
	{
		emailEl.setAttribute("placeholder","");
	}
}
emailEl.onblur = function()
{
	if( emailEl.getAttribute("placeholder") =="" )
	{
		emailEl.setAttribute("placeholder","Enter Your Email");
	}
}
/* ################## textarea inputField ################## */
textareaEl.onfocus = function()
{
	if( textareaEl.getAttribute("placeholder") !=="" )
	{
		textareaEl.setAttribute("placeholder","");
	}
}
textareaEl.onblur = function()
{
	if( textareaEl.getAttribute("placeholder") =="" )
	{
		textareaEl.setAttribute("placeholder","Enter Your Message");
	}
}
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
