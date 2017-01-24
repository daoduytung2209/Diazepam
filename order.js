// JavaScript Document
function checkICSSelect(){
	switch(document.getElementById("ICSselect").value)
		{
				case "Default":
        	document.getElementById("icsPrice").innerHTML = 0;
			document.getElementById("ICSimage").src = "images/ice cream2.jpg";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "IceCreamScoop";
        	break;
				case "Chocolate":
        	document.getElementById("icsPrice").innerHTML = 5;
			document.getElementById("ICSimage").src = "images/dark chocolate1.jpg";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSChocolate";
        	break;
				case "Coffee":
        	document.getElementById("icsPrice").innerHTML = 4;
			document.getElementById("ICSimage").src = "images/frappucino1.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSCoffee";
        	break;
				case "GrapeNuts":
        	document.getElementById("icsPrice").innerHTML = 5;
			document.getElementById("ICSimage").src = "images/grape nuts1.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSGrapeNuts";
        	break;
				case "Macchiato":
        	document.getElementById("icsPrice").innerHTML = 7;
			document.getElementById("ICSimage").src = "images/machiatto1.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSMacchiato";
        	break;
				case "OreoCrush":
        	document.getElementById("icsPrice").innerHTML = 4;
			document.getElementById("ICSimage").src = "images/oreo crush1.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSOreoCrush";
        	break;
				case "Vanilla":
        	document.getElementById("icsPrice").innerHTML = 5;
			document.getElementById("ICSimage").src = "images/vanilla-ice-cream2.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSVanilla";
        	break;
				case "SweetCorn":
        	document.getElementById("icsPrice").innerHTML = 6;
			document.getElementById("ICSimage").src = "images/sweet corn1.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSSweetCorn";
        	break;
				case "SaltedCaramal":
        	document.getElementById("icsPrice").innerHTML = 7;
			document.getElementById("ICSimage").src = "images/salted caramel1.JPG";
			document.getElementById("ICSlink").href = "#";
			document.getElementById("ICSlink").title = "ICSSaltedCaramal";
        	break;
		}
}
function checkProductSelect(){
	switch(document.getElementById("ProductSelect").value)
		{
		case "WaffleIceCream":
        	document.getElementById("ProductPrice").innerHTML = 7;
			document.getElementById("ProductImage").src = "images/Waffle ice-cream4.jpg";
			document.getElementById("ProductLink").href = "#";
			document.getElementById("ProductLink").title = "Waffle ice-cream";
        	break;
		case "IceCreamCake":
        	document.getElementById("ProductPrice").innerHTML = 10;
			document.getElementById("ProductImage").src = "images/ice-cream cake1.JPG";
			document.getElementById("ProductLink").href = "#";
			document.getElementById("ProductLink").title = "Ice-cream cake";
        	break;
		case "FriedIceCream":
        	document.getElementById("ProductPrice").innerHTML = 8;
			document.getElementById("ProductImage").src = "images/Fried ice-cream1.JPG";
			document.getElementById("ProductLink").href = "#";
			document.getElementById("ProductLink").title = "Fried ice-cream";
        	break;
		case "IceCreamCookies":
        	document.getElementById("ProductPrice").innerHTML = 7;
			document.getElementById("ProductImage").src = "images/Ice-cream cookies2.JPG";
			document.getElementById("ProductLink").href = "#";
			document.getElementById("ProductLink").title = "Ice-cream cookies";
        	break;
		}
}
function total() {
	document.getElementById("toalPrice").innerHTML = document.getElementById("icsPrice").innerHTML * document.getElementById("icsQty").value + document.getElementById("ProductPrice").innerHTML * document.getElementById("ProductQty").value;
}
		