//PRJ07: Cinco Bandas Míticas #02

/*LISTA DE FUNÇÕES:
inic()

*/

//******** variáveis públicas ********


//*********** inicialização **********

function inic(){
	//mostra os logos na faixa esquerda
	mostraLogos();
	//mostra a introdução da apresentação
	mostraIntrod();
}

//*********** input/output ***********

//mostra os logos na faixa esquerda
function mostraLogos(){
	var i, codHTML = '';
	//logo da introdução
	codHTML += '<img class="logo" src="' + logoIntro() + '" onclick = "mostraIntrod()" />';
	//logos das bandas
	for(i=0; i<numBandas(); i++){
		codHTML += '<img class="logo" src="' + logoBanda(i) + '" onclick = "mostraBanda('+i+')" />';
	}
	$("logos").innerHTML = codHTML;
}

//mostra a introdução da apresentação (na faixa central)
function mostraIntrod(){
	var i, codHTML = '';
	//banner da introdução
	codHTML += '<img src="' + bannerIntro() + '" width="100%" />';
	//conteúdo da introdução (concatenação das peças do conteúdo)
	for(i=0; i<numContsIntrod(); i++){
		codHTML += codContIntrodApres(i);
	}
	$("info").innerHTML = codHTML;
	$("musicos").innerHTML = '';
}

//mostra a informação de uma banda, dado o índice da banda
function mostraBanda(iBnd){
	var i, url, ref, codHTML = '';
	//banner da banda
	codHTML += '<img src="' + bannerBanda(iBnd) + '" width="100%" />';
	//nome da banda
	codHTML += '<h2>' + nomeBanda(iBnd) + '</h2>';
	//texto da banda (sequência de parágrafos)
	for(i=0; i<numParagsBanda(iBnd); i++){
		codHTML += '<p class="normal">' + paragBanda(iBnd, i) + '</p>';
	}
	//links da banda
	for(i=0; i<numLinksBanda(iBnd); i++){
		url = urlLinkBanda(iBnd, i); ref = refLinkBanda(iBnd, i);
		codHTML += '<a class="normal" href="' + url + '" target="_blank">' + ref + '</a>';
	}
	$("info").innerHTML = codHTML;
	mostraFotosMusicosBanda(iBnd);
}

//mostra a informação de um músico de uma banda, dados o índice da banda e o índice do músico
function mostraMusico(iBnd, iMsc){
	var i, url, ref, codHTML = '';
	//fotos do músico 
	/*
	for(i=0; i<numImagsMusicoBanda(); i++){
		codHTML += '<img src="' + imagMusicoBanda(iBnd, iMsc, i) + '" width="50%" />';
	} */
	codHTML = '<div id="fotosMusico"></div>';
	//nome do músico
	codHTML += '<h2>' + nomeMusicoBanda(iBnd, iMsc) + '</h2>';
	//texto do músico
	for(i=0; i<numParagsMusicoBanda(iBnd, iMsc); i++){
		codHTML += '<p class="normal">' + paragMusicoBanda(iBnd, iMsc, i) + '</p>';
	}
	//links do músico
	for(i=0; i<numLinksMusicoBanda(iBnd, iMsc); i++){
		url = urlLinkMusicoBanda(iBnd, iMsc, i); ref = refLinkMusicoBanda(iBnd, iMsc, i);
		codHTML += '<a class="normal" href="' + url + '" target="_blank">' + ref + '</a>';
	}
	$("info").innerHTML = codHTML;
	mostraFotosMusicoBanda(iBnd, iMsc);
	scrollTo(0,0);
}


function mostraFotosMusicosBanda(iBnd){
	var i, codHTML = '';
	for(i=0; i<numMusicosBanda(iBnd); i++){
		var aux = iBnd + ',' + i;
		codHTML += '<div class="fotoMusico" onclick = "mostraMusico('+aux+')" >';
		codHTML += '<img src="'+imagMusicoBanda(iBnd, i, 0)+'" width="100%" />';
		codHTML += nomeMusicoBanda(iBnd, i);
		codHTML += '</div>';
	}
	$("musicos").innerHTML = codHTML;
	scrollTo(0,0);
}

function mostraFotosMusicoBanda(iBnd, iMsc){
	var i, codHTML = '';
	for(i=0; i<numImagsMusicoBanda(); i++){
		codHTML += '<img src="' + imagMusicoBanda(iBnd, iMsc, i) + '" width="50%" onclick = "amplia(this, '+iBnd+','+iMsc+')" />';
	}
	$("fotosMusico").innerHTML = codHTML;
}

function amplia(foto, iBnd, iMsc){
	$("fotosMusico").innerHTML = '<img src="'+ foto.src +'" width="100%" onclick="mostraFotosMusicoBanda('+iBnd+','+iMsc+')" />';
}



//************ processos *************

//referência a um objeto HTML, dado o seu ID
function $(idObj){return document.getElementById(idObj);}

//código HTML de uma peça do conteúdo da introdução, dado o índice da peça do conteúdo
function codContIntrodApres(iCont){
	var tipo = tipoContIntrod(iCont), teor = teorContIntrod(iCont);
	if(tipo == "ttlP") return '<h1>' + teor + '</h1>';
	if(tipo == "ttlS") return '<h2>' + teor + '</h2>';
	if(tipo == "parg") return '<p class="normal">' + teor + '</p>';
	if(tipo == "legd") return '<p class="legenda">' + teor + '</p>';
	if(tipo == "figr") return '<img class="figura" src="' + teor + '" />';
}







//código HTML das bandas (incluindo os músicos)
function codBandasApres(){
	var i, codHTML = '';
	//sequência dos códigos HTML das bandas
	for(i=0; i<numBandas(); i++){
		codHTML += codBandaApres(i);
	}
	return codHTML;
}

//código HTML de uma banda, dado o índice da banda
function codBandaApres(iBnd){
	var i, url, ref, codHTML = '<hr />';
	//DADOS DAS BANDAS
	//nome da banda
	codHTML += '<h2>' + nomeBanda(iBnd) + '</h2>';
	//banner da banda
	codHTML += '<img src="' + bannerBanda(iBnd) + '" width="100%" />';
	//texto da banda (sequência de parágrafos)
	for(i=0; i<numParagsBanda(iBnd); i++){
		codHTML += '<p class="normal">' + paragBanda(iBnd, i) + '</p>';
	}
	//links da banda
	for(i=0; i<numLinksBanda(iBnd); i++){
		url = urlLinkBanda(iBnd, i); ref = refLinkBanda(iBnd, i);
		codHTML += '<a class="normal" href="' + url + '" target="_blank">' + ref + '</a>';
	}
	//DADOS DOS MÚSICOS
	//sequência dos códigos HTML de cada um dos músicos da banda
	for(i=0; i<numMusicosBanda(iBnd); i++){
		codHTML += codMusicoBanda(iBnd, i);
	}
	return codHTML;
} 

//código HTML de um músico de uma banda, dados o índice da banda e o índice do músico
function codMusicoBanda(iBnd, iMsc){
	var i, url, ref, codHTML = '<hr />';
	//nome do músico
	codHTML += '<h3>' + nomeMusicoBanda(iBnd, iMsc) + '</h3>';
	//fotos do músico (duas por linha)
	for(i=0; i<numImagsMusicoBanda(); i++){
		codHTML += '<img src="' + imagMusicoBanda(iBnd, iMsc, i) + '" width="50%" />';
	}
	//texto do músico
	for(i=0; i<numParagsMusicoBanda(iBnd, iMsc); i++){
		codHTML += '<p class="normal">' + paragMusicoBanda(iBnd, iMsc, i) + '</p>';
	}
	//links do músico
	for(i=0; i<numLinksMusicoBanda(iBnd, iMsc); i++){
		url = urlLinkMusicoBanda(iBnd, iMsc, i); ref = refLinkMusicoBanda(iBnd, iMsc, i);
		codHTML += '<a class="normal" href="' + url + '" target="_blank">' + ref + '</a>';
	}
	return codHTML;
}



