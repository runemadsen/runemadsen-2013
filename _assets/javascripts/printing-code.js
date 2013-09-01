function createTOC()
{
	$("h2").each(function()
	{
		var org = $(this).text();
		alias = org.replace(/\ /g, "-").replace(/:/g, "").toLowerCase();

		// create anchor
		$("<a id='"+alias+"'></a>").insertBefore(this);

		// create link in toc ul
		$("#toc").append("<li><a href='#"+alias+"'>"+org+"</a></li>")
	});
}

function enableBigImageLinks()
{
	$("*[data-slideshow]").click(function() {
			window.open($(this).attr("data-slideshow"), '_blank');
	});
}