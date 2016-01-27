$(document).ready(function () {
	var rankdiff = function(rank, globalRank) {
		if(rank < globalRank) {
			return "<b>(↑) </b>"
		}
		else if(rank == globalRank) {
			return "<b>(-) </b>"
		}
		else {
			return "<b>(↓) </b>"
		}
	}
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
