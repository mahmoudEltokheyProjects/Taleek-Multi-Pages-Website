/* ++++++++++++++++++++++++++++ row 3 :  account message Reply ++++++++++++++++++++++++ */
	
var arrow = document.getElementById("arrowAwsomeId");
function slideUp(elemIdPara)
{
	var x = document.getElementById(elemIdPara);
	x.style.transition = " all 1s ease-in-out";
	x.style.height="0px";
}
function slideDown(elemIdPara)
{
	var x = document.getElementById(elemIdPara);
	x.style.transition = " all 1s ease-in-out";
	x.style.height="100px";
}
/* /////////////////////////////////////// navbar 2 links : right part :  menubar icon ///////////////////////////////////////  */
var menubarSideNav2El = document.getElementById("sideNavbar2MenubarIcon"),
	overlayBodyLayerSideNav2El = document.getElementById("bodyOverlayId"),
	sideNav2El = document.getElementById("sideNavbar2Id"),
	closeIconSideNavEl = document.getElementById("sideNavbar2Id");
/* ------------------ when click on menubar icon of sideNavbarBar , will open sideNavbarBar ------------------------ */
menubarSideNav2El.onclick = function()
{
	sideNav2El.style.width = "350px";
	overlayBodyLayerSideNav2El.style.display="block";	
}
/* ------------------ when click on closeIcon of sideNavbarBar , will close sideNavbarBar ------------------------ */
closeIconSideNavEl.onclick = function()
{
	sideNav2El.style.width = "0px";
	overlayBodyLayerSideNav2El.style.display="none";	
}
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
var   searchIconEl = document.getElementById("searchFieldId") ,
      searchFieldContainerEl = document.getElementById("searchFieldNavbar2BlockId") ,
	  searchFieldEl = document.getElementById("searchFieldNavbar2Id") ,
	  closeIconSearchFieldEl = document.getElementById("closeIconSearchFieldId") ;
/* --------------------------- placeholder هيشيل ال searchField لما احط الفارة علي ال --------------------------- */
searchFieldEl.onfocus = function()
{
	if( searchFieldEl.getAttribute("placeholder") !== " " )
	{
		searchFieldEl.setAttribute("placeholder"," ");	
	}
}
/* --------------------------- placeholder هيحط ال searchField لما اشيل الفارة من علي ال --------------------------- */
searchFieldEl.onblur = function()
{
	searchFieldEl.setAttribute("placeholder","search ...");	
}
/* ------------------ when click on closeIcon of searchFi , will close sideNavbarBar ------------------------ */
searchIconEl.onclick = function()
{
	searchFieldContainerEl.style.display="block";
	overlayBodyLayerSideNav2El.style.display="block";	
	searchFieldEl.style.display="block";
}
closeIconSearchFieldEl.onclick = function()
{
	searchFieldContainerEl.style.display="none";
	overlayBodyLayerSideNav2El.style.display="none";
	searchFieldEl.style.display="none";	
}
/* ------------------------------------- powerOff ---------------------------------- */
var powerOffEl = document.getElementById("powerOffId") ,
	loginFormEl  = document.getElementById("loginFormId") ,
	sigunUpFormEl  = document.getElementById("sigunUpFormId") ,
	closeLoginIconEl  = document.getElementById("closeLoginIconId") ,
	closeSignUpIconEl  = document.getElementById("closeSignUpIconId") ,
	signInBtnEl  = document.getElementById("signUpBtnId") ;
/* --------------------  signUp form وال login Form هيظهر لي ال power-off لما اضغط علي زرار ال -------------------- */
powerOffEl.onclick = function()
{
	loginFormEl.style.display="block";
	sigunUpFormEl.style.display="none";
	closeLoginIconEl.style.display="block";
	overlayBodyLayerSideNav2El.style.display="block";
}
/* --------------------  signUp form وال login Form اللي فورم "تسجيل الدخول" هيخفي لي ال close icon لما اضغط علي زرار ال -------------------- */
/* ---------------- close icon of login form ------------------- */
closeLoginIconEl.onclick = function()
{
	/* login form هيتم اخفاء ال closeIcon of login Form عند الضغط علي ال */
	loginFormEl.style.display="none";
	/* signUp form هيتم اخفاء ال closeIcon عند الضغط علي ال */
	sigunUpFormEl.style.display="none";
	/* overlay layer هيتم اخفاء ال closeIcon عند الضغط علي ال */
	overlayBodyLayerSideNav2El.style.display="none";
}
/* -------------------- signUp form اللي فورم "تسجيل الدخول" هيخفي لي ال  close icon لما اضغط علي زرار ال -------------------- */
/* ---------------- close icon of login form ------------------- */
closeSignUpIconEl.onclick = function()
{
	/* login form هيتم اخفاء ال closeIcon of signUp Form عند الضغط علي ال */
	loginFormEl.style.display="none";
	/* signUp Form  هيتم اخفاء ال closeIcon of signUp Form عند الضغط علي ال */
	sigunUpFormEl.style.display="none";
	/* overlay layer هيتم اخفاء ال closeIcon of signUp Form عند الضغط علي ال */
	overlayBodyLayerSideNav2El.style.display="none";
}
/* ------------------------  login form لما اضغط علي زرار "تسجيل" هيظهر لي ال -------------------- */
signInBtnEl.onclick = function()
{
	/*  sign up form  لما اضغط علي زرار "تسجيل" هيتم اظهار ال  */
	sigunUpFormEl.style.display="block";
	/* overlay layer  لما اضغط علي زرار "تسجيل" هيتم اظهار ال  */
	overlayBodyLayerSideNav2El.style.display="block";
}

/*  ////////////////////////////////// Go Up button //////////////////////////////////	 */
var goUpBtnEl = document.getElementById("goUpBtnId");
window.onscroll = function()
{
	if( scrollY >= 100 )
	{
		goUpBtnEl.style.display="block";
	}
	else
	{
		goUpBtnEl.style.display="none" ;
	}
}
goUpBtnEl.onclick = function()
{
	window.scrollTo(0,0);
}