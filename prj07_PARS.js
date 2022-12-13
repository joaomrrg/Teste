//PRJ07: Cinco Bandas Míticas #02

/*LISTA DE FUNÇÕES:

*/

//******** variáveis públicas ********

var path = '../../Recursos/Projs/CincoBandas/';

//************ processos *************

//referência completa ao ficheiro de imagem do logotipo da introdução
function logoIntro(){
	return path + bandasBD.logoIntro;
}

//referência completa ao ficheiro de imagem da banner da introdução
function bannerIntro(){
	return path + bandasBD.bannerIntro;
}

//número de peças do conteúdo da introdução
function numContsIntrod(){
	return bandasBD.introdCont.length;
}

//tipo de uma peça de conteúdo da introdução, dado o índice da peça de conteúdo
function tipoContIntrod(iCont){
	return bandasBD.introdCont[iCont].tipo;
}

//teor de uma peça de conteúdo da introdução, dado o índice da peça de conteúdo
function teorContIntrod(iCont){
	var pref = '';
	if(tipoContIntrod(iCont) =="figr") pref = path;
	return pref + bandasBD.introdCont[iCont].teor;
}

//número de bandas
function numBandas(){
	return bandasBD.bandas.length;
}

//nome de uma banda, dado o índice da banda
function nomeBanda(iBnd){
	return bandasBD.bandas[iBnd].nomeBnd;
}

//referência completa ao ficheiro de imagem do logotipo de um banda, dado o índice da banda
function logoBanda(iBnd){
	return path + bandasBD.bandas[iBnd].logoBnd;
}

//referência completa ao ficheiro de imagem da banner de um banda, dado o índice da banda
function bannerBanda(iBnd){
	return path + bandasBD.bandas[iBnd].bannerBnd;
}

//número de parágrafos de uma banda, dado o índice da banda
function numParagsBanda(iBnd){
	return bandasBD.bandas[iBnd].txtBnd.length;
}

//teor de um parágrafo do texto de uma banda, dados o índice da banda e o índice do parágrafo
function paragBanda(iBnd, iParag){
	return bandasBD.bandas[iBnd].txtBnd[iParag];
}

//número de links web de uma banda, dado o índice da banda
function numLinksBanda(iBnd){
	return bandasBD.bandas[iBnd].linksBnd.length;
}

//texto de referência de um link web de uma banda, dados o índice da banda e o índice do link web
function refLinkBanda(iBnd, iLink){
	return bandasBD.bandas[iBnd].linksBnd[iLink].linkRef;
}

//URL de um link web de uma banda, dados o índice da banda e o índice do link web
function urlLinkBanda(iBnd, iLink){
	return bandasBD.bandas[iBnd].linksBnd[iLink].linkURL;
}

//número de músicos de um banda, dado o índice da banda
function numMusicosBanda(iBnd){
	return bandasBD.bandas[iBnd].musicosBnd.length;
}

//nome de um músico de uma banda, dados o índice da banda e o índice do músico
function nomeMusicoBanda(iBnd, iMsc){
	return bandasBD.bandas[iBnd].musicosBnd[iMsc].nomeMsc;
}

//número de imagens de qualquer músico de qualquer banda
function numImagsMusicoBanda(){
	return 4;
}

//referência completa ao ficheiro de imagem de um músico de uma banda, dados o índice da banda, o índice do músico e o índice da imagem
function imagMusicoBanda(iBnd, iMsc, iImag){
	return path + bandasBD.bandas[iBnd].musicosBnd[iMsc].imagsMsc[iImag];
}

//número de parágrafos do texto de um músico de uma banda, dados o índice da banda e o índice do músico
function numParagsMusicoBanda(iBnd, iMsc){
	return bandasBD.bandas[iBnd].musicosBnd[iMsc].txtMsc.length;
}

//teor de um parágrafo do texto de um músico de uma banda, dados o índice da banda, o índice do músico e o índice do parágrafo
function paragMusicoBanda(iBnd, iMsc, iParag){
	return bandasBD.bandas[iBnd].musicosBnd[iMsc].txtMsc[iParag];
}

//número de links web de um músico de uma banda, dados o índice da banda e o índice do músico
function numLinksMusicoBanda(iBnd, iMsc){
	return bandasBD.bandas[iBnd].musicosBnd[iMsc].linksMsc.length;
}

//texto de referência de um link web de um músico de uma banda, dados o índice da banda, o índice do músico e o índice do link web
function refLinkMusicoBanda(iBnd, iMsc, iLink){
	return bandasBD.bandas[iBnd].musicosBnd[iMsc].linksMsc[iLink].linkRef;
}

//URL de um link web de um músico de uma banda, dados o índice da banda, o índice do músico e o índice do link web
function urlLinkMusicoBanda(iBnd, iMsc, iLink){
	return bandasBD.bandas[iBnd].musicosBnd[iMsc].linksMsc[iLink].linkURL;
}







