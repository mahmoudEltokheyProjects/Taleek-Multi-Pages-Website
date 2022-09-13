var logoDateNavbarEl = document.getElementById("logoHeaderId") ,
	// get current date
	date = new Date() , 
	months = [  "يناير", "فبراير" ,  "مارس" , "ابريل" ,"مايو" ,  "يونيو" , "يوليو" ,"اغسطس" ,  "سبتمبر", "اكتوبر" , "نوفمبر" , "ديسمبر" ] ,
	days = [  "الاحد" , "الاثنين" , "الثلاثاء" , "الاربعاء" , "الخميس" , "الجمعة" , "السبت"  ] ,
	delDateString = days[ date.getDay() ]+"  "+date.getDate()+"  "+months[date.getMonth()]+' , '+date.getFullYear();	

//	console.log( date.getDate() );

logoDateNavbarEl.innerHTML = delDateString ;

/* **************************************** navbar 2 : right links ************************************ */
		
var navbar1El = document.getElementById("navbar1Id"),
	bodyOverlayEl = document.getElementById("bodyOverlayId") ,
	navbar2El = document.getElementById("navbar2Id") ,
	sideNavbar2El = document.getElementById("sideNavbar2LinksId") ,
	menubarIconEl = document.getElementById("menubarIconId");

function openNav()
{
	sideNavbar2El.style.width="250px";	
	bodyOverlayEl.style.display="block";

}
function closeNav()
{
	sideNavbar2El.style.width="0px";	
	bodyOverlayEl.style.display="none";
}
/* **************************************************************** search field  ************************************************** */
var searchFieldBlockEl = document.getElementById("searchFieldBlockId") ,
	searchInputFiled = document.getElementById("searchFieldId") 	   ,
	searchCloseIcon = document.getElementById("closeIconId") 	  	   ,
    lineUnderSearchFieldEl = document.getElementById("lineUnderSearchFieldId") ;

/* ------------- Appear and disAppear placeholder of searchField ------------- */

searchInputFiled.onfocus = function()
{
    if( searchInputFiled.getAttribute("placeholder") !== "" )
    {
        searchInputFiled.setAttribute("placeholder","");
    }
}
/*   "search product" بقيمة placeholder هحط ال searchField لما اشيل الفارة من علي ال */
searchInputFiled.onblur = function()
{
    if( searchInputFiled.getAttribute("placeholder") == "" )
    {
        searchInputFiled.setAttribute("placeholder","search ...... ");
    }
}

function openFunc()
{
	/* //////////////// فهخلي عرضه ب 0 searchField container هخفي ////////////////  */
	searchFieldBlockEl.style.width="100%";
	/* //////////////// display:none  فهخلي  searchFiel container هخفي ////////////////  */
	searchInputFiled.style.display="block";
	searchCloseIcon.style.display="block";
}
function closeFunc()
{
	/* //////////////// فهخلي عرضه ب 0 searchField container هخفي ////////////////  */
	searchFieldBlockEl.style.width="0";
	/* //////////////// display:none  فهخلي  searchField container هخفي ////////////////  */
	searchInputFiled.style.display="none";
	searchCloseIcon.style.display="none";
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
