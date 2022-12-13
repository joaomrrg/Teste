/*
bandasBD
	objeto {logoIntro, bannerIntro, introdCont, bandas}

bandasBD.logoIntro
	string, ficheiro de imagem do logotipo da introdução

bandasBD.bannerIntro
	string, ficheiro de imagem da banner da introdução

bandasBD.introdCont
	lista de objetos {tipo, teor}
	cada objeto representa um conteúdo da introdução, de acordo com um de 5 tipos

bandasBD.bandas
	lista de objetos {nomeBnd, logoBnd, bannerBnd, txtBnd, linksBnd, musicosBnd}
	cada objeto representa informação sobre uma banda

bandasBD.introdCont[i].tipo
	string "ttlP" (o conteúdo é um título principal)
	string "ttlS" (o conteúdo é um título secundário)
	string "parg" (o conteúdo é um parágrafo)
	string "figr" (o conteúdo é uma figura)
	string "legd" (o conteúdo é uma legenda de uma figura)

bandasBD.introdCont[i].teor
	string de texto, ou de ficheiro de imagem, no caso de ser uma figura

bandasBD.bandas[i].nomeBnd
	string, nome da banda
	
bandasBD.bandas[i].logoBnd
	string, ficheiro de imagem de um logotipo da banda
	
bandasBD.bandas[i].bannerBnd
	string, ficheiro de imagem de uma banner da banda
	
bandasBD.bandas[i].txtBnd
	lista de strings
	cada string representa um parágrafo de texto da banda
	
bandasBD.bandas[i].linksBnd
	lista de objetos {linkRef, linkURL}
	cada objeto representa uma conexão web relativa à banda
	
bandasBD.bandas[i].linksBnd[j].linkRef
	string, texto de referência da conexão web

bandasBD.bandas[i].linksBnd[j].linkURL
	string, URL da conexão web

bandasBD.bandas[i].musicosBnd
	lista de objetos {nomeMsc, imagsMsc, txtMsc, linksMsc}
	cada objeto representa informação de um músico

bandasBD.bandas[i].musicosBnd[j].nomeMsc
	string, nome do músico
	
bandasBD.bandas[i].musicosBnd[j].imagsMsc
	lista de 4 strings
	cada string representa um ficheiro de imagem da foto do músico
	
bandasBD.bandas[i].musicosBnd[j].txtMsc
	lista de strings
	cada string representa um parágrafo de texto do músico
	
bandasBD.bandas[i].musicosBnd[j].linksMsc
	lista de objetos {linkRef, linkURL}
	cada objeto representa uma conexão web relativa ao músico

bandasBD.bandas[i].musicosBnd[j].linksMsc[k].linkRef
	string, texto de referência da conexão web

bandasBD.bandas[i].musicosBnd[j].linksMsc[k].linkURL
	string, URL da conexão web

*/
var bandasBD = {
	logoIntro:"logoIntro.jpg", bannerIntro:"bannerIntro.jpg",
	introdCont:[
		{	tipo:"ttlP", 
			teor:"Cinco Bandas Míticas de Pop/Rock"
		},
		{	tipo:"ttlS", 
			teor:"A Música Pop"
		},
		{	tipo:"parg", 
			teor:"A <i>m&uacute;sica pop</i> &eacute; um g&eacute;nero da m&uacute;sica popular que se originou durante a d&eacute;cada de 1950 nos Estados Unidos e no Reino Unido. Geralmente &eacute; visto como sin&oacute;nimo de <i>m&uacute;sica popular</i>, embora este termo seja usado para todos os estilos musicais surgidos no povo, em contraponto com a m&uacute;sica erudita, feita por uma classe intelectual."
		},
		{	tipo:"parg", 
			teor:"A m&uacute;sica pop &eacute; ecl&eacute;tica, e muitas vezes incorpora elementos de outros estilos, como o <i>urban</i>, o <i>dance</i>, o <i>rock</i>, a <i>m&uacute;sica latina</i>, o <i>soul</i> e o <i>country</i>. No entanto, existem elementos principais que definem a m&uacute;sica pop: as can&ccedil;&otilde;es s&atilde;o geralmente de dura&ccedil;&atilde;o m&eacute;dia-curta, escritas num formato b&aacute;sico (estrutura verso-refr&atilde;o), empregam refr&otilde;es e batidas repetidas, ganchos, t&ecirc;m muita p&oacute;s-produ&ccedil;&atilde;o e abordam temas emocionais universais, como amor, &oacute;dio, ci&uacute;me, saudade, melancolia, paix&atilde;o, etc., para interessar a um maior n&uacute;mero de pessoas e para tornar a m&uacute;sica pop facilmente atraente a qualquer ouvinte, sendo, por isso, o g&eacute;nero musical mais comercial."
		},
		{	tipo:"figr", 
			teor:"musicosPop.jpg"
		},
		{	tipo:"legd", 
			teor:"Os Beatles, Madonna e Michael Jackson foram alguns dos maiores expoentes da música Pop"
		},
		{	tipo:"parg", 
			teor:"Os escritores David Hatch e Stephen Millward definem a m&uacute;sica pop como um <i>conceito musical que &eacute; distingu&iacute;vel da m&uacute;sica popular, da folcl&oacute;rica e do jazz</i>. Embora seja normalmente vista como orientada para as tabelas de sucessos, a m&uacute;sica pop n&atilde;o abrange todas as listas de can&ccedil;&otilde;es mais vendidas, que sempre tiveram obras das mais diversas origens, como a cl&aacute;ssica, o jazz, o rock e muitas outras. Assim, a m&uacute;sica pop pode ser descrita como um g&eacute;nero distinto, orientado para um p&uacute;blico jovem e caracterizado como uma vers&atilde;o mais leve do <i>rock &amp; roll</i>."
		},
		{	tipo:"ttlS", 
			teor:"A Música Rock"
		},
		{	tipo:"parg", 
			teor:"<i>M&uacute;sica Rock</i> &eacute; um conceito muito abrangente que define um g&eacute;nero musical de m&uacute;sica popular que se desenvolveu durante e ap&oacute;s a d&eacute;cada de 1950. As suas ra&iacute;zes fundam-se no <i>rock &amp; roll</i> que emergiu nos Estados Unidos nas d&eacute;cadas de 1940 e de 1950 e que, por sua vez, evolu&iacute;u do <i>jazz</i>, dos <i>blues</i>, da <i>m&uacute;sica country</i> e do <i>rhythm &amp; blues</i>. Outras influ&ecirc;ncias musicais sobre o rock ainda incluem a <i>folk music</i> e a m&uacute;sica cl&aacute;ssica. Todas estas influ&ecirc;ncias foram combinadas em estruturas musicais simples baseadas nos <i>blues</i> que eram <i>r&aacute;pidas, dan&ccedil;&aacute;veis e pegajosas</i>."
		},
		{	tipo:"parg", 
			teor:"Entre as d&eacute;cadas de 1960 e de 1970, o rock desenvolveu diferentes subg&eacute;neros. Quando foi misturado com a <i>folk music</i> ou com os <i>blues</i> ou com o <i>jazz</i>, nasceram o <i>folk rock</i>, o <i>blues rock</i> e o <i>jazz rock</i>, respectivamente. Na d&eacute;cada de 1970, o rock incorporou influ&ecirc;ncias de g&eacute;neros como a <i>soul music</i>, o <i>funk</i> e de diversos ritmos de pa&iacute;ses latino-americanos. Ainda naquela d&eacute;cada, o rock gerou uma s&eacute;rie de outros subg&eacute;neros, tais como o <i>soft rock</i>, o <i>glam rock</i>, o <i>heavy metal</i>, o <i>hard rock</i>, o <i>rock progressivo</i> e o <i>punk rock</i>. J&aacute; na d&eacute;cada de 1980, surgiram outros subg&eacute;neros, como a <i>new wave</i>, o <i>punk hardcore</i> e <i>rock alternativo</i>. Na d&eacute;cada de 1990, surgiram novos subg&eacute;neros, como o <i>grunge</i>, o <i>britpop</i>, o <i>indie rock</i> e o <i>nu metal</i>."
		},
		{	tipo:"figr", 
			teor:"musicosRock.jpg"
		},
		{	tipo:"legd", 
			teor:"Elvis Presley, Joan Baez, Bob Dylan, Jimi Hendrix e Eric Clapton foram alguns dos grandes cultores e influenciadores da música Rock"
		},
		{	tipo:"parg", 
			teor:"O som do rock, muitas vezes, gira em torno da guitarra, el&eacute;trica ou ac&uacute;stica, e utiliza um forte <i>backbeat</i> (contratempo) estabelecido pelo ritmo do baixo el&eacute;trico, da bateria e de instrumentos de teclas, como o &oacute;rg&atilde;o, o piano, ou, desde a d&eacute;cada de 1970, os sintetizadores digitais. Juntamente com guitarra ou teclado, s&atilde;o por vezes utilizados o saxofone e a harm&oacute;nica, como instrumentos solo. Na sua <i>forma pura</i>, o rock tem tr&ecirc;s acordes, um forte e insistente contratempo e uma melodia cativante."
		},
		{	tipo:"parg", 
			teor:"A maioria dos grupos de rock &eacute; constitu&iacute;da por um vocalista principal, um guitarrista, um baixista e um baterista, formando um quarteto. Alguns grupos omitem uma ou mais destas fun&ccedil;&otilde;es e/ou utilizam um vocalista que toca um instrumento enquanto canta, &agrave;s vezes formando um trio ou duo; outros ainda adicionam outros m&uacute;sicos, como um ou dois guitarristas ou um tecladista. Embora mais raramente, os grupos tamb&eacute;m utilizam saxofonistas ou trompetistas ou, at&eacute;, instrumentistas de violinos ou de violoncelos, especialmente, el&eacute;tricos ou eletrificados."
		},
	],
	bandas:[
		//Beatles
		{
			nomeBnd:"Beatles", logoBnd:"btlsLogo.jpg", bannerBnd:"btlsBanner.jpg",
			linksBnd:[
				{	linkRef:"Site Oficial", 
					linkURL:"https://www.thebeatles.com/"
				},
				{	linkRef:"Wikipédia (em português)", 
					linkURL:"https://pt.wikipedia.org/wiki/The_Beatles"
				},
				{	linkRef:"Canal Youtube", 
					linkURL:"https://www.youtube.com/thebeatles"
				},
				{	linkRef:"Vagalume (letras e músicas)", 
					linkURL:"https://www.vagalume.com.br/the-beatles/"
				},
				{	linkRef:"Discogs", 
					linkURL:"https://www.discogs.com/artist/82730-The-Beatles"
				}
			],
			txtBnd:[
				"Os <i>Beatles</i> foram uma banda de rock brit&acirc;nica, formada em Liverpool em 1960. &Eacute; o grupo musical mais bem-sucedido e aclamado da hist&oacute;ria da m&uacute;sica pop. A partir de 1962, o grupo era formado por John Lennon (guitarra r&iacute;tmica e vocal), Paul McCartney (baixo, piano e vocal), George Harrison (guitarra solo e vocal) e Ringo Starr (bateria e vocal).",
				"Em 1955, John Lennon, com 15 anos, criou o grupo <i>The Quarrymen </i>com amigos da escola onde estudava. Em julho de 1957, Paul McCartney, com 15 anos, foi ao show dos <i>The Quarrymen </i>e acabou sendo apresentado a John Lennon, que o convidou a juntar-se &agrave; banda. Em 1958, Paul McCartney apresentou &agrave; banda um mi&uacute;do seu conhecido, George Harrison, com 15 anos. O l&iacute;der John Lennon, j&aacute; com 18 anos, foi inicialmente relutante em aceitar George Harrison, por este ser tr&ecirc;s anos mais novo, mas acabou por aceit&aacute;-lo na banda pelo facto de George Harrison tocar guitarra melhor do que qualquer membro dos <i>The Quarrymen</i>. Paul e John come&ccedil;aram a compor m&uacute;sicas para a banda juntos. John compunha m&uacute;sicas num estilo mais surrealista, com jogos de palavras, j&aacute; as m&uacute;sicas do Paul eram mais suaves e rom&acirc;nticas.",
				"Entretanto, os <i>The Quarry Men</i> foram mudando de nome e reduzindo os seus membros at&eacute; que finalmente, em 1960, se chamou de <i>The Single Beatle</i> e logo de seguida, <i>The Beatles</i>. Ainda fizeram parte da banda, o baixista Stuart Sutcliffe, por poucos meses, e o baterista Pete Best, at&eacute; 1962. &Eacute; em 1962 que o presidente da EMI, George Martin, inicialmente pouco impressionado com os <i>Beatles</i>, percebeu que a banda tinha um enorme potencial criativo e que poderia evoluir muito, com uma orienta&ccedil;&atilde;o mais profissional. Resolveu contratar os <i>Beatles</i>, com a condi&ccedil;&atilde;o de que Pete Best fosse demitido, por consider&aacute;-lo um m&uacute;sico fraco, propondo a contrata&ccedil;&atilde;o de Ringo Starr, baterista da banda <i>Rory Storm and the Hurricanes</i>, que ent&atilde;o fazia sucesso na cidade de Liverpool. De facto, Ringo Starr conhecia bem os<i> Beatles</i> e at&eacute; j&aacute; tinha tocado com eles em v&aacute;rios eventos, entre 1960 e 1962. Assim, tr&ecirc;s dias ap&oacute;s a demiss&atilde;o de Pete Best, Ringo Starr tocou com os <i>Beatles</i> j&aacute; como o baterista definitivo da banda.",
				"Incialmente fundada no <i>skiffle</i> e no <i>rock and roll</i> da d&eacute;cada de 1950, a banda veio mais tarde a assumir diversos g&eacute;neros que v&atilde;o do <i>folk rock</i> ao <i>rock psicad&eacute;lico</i>, muitas vezes incorporando elementos da m&uacute;sica cl&aacute;ssica e outros, em formas inovadoras e criativas. A sua crescente popularidade, que a imprensa brit&acirc;nica chamava de <i>Beatlemania</i>, fez com que eles crescessem em sofistica&ccedil;&atilde;o. Os <i>Beatles</i> vieram a ser percebidos como a encarna&ccedil;&atilde;o de ideais progressistas e a sua influ&ecirc;ncia estendeu-se at&eacute; &agrave;s revolu&ccedil;&otilde;es sociais e culturais da d&eacute;cada de 1960.",
				"Os <i>Beatles</i> constru&iacute;ram a sua reputa&ccedil;&atilde;o nos <i>pubs</i> de Liverpool e de Hamburgo durante um per&iacute;odo de tr&ecirc;s anos a partir de 1960. Abastecida de equipamentos profissionais moldados por Brian Epstein, que depois se ofereceu para administrar a banda, e com o seu potencial refor&ccedil;ado pela criatividade do produtor George Martin, os Beatles alcan&ccedil;aram um sucesso imediato no Reino Unido com seu primeiro single, <i>Love Me Do</i>. Ganhando popularidade internacional a partir do ano seguinte, viajaram extensivamente pelo mundo at&eacute; 1966, quando se retiraram para trabalhar em est&uacute;dio at&eacute; &agrave; sua dissolu&ccedil;&atilde;o definitiva em 1970. Cada m&uacute;sico seguiu, ent&atilde;o, para uma carreira independente. McCartney e Starr continuam ativos; Lennon foi assassinado em 1980; e Harrison morreu de cancro em 2001.",
				"Durante os seus anos de est&uacute;dio, os <i>Beatles</i> produziram o que a cr&iacute;tica considera um dos seus melhores materiais, incluindo o &aacute;lbum <i>Sgt. Pepper's Lonely Hearts Club Band</i> (1967), amplamente visto como uma obra-prima. Quase cinco d&eacute;cadas ap&oacute;s a sua dissolu&ccedil;&atilde;o, a m&uacute;sica do grupo continua a ser muito popular. Os<i> Beatles</i> tiveram mais &aacute;lbuns em n&uacute;mero no <i>top</i> das <i>hit parades</i> brit&acirc;nicas do que qualquer outro grupo musical e venderam mais &aacute;lbuns nos Estados Unidos do que qualquer outro grupo ou artista. Em 2008, a Billboard divulgou uma lista dos top-selling de todos os tempos dos artistas <i>Hot 100</i> para celebrar o cinquenten&aacute;rio das <i>hit parades</i> de <i>singles</i> dos Estados Unidos, e a banda permaneceu em primeiro lugar. Eles j&aacute; foram honrados com 8 <i>Grammy Awards</i>, e 15 <i>Ivor Novello Awards</i> da <i>British Academy of Songwriters, Composers and Authors (Basca).</i> Segundo estimativas cred&iacute;veis, j&aacute; venderam cerca de 600 milh&otilde;es de &aacute;lbuns e mais de 3000 milh&otilde;es de singles em todo o mundo. Os<i> Beatles</i> foram coletivamente inclu&iacute;dos na compila&ccedil;&atilde;o da revista <i>Time</i> das 100 pessoas mais importantes e influentes do s&eacute;culo XX.",
			],
			musicosBnd:[
				{
					nomeMsc:"John Lennon",
					imagsMsc:["btlsJL1.jpg", "btlsJL2.jpg", "btlsJL3.jpg", "btlsJL4.jpg"],
					txtMsc:[
						"John Lennon, nascido como John Winston Lennon, em Liverpool, a 9 de outubro de 1940, tornou-se John Winston Ono Lennon ap&oacute;s o seu casamento com a artista pl&aacute;stica Yoko Ono, em 1969. Foi fundador e integrante dos <i>Beatles</i>, desde 1955 (quando ainda era a banda <i>The Quarrymen</i>) at&eacute; 1970 (quando os integrantes se separaram antes ainda da dissolu&ccedil;&atilde;o legal da banda pela justi&ccedil;a). Foi compositor, cantor e multi-instrumentista, tocando piano, guitarra, harm&oacute;nica, instrumentos de percuss&atilde;o, teclados (como clavioline, cravo, mellotron e &oacute;rg&atilde;o), baixo (ocasionalmente), maracas, pandeiro (em can&ccedil;&otilde;es dos &aacute;lbuns <i>Revolver</i> e <i>Magical Mystery Tour</i>) e <i>tape loops</i>.",
						"John Lennon Comp&ocirc;s v&aacute;rios sucessos dos Beatles, incluindo a marcante can&ccedil;&atilde;o <i>All You Need Is Love</i>, apresentada na primeira transmiss&atilde;o por sat&eacute;lite ao vivo do mundo. Conjuntamente com Paul McCartney, John Lennon fez parte de uma das mais importantes duplas de compositores do s&eacute;culo XX. Foi assassinado em Nova Iorque, por um fan&aacute;tico, a 8 de dezembro de 1980.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.johnlennon.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/John_Lennon"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/johnlennon"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/john-lennon/"
						}
					],
				},
				{
					nomeMsc:"Paul McCartney",
					imagsMsc:["btlsMC1.jpg", "btlsMC2.jpg", "btlsMC3.jpg", "btlsMC4.jpg"],
					txtMsc:[
						"James Paul McCartney, nascido a 18 de julho de 1942, em Liverpool, &eacute; um cantor, compositor, multi-instrumentista, empres&aacute;rio, produtor musical, cinematogr&aacute;fico e ativista brit&acirc;nico dos direitos dos animais. McCartney alcan&ccedil;ou proje&ccedil;&atilde;o mundial como membro dos<i> Beatles</i>, com John Lennon, George Harrison e Ringo Starr. Conjuntamente com John Lennon, Paul McCartney formou uma das mais influentes e bem-sucedidas parcerias musicais de todos os tempos, escrevendo as can&ccedil;&otilde;es mais populares da hist&oacute;ria do rock.",
						"Ap&oacute;s a dissolu&ccedil;&atilde;o dos <i>Beatles</i> em 1970, Paul McCartney lan&ccedil;ou-se numa carreira a solo de grande sucesso, tendo formado a banda os <i>Wings</i>, com a sua primeira mulher Linda McCartney. Ele tamb&eacute;m trabalhou com m&uacute;sica cl&aacute;ssica, eletr&oacute;nica e com trilhas sonoras. Em 1979, o Livro <i>Guinness dos Recordes</i> declarou-o como o compositor musical de maior sucesso da hist&oacute;ria da m&uacute;sica pop mundial de todos os tempos. Paul McCartney teve 29 composi&ccedil;&otilde;es da sua autoria no primeiro lugar das <i>hit-parades</i> de sucesso dos EUA, vinte das quais junto com os <i>Beatles</i> e o restante na sua carreira solo ou com o seu grupo <i>Wings</i>.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"https://www.paulmccartney.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Paul_McCartney"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/paulmccartney"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/paul-mccartney/"
						}
					],
				},
				{
					nomeMsc:"George Harrison",
					imagsMsc:["btlsGH1.jpg", "btlsGH2.jpg", "btlsGH3.jpg", "btlsGH4.jpg"],
					txtMsc:[
						"George Harrison, nascido a 25 de fevereiro de 1943, em Liverpool, foi um guitarrista, cantor, compositor e produtor musical e cinematogr&aacute;fico ingl&ecirc;s que obteve proje&ccedil;&atilde;o internacional como guitarrista dos <i>Beatles</i>. Geralmente chamado de o <i>Beatle tranquilo</i>, Harrison aderiu ao hindu&iacute;smo e ampliou os horizontes musicais dos outros <i>Beatles</i> assim como e do p&uacute;blico ocidental, ao incluir instrumentos indianos, como a c&iacute;tara, na m&uacute;sica da banda.",
						"Embora a maioria das can&ccedil;&otilde;es dos <i>Beatles</i> fossem escritas por John Lennon e Paul McCartney, a maioria dos &aacute;lbuns, a partir de 1965, continham, pelo menos, duas composi&ccedil;&otilde;es de Harrison. As suas m&uacute;sicas para o grupo incluem <i>If I Needed Someone</i>, <i>Taxman</i>, <i>Within You Without You</i>, <i>While My Guitar Gently Weeps</i>, <i>Here Comes the Sun</i> e <i>Something</i>. Esta &uacute;ltima tornou-se a segunda m&uacute;sica mais regravada dos <i>Beatles</i>. George Harrison morreu em 2001, em Los Angeles, aos 58 anos, de cancro de pulm&atilde;o. Foi cremado e as suas cinzas foram espalhadas nos rios Ganges e Yamuna na &Iacute;ndia, numa cerim&oacute;nia privada, de acordo com a tradi&ccedil;&atilde;o hindu.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.georgeharrison.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/George_Harrison"
						},
						{	linkRef:"Infopédia (em português)", 
							linkURL:"https://www.infopedia.pt/$george-harrison"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/GeorgeHarrisonVideo"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/george-harrison/"
						}
					],
				},
				{
					nomeMsc:"Ringo Starr",
					imagsMsc:["btlsRS1.jpg", "btlsRS2.jpg", "btlsRS3.jpg", "btlsRS4.jpg"],
					txtMsc:[
						"Richard Starkey, nascido a 7 de julho de 1940, em Liverpool, mais conhecido pelo seu nome art&iacute;stico Ringo Starr, &eacute; um m&uacute;sico, baterista, multi-instrumentista, cantor, compositor e ator brit&acirc;nico, que ganhou fama mundial como baterista dos <i>Beatles</i> ap&oacute;s substituir Pete Best, em 1962, ficando na banda at&eacute; a separa&ccedil;&atilde;o do grupo em 1970. Ringo Starr &eacute; conhecido pelo seu estilo seguro de tocar bateria e pela originalidade do seu estilo.",
						"O pseud&oacute;nimo <i>Ringo</i> surgiu por causa dos an&eacute;is que ele gostava de usar (do ingl&ecirc;s <i>ring</i>). Em 2011, a revista <i>Rolling Stone</i> elegeu Ringo Starr como o 4.&ordm; maior baterista de todos os tempos. Como ator, assumiu pap&eacute;is de relevo em diversos filmes e recebeu elogios de cr&iacute;ticos e profissionais do cinema sobre a sua atua&ccedil;&atilde;o, como &eacute; o caso do diretor e produtor Walter Shenson, que o referiu como <i>um excelente ator, absolutamente natural no seu desempenho</i>.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.ringostarr.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Ringo_Starr"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/ringostarr"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/ringo-starr/"
						}
					],
				},
			]
		},
		//Led Zeppelin
		{
			nomeBnd:"Led Zeppelin", logoBnd:"ledzLogo.jpg", bannerBnd:"ledzBanner.jpg",
			linksBnd:[
				{	linkRef:"Site Oficial", 
					linkURL:"https://lz50.ledzeppelin.com/"
				},
				{	linkRef:"Facebook", 
					linkURL:"https://www.facebook.com/ledzeppelin/"
				},
				{	linkRef:"Wikipédia (em português)", 
					linkURL:"https://pt.wikipedia.org/wiki/Led_Zeppelin"
				},
				{	linkRef:"Canal Youtube", 
					linkURL:"https://www.youtube.com/user/ledzeppelin"
				},
				{	linkRef:"Vagalume (letras e músicas)", 
					linkURL:"https://www.vagalume.com.br/led-zeppelin/"
				},
				{	linkRef:"Discogs", 
					linkURL:"https://www.discogs.com/artist/34278-Led-Zeppelin"
				}
			],
			txtBnd:[
				"<i>Led Zeppelin</i> foi uma banda brit&acirc;nica de rock formada em Londres, em 1968. Ter&aacute; durado at&eacute; 1980, com alguns reaparecimentos posteriores, em 1985, 1988, 1995 e 2007. Dela faziam parte, o guitarrista Jimmy Page, o vocalista Robert Plant, o baixista e tecladista John Paul Jones e o baterista John Bonham. O som pesado e violento de guitarra, enraizado nos blues e na m&uacute;sica psicad&eacute;lica dos dois primeiros &aacute;lbuns, &eacute; frequentemente reconhecido como uma das principais funda&ccedil;&otilde;es do <i>heavy metal</i>. O seu estilo foi inspirado numa grande variedade de influ&ecirc;ncias, incluindo a m&uacute;sica folk, psicod&eacute;lica e os blues.",
				"Os <i>Led Zeppelin</i> originaram-se na banda <i>The Yardbirds</i>, fundada por Eric Clapton, em 1962, substitu&iacute;do por Jeff Beck em 1965. Tendo trabalhado ocasionalmente com a banda desde a sua funda&ccedil;&atilde;o, Jimmy Page entra definitivamente em 1966. Al&eacute;m da elevada qualidade da m&uacute;sica desta banda, esta destacou-se por ter tido esses tr&ecirc;s dos melhores guitarristas de todos os tempos na sua forma&ccedil;&atilde;o. Por&eacute;m, a partir de 1966, a banda estava em acentuado decl&iacute;nio devido a diverg&ecirc;ncias sobre os rumos que a banda deveria tomar. Tomando a lideran&ccedil;a da banda, Jimmy Page queria formar uma nova superbanda com ele e Jeff Beck nas guitarras, e Keith Moon e John Entwistle dos <i>The Who</i> na bateria e no baixo. Por&eacute;m, Moon e Entwistle recusaram a ideia, argumentando que, com Page e Beck juntos, a banda cairia como um <i>bal&atilde;o de chumbo</i> (<i>lead balloon</i>, uma express&atilde;o para resultados desastrosos). Entretanto, Jeff Beck sairia da banda, invocando motivos de sa&uacute;de.",
				"Com a sa&iacute;da de Jeff Beck, havia que mudar a imagem decadente da banda, j&aacute; ferida pela alcunha de <i>lead balloon</i>. Jimmy Page mudou, ent&atilde;o, o seu nome para <i>New Yardbirds</i>. Por&eacute;m, por sugest&atilde;o do empres&aacute;rio da banda, Peter Grant, o grupo decidiu reciclar a inc&oacute;moda alcunha de <i>lead balloon</i>. Assim, removeu a letra <i>a</i> em <i>lead</i> para que os menos alfabetizados n&atilde;o pronunciassem <i>leed</i>, e transformou a palavra <i>balloon</i> em <i>zeppelin</i>. Assim, em 1968, das cinzas da <i>New Yardbirds</i> renascia a banda <i>Led Zeppelin</i>, com os seus membros definitivos, Jimmy Page, John Paul Jones, Robert Plant e John Bonham. Segundo o jornalista musical Keith Shadwick o novo nome da banda seria a combina&ccedil;&atilde;o perfeita de <i>pesado e leve</i>, <i>combustibilidade e gra&ccedil;a</i>, a imagem mental do seu l&iacute;der, o guitarrista Jimmy Page.",
				"Logo ap&oacute;s a refunda&ccedil;&atilde;o da banda, os <i>Led Zeppelin</i> assinaram um contrato favor&aacute;vel com a Atlantic Records, que lhes ofereceu uma consider&aacute;vel liberdade art&iacute;stica. O grupo n&atilde;o gostava de lan&ccedil;ar as suas m&uacute;sicas como singles, pois viam os seus &aacute;lbuns como experi&ecirc;ncias completas e indivis&iacute;veis. Embora inicialmente impopular com os cr&iacute;ticos, o grupo conseguiu um impacto comercial significativo nas vendas com os &aacute;lbuns <i>Led Zeppelin</i> (1969), <i>Led Zeppelin II</i> (1969), <i>Led Zeppelin III</i> (1970), <i>Led Zeppelin IV</i> (1971), <i>Houses of the Holy</i> (1973), e <i>Physical Graffiti</i> (1975). O &aacute;lbum <i>Led Zeppelin IV</i>, com a m&uacute;sica <i>Stairway to Heaven</i>, est&aacute; entre as obras mais populares e influentes do rock e ajudou a consolidar a popularidade da banda.",
				"Os &aacute;lbuns seguintes da banda visaram novas experi&ecirc;ncias musicais e foram acompanhados por recordes de vendas e por concertos que renderam &agrave; banda uma reputa&ccedil;&atilde;o de excessos e de devassid&atilde;o. Apesar de terem mantido o sucesso comercial e a aceita&ccedil;&atilde;o da cr&iacute;tica, a sua produ&ccedil;&atilde;o e agenda de shows foram limitadas, no final da d&eacute;cada de 1970, e o grupo desfez-se ap&oacute;s a morte inesperada de John Bonham, em 1980. Desde ent&atilde;o, os membros sobreviventes colaboraram e participaram de ocasionais reuni&otilde;es juntos, em 1985, 1988, 1995 e 2007, sendo esta &uacute;ltima a mais bem-sucedida, no <i>Ahmet Ertegun Tribute Concert</i>, em Londres, com Jason Bonham no lugar de seu pai, John Bonham.",
				"<i>Led Zeppelin</i> &eacute; amplamente considerado como uma das bandas de rock mais bem-sucedidas, inovadoras e influentes da hist&oacute;ria. S&atilde;o das que mais venderam na hist&oacute;ria da m&uacute;sica, com cerca de 300 milh&otilde;es de unidades vendidas em todo o mundo. Cada um dos seus nove &aacute;lbuns de est&uacute;dio apareceu no <i>Billboard Top 10</i> e seis deles atingiram a primeira posi&ccedil;&atilde;o. O m&uacute;sico Dave Grohl descreveu os <i>Led Zeppelin</i> como a maior banda de rock and roll de todos os tempos e a maior banda dos anos 70. &Eacute; uma das bandas mais pirateadas da hist&oacute;ria da m&uacute;sica, com diversas grava&ccedil;&otilde;es ilegais not&aacute;veis que indiretamente fizeram parte de sua discografia. Foram introduzidos no <i>Rock and Roll Hall of Fame</i> em 1995, que refere a banda, como t&atilde;o influente na d&eacute;cada de 1970 quanto os <i>Beatles</i> foram na d&eacute;cada anterior de 1960.",
			],
			musicosBnd:[
				{
					nomeMsc:"Jimmy Page",
					imagsMsc:["ledzJP1.jpg", "ledzJP2.jpg", "ledzJP3.jpg", "ledzJP4.jpg"],
					txtMsc:[
						"James Patrick Page, mais conhecido como <i>Jimmy Page</i>, nasceu a 9 de janeiro de 1944, no sub&uacute;rbio de Heston, em Middlesex, Londres, que hoje faz parte do Borough londrino de Hounslow. &Eacute; um m&uacute;sico, produtor musical e compositor brit&acirc;nico que alcan&ccedil;ou amplo sucesso internacional como guitarrista da banda de rock <i>Led Zeppelin</i>.",
						"Come&ccedil;ou sua carreira como m&uacute;sico de est&uacute;dio em Londres e, em meados da d&eacute;cada de 1960, tornou-se o guitarrista de sess&atilde;o mais procurado na Inglaterra. Foi membro dos <i>Yardbirds</i> de 1966 at&eacute; 1968, e posteriormente fundou os <i>Led Zeppelin</i>, em 1968. Jimmy Page &eacute; amplamente considerado como um dos maiores e mais influentes guitarristas de todos os tempos. A revista Rolling Stone descreveu-o como o <i>pont&iacute;fice do poder dos riffs</i>, sendo eleito em terceiro lugar na lista dos <i>100 Maiores Guitarristas de Todos os Tempos</i>. Em 2010 foi classificado em segundo lugar na lista dos <i>50 Melhores Guitarristas de Todos os Tempos</i>. Foi introduzido duas vezes no <i>Rock and Roll Hall of Fame</i>: uma como um membro dos <i>Yardbirds</i>, em 1992, e uma segunda vez como um membro do <i>Led Zeppelin</i>, em 1995.",
						"Jimmy Page foi a inspira&ccedil;&atilde;o para o estilo de guitarra descendente do guitarrista Johnny Ramone, dos <i>Ramones</i>, que o descreveu como <i>provavelmente o maior guitarrista que j&aacute; existiu</i>. A revista <i>Uncut</i> descreve Jimmy Page como <i>o maior e mais misterioso her&oacute;i da guitarra no rock</i>. A revista Los Angeles Times considerou Jimmy Page como o segundo maior guitarrista de todos os tempos.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"https://www.jimmypage.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Jimmy_Page"
						},
						{	linkRef:"Youtube (Tópico)", 
							linkURL:"https://www.youtube.com/channel/UC9LD4dzqmOKgpLCwQxvTMGg"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/jimmy-page/"
						}
					],
				},
				{
					nomeMsc:"John Paul Jones",
					imagsMsc:["ledzJJ1.jpg", "ledzJJ2.jpg", "ledzJJ3.jpg", "ledzJJ4.jpg"],
					txtMsc:[
						"John Richard Baldwin, mais conhecido como John Paul Jones, nasceu a 3 de janeiro de 1946 em Sidcup, Kent, Inglaterra. &Eacute; um multi-instrumentista, baixista e tecladista brit&acirc;nico e ganhou notoriedade por ser o baixista, tecladista e um dos membros dos <i>Led Zeppelin</i> at&eacute; o desmembramento da banda ap&oacute;s a morte de John Bonham, em 1980. Desde ent&atilde;o, Jones vem desenvolvendo uma carreira a solo. Tamb&eacute;m toca guitarra, bandolim, koto, harm&oacute;nica e ukulele.",
						"De acordo com o <i>Allmusic</i>, John Paul Jones <i>deixou a sua marca na hist&oacute;ria da m&uacute;sica rock &amp; roll como um m&uacute;sico inovador, arranjador e diretor</i>. Muitos baixistas not&aacute;veis do rock foram influenciados por John Paul Jones, incluindo Steve Harris, John Deacon, Geddy Lee, Flea, Gene Simmons e Krist Novoselic. Jones &eacute; atualmente parte da banda Them Crooked Vultures com Josh Homme e Dave Grohl, onde ele toca baixo, piano e outros instrumentos.",
					],
					linksMsc:[
						{	linkRef:"Facebook", 
							linkURL:"https://www.facebook.com/JohnPaulJonesOfficial/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/John_Paul_Jones"
						},
						{	linkRef:"Youtube (webcast – House of Blues 2000)", 
							linkURL:"https://www.youtube.com/watch?v=LGh-N27elik"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/john-paul-jones/"
						}
					],
				},
				{
					nomeMsc:"Robert Plant",
					imagsMsc:["ledzRP1.jpg", "ledzRP2.jpg", "ledzRP3.jpg", "ledzRP4.jpg"],
					txtMsc:[
						"Robert Anthony Plant nasceu a 20 de Agosto de 1948, em West Bromwich, Staffordshire, Inglaterra, e &eacute; um m&uacute;sico, cantor, e compositor brit&acirc;nico mais conhecido por ter sido o vocalista da banda de rock <i>Led Zeppelin</i>. Robert Plant come&ccedil;ou a cantar profissionalmente em pubs e clubes com apenas 16 anos de idade, tendo participando em diversas bandas. Em 1966, com 18 anos, gravou dois discos a solo para a CBS.",
						"Ap&oacute;s o fim dos <i>Led Zeppelin</i>, Plant saiu em carreira a solo, e lan&ccedil;ou 15 discos. Apresentou-se em shows, &agrave;s vezes acompanhado do ex-colega Jimmy Page. Plant influenciou diversos artistas, como Freddie Mercury e Axl Rose. Atualmente, Robert Plant revitalizou o projeto <i>The Band of Joy</i>, banda &agrave; qual pertenceu antes dos <i>Led Zeppelin</i>. Foi eleito o 15.&ordm; melhor cantor de todos os tempos pela revista Rolling Stone e, em 2006, a revista <i>Hit Parader</i> elegeu Plant como o melhor vocalista de heavy metal de todos os tempos.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"https://www.robertplant.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Robert_Plant"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/RobertPlantVideos"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/robert-plant/"
						}
					],
				},
				{
					nomeMsc:"John Bonham",
					imagsMsc:["ledzJB1.jpg", "ledzJB2.jpg", "ledzJB3.jpg", "ledzJB4.jpg"],
					txtMsc:[
						"John Henry Bonham nasceu em 31 de maio de 1948 em Redditch, Worcestershire, Inglaterra e foi um m&uacute;sico e compositor ingl&ecirc;s, mais conhecido por ter sido o baterista da banda <i>Led Zeppelin</i>. Como baterista, John Bonham era admirado pela sua velocidade, pot&ecirc;ncia, sons caracter&iacute;sticos, e <i>sensa&ccedil;&atilde;o para o groove</i>. Por isso tamb&eacute;m era chamado de <i>Bonzo, the beast</i>. &Eacute; amplamente considerado um dos melhores bateristas da hist&oacute;ria do rock. Os leitores da revista <i>Rolling Stone</i> consideraram-no, mesmo, o melhor baterista de todos os tempos.",
						"Com apenas cinco anos de idade, John Bonham costumava a batucar em caixotes e latas de caf&eacute;, imitando os movimentos dos seus &iacute;dolos Gene Krupa e Buddy Rich. Aos quinze anos recebeu a sua primeira bateria a s&eacute;rio: uma <i>Premier</i>. Deixou a escola para ajudar o seu pai numa empresa de constru&ccedil;&atilde;o, mas sempre foi apoiado nas suas ambi&ccedil;&otilde;es musicais, tanto pelos seus pais como pela sua mulher, Pat Phillips, com quem casou aos 17 anos. Morreu subitamente, a 25 de setembro de 1980, com apenas 32 anos, ap&oacute;s ter tomado, nesse dia, 40 shots de vodka. A banda <i>Led Zeppelin</i> n&atilde;o resistiu &agrave; sua perda.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://johnbonham.co.uk/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/John_Bonham"
						},
						{	linkRef:"Youtube (do canal Polyphonic)", 
							linkURL:"https://www.youtube.com/watch?v=UvOm2oZRQIk"
						},
						{	linkRef:"Youtube (bateria em Moby Dick)", 
							linkURL:"https://www.youtube.com/watch?v=r9-42mu1D9Y"
						},
						{	linkRef:"Youtube (explicação de estilo, por Drumeo)", 
							linkURL:"https://www.youtube.com/watch?v=1aEz6B7wRfA"
						}
					],
				},
			]
		},
		//Rolling Stones
		{
			nomeBnd:"Rolling Stones", logoBnd:"rostLogo.jpg", bannerBnd:"rostBanner.jpg",
			linksBnd:[
				{	linkRef:"Site Oficial", 
					linkURL:"https://www.rollingstones.com/"
				},
				{	linkRef:"Wikipédia (em português)", 
					linkURL:"https://pt.wikipedia.org/wiki/The_Rolling_Stones"
				},
				{	linkRef:"Canal Youtube", 
					linkURL:"https://www.youtube.com/user/TheRollingStones"
				},
				{	linkRef:"Vagalume (letras e músicas)", 
					linkURL:"https://www.vagalume.com.br/the-rolling-stones/"
				},
				{	linkRef:"Discogs", 
					linkURL:"https://www.discogs.com/artist/20991-The-Rolling-Stones"
				}
			],
			txtBnd:[
				"Os <i>Rolling Stones</i> s&atilde;o uma banda de rock brit&acirc;nica formada em Londres em 1962 e considerada um dos maiores e mais bem-sucedidos agrupamentos musicais de todos os tempos. Ao lado dos <i>Beatles</i>, s&atilde;o considerados a banda mais importante da chamada <i>Invas&atilde;o Brit&acirc;nica</i> ocorrida nos anos 1960. A banda e os seus membros ocuparam posi&ccedil;&atilde;o de destaque na influ&ecirc;ncia exercida nas mudan&ccedil;as musicais e comportamentais dos anos 1960 e s&atilde;o frequentemente relacionados com a contracultura, a rebeldia e a juventude.",
				"Tudo come&ccedil;ou em 17 de outubro de 1961, quando os dois amigos de inf&acirc;ncia, Mick Jagger e Keith Richards, com 18 e 17 anos respetivamente, se reencontraram na esta&ccedil;&atilde;o de Dartford, Inglaterra, para apanhar o mesmo comboio para Londres e, durante a viagem, descobriram um interesse comum por <i>blues</i> e por <i>rock &amp; roll</i>. Ambos come&ccedil;aram a frequentar, juntos, os locais dos <i>blues</i> da noite londrina, onde conheceram o guitarrista Brian Jones, um pouco mais velho do que eles. &Eacute; de Brian Jones que surge a iniciativa, em 1962, de fundar uma banda de <i>Rock &amp; Blues</i> branca, que se chamaria <i>The Rolling Stones</i>, inspirado no nome de uma can&ccedil;&atilde;o de Muddy Waters, <i>Rollin' Stone</i>. Para levar a cabo esse projeto, Brian Jones, ent&atilde;o com 20 anos, convidou Mick Jagger e Keith Richards, com 18 anos, e um pianista seu amigo, Ian Stewart, j&aacute; com 24 anos. A banda <i>Rolling Stones</i> seria apresentada pela primeira vez, oficialmente, no <i>Marquee Club</i> de Londres em 12 de julho de 1962.",
				"Por&eacute;m, embora Ian Stewart fosse um bom pianista para a banda, era desajeitado em palco e apresentava-se com uma imagem pessoal muito pacata e convencional e sem o <i>sex-appeal</i> adequado ao car&aacute;ter rebelde e contracultural da banda. Muito especialmente, contrastava com a imagem extravagante de Brian Jones, que cultivava um estilo de vida desregrado, de <i>sexo, drogas e rock'n roll</i>. Assim, Ian Stewart seria relegado para os pap&eacute;is de gestor de palco e de pianista auxiliar, sem ser membro efetivo da banda. Assim, o quarto membro efetivo passou a ser Bill Wyman, pianista e baixista, ent&atilde;o com 26 anos. Embora Bill Wyman fosse j&aacute; um veterano das noites londrinas dos <i>blues</i>, foi acrescentado &agrave; banda por um motivo f&uacute;til: percebia de amplifica&ccedil;&atilde;o de som e possu&iacute;a bons amplificadores. Em janeiro de 1963, ser&aacute; acrescentado o quinto membro, Charlie Watts, ent&atilde;o com 22 anos, que assumiria definitivamente a bateria da banda.",
				"Em 1969, os sucessivos esc&acirc;ndalos provocados pelo comportamento excessivo de Brian Jones, especialmente, o demasiado ostensivo abuso de drogas, t&ecirc;m consequ&ecirc;ncias negativas na imagem do pr&oacute;prio e na imagem da banda. N&atilde;o havia outra sa&iacute;da sen&atilde;o demitir Brian Jones, que foi substitu&iacute;do pelo guitarrista Mick Taylor, ent&atilde;o com 20 anos. Tragicamente, alguns dias depois, Brian Jones &eacute; encontrado morto por afogamento na piscina da sua casa. Cinco anos depois, em 1974, no decurso de desentendimentos relativos aos cr&eacute;ditos autorais de algumas m&uacute;sicas, Mick Taylor demite-se dos <i>Rolling Stones</i>, sendo substitu&iacute;do pelo j&aacute; consagrado guitarrista Ron Wood, ent&atilde;o com 27 anos. Em 1993, &eacute; a vez do baixista Bill Wyman sair da banda para se dedicar a projetos a solo com o tamb&eacute;m ex-Stone Mick Taylor. Bill Wyman era referido como o <i>Stone silencioso</i>, porque rar&iacute;ssimas vezes cantou nos 31 anos que esteve na banda e sempre se assumiu como um membro desenquadrado dos <i>Rolling Stones</i>.",
				"Assim, ao fim de 30 anos como quinteto, os <i>Rolling Stones</i> passam &agrave; situa&ccedil;&atilde;o de quarteto, tal como hoje o conhecemos, constitu&iacute;do por Mick Jagger, Keith Richards, Charlie Watts e Ron Wood. Muitos cr&iacute;ticos consideram que sempre foi um quarteto liderado pela dupla Mick Jagger e Keith Richards, com um auxiliar <i>outsider</i> durante os primeiros 31 anos: Bill Wyman.",
				"A boa repercuss&atilde;o nas apresenta&ccedil;&otilde;es ao vivo e a not&aacute;vel habilidade promocional do primeiro empres&aacute;rio da banda, Allen Klein, promoveram um excelente contrato com a <i>Decca Records</i>, desejosa de se livrar da chacota p&uacute;blica, por ter recusado um contrato com os Beatles. Allen Klein promoveu a banda com a imagem lucrativa de perigosos rebeldes e com o famoso <i>slogan</i> provocat&oacute;rio: <i>Voc&ecirc; deixaria a sua filha casar-se com um Rolling Stone?</i> Os Rolling Stones s&atilde;o um dos grupos musicais mais bem-sucedidos da hist&oacute;ria e j&aacute; venderam mais de 260 milh&otilde;es de &aacute;lbuns no mundo inteiro.",
				"At&eacute; ao ano de 2007, quatro das cinco tourn&eacute;s musicais de maior lucro de bilheteira de todos os tempos eram dos <i>Rolling Stones</i>. A tourn&eacute; mais lucrativa da banda &eacute; <i>A Bigger Bang Tour</i>, que durou de 2005 a 2007 e arrecadou 560 milh&otilde;es de d&oacute;lares. Durante esta tourn&eacute;, a banda deu um concerto gratuito nas areias da praia de Copacabana, na cidade do Rio de Janeiro, no dia 18 de fevereiro de 2006. Mais de 2 milh&otilde;es de pessoas compareceram ao concerto, que est&aacute; listado no <i>Livro Guiness dos Recordes</i> como o concerto gratuito com maior p&uacute;blico de sempre realizado por uma &uacute;nica banda.",
			],
			musicosBnd:[
				{
					nomeMsc:"Mick Jagger",
					imagsMsc:["rostMJ1.jpg", "rostMJ2.jpg", "rostMJ3.jpg", "rostMJ4.jpg"],
					txtMsc:[
						"Michael Philip Jagger, mais conhecido por Mick Jagger nasceu a 26 de julho de 1943, em Dartford, Kent, no sudeste da Inglaterra, e &eacute; um cantor, compositor e ator brit&acirc;nico. &Eacute; o vocalista e o l&iacute;der dos <i>Rolling Stones</i>, considerada uma das maiores e mais famosas bandas de rock and roll de todos os tempos.",
						"Mick Jagger foi o filho mais velho de um professor e de uma dona de casa e um aluno exemplar na inf&acirc;ncia e na adolesc&ecirc;ncia. Sempre conquistou o carinho das pessoas, pelo seu carisma e estilo solto e bem-humorado de ser. Aos 14 anos, ganhou a sua primeira guitarra e passou logo a colecionar discos de <i>blues</i> de nomes como Muddy Waters e Howlin&rsquo; Wolf. Empolgado com as potencialidades musicais dos <i>blues</i>, em 1959, com 16 anos, juntou-se ao amigo Dick Taylor, da mesma idade, que tocava baixo, para fundar a sua primeira banda, <i>Little Boy Blue and the Blue Boys</i>, na qual assumiu o lugar de vocalista.",
						"Em 1960, Jagger entrou na London School of Economics para estudar Contabilidade e Finan&ccedil;as. No entanto, enquanto estudava tamb&eacute;m investia na carreira musical e, quando precisou de escolher um caminho a seguir, n&atilde;o teve d&uacute;vidas e largou o curso. Em 1961 juntou-se ao guitarrista Keith Richards, seu amigo de inf&acirc;ncia, e os dois passaram a explorar a cena ainda emergente dos <i>blues</i> na capital brit&acirc;nica. Numa casa noturna, conheceram o exuberante guitarrista Brian Jones, e o discreto pianista Ian Stewart, formando assim o grupo inicial fundador dos <i>Rolling Stones</i>. Jagger ganhou a notoriedade da imprensa pelo seu uso admitido de drogas e envolvimentos rom&acirc;nticos, e foi retratado frequentemente como uma figura contracultural. No final dos anos 1960, Jagger come&ccedil;ou a atuar em filmes, come&ccedil;ando com <i>Performance</i>, de Nicolas Roeg e <i>Ned Kelly</i>, de Tony Richardson. Em 1985, lan&ccedil;ou o seu primeiro &aacute;lbum solo, <i>She's the Boss</i>. No in&iacute;cio de 2009, Jagger juntou-se ao supergrupo el&eacute;trico, <i>SuperHeavy</i>.",
						"A carreira de Jagger dura h&aacute; quase 60 anos e foi descrita como <i>um dos vocalistas mais populares e influentes da hist&oacute;ria do Rock &amp; Roll</i>. Em 1989, ele foi introduzido no <i>Rock and Roll Hall of Fame</i>, e, em 2003, foi condecorado <i>Sir</i> pela <i>Ordem do Imp&eacute;rio Brit&acirc;nico</i> pelos seus servi&ccedil;os prestados &agrave; m&uacute;sica popular. A voz e o desempenho distintivos de Jagger, juntamente com o estilo de guitarra do Keith Richards, s&atilde;o a marca registrada dos <i>Rolling Stones</i> durante toda a carreira da banda.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.mickjagger.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Mick_Jagger"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/jaggertv"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/mick-jagger/"
						}
					],
				},
				{
					nomeMsc:"Keith Richards",
					imagsMsc:["rostKR1.jpg", "rostKR2.jpg", "rostKR3.jpg", "rostKR4.jpg"],
					txtMsc:[
						"Keith Richards nasceu em 18 de dezembro de 1943, em Dartford, Kent, no sudeste da Inglaterra, e &eacute; um m&uacute;sico, compositor e ator brit&acirc;nico, &eacute; um dos principais nomes do rock do s&eacute;culo XX. Richards &eacute; mais conhecido como integrante dos <i>Rolling Stones</i> e &eacute; considerado um dos mais influentes guitarristas da hist&oacute;ria, sendo eleito o melhor guitarrista do mundo, pela revista norte-americana Rolling Stone. Keith era filho de oper&aacute;rios industriais e neto de l&iacute;deres socialistas das lutas pelos direitos civis e o seu contacto com a m&uacute;sica veio desde crian&ccedil;a, atrav&eacute;s do av&ocirc; Gus, que tinha na sua casa uma velha guitarra, ainda com cordas de tripa.",
						"Na sua adolesc&ecirc;ncia, Keith era admirador do <i>Rock and Roll</i> e dos <i>Blues</i> produzidos nos Estados Unidos por Elvis Presley, Muddy Waters e Willie Dixon, entre outros. Estudava na <i>Sidcup School of Art</i>, quando, em 1961, reencontrou o amigo de inf&acirc;ncia Mick Jagger, tamb&eacute;m aficionado dos <i>Blues</i>. Keith abandonou os estudos e investiu tudo na m&uacute;sica e na funda&ccedil;&atilde;o dos <i>Rolling Stones</i>. Grande admirador do tipo de m&uacute;sica do guitarrista negro americano Chuck Berry, um dos fundadores do <i>Rock and Roll</i>, Keith Richards foi o principal respons&aacute;vel pela introdu&ccedil;&atilde;o dos <i>rhythm and blues</i> nos <i>Rolling Stones</i>, que desenvolveu com o fundador da banda, Brian Jones. Introduziu um som de duas guitarras na linha r&iacute;tmica da banda, e criando um som mais pesado, fazendo a grande diferen&ccedil;a com os Beatles, o grupo que estava no auge em todo o mundo, quando os <i>Rolling Stones</i> iniciaram a sua carreira.",
					],
					linksMsc:[
						{	linkRef:"Facebook", 
							linkURL:"https://www.facebook.com/KeithRichards/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Keith_Richards"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/officialkeef"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/keith-richards/"
						}
					],
				},
				{
					nomeMsc:"Charlie Watts",
					imagsMsc:["rostCW1.jpg", "rostCW2.jpg", "rostCW3.jpg", "rostCW4.jpg"],
					txtMsc:[
						"Charles Robert Watts, mais conhecido por Charlie Watts, nasceu a 2 de junho de 1941 em Londres e &eacute; um baterista brit&acirc;nico e o baterista da banda de Rock brit&acirc;nica <i>The Rolling Stones</i>. Filho de um camionista, Charlie freq&uuml;entou a Escola Secund&aacute;ria Moderna <i>Tylers Croft</i>, de 1952 a 1956, onde mostrou talentos para as artes, para o cr&iacute;quete e para o futebol. Em 1961, era o baterista da <i>Blues Incorporated</i>, a primeira banda brit&acirc;nica de <i>rhythm and blues</i>, formada exclusivamente de m&uacute;sicos brancos, a tocar ritmos negros americanos, que estavam fazendo muito sucesso com a juventude londrina no come&ccedil;o da d&eacute;cada de 1960.",
						"A banda <i>Blues Incorporated</i>, liderada por Alexis Korner, tocava regularmente no <i>Ealing Club</i> de Londres. Foi l&aacute; que Mick Jagger, Keith Richards e Brian Jones, grandes admiradores de <i>Blues</i> americano, conheceram Watts. Empolgados com a sua qualidade com baterista, Convidaram-no, humildemente, para ser o baterista dos <i>Rolling Stones</i>, que estavam ainda no in&iacute;cio da sua forma&ccedil;&atilde;o e afirma&ccedil;&atilde;o e n&atilde;o tinham ainda baterista. Embora n&atilde;o havendo ainda possibilidade de ganhar dinheiro com os <i>Rolling Stones</i>, Charlie acabou por trocar a j&aacute; est&aacute;vel e consagrada banda <i>Blues Incorporated</i> pela nova banda, o que, em pouco tempo, se demonstrou com a decis&atilde;o profissional mais acertada de sua vida. Entrou para os The <i>Rolling Stones</i> em 1963, como o primeiro e &uacute;nico baterista da hist&oacute;ria da banda, posi&ccedil;&atilde;o que ocupa at&eacute; hoje, e um dos tr&ecirc;s &uacute;nicos membros que estiveram, desde o per&iacute;odo de forma&ccedil;&atilde;o da banda, ao lado de Mick Jagger e de Keith Richards.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.rosebudus.com/watts/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Charlie_Watts"
						},
						{	linkRef:"Youtube (Tópico)", 
							linkURL:"https://www.youtube.com/channel/UCl9DGd3WVdDTuBSa5ho3Y-A"
						},
						{	linkRef:"Drummerworld", 
							linkURL:"https://www.drummerworld.com/drummers/Charlie_Watts.html"
						}
					],
				},
				{
					nomeMsc:"Ron Wood",
					imagsMsc:["rostRW1.jpg", "rostRW2.jpg", "rostRW3.jpg", "rostRW4.jpg"],
					txtMsc:[
						"Ronald David Wood, mais conhecido como Ron Wood Ron ou Ronnie Wood, nasceu em Londres, a 1 de junho de 1947 e &eacute; um guitarrista, compositor, multi-instrumentista, autor, pintor e celebridade de r&aacute;dio e de de <i>rock and roll</i> brit&acirc;nico. Ron &eacute; mais conhecido como ex-integrante dos <i>The Faces</i>, e atualmente integrante dos <i>Rolling Stones</i>. Manteve um longo e problem&aacute;tico uso de drogas, tendo estado algumas vezes internado em clinicas de reabilita&ccedil;&atilde;o.",
						"Ron Wood come&ccedil;ou sua carreira em 1964 com os <i>The Birds</i>. No final dos anos 60 ele passou a ser integrante da banda <i>The Creation</i> entrando depois para o <i>Jeff Beck Group</i> com o vocalista Rod Stewart. O grupo desfez-se, em 1969, ap&oacute;s o lan&ccedil;amento do &aacute;lbum <i>Beck-Ola</i>. Com Rod Stewart, Ron entrou para os <i>The Small Faces</i>, e logo depois o grupo foi renomeado para <i>The Faces</i>. Embora tenham ficado conhecidos nos Estados Unidos como a banda de apoio de Rod Stewart, os <i>Faces</i> eram muito famosos no Reino Unido, rivalizando em popularidade com os The Rolling Stones.",
						"Depois que Mick Taylor deixou os <i>Rolling Stones</i>, em 1974, Wood substituiu-o na guitarra, a tempo de completar a grava&ccedil;&atilde;o do &aacute;lbum <i>Black and Blue</i>, lan&ccedil;ado em 1976, que o tornaria um integrante leg&iacute;timo da banda. Durante os anos 80, Ron Wood continuou como integrante oficial dos <i>Rolling Stones</i>, enquanto pintava e seguia a sua carreira solo, tocando com artistas como David Bowie, Eric Clapton e Aretha Franklin.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.ronniewood.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Ron_Wood"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/RonnieWoodOfficial"
						},
						{	linkRef:"The Guardian", 
							linkURL:"https://www.theguardian.com/music/ronnie-wood"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/ron-wood/"
						}
					],
				},
			]
		},
		//Pink Floyd
		{
			nomeBnd:"Pink Floyd", logoBnd:"piflLogo.jpg", bannerBnd:"piflBanner.jpg",
			linksBnd:[
				{	linkRef:"Site Oficial", 
					linkURL:"http://www.pinkfloyd.com/"
				},
				{	linkRef:"Wikipédia (em português)", 
					linkURL:"https://pt.wikipedia.org/wiki/Pink_Floyd"
				},
				{	linkRef:"Canal Youtube", 
					linkURL:"https://www.youtube.com/user/OfficialPinkFloyd"
				},
				{	linkRef:"Youtube (audio do TOP20)", 
					linkURL:"https://www.youtube.com/watch?v=v43iudykyMo"
				},
				{	linkRef:"Youtube (Story Of Pink Floyd, 2010)", 
					linkURL:"https://www.youtube.com/watch?v=Dk6q_j1gSkI"
				},
				{	linkRef:"Vagalume (letras e músicas)", 
					linkURL:"https://www.vagalume.com.br/pink-floyd/"
				},
				{	linkRef:"Discogs", 
					linkURL:"https://www.discogs.com/artist/45467-Pink-Floyd"
				}
			],
			txtBnd:[
				"Os <i>Pink Floyd</i> foram uma banda brit&acirc;nica de <i>rock</i>, formada em Londres em 1965, que atingiu grande sucesso internacional com a sua m&uacute;sica baseada em <i>rock psicad&eacute;lico</i> e e <i>rock progressivo</i>. O trabalho da banda foi caracterizado pelo uso de letras de conte&uacute;do filos&oacute;fico, experi&ecirc;ncias musicais, &aacute;lbuns inovadores e espet&aacute;culos muito elaborados. Os <i>Pink Floyd</i> s&atilde;o um dos grupos de <i>rock</i> mais influentes e mais bem-sucedidos da hist&oacute;ria.",
				"A banda foi fundada em 1965 por quatro estudantes: Syd Barrett, como guitarrista e vocalista, Nick Mason, como baterista, Roger Waters, como baixista e vocalista, e Rick Wright, como tecladista e vocalista. No final da d&eacute;cada de 1960 os <i>Pink Floyd</i> j&aacute; eram populares no cen&aacute;rio underground londrino. Sob a lideran&ccedil;a de Syd Barrett, lan&ccedil;aram dois <i>singles</i> de sucesso e, em 1967, um muito bem-sucedido &aacute;lbum de estreia, <i>The Piper at the Gates of Dawn</i>. Em dezembro de 1967, foi integrado na banda o quinto membro, David Gilmour, como guitarrista, saxofonista e vocalista. Por&eacute;m a banda foi um quinteto por pouco tempo, pois o l&iacute;der, Syd Barrett, come&ccedil;ou a sofrer de epis&oacute;dios crescentes de deteriora&ccedil;&atilde;o mental, agravada pelo exagerado uso de drogas, o que levou &agrave; sua sa&iacute;da da banda, em abril de 1968. A partir deste per&iacute;odo, a banda readaptou-se ao quarteto cl&aacute;ssico, formado por David Gilmour, Nick Mason, Rick Wright e Roger Waters, com a crescente consolida&ccedil;&atilde;o da lideran&ccedil;a de Waters, como letrista e autor conceptual de &aacute;lbuns de grande sucesso, como <i>The Dark Side of the Moon</i> (1973), <i>Wish You Were Here</i> (1975), <i>Animals</i> (1977) e <i>The Wall</i> (1979).",
				"Por&eacute;m, a forma&ccedil;&atilde;o cl&aacute;ssica dos Pink Floyd seria quebrada em 1979. A crescente lideran&ccedil;a de Roger Waters motiva atitudes de revolta e de boicote por parte de Rick Wright, durante a grava&ccedil;&atilde;o de <i>The Wall</i>, o que levou &agrave; sua expuls&atilde;o da banda, que passou &agrave; forma&ccedil;&atilde;o em trio. Em 1985, Roger Waters, afirmando que o grupo era uma <i>for&ccedil;a criativa gasta</i>, deixou os <i>Pink Floyd</i>, para uma carreira a solo, iniciando uma longa e desgastante batalha legal com os membros restantes pelos direitos de usar o nome e o material da banda. No entanto, Gilmour e Mason decidiram seguir em atividade, trazendo Rick Wright de novo para a banda, para reconstituir o trio. Os tr&ecirc;s produziram juntos <i>A Momentary Lapse of Reason</i> (1987) e <i>The Division Bell</i> (1994). Apesar destes trabalhos terem recebido cr&iacute;ticas mistas, os espet&aacute;culos que os promoveram foram entusi&aacute;sticos. Em 2005, quarteto cl&aacute;ssico reuniu-se novamente, com o retorno epis&oacute;dico de Roger Waters no evento beneficente <i>Live 8</i>. Entretando, a morte de Rick Wright, descartou as possibilidades de uma nova reuni&atilde;o do quarteto cl&aacute;ssico dos<i> Pink Floyd</i>. O &uacute;ltimo &aacute;lbum, <i>The Endless River</i>, foi lan&ccedil;ado em novembro de 2014, sob a produ&ccedil;&atilde;o de Gilmour e Mason, como um tributo p&oacute;stumo a Rick Wright, com predominantes composi&ccedil;&otilde;es deste m&uacute;sico.",
				"Os <i>Pink Floyd</i> entraram no <i>Rock and Roll Hall of Fame</i> dos Estados Unidos em 1996 e no <i>Rock and Roll Hall of Fame do Reino Unido</i> em 2005. Em 2013, a banda contava com mais de 230 milh&otilde;es de &aacute;lbuns vendidos em todo o mundo.",
			],
			musicosBnd:[
				{
					nomeMsc:"David Gilmour",
					imagsMsc:["piflDG1.jpg", "piflDG2.jpg", "piflDG3.jpg", "piflDG4.jpg"],
					txtMsc:[
						"David Jon Gilmour nasceu em Cambridge, a 6 de mar&ccedil;o de 1946 e &eacute; um guitarrista, saxofonista, compositor e cantor brit&acirc;nico, vocalista da banda inglesa <i>Pink Floyd</i>, tendo tamb&eacute;m editado &aacute;lbuns a solo bem como colaborado com outros artistas. Filho de professores, cresceu em Grantchester Meadows e a sua instru&ccedil;&atilde;o prim&aacute;ria ocorreu na Waldorf School onde era considerado um aluno modelo. Por&eacute;m, ele pr&oacute;prio considera horr&iacute;vel a educa&ccedil;&atilde;o obtida nessa escola. A seguir, frequentou o Col&eacute;gio de Artes e Tecnologia de Cambridge, onde ajudou um colega e amigo, Syd Barrett, a aprender a tocar guitarra. Syd Barrett viria a ser um dos quatro fundadores dos <i>Pink Floyd</i>.",
						"Em 1963, David Gilmour integra a banda <i>Joker&rsquo;s Wild</i> como guitarrista. Em 1967, a banda muda o nome para <i>Flowers</i> mas acaba por se desintegrar, nesse mesmo ano. Gilmour ainda participa na forma&ccedil;&atilde;o de outra banda, os <i>Bullitt</i>. Em dezembro de 1967, a convite do seu amigo de inf&acirc;ncia, Syd Barrett, l&iacute;der dos <i>Pink Floyd</i>, fundados dois anos antes, mas j&aacute; com assinal&aacute;veis sucessos, passou a ser o quinto membro dessa banda. Por&eacute;m, poucos meses depois, Syd Barrett, acometido por graves perturba&ccedil;&otilde;es mentais, agravadas pelo exagerado uso de drogas, teve de sair da banda.",
						"O primeiro disco dos <i>Pink Floyd</i> a ter Gilmour como guitarrista foi <i>A Saucerful of Secrets</i> de 1968. Inclui o seu primeiro cr&eacute;dito por autoria na banda, pela faixa instrumental que d&aacute; o nome ao disco. O prest&iacute;gio da banda cresce nos anos seguintes com os discos <i>Ummagumma</i>, <i>Atom Heart Mother</i> e <i>Meddle</i>, al&eacute;m das trilhas sonoras para dois filmes, <i>More</i> e <i>Obscured By Clouds</i>. Aos poucos, David Gilmour vai partilhando o comando da banda com o l&iacute;der Roger Waters, que lhe vai assumindo crescentes responsabilidades na composi&ccedil;&atilde;o das m&uacute;sicas da banda. Depois da sa&iacute;da de Roger Waters dos <i>Pink Floyd</i>, em 1985, David Gilmour tornou-se a principal figura da banda. Foi considerado o 14.&ordm; melhor guitarrista do mundo pela revista norte-americana <i>Rolling Stone</i>, o 36.&ordm; melhor vocalista do rock pelo programa de r&aacute;dio brit&acirc;nico <i>Planet Rock</i>.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://www.davidgilmour.com/"
						},
						{	linkRef:"Facebook", 
							linkURL:"https://www.facebook.com/davidgilmour/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/David_Gilmour"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/user/DavidGilmour"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/david-gilmour/"
						}
					],
				},
				{
					nomeMsc:"Nick Mason",
					imagsMsc:["piflNM1.jpg", "piflNM2.jpg", "piflNM3.jpg", "piflNM4.jpg"],
					txtMsc:[
						"Nicholas Berkeley Mason, mais conhecido por Nick Mason, nasceu em Birmingham, a 27 de janeiro de 1944, e &eacute; um baterista e compositor ingl&ecirc;s, piloto de carros desportivos e escritor, mais conhecido por ser o &uacute;nico membro dos <i>Pink Floyd</i> que n&atilde;o saiu desde a forma&ccedil;&atilde;o original da banda, em 1965 e por ser o &uacute;nico membro do Pink Floyd a participar da grava&ccedil;&atilde;o de todos os &aacute;lbuns.",
						"Nick Mason &eacute; filho &uacute;nico de Bill Mason, um cineasta, piloto amador de carros de corrida e produtor de document&aacute;rios sobre desportos motorizados. Nick herdou do pai o seu entusiasmo pelo automobilismo, tendo ganho um Aston Martin quando ainda era adolescente. Tamb&eacute;m competiu em eventos automobil&iacute;sticos de relevo, como o <i>24 Horas de Le Mans</i>. Mais tarde, em 2004, escrever&aacute; o livro <i>Into the Red</i> (2004), sobre os 22 carros desportivos mais marcantes do s&eacute;culo 20.",
						"Nick Mason cresceu em Hampstead, Londres, e estudou na escola Frensham Heights School, perto de Farnham, e, posteriormente, na faculdade de arquitetura da Universidade de Westminster, onde se juntou a Roger Waters, Bob Klose e Rick Wright, em 1964, para formar a banda <i>Sigma 6</i>, a antecedente dos <i>Pink Floyd</i>, que ser&aacute; fundada no ano seguinte, com a interven&ccedil;&atilde;o liderante de Syd Barrett e a posterior sa&iacute;da de Bob Klose. Apesar de ter composto poucas m&uacute;sicas para os <i>Pink Floyd</i>, ele contribui para algumas das mais famosas m&uacute;sicas da banda, como Interstellar <i>Overdrive</i>, <i>A Saucerful Of Secrets</i> e <i>Echoes</i>. Ao contr&aacute;rio dos outros membros dos <i>Pink Floyd</i>, Nick raramente tocou outro instrumento sem ser o seu usual (a bateria), embora tenha contribu&iacute;do com diversos efeitos sonoros nos &aacute;lbuns do Pink Floyd.",
						"Nick Mason tamb&eacute;m fez v&aacute;rios outros trabalhos como produtor e baterista para Steve Hillage, Robert Wyatt, <i>The Damned</i> e <i>Gong</i>. Ele tamb&eacute;m tocou bateria com Michael Mantler. Escreveu a hist&oacute;ria dos <i>Pink Floyd</i>, no seu livro <i>Inside Out: A Personal History of Pink Floyd</i>, publicado em outubro de 2004 no Reino Unido. A 2 de maio de 2019, Nick Mason foi condecorado pelo Pr&iacute;ncipe William com o t&iacute;tulo de <i>Comandante da Mais Excelente Ordem do Imp&eacute;rio Brit&acirc;nico</i>, pelos seus servi&ccedil;os prestados &agrave; m&uacute;sica.",
					],
					linksMsc:[
						{	linkRef:"Facebook", 
							linkURL:"https://www.facebook.com/NickMasonDrums/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Nick_Mason"
						},
						{	linkRef:"Youtube (A Saucerful of Secrets, complete)", 
							linkURL:"https://www.youtube.com/watch?v=7MF8hh5luP4"
						},
						{	linkRef:"Youtube (Los Angeles, 17/03/2019, full show)", 
							linkURL:"https://www.youtube.com/watch?v=qAqxMku3a0M"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/nick-mason/"
						}
					],
				},
				{
					nomeMsc:"Rick Wright",
					imagsMsc:["piflRW1.jpg", "piflRW2.jpg", "piflRW3.jpg", "piflRW4.jpg"],
					txtMsc:[
						"Richard William Wright, tamb&eacute;m conhecido como Rick Wright, nasceu em Londres, a 28 de Julho de 1943, e faleceu, tamb&eacute;m em Londres, a 15 de Setembro de 2008 e foi um m&uacute;sico brit&acirc;nico, tecladista da banda de rock <i>Pink Floyd</i>. Entrou para a escola particular Harberdashers, e aos 20 anos foi para a faculdade de arquitetura da Universidade de Westminster. L&aacute; conheceu o baixista Roger Waters e o baterista Nick Mason. Fizeram um grupo na faculdade, a banda <i>Sigma 6</i>, e, seis meses depois, escolheram Syd Barrett para a guitarra, vindo a formar os <i>Pink Floyd</i>.",
						"O &uacute;nico nascido em Londres, entre os integrantes dos <i>Pink Floyd</i>, Rick Wright sempre foi o terceiro compositor e vocalista do grupo, tal como como George Harrison nos <i>Beatles</i>, John Entwistle nos <i>The Who</i> e John Paul Jones nos <i>Led Zeppelin</i>. Wright n&atilde;o tinha t&eacute;cnicas compar&aacute;veis aos melhores teclistas brit&acirc;nicos que foram aparecendo nos anos 60 e 70, por&eacute;m, compensava a desvantagem valendo-se de grande criatividade na cria&ccedil;&atilde;o de texturas com os instrumentos que utilizava. Como compositor, contribu&iacute;a com duas ou tr&ecirc;s m&uacute;sicas por &aacute;lbum, ou colaborava na estrutura&ccedil;&atilde;o de obras coletivas como <i>Echoes</i> ou <i>Time</i>. O &aacute;lbum <i>Dark Side of the Moon</i> (1973) representa seu &aacute;pice nos <i>Pink Floyd</i>, onde os teclados se equiparam &agrave; guitarra de David Gilmour e onde participou na composi&ccedil;&atilde;o de cinco das dez m&uacute;sicas. Em <i>Wish You Were Here</i> (1975), onde seus teclados est&atilde;o onipresentes, Wright trouxe grandes contribui&ccedil;&otilde;es para o &aacute;lbum, sobretudo na su&iacute;te <i>Shine On You Crazy Diamond</i>.",
						"A partir do disco <i>Animals</i> (1977) iniciou-se o processo de dom&iacute;nio dos <i>Pink Floyd</i> por Roger Waters, apesar de, neste disco, Rick Wright ter realizado um trabalho competente no comando dos teclados da banda. O sucesso come&ccedil;ou a afetar as rela&ccedil;&otilde;es pessoais dentro do grupo e Wright encontrou uma sa&iacute;da em trabalhos a solo ou com outras bandas. Durante as grava&ccedil;&otilde;es de <i>The Wall</i>, em 1979, Roger Waters tinha assumido o total controlo da banda e Rick Wright afastou-se do processo de cria&ccedil;&atilde;o e concep&ccedil;&atilde;o, o que culminou com sua expuls&atilde;o da banda.",
						"Depois da sa&iacute;da dos <i>Pink Floyd</i>, Wright juntou-se com Dave Harris &agrave; banda <i>Zee</i> e gravaram <i>Identity</i> em 1984. Retornar&aacute; aos <i>Pink Floyd</i> em 1987, para as grava&ccedil;&otilde;es de <i>A Momentary Lapse Of Reason</i>, ap&oacute;s a sa&iacute;da de Roger Waters da banda 18 meses antes. Apesar do papel coadjuvante de Wright na banda, &eacute; consensual que os seus teclados foram o elemento fundamental para a constitui&ccedil;&atilde;o do som dos <i>Pink Floyd</i>. Rick Wright morreu em casa, em Londres, a 15 de setembro de 2008, com 65 anos, v&iacute;tima de cancro do pulm&atilde;o. A sua morte acabou com as esperan&ccedil;as de a banda retomar o seu quarteto cl&aacute;ssico.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"http://richardwright.net/"
						},
						{	linkRef:"Facebook", 
							linkURL:"https://www.facebook.com/search/top/?q=Rick%20Wright"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Richard_Wright_(m%C3%BAsico)"
						},
						{	linkRef:"Youtube (audio, full album, Wet Dream, 1978): ", 
							linkURL:"https://www.youtube.com/watch?v=e1M4yiOm1P0"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/richard-wright/"
						}
					],
				},
				{
					nomeMsc:"Roger Waters",
					imagsMsc:["piflWA1.jpg", "piflWA2.jpg", "piflWA3.jpg", "piflWA4.jpg"],
					txtMsc:[
						"George Roger Waters nasceu em Surrey, a 6 de setembro de 1943, &eacute; um m&uacute;sico, cantor e compositor ingl&ecirc;s. &Eacute; um dos fundadores da banda de rock <i>Pink Floyd</i>, na qual atuou como baixista e vocalista. Durante a sua forma&ccedil;&atilde;o universit&aacute;ria conheceu Syd Barrett, Nick Mason, Richard Wright e Bob Klose, formando a banda <i>Sigma 6</i> que, um pouco depois, com a sa&iacute;da de Klose, foi reformada como a banda de rock psicad&eacute;lico <i>Pink Floyd</i>. Ap&oacute;s adulto teceu grandes cr&iacute;ticas negativas ao sistema educativo ingl&ecirc;s, principalmente os tradicionais internatos, onde, segundo ele, os professores oprimiam os alunos e desvalorizavam o m&eacute;rito e a criatividade.",
						"Ap&oacute;s a sa&iacute;da de Syd Barrett do grupo, em 1968, Waters tornou-se o letrista, o principal compositor e o l&iacute;der conceptual do grupo. Subsequentemente, a banda conquistaria sucesso internacional nos anos 70 com os &aacute;lbuns <i>The Dark Side of the Moon</i>, <i>Wish You Were Here</i>, <i>Animals</i> e <i>The Wall</i>. Ainda que o seu instrumento base no Pink Floyd tenha sido o baixo, ele tamb&eacute;m utilizou sintetizadores e tape loops, al&eacute;m de tocar guitarra em grava&ccedil;&otilde;es e apresenta&ccedil;&otilde;es.",
						"Alegando diferen&ccedil;as criativas com o grupo, mas muito especialmente, com a crescente influ&ecirc;ncia de David Gilmour, Waters deixou os <i>Pink Floyd</i> em 1985, iniciando uma batalha legal com os membros restantes pelo direito futuro de usar o nome e o material do grupo. Waters estava em desacordo sobre a inten&ccedil;&atilde;o de Gilmour de continuar a usar o nome dos <i>Pink Floyd</i>. Alegava que tendo a banda sido criada por ele, Syd Barrett, Nick Mason, e Richard Wright, n&atilde;o havia raz&atilde;o para o grupo continuar a chamar-se <i>Pink Floyd</i>, contando com apenas um dos membros originais. Outro dos argumentos de Waters era o facto de ser o autor da maior parte das letras e das m&uacute;sicas dos <i>Pink Floyd</i>, desde o abandono de Syd Barrett. Mesmo assim, Gilmour ganhou o direito de usar o nome dos <i>Pink Floyd</i> e a maioria das suas m&uacute;sicas, ficando Waters apenas com direitos do &aacute;lbum <i>The Wall</i> e de todas as m&uacute;sicas da sua autoria.",
						"Sanadas os conflitos, com as resolu&ccedil;&otilde;es legais e com a passagem do tempo, Roger Waters aproximou-se de novo do grupo e tocou novamente com os <i>Pink Floyd</i> em 2005, no evento <i>Live 8</i>. A carreira a solo de Waters inclui quatro &aacute;lbuns de est&uacute;dio: <i>The Pros and Cons of Hitch Hiking</i> (1984), <i>Radio K.A.O.S.</i> (1987), <i>Amused to Death</i> (1992) e <i>Is This the Life We Really Want?</i> (2017). Em 1990, Waters produziu um dos maiores concertos de rock da hist&oacute;ria, <i>The Wall - Live in Berlin</i>, com um p&uacute;blico estimado em duzentas mil pessoas. Em 1996, entrou no <i>Hall da Fama do Rock and Roll</i>, como membro dos <i>Pink Floyd</i>. Roger Waters foi considerado o 22.&ordm; melhor baixista do mil&eacute;nio, numa lista divulgada pela revista <i>Guitar</i>.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial", 
							linkURL:"https://rogerwaters.com/"
						},
						{	linkRef:"Wikipédia (em português)", 
							linkURL:"https://pt.wikipedia.org/wiki/Roger_Waters"
						},
						{	linkRef:"Canal Youtube", 
							linkURL:"https://www.youtube.com/channel/UCRpdKithfG65rWvtsQt0TDQ"
						},
						{	linkRef:"Youtube (VEVO)", 
							linkURL:"https://www.youtube.com/user/rogerwatersVEVO"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/roger-waters/"
						}
					],
				},
			]
		},
		//Who
		{
			nomeBnd:"The Who", logoBnd:"twhoLogo.jpg", bannerBnd:"twhoBanner.jpg",
			linksBnd:[
				{	linkRef:"Site Oficial", 
					linkURL:"https://www.thewho.com/"
				},
				{	linkRef:"Wikipédia (em português):", 
					linkURL:"https://pt.wikipedia.org/wiki/The_Who"
				},
				{	linkRef:"Canal Youtube", 
					linkURL:"https://www.youtube.com/channel/UCUtwj-3S97bj3lYDVxDKtlQ"
				},
				{	linkRef:"Vagalume (letras e músicas)", 
					linkURL:"https://www.vagalume.com.br/the-who/"
				},
				{	linkRef:"Discogs", 
					linkURL:"https://www.discogs.com/artist/196766-The-Who"
				}
			],
			txtBnd:[
				"Fundada em 1964, <i>The Who</i> &eacute; uma banda de rock brit&acirc;nica composta inicialmente por Pete Townshend (guitarra), Roger Daltrey (vocais), John Entwistle (baixo) e Keith Moon (bateria). O grupo alcan&ccedil;ou um grande &ecirc;xito internacional, pelo dinamismo das suas apresenta&ccedil;&otilde;es e foi considerado uma das maiores bandas de <i>rock and roll</i> de todos os tempos e os fundadores do estilo <i>&oacute;pera rock</i>, popularizado pelo &aacute;bum <i>Tommy</i>.",
				"Em 1962, dois estudantes, Pete Townshend, com 17 anos, e John Entwistle, com 18 anos, criaram o dueto <i>The Confedereates</i> tocando <i>trad jazz</i> e <i>dixieland</i> com elementos de <i>skiffle</i>. Townshend tocava banjo e Entwistle tocava trompete. Roger Daltrey conheceu John Entwistle ocasionalmente, e conversando sobre a m&uacute;sica que ambos faziam, ter&aacute; convidado John para o projeto de uma banda onde precisava de um baixista. John concordou, na condi&ccedil;&atilde;o de incluir o seu parceiro Pete Townshend como guitarrista r&iacute;tmico. Assim, em 1963, foi fundada a banda <i>The Detours</i>, em forma de quinteto, com Roger Daltrey na guitarra base, Pete Townshend na guitarra r&iacute;tmica, John Entwistle no baixo, Doug Sandom na bateria e Colin Dawson nos vocais.",
				"Fortemente influenciados pelos <i>blues</i> e <i>country music</i>, os <i>The Detours</i> dedicavam-se, especialmente, aos <i>rhythm and blues</i>. A primeira forma&ccedil;&atilde;o consistia de Roger Daltrey na guitarra base, Pete Townshend na guitarra r&iacute;tmica, John Entwistle no baixo, Doug Sandom na bateria e Colin Dawson nos vocais. Entretanto, Dawson sa&iacute;u da banda, e Daltrey assumiu os vocais, tendo ficado Townshend como o &uacute;nico guitarrista. Um pouco mais tarde, j&aacute; em 1964, foi a vez do baterista Doug Sandom sair do grupo, entrando Keith Moon para o seu lugar. Estava estabelecido o quarteto que mudaria o nome para <i>The Who</i>.",
				"No princ&iacute;pio da sua carreira, a banda ficou famosa por destruir instrumentos no final dos espet&aacute;culos: especialmente Townshend, que destruiu guitarras e Keith Moon, que destruiu a bateria). Os primeiros &aacute;lbuns estavam repletos de can&ccedil;&otilde;es <i>pop</i> curtas e agressivas, em que os distintos <i>power chords</i> de Townshend e os temas recorrentes de rebeldia juvenil e de confus&atilde;o sentimental, foram as grandes influ&ecirc;ncias do <i>punk rock</i> e do <i>power pop</i>. Para destacar este estilo intenso e agressivo, a banda criou o slogan <i>Maximum R&amp;B</i>. A banda organizou-se redor das composi&ccedil;&otilde;es de Townshend e das can&ccedil;&otilde;es de Entwistle. Townshend liderava as tens&otilde;es da banda e esfor&ccedil;ava-se sempre para apresentar ideias inovadoras e reflexivas, enquanto Daltrey preferia o material mais agressivo e en&eacute;rgico e Moon preferia a <i>surf music</i> norte-americana.",
				"Os primeiros sucessos foram logo em 1965, primeiro com o single <i>I Can't Explain</i> e <i>Anyway</i> e, um pouco depois, o single <i>Anyhow, Anywhere</i>, a &uacute;nica composi&ccedil;&atilde;o conjunta de Townshend e Daltrey. Nesse mesmo ano a banda ainda grava o primeiro &aacute;lbum, <i>My Generation</i>, com can&ccedil;&otilde;es que se tornariam hinos do movimento <i>mod</i>, como <i>The Kids Are Alright</i> e a faixa-t&iacute;tulo <i>My Generation</i>, com o famoso verso <i>I hope I die before I get old</i>. Nos anos seguintes, cada novo single era um grande &ecirc;xito: <i>Substitute</i>, <i>I'm A Boy</i> e <i>Happy Jack</i> (1966), <i>Pictures Of Lily</i> e <i>I Can See For Miles</i> (1967) e <i>Magic Bus</i> (1968).",
				"No entanto, as ambi&ccedil;&otilde;es de inova&ccedil;&atilde;o art&iacute;stica da banda tornavam-se mais s&eacute;rias nos &aacute;lbuns produzidos nesses primeiros 5 anos de comsolida&ccedil;&atilde;o e de sucessos. Para al&eacute;m do j&aacute; referido primeiro &aacute;lbum, <i>My Generation</i> (1965), a banda produzir&aacute; o &aacute;lbum <i>A Quick One</i> (1966), com uma <i>mini-&oacute;pera rock</i>, mais tarde considerada o primeiro &eacute;pico de <i>rock progressivo</i>, o &aacute;lbum <i>The Who Sell Out</i> (1968), feito para se parecer com uma transmiss&atilde;o de uma r&aacute;dio pirata, o &aacute;lbum <i>Tommy</i> (1969), a primeira &oacute;pera rock completa (da autoria de Townshend) com sucesso comercial, e o &aacute;lbum <i>Live at Leeds</i> (1970), considerado o melhor &aacute;lbum de todos os tempos de rock ao vivo.",
				"A soma de sucessos, em 1970, induz a banda a uma ambi&ccedil;&atilde;o desmedida para grandioso projeto multim&eacute;dia chamado <i>Lifehouse</i>. No entanto, o projeto n&atilde;o sobrevieu a v&aacute;rias perip&eacute;cias e limita&ccedil;&otilde;es tecnol&oacute;gicas &agrave; &eacute;poca, sendo o material regravado, em 1971, no &aacute;lbum <i>Who's Next</i>, que acabaria por ser o trabalho mais aclamado do <i>The Who</i> entre os cr&iacute;ticos e os admiradores. Em 1973, &eacute; gravado o &aacute;lbum <i>Quadrophenia</i>, mais uma &oacute;pera-rock de Townshend, com a hist&oacute;ria de um adolescente na sua luta contra tormentos internos e em busca de um lugar na sociedade. Em 1975, &eacute; gravado o &aacute;lbum <i>Who by Numbers</i>, com can&ccedil;&otilde;es can&ccedil;&otilde;es introspectivas e depressivas muito pessoais de Townshend, que assume o seu alcoolismo e svistas por alguns cr&iacute;ticos de rock como um <i>bilhete de suic&iacute;dio</i>. Em 1978, &eacute; gravado o &aacute;lbum <i>Who Are You</i>, distanciando-se do estilo &eacute;pico das <i>&oacute;peras rock</i> enquanto se aproximava do som mais comercial comum &agrave;s r&aacute;dios.",
				"Em 1978, morre Keith Moon devido a uma overdose acidental de um medicamento contra o alcoolismo. O seu lugar &eacute; assumido por Kenney Jones, dos <i>Small Faces</i>. A banda ainda chegou a lan&ccedil;ar dois &aacute;lbuns com Kenney Jones na bateria, <i>Face Dances</i> (1981) e <i>It's Hard</i> (1982). Por&eacute;m, a perda de Moon e a perda da lideran&ccedil;a de Townshend, com necessidade de acalmar para resolver os seus problemas auditivos e a depend&ecirc;ncia de &aacute;lcool e drogas, provocam uma mudan&ccedil;a radical no som da banda, mais aproximado ao <i>pop</i> comercial.",
				"John Entwistle morre em 2002, v&iacute;tima de um ataque card&iacute;aco provocado por uma quantidade n&atilde;o determinada de coca&iacute;na. Por&eacute;m, a banda ainda continua a trabalhar nos dias de hoje, liderada por dois dos fundadores, Pete Townshend e Roger Daltrey, em espet&aacute;culos e grava&ccedil;&otilde;es com relativo sucesso. Na sua hist&oacute;ria, vendeu mais de 100 milh&otilde;es de &aacute;lbuns.",
			],
			musicosBnd:[
				{
					nomeMsc:"Roger Daltrey",
					imagsMsc:["twhoRD1.jpg", "twhoRD2.jpg", "twhoRD3.jpg", "twhoRD4.jpg"],
					txtMsc:[
						"Roger Harry Daltrey nasceu em Londres, a 1 de mar&ccedil;o de 1944 e &eacute; um cantor de <i>rock</i>, mais conhecido como fundador, guitarrista e vocalista da banda brit&acirc;nica <i>The Who</i>. Al&eacute;m do seu trabalho com a banda, Daltrey obteve grandes &ecirc;xitos como artista solo e ator, participando de diversos filmes, pe&ccedil;as de teatro e s&eacute;ries de televis&atilde;o.",
						"Roger Daltrey vivia na &aacute;rea de Shepherd's Bush em Londres, numa vizinhan&ccedil;a de classe m&eacute;dia. Foi um bom aluno at&eacute; chegar &agrave; Acton County Grammar School. Os seus pais, Harry e Irene, esperavam que Roger continuasse para a faculdade como um bom estudante na, mas Roger Daltrey tinha outras paix&otilde;es. Com 15 anos, construiu a sua primeira guitarra a partir de um bloco de madeira. Foi ent&atilde;o que o seu pai lhe deu uma guitarra el&eacute;trica <i>Epiphone</i> e Daltrey passou a sonhar em ser guitarista. N&atilde;o se interessando em mais nada al&eacute;m do <i>rock and roll</i>, foi expulso da escola, passando a trabalhar de dia numa oficina metal&uacute;rgica, enquanto praticava guitarra e se apresentava de noite com grupos juvenis, em festas, pubs e clubes masculinos.",
						"Daltrey sonhava em ter a sua pr&oacute;pria banda e partilhava esse sonho com dois dos seus habituais companheiros musicais Doug Sandom, baterista e Colin Dawson, vocalista. Em 1963, conheceu dois vizinhos, tamb&eacute;m jovens m&uacute;sicos, John Entwistle e Pete Townshend que aceitaram o projeto. Assim foi fundada a banda <i>The Detours</i>, em forma de quinteto, com Daltrey na guitarra base, Townshend na guitarra r&iacute;tmica, Entwistle no baixo, Sandom na bateria e Dawson nos vocais. Pouco depois, Dawson desistiu do grupo e Daltrey assumiu os vocais e passando Townshend para a guitarra base. Daltrey era o l&iacute;der incotestado da banda, e quem geralmente selecionava as m&uacute;sicas a serem apresentadas, incluindo can&ccedil;&otilde;es dos Beatles, de James Brown e alguns cl&aacute;ssicos do rock. Em 1964, ele decidiu a escolha de um novo nome para o grupo: <i>The Who</i>.",
						"No auge do sucesso dos <i>The Who</i>, Daltrey era o rosto e a voz de uma banda, cujos membros se consideravam os &uacute;ltimos rebeldes de uma gera&ccedil;&atilde;o em mudan&ccedil;a. Apesar de tudo, Daltrey via-se repetidamente compelido a usar de coa&ccedil;&atilde;o f&iacute;sica para se manter na banda e, ao mesmo tempo, evitar a dissolu&ccedil;&atilde;o do grupo. Eram frequentes conflitos com Pete Townshend sobre a lideran&ccedil;a e a orienta&ccedil;&atilde;o dos <i>The Who</i>, que chegaram a descambar em agress&atilde;o f&iacute;sica.",
						"Embora Roger Daltrey considerasse os <i>The Who</i> a sua principal ambi&ccedil;&atilde;o na vida, chegou a lan&ccedil;ar oito &aacute;lbuns numa carreira paralela a solo, que ele definia como sendo apenas um <i>passatempo</i>. Como ator, participou em mais de 30 longa-metragens e, em 2003 foi a estrela central da s&eacute;rie televisiva <i>Extreme History</i>, onde recriava as experi&ecirc;ncias vividas pelos grandes exploradores da hist&oacute;ria. Ainda hoje continua a partilhar com Pete Townshend a lideran&ccedil;a dos <i>The Who</i>.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial (The Who): ", 
							linkURL:"https://www.thewho.com/roger-daltrey/"
						},
						{	linkRef:"Wikipédia (em português):", 
							linkURL:"https://pt.wikipedia.org/wiki/Roger_Daltrey"
						},
						{	linkRef:"Youtube (Tópico)", 
							linkURL:"https://www.youtube.com/channel/UCoMsS-IrCQjl1M5x2t3V47A"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/roger-daltrey/"
						}
					],
				},
				{
					nomeMsc:"Pete Townshend",
					imagsMsc:["twhoPT1.jpg", "twhoPT2.jpg", "twhoPT3.jpg", "twhoPT4.jpg"],
					txtMsc:[
						"Peter Dennis Blandford Townshend nasceu em Chiswick, Londres, a 19 de maio de 1945 e &eacute; um guitarrista, cantor, compositor e escritor brit&acirc;nico, mais conhecido pelo seu trabalho com a banda de rock <i>The Who</i>. A sua carreira com a banda estende-se por mais de cinquenta anos, durante os quais ele progrediu at&eacute; ser ser considerado uma das maiores influ&ecirc;ncias musicais das d&eacute;cadas de 1960 e de 1970. Nascido numa fam&iacute;lia musical, o pai, Cliff, saxofonista profissional e a m&atilde;e, Betty, cantora, Townshend demonstrou desde cedo fascina&ccedil;&atilde;o pela m&uacute;sica. Foi exposto, ainda crian&ccedil;a, ao <i>rock and roll</i> americano e, aos 12 anos, a sua av&oacute; ofereceu-lhe a sua primeira guitarra.",
						"Townshend &eacute; o principal compositor dos <i>The Who</i>, tendo escrito mais de cem can&ccedil;&otilde;es espalhadas pelos onze &aacute;lbuns de est&uacute;dio do grupo, incluindo trabalhos conceptuais e &oacute;peras rock como <i>Tommy</i> e <i>Quadrophenia</i>. Embora reconhecido como guitarrista, &eacute; tamb&eacute;m cantor e multiinstrumentista, tendo gravado com outros instrumentos, como banjo, acorde&atilde;o, sintetizador, piano, teclado, baixo e bateria, tanto nos seus projetos a solo e nos trabalhos dos <i>The Who</i>, como em participa&ccedil;&otilde;es em &aacute;lbuns de outros artistas.",
						"Townshend tamb&eacute;m foi colaborador de diversos jornais e revistas, tendo escrito resenhas, artigos e roteiros, trabalhando tamb&eacute;m como letrista e compositor para diversos grupos musicais. Foi listado na 3.&ordf; coloca&ccedil;&atilde;o da lista de <i>Melhores Guitarristas</i> do livro <i>The New Book of Rock Lists</i> de Dave Marsh, em 10.&deg; na lista de <i>50 Melhores Guitarristas</i> da <i>gibson.com</i> e em 10.&deg; na lista de <i>100 Melhores Guitarristas de Todos os Tempos</i> da <i>Rolling Stone</i>. Ainda hoje continua a partilhar com Roger Daltrey a lideran&ccedil;a dos <i>The Who</i>.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial (The Who): ", 
							linkURL:"https://www.thewho.com/pete-townshend/"
						},
						{	linkRef:"Wikipédia (em português):", 
							linkURL:"https://pt.wikipedia.org/wiki/Pete_Townshend"
						},
						{	linkRef:"Youtube (Tópico)", 
							linkURL:"https://www.youtube.com/channel/UCLxj9OY4ADYmM_pM9v2mJiA"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/pete-townshend/"
						}
					],
				},
				{
					nomeMsc:"John Entwistle",
					imagsMsc:["twhoJE1.jpg", "twhoJE2.jpg", "twhoJE3.jpg", "twhoJE4.jpg"],
					txtMsc:[
						"John Alec Entwistle nasceu em Chiswick, sub&uacute;rbio de Londres, a 9 de outubro de 1944, e faleceu em Las Vegas a 27 de junho de 2002 e foi um baixista, compositor, cantor e trompetista brit&acirc;nico, mais conhecido por seu trabalho no baixo com a banda de rock <i>The Who</i>. Foi considerado o melhor baixista de todos os tempos pela revista <i>Rolling Stone</i>. A sua sonoridade agressiva influenciou v&aacute;rias gera&ccedil;&otilde;es de baixistas, levando-o a ser definido como <i>o maior baixista da hist&oacute;ria do rock</i> por publica&ccedil;&otilde;es como <i>Greenwich Time</i> e <i>The Ledger</i>.",
						"A pegada base do instrumento de Entwistle era alcan&ccedil;ada atrav&eacute;s da utiliza&ccedil;&atilde;o de linhas pentat&oacute;nicas e um som agudo pouco comum, alcan&ccedil;ado atrav&eacute;s da utiliza&ccedil;&atilde;o de cordas de a&ccedil;o <i>RotoSound</i>. Entwistle desenvolveu o que ele chamava de estilo <i>datil&oacute;grafo</i> de tocar baixo. Consistia em posicionar a m&atilde;o direita de modo a que os quatro dedos pudessem ser usados para bater percussivamente nas cordas, fazendo com que elas atingissem o bra&ccedil;o do instrumento com um distinto som agudo. Isso d&aacute; ao m&uacute;sico a habilidade de tocar tr&ecirc;s ou quatro cordas de uma s&oacute; vez, ou de usar diversos dedos em uma s&oacute; corda, al&eacute;m de permitir a cria&ccedil;&atilde;o de passagens bastante percussivas e mel&oacute;dicas. Ele usava esta t&eacute;cnica para imitar os preenchimentos usados pelos bateristas. Entwistle possu&iacute;a uma cole&ccedil;&atilde;o de mais de 200 instrumentos, refletindo as diferentes marcas que utilizou durante a sua carreira: baixos <i>Fender</i> e <i>Rickenbacker</i> nos anos 60, <i>Gibson</i> e <i>Alembic</i> nos anos 70, <i>Warwick</i> nos anos 80 e <i>Status</i> em fibra de carbono nos anos 90.",
						"Al&eacute;m do seu trabalho no baixo, Entwistle revelou um talento especial como compositor. As suas can&ccedil;&otilde;es demonstravam um senso de humor sombrio, incompat&iacute;vel com o trabalho mais introspectivo de Townshend. Embora contribu&iacute;sse numa propor&ccedil;&atilde;o de duas m&uacute;sicas por &aacute;lbum, a frustra&ccedil;&atilde;o de ter material relegado pelos <i>The Who</i> levou-o a <i>lan&ccedil;ar Smash Your Head Against The Wall</i>, em 1971, sendo o primeiro integrante da banda a gravar um disco a solo.",
						"John Entwistle morreu em Las Vegas um dia antes do in&iacute;cio de uma <i>tourn&eacute;e</i> norte-americana dos <i>The Who</i>. O laudo legista determinou que a morte resultou de um ataque card&iacute;aco provocado por uma quantidade indeterminada de coca&iacute;na que, embora em quantidade m&iacute;nima no seu sangue, provocou a contra&ccedil;&atilde;o s&uacute;bita das suas art&eacute;rias coron&aacute;rias, j&aacute; prejudicadas por um problema card&iacute;aco n&atilde;o tratado. Entwistle, tal como Townshend e Moon, lutaram contra o v&iacute;cio do &aacute;lcool e das drogas durante a maior parte da sua vida adulta.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial (The Who): ", 
							linkURL:"https://www.thewho.com/john-entwistle/"
						},
						{	linkRef:"Wikipédia (em português):", 
							linkURL:"https://pt.wikipedia.org/wiki/John_Entwistle"
						},
						{	linkRef:"Youtube (Tópico)", 
							linkURL:"https://www.youtube.com/channel/UC6pCPV0m6yxfxGHgbEcVNAA"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/john-entwistle/"
						}
					],
				},
				{
					nomeMsc:"Keith Moon",
					imagsMsc:["twhoKM1.jpg", "twhoKM2.jpg", "twhoKM3.jpg", "twhoKM4.jpg"],
					txtMsc:[
						"Keith John Moon nasceu em Londres a 23 de agosto de 1946 e faleceu, tamb&eacute;m em Londres, a 7 de setembro de 1978 e foi o baterista da banda de rock brit&acirc;nica <i>The Who</i>. Ganhou prest&iacute;gio por seu estilo inovador e exuberante na bateria e notoriedade por seu comportamento exc&ecirc;ntrico e por vezes destrutivo, o que lhe rendeu o apelido de <i>Moon the Loon</i> (<i>Moon, o Lun&aacute;tico</i>). Moon participou em todos os &aacute;lbuns e singles dos <i>The Who</i> at&eacute; &agrave; data da sua morte.",
						"Inicialmente, Moon, bastante influenciado pelo baterista de <i>jazz</i> Gene Krupa, tocava no mesmo estilo de bandas norte-americanas de <i>surf rock</i> e de <i>R&amp;B</i>, utilizando ritmos e preenchimentos de ambos os g&eacute;neros, mas tocando mais alto e com muito mais autoridade. Inspirado numa conversa que teve com Ginger Baker, Moon passou a usar um kit de bateria duplo no final de 1965. Na banda, o guitarrista Peter Townshend mantinha o tempo, j&aacute; que trabalhava de maneira acentuadamente r&iacute;tmica, enquanto Moon e o baixista John Entwistle solavam no topo desta base. As composi&ccedil;&otilde;es de Townshend ganhavam vida nova ap&oacute;s a interven&ccedil;&atilde;o de Moon e Entwistle, que transformavam as m&uacute;sicas em algo completamente novo e inesperado com as suas distintas t&eacute;cnicas de tocar.",
						"Moon era conhecido pelo estilo de bateria dram&aacute;tico e cheio de suspense, que frequentemente envolvia a omiss&atilde;o de batidas b&aacute;sicas em prol de uma t&eacute;cnica flu&iacute;da e acentuada, focada em viradas progressivas pelos tons, no trabalho ambidestro no bumbo e nas passagens e ataques selvagens nos chimbaus. Moon foi postumamente introduzido no <i>Rock Hall</i>, em 1990, como membro dos <i>The Who</i> e foi considerado um dos maiores bateristas de <i>rock and roll</i> de todos os tempos, tanto pelo <i>Hall da Fama do Rock and Roll</i>, bem como, quase 35 anos depois de sua morte, pela vota&ccedil;&atilde;o dos leitores da revista <i>Rolling Stone</i>, em 2011.",
						"Inicialmente, Moon, bastante influenciado pelo baterista de <i>jazz</i> Gene Krupa, tocava no mesmo estilo de bandas norte-americanas de <i>surf rock</i> e de <i>R&amp;B</i>, utilizando ritmos e preenchimentos de ambos os g&eacute;neros, mas tocando mais alto e com muito mais autoridade. Inspirado numa conversa que teve com Ginger Baker, Moon passou a usar um kit de bateria duplo no final de 1965. Na banda, o guitarrista Peter Townshend mantinha o tempo, j&aacute; que trabalhava de maneira acentuadamente r&iacute;tmica, enquanto Moon e o baixista John Entwistle solavam no topo desta base. As composi&ccedil;&otilde;es de Townshend ganhavam vida nova ap&oacute;s ele apresent&aacute;-las a Moon e Entwistle, que transformavam as m&uacute;sicas em algo completamente novo e inesperado com suas t&eacute;cnicas distintas de tocar a bateria e o baixo.",
					],
					linksMsc:[
						{	linkRef:"Site Oficial: ", 
							linkURL:"http://www.keithmoon.com/"
						},
						{	linkRef:"Site Oficial (The Who): ", 
							linkURL:"https://www.thewho.com/keith-moon/"
						},
						{	linkRef:"Wikipédia (em português):", 
							linkURL:"https://pt.wikipedia.org/wiki/Keith_Moon"
						},
						{	linkRef:"Youtube (Tópico)", 
							linkURL:"https://www.youtube.com/channel/UCKj08A7auSiiYMNIRGw-YvQ"
						},
						{	linkRef:"Vagalume (letras e músicas)", 
							linkURL:"https://www.vagalume.com.br/keith-moon/"
						}
					],
				},
			],
		},
	]
}