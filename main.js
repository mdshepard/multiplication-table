var color_td;
document.write("<table border='3px'>");

for(var y = 1; y < 11; y++) {

	document.write("<tr style='height:30px;'>");

	for(var x = 1; x < 11; x++) {

		if(x == 1 || y == 1) {
		}
		else {
		}

		document.write("<td style='width:30px;background-color:" + color_td + "'>" + y*x + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");