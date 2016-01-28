$(document).ready(function () {
    /*
     * Works out whether the current rank of a site is
     * higher, unchanged, or lower than the previous rank, and returns
     * html code containing an up-arrow, hyphen, or down-arrow
     * respectively.
     */  	
    var rankdiff = function(rank, oldRank) {
	if(rank < oldRank) {
	    return "<b>(↑) </b>";
	}
	else if(rank == oldRank) {
	    return "<b>(-) </b>";
	}
	else {
	    return "<b>(↓) </b>";
        };
    };
    /*
     * Creates a new CanvasJS Chart called "piechart" and 
     * styles it, then adds the data and finally renders 
     * it to the page.
     */
    var chart = new CanvasJS.Chart("piechart", {
        title: {text: "Website Quantity by TLD" }, 
        animationEnabled: true, 
        backgroundColor: "#add8e6",
        legend: {
            verticalAlign : "center",
            horizontalAlign : "left",
            fontSize : 18
        }, 
        theme : "theme2",
        data : [ {
            type : "pie",
            indexLabelFontFamily: "Quicksand",       
	    indexLabelFontSize: 20,
	    indexLabel: "{label} {y}%",
	    startAngle:-20,      
	    showInLegend: true,
	    toolTipContent:"{legendText} {y}%",
	    dataPoints: datapoints
        } ]
    }); chart.render(); 
});
    /*
     * Legacy code that was used to generate a simple HTML table.
     *
    var outputtable = $("#datatable");
	for(var i = 0 ; i < 10000 ; i++) {
		
		var globalRank = bigdata[i].GlobalRank;
		var prevGlobalRank = bigdata[i].PrevGlobalRank;
		
		var tldRank = bigdata[i].TldRank;
		var prevTldRank = bigdata[i].PrevTldRank;
        
		var globalDiff = rankdiff(globalRank, prevGlobalRank);		
	        var tldDiff = rankdiff(tldRank, prevTldRank);
		
		outputtable.append("<tr>" + 
			                  "<td>" + globalDiff + globalRank   + "</td>" +
		              		  "<td>" + tldDiff + tldRank            + "</td>" +
		                          "<td>" + bigdata[i].Domain          + "</td>" + 
		  			  "<td>" + prevGlobalRank             + "</td>" +
				          "<td>" + prevTldRank                  + "</td>" +
				   "</tr>");
	}
});
*/
