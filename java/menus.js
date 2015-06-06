function mmLoadMenus() {

  if (window.mm_menu_0624131825_0) return;
/**
function Menu(label, mw, mh, fnt, fs, fclr, fhclr, bg, bgh, halgn, valgn, pad, space, to, sx, sy, srel, opq, vert, idt, aw, ah) 
**/

  //About PV menu creation
  window.mm_menu_0624131825_0 = new Menu("root",152,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,false,true);
  	mm_menu_0624131825_0.addMenuItem("Principal's Message","location='Principal_Covert.html'");
  	mm_menu_0624131825_0.addMenuItem("Overview","location='overview.html'");
  	mm_menu_0624131825_0.addMenuItem("PV Mission Statement","location='PV_mission.html'");
  	mm_menu_0624131825_0.addMenuItem("Faculty/Staff","location='faculty.html'");
	mm_menu_0624131825_0.addMenuItem("School Map","location='images/Pine_View_Google_Earth.png'");
	mm_menu_0624131825_0.addMenuItem("Health Room News","location='http://teachersites.schoolworld.com/webpages/PVClinic/'");
  	mm_menu_0624131825_0.addMenuItem("Directions to Campus","location='http://maps.google.com/maps?f=q&hl=en&q=1+Python+Path,+Osprey,+FL+34229'");
  	
	
	mm_menu_0624131825_0.hideOnMouseOut=true;
   	mm_menu_0624131825_0.childMenuIcon="http://www.sarasota.k12.fl.us/pvs/images/arrows.gif";
   	mm_menu_0624131825_0.bgColor='#666666';
   	mm_menu_0624131825_0.menuBorder=1;
    mm_menu_0624131825_0.menuLiteBgColor='#FFFFFF';
   	mm_menu_0624131825_0.menuBorderBgColor='#CCCCCC'; 
   
   //Guidance submenu creation
   window.mm_menu_0624135151_0_2 = new Menu("High School Information",152,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
     
	

     mm_menu_0624135151_0_2.hideOnMouseOut=true;
     mm_menu_0624135151_0_2.bgColor='#666666';
     mm_menu_0624135151_0_2.menuBorder=1;
     mm_menu_0624135151_0_2.menuLiteBgColor='#FFFFFF';
     mm_menu_0624135151_0_2.menuBorderBgColor='#CCCCCC';
	 
	window.mm_menu_0624135151_0_3 = new Menu("Administration Websites",152,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
     mm_menu_0624135151_0_3.addMenuItem("Dr. Stephen Covert","location='http://teachersites.schoolworld.com/webpages/SCovert/'");
     mm_menu_0624135151_0_3.addMenuItem("Janel Dorn","location='#'");
	 mm_menu_0624135151_0_3.addMenuItem("Sue Fair","location='http://teachersites.schoolworld.com/webpages/SFair/'");
	 mm_menu_0624135151_0_3.addMenuItem("Jennifer Nzeza","location='http://teachersites.schoolworld.com/webpages/JNzeza/'");
	 mm_menu_0624135151_0_3.addMenuItem("Lisa Wheatley","location='http://teachersites.schoolworld.com/webpages/LWheatley/'");
	
	 mm_menu_0624135151_0_2.hideOnMouseOut=true;
     mm_menu_0624135151_0_2.bgColor='#666666';
     mm_menu_0624135151_0_2.menuBorder=1;
     mm_menu_0624135151_0_2.menuLiteBgColor='#FFFFFF';
     mm_menu_0624135151_0_2.menuBorderBgColor='#CCCCCC';
	
  //Academics menu creation	 
  window.mm_menu_0624135151_0 = new Menu("root",152,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_0624135151_0.addMenuItem("Media Center","location='http://teachersites.schoolworld.com/webpages/PVLibrary/'");
	//This is the line that adds the guidance submenu
	//mm_menu_0624135151_0.addMenuItem(mm_menu_0624135151_0_2);
	mm_menu_0624135151_0.addMenuItem("College Resource","location='http://pvscollegecounseling.com'");
	mm_menu_0624135151_0.addMenuItem("Course Description Book 2015","location='PDF/Course Descriptions/PineViewCourseDescriptionBook2015.PDF'");
	mm_menu_0624135151_0.addMenuItem("Course Selection Sheet 2015","location='PDF/Course Descriptions/CourseSelectionsSheet2015.PDF'");
	mm_menu_0624135151_0.addMenuItem("Temporary Bus Permit","location='PDF/StudentLife/Bus Rider.pdf'");
    mm_menu_0624135151_0.addMenuItem("Sustainability @ PV","location='http://teachersites.schoolworld.com/webpages/S@PV/'");
	mm_menu_0624135151_0.addMenuItem("Common Core Standards","location='http://sarasotacountyschools.net/departments/commoncore/'");
	mm_menu_0624135151_0.addMenuItem("Math Department Website","location='http://teachersites.schoolworld.com/webpages/PVMathDept/index.cfm'");
	mm_menu_0624135151_0.hideOnMouseOut=true;
    mm_menu_0624135151_0.childMenuIcon="http://www.sarasota.k12.fl.us/pvs/images/arrows.gif";
    mm_menu_0624135151_0.bgColor='#666666';
    mm_menu_0624135151_0.menuBorder=1;
    mm_menu_0624135151_0.menuLiteBgColor='#FFFFFF';
    mm_menu_0624135151_0.menuBorderBgColor='#CCCCCC';
  
  //Admissions menu creation
  window.mm_menu_0624135834_0 = new Menu("root",152,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_0624135834_0.addMenuItem("Information","location='http://www.myteacherpages.com/webpages/VBarker/'");
    mm_menu_0624135834_0.addMenuItem("Guidance/ESE","location='guidance.html'");
    mm_menu_0624135834_0.addMenuItem(mm_menu_0624135151_0_3);
    
	mm_menu_0624135834_0.hideOnMouseOut=true;
    mm_menu_0624135834_0.childMenuIcon="http://www.sarasota.k12.fl.us/pvs/images/arrows.gif";
    mm_menu_0624135834_0.bgColor='#666666';
    mm_menu_0624135834_0.menuBorder=1;
    mm_menu_0624135834_0.menuLiteBgColor='#FFFFFF';
    mm_menu_0624135834_0.menuBorderBgColor='#CCCCCC';
  
  //PVA menu creation
  window.mm_menu_0624140600_0 = new Menu("root",152,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_0624140600_0.addMenuItem("Pine View Association","location='http://www.yourpva.org'");
	mm_menu_0624140600_0.addMenuItem("Pine View Alumni","location='http://www.sarasota.k12.fl.us/PVS/pvalumni.html'");
	
    
    mm_menu_0624140600_0.hideOnMouseOut=true;
    mm_menu_0624140600_0.childMenuIcon="http://www.sarasota.k12.fl.us/pvs/images/arrows.gif";
    mm_menu_0624140600_0.bgColor='#666666';
    mm_menu_0624140600_0.menuBorder=1;
    mm_menu_0624140600_0.menuLiteBgColor='#FFFFFF';
    mm_menu_0624140600_0.menuBorderBgColor='#CCCCCC';

 //Student Life menu creation
  window.mm_menu_0624140831_0 = new Menu("root",136,16,"Arial, Helvetica, sans-serif",10,"#FFD22B","#0021A4","#0021A4","#FFD22B","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_0624140831_0.addMenuItem("Clubs & Organizations", "location='PDF/StudentLife/ClubsOrganizations.pdf'");
	mm_menu_0624140831_0.addMenuItem("Class or 2017", "location='http://teachersites.schoolworld.com/webpages/Classof2017/'");
	mm_menu_0624140831_0.addMenuItem("Class or 2018", "location='http://teachersites.schoolworld.com/webpages/Classof2018/'");
    mm_menu_0624140831_0.addMenuItem("Elementary Student Council","location='http://teachersites.schoolworld.com/webpages/EStudentCouncil/'");
	mm_menu_0624140831_0.addMenuItem("FBLA","location='http://teachersites.schoolworld.com/webpages/FBLA/'");
	mm_menu_0624140831_0.addMenuItem("Mu Alpha Theta","location='http://teachersites.schoolworld.com/webpages/MuAlphaTheta/'");
	mm_menu_0624140831_0.addMenuItem("National Honor Society","location='http://teachersites.schoolworld.com/webpages/PVNHS/'");
	mm_menu_0624140831_0.addMenuItem("National Jr Honor Society","location='http://teachersites.schoolworld.com/webpages/PVNJHS/'");
	mm_menu_0624140831_0.addMenuItem("PV Chinese Club","location='http://teachersites.schoolworld.com/webpages/CClub/'");
	mm_menu_0624140831_0.addMenuItem("PV Drama Club","location='https://sites.google.com/site/pvsdrama/'");
	mm_menu_0624140831_0.addMenuItem("PV Health & Wellness","location='http://teachersites.schoolworld.com/webpages/PVHWC/'");
	mm_menu_0624140831_0.addMenuItem("PV Key Club","location='http://teachersites.schoolworld.com/webpages/PVKeyClub/'");
	mm_menu_0624140831_0.addMenuItem("PV Programming Club","location='http://monolc.com/PVPClub.html'");
	mm_menu_0624140831_0.addMenuItem("PV Robotics Club","location='http://pvrobotics.org/'");
	mm_menu_0624140831_0.addMenuItem("PV Sports","location='http://teachersites.schoolworld.com/webpages/JDiGiacomo/'");
	mm_menu_0624140831_0.addMenuItem("PVTV","location='http://www.schooltube.com/organization/134909/'");
	mm_menu_0624140831_0.addMenuItem("Save Darfur","location='http://teachersites.schoolworld.com/webpages/savedarfurcub/'");
	mm_menu_0624140831_0.addMenuItem("Serteen Club","location='http://teachersites.schoolworld.com/webpages/PVSerteen/'");
	mm_menu_0624140831_0.addMenuItem("Spanish Honor Society","location='http://teachersites.schoolworld.com/webpages/SpanishHonSoc/'");
    mm_menu_0624140831_0.addMenuItem("Speech & Debate","location='http://www.myteacherpages.com/webpages/SpeechandDebate/'");
    mm_menu_0624140831_0.addMenuItem("The Torch","location='http://www.pineviewtorch.com/'");
	//This is the line that adds the Clubs on Campus submenu
    //mm_menu_0624140831_0.addMenuItem(mm_menu_0624135151_0_3);
    
    mm_menu_0624140831_0.hideOnMouseOut=true;
    mm_menu_0624140831_0.bgColor='#666666';
    mm_menu_0624140831_0.menuBorder=1;
    mm_menu_0624140831_0.menuLiteBgColor='#FFFFFF';
    mm_menu_0624140831_0.menuBorderBgColor='#CCCCCC';
 
  //This is a master menu - DO NOT DELETE
  window.mm_menu_0624141759_0 = new Menu("root",146,16,"Arial, Helvetica, sans-serif",10,"#666666","#FFFFFF","#FFFFFF","#666666","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    //mm_menu_0624141759_0.addMenuItem("Apply&nbsp;to&nbsp;FAU","location='http://www.sarasota.k12.fl.us/academic/admissions/admissn.htm'");
    //mm_menu_0624141759_0.hideOnMouseOut=true;
    //mm_menu_0624141759_0.bgColor='#666666';
    //mm_menu_0624141759_0.menuBorder=1;
    //mm_menu_0624141759_0.menuLiteBgColor='#FFFFFF';
    //mm_menu_0624141759_0.menuBorderBgColor='#CCCCCC';

//This line writes all the menus - DO NOT DELETE
mm_menu_0624141759_0.writeMenus();
} // mmLoadMenus()



function MM_preloadImages() { //v3.0

  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();

    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)

    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}

}



function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}



function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}
