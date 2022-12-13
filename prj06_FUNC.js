//PRJ06: Cinco Bandas Míticas

/*LISTA DE FUNÇÕES:
inic()

*/

//******** variáveis públicas ********


//*********** inicialização **********
function inic(){
	$("base").innerHTML = codApres();
}

//*********** input/output ***********

function codApres(){
	var codHTML = '';
	codHTML += codIntrodApres();
	return codHTML;
}

//************ processos *************

//referencia a um objeto html dado o seu id
function $(idObj){
	return document.getElementById(idObj);
}

function codIntrodApres(){
	var codHTML = '', i;
	codHTML += '<img src = "'+ bannerIntro() +'" width = "100%"/>';
	for(i=0; i<numContsIntrod(); i++){
		codHTML += codContIntrodApres(i);
	}
	return codHTML;
}

function codContIntrodApres(iCont){
	var tipo = tipoContIntrod(iCont), teor = teorContIntrod(iCont);
	if(tipo == "ttlP") return '<h1>' + teor + '</h1>';
	if(tipo == "ttlS") return '<h2>' + teor + '</h2>';
	if(tipo == "parg") return '<p class = "normal">' + teor + '</p>';
	if(tipo == "legd") return '<p class = "legenda">' + teor + '</p>';
	if(tipo == "figr") return '<img class = "figura" src = "' + teor + '">';
}






