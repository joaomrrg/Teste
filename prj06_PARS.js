//PRJ06: Cinco Bandas Míticas

/*LISTA DE FUNÇÕES:
inic()

*/

//******** variáveis públicas ********

var path = '../../Recursos/Projs/CincoBandas/'

//*********** input/output ***********


//************ processos *************

function logoIntro(){
	return path + bandasBD.logoIntro;
}

function bannerIntro(){
	return path + bandasBD.bannerIntro;
}

function numContsIntrod(){
	return bandasBD.introdCont.length;
}

function tipoContIntrod(iCont){
	return bandasBD.introdCont[iCont].tipo;
}

function teorContIntrod(iCont){
	var pref = '';
	if(tipoContIntrod(iCont)=="figr") pref = path;
	return pref + bandasBD.introdCont[iCont].teor;
}

function numBandas(){
	return bandasBD.bandas.length;
}

function nomeBanda(iBanda){
	return bandasBD.bandas[iBanda].nomeBnd;
}

function logoBanda(iBanda){
	return bandasBD.bandas[iBanda].logoBnd;
}

function bannerBanda(iBanda){
	return bandasBD.bandas[iBanda].bannerBnd;
}

function numParagsBanda(iBanda){
	return bandasBD.bandas.txtBnd.length;
}

/*
function paragsBanda(iBanda){
	var codHTML = '';
	for(int i=0; i<numParagsBanda(); i++){
		codHTML += 
	}
}*/

function paragBanda(iBanda, iParag){
	return bandasBD.bandas[iBanda].txtBnd[iParag];
}

function numLinksBanda(iBanda){
	return bandasBD.bandas[iBanda].linksBnd.length;
}

function refLinkBanda(iBanda, iLink){
	return bandasBD.bandas[ibanda].linksBanda[iLink].linkRef;
}

function urlLinkBanda(iBanda, iLink){
	return bandasBD.bandas[ibanda].linksBanda[iLink].linkURL;
}

function numMusicosBanda(iBanda){
	return bandasBD.bandas[iBanda].musicosBnd.length;
}

function nomeMusicoBanda(iBanda, iMusico){
	return bandasBD.bandas[iBanda].musicosBnd[iMusico].nomeMsc;
}

function numImagsMusicoBanda(iBanda, iMusico){
	return bandasBD.bandas[iBanda].musicosBnd[iMusico].imagsMsc.length;
}

function imagMusicoBanda(iBanda, iMusico, iImag){
	return path + bandasBD.bandas[iBanda].musicosBnd[iMusico].imagsMsc[iImag];
}

function numParagsMusicoBanda(iBanda, iMusico){
	return bandasBD.bandas[iBanda].musicosBnd[iMusico].txtMsc.length;
}

function paragMusicoBanda(iBanda, iMusico, iParag){
	return bandasBD.bandas[iBanda].musicosBnd[iMusico].txtMsc[iParag];
}

function linksMusicoBanda(iBanda, iMusico){
	return bandasBD.bandas[iBanda].musicosBnd[iMusico].linksMsc;
}









