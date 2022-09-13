var navbarEl = document.getElementById("navbarId"),
	imgLogoEl = document.getElementById("logoHeaderId") ,
	menubarEl = document.querySelectorAll("#menubarId") ,
	/* /////////////// Go Up button ////////////// */
	goUpBtn = document.getElementById("goUpBtnId") ;

window.onscroll = function()
{
	console.log(scrollY);
	if( scrollY > 100 )
	{
		navbarEl.style.backgroundColor="#fff";
		imgLogoEl.style.color="#000";
		imgLogoName.src="images/logo1.png";
		menubarEl[0].style.backgroundColor="#000";
		menubarEl[1].style.backgroundColor="#000";
		menubarEl[2].style.backgroundColor="#000";
		/* /////////////// Go Up button ////////////////	*/	
		goUpBtn.style.display="block";
	}
	else
	{
		navbarEl.style.backgroundColor = "transparent" ;	
		imgLogoEl.style.color="#fff";
		imgLogoName.src="images/logo2.png";
		menubarEl[0].style.backgroundColor="#fff" ; 
		menubarEl[1].style.backgroundColor="#fff" ;
		menubarEl[2].style.backgroundColor="#fff" ;
		/* ///////////////////// hide Go Up button ///////////////////////	*/
		goUpBtn.style.display="none";

	}
	
}

navbarEl.onclick = function()
{
	navbarEl.style.backgroundColor = "#fff";
	menubarEl[0].style.backgroundColor = "#000";
	menubarEl[1].style.backgroundColor = "#000";
	menubarEl[2].style.backgroundColor = "#000";
	imgLogoEl.style.color="#000";
}
/* ************************************ features section : number scroller ************************************ */
var statisticsNumEl11 = document.getElementById("statisticsPara11Id"),
    statisticsNumEl12 = document.getElementById("statisticsPara12Id"),
    statisticsNumEl13 = document.getElementById("statisticsPara13Id"),
    statisticsNumEl14 = document.getElementById("statisticsPara14Id");

var count11 = 1  ,
	count12 = 1  , 
	count13 = 0  ,
	count14 = 1  ;

var setIntervalVar11 = setInterval(statisticsNumFunc11,100)  ,
	setIntervalVar12 = setInterval(statisticsNumFunc12,1000) ,
	setIntervalVar13 = setInterval(statisticsNumFunc13,100)  ,
	setIntervalVar14 = setInterval(statisticsNumFunc14,500)  ;  
	
function statisticsNumFunc11()
{
	if( count11<= 145 )
	{
		statisticsNumEl11.innerHTML = count11 ;
		count11++ ;
	}
	else
	{
		clearInterval(setIntervalVar11);
	}
	
}
function statisticsNumFunc12()
{
	if( count12<= 7 )
	{
		statisticsNumEl12.innerHTML = count12 ;
		count12++ ; 
	}
	else
	{
		clearInterval(setIntervalVar12);
	}
}
function statisticsNumFunc13()
{
	if( count13 <= 450000 )
	{
		statisticsNumEl13.innerHTML = count13 ;
		count13+=4500 ;
	}
	else
	{
		clearInterval(statisticsNumEl13);
	}
	
}
function statisticsNumFunc14()
{
	if( count14<= 31 )
	{
		statisticsNumEl14.innerHTML = count14 ;
		count14++ ;
	}
	else
	{
		clearInterval(statisticsNumEl14);
	}
}
/* ************************************** student opinion section ************************************ */
/* ***************** bullets of opinion section **************** */
var  bullet1El = document.getElementById("bulletLabel1Id") ,
	 bullet2El = document.getElementById("bulletLabel2Id") ,
	 bullet3El = document.getElementById("bulletLabel3Id") ,
	 opinionUlEl = document.getElementById("studentOpinionUlId");

bullet1El.onclick = function()
{
	opinionUlEl.style.transform = "translateX(0%)";
	bullet1El.style.backgroundColor = "deeppink";
	bullet2El.style.backgroundColor = "#888";
	bullet3El.style.backgroundColor = "#888";
}
bullet2El.onclick = function()
{
	opinionUlEl.style.transform = "translateX(-33.333%)";
	bullet2El.style.backgroundColor = "deeppink";
	bullet1El.style.backgroundColor = "#888";
	bullet3El.style.backgroundColor = "#888";
}
bullet3El.onclick = function()
{
	opinionUlEl.style.transform = "translateX(-66.6666%)";
	bullet3El.style.backgroundColor = "deeppink";
	bullet2El.style.backgroundColor = "#888";
	bullet1El.style.backgroundColor = "#888";
}
/* ##################################### Go Up button ##################################### */
/* ------------------ لما اضغط علي الزرار هطلع للاعلي ------------------ */
goUpBtn.onclick = function()
{
	window.scrollTo(0,0);	
}

