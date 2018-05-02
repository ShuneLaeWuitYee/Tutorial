$(function(){

	var fr=$('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'file:///D:/Web/Tutorial/static/flags/fr.gif'}));
	$('body').append(fr);
	$('img').css({
		border:'solid 3px gray',
		width:'200'
	});
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
	
	$('body>div').css({
		width: '206',
		border: '2px solid black',
		padding: '24px',
		margin: '1ex',
		display: 'inline-block'
	});

	var fr=$('<div/>');
	fr.append($('<div/>',{text:'Brazil'}));
	fr.append($('<img/>',{src:'file:///D:/Web/Tutorial/static/flags/br.gif'}));
	$('body').append(fr);
	
	
	var fr=$('<div/>');
	fr.append($('<div/>',{text:'Greece'}));
	fr.append($('<img/>',{src:'file:///D:/Web/Tutorial/static/flags/gr.gif'}));
	$('body').append(fr);
	
	
});

var clist=[
["br","Brazil"],
["fr","France"],
["gr","Greece"],
["za","South Africa"]
];
$(function(){
	createOne();
})
function createOne(){
	var i=Math.floor(clist.length*Math.random());
	var code=clist[i][0];
	var name=clist[i][1];
	var qu=$('<div id="qu"/>');
	qu.append($('<div/>',{text:name,id:'ans'}));
	qu.append($('<img/>',{src:'file:///D:/Web/Tutorial/static/flags/'+code+'.gif'}));
	$('body').append(qu);
	$('img').css({
		border:'solid 3px gray',
		width:'200'
	});
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
	$('body>div').css({
		width: '206',
		border: '2px solid black',
		padding: '24px',
		display: 'inline-block',
		margin: '1ex'
	});

	qu.append($('<div/>',{text:name,id:'ans'}).hide());
	qu.append($('<input/>',{id:'response'}));

	$('#response').keyup(function(){
		if($('#response').val()==$('#ans').text()){
			alert('Well Done');
		}
	});
}