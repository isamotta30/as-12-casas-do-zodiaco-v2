function MudaDesenho(){

    const texto = document.querySelector("h1");
    const texto2 = document.querySelector(".Cavalheiros");
    const imagem2=document.querySelector(".img2");
    const imagem = document.querySelector("img");
    const data = document.querySelector('#data').value; 
    
    
    if(data >='2023/03/21' && data <='2023/04/20'){        
        
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/mudearies.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Mu é o Cavaleiro de Ouro que protege a primeira Casa do Zodíaco, a de Áries. Ele tem o poder de restaurar as armaduras sagradas e usar a telecinese. Mu é descrito como um guerreiro calmo e sábio, sempre ponderando suas ações antes de agir. Ele é um dos mais experientes Cavaleiros de Ouro e frequentemente é visto como um mentor para os outros personagens.";
        document.body.style.backgroundColor = '#6A5ACD';
        document.body.style.color = 'black';
        imagem2.setAttribute("src","img/aries.png");
        imagem2.setAttribute("height","500px");
    }
    else if(data >='2023/04/21' && data<='2023/05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/aldebarandetouro.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Com uma magnitude, Aldebaran é retratado como um homem alto e musculoso, com cabelos castanhos e uma cicatriz na testa. Ele veste uma armadura dourada com chifres de touro, que simbolizam a sua constelação.Ele tem uma grande força física e um golpe chamado Grande Chifre. Aldebaran é brasileiro e nasceu em 8 de maio. Ele se sacrificou no Muro das Lamentações para abrir uma passagem para os Campos Elísios e depois renasceu em Asgard com uma nova armadura dourada.";
        document.body.style.backgroundColor = '	#363636';
        document.body.style.color = 'white';
        imagem2.setAttribute("src","img/touro-.png");
        imagem2.setAttribute("height","500px");
    }
    else if(data >='2023/05/' && data<='2023/06/20'){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/sagadegemeos.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Saga é o Cavaleiro de Ouro de Gêmeos do século XX, que tinha uma personalidade dividida entre o bem e o mal. Ele matou o antigo Grande Mestre Shion e se disfarçou dele para tentar dominar o mundo. No entanto, viu seu plano ir por terra abaixo ao ser derrotado por Seiya com a ajuda de Atena e se arrependeu de seus crimes.Saga pode manipular a energia cósmica para criar explosões devastadoras ou abrir portais para outras dimensões. Ele também pode usar telecinese, telepatia e ilusão para controlar objetos e mentes, além de ser capaz de se mover e atacar na velocidade da luz ou até mais rápido que ela.";
        document.body.style.backgroundColor = '#4169E1';
        document.body.style.color = 'white';
        imagem2.setAttribute("src","img/gemeos.png");
        imagem2.setAttribute("height","500px");
    }

    else if(data >='2023/06/21' && data<='2023/07/22'){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/mascaradamortecancer.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Máscara da Morte é um dos Doze Cavaleiros de Ouro, cuja armadura representa a constelação de Câncer. Ele é conhecido por sua aparência assustadora e pela máscara que cobre a maior parte de seu rosto. Sua personalidade é sádica e cruel, e ele gosta de brincar com seus inimigos antes de eliminá-los.Máscara da Morte pode criar um campo de força ao seu redor para protegê-lo de ataques, além de manipular o reino da morte para causar danos aos seus oponentes.";
        document.body.style.backgroundColor = '	#7B68EE';
        document.body.style.color = 'black';
        imagem2.setAttribute("src","img/cancer.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/07/22' && data<='2023/08/22'){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/aioliadeleao.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Aiolia de Leão é o Cavaleiro de Leão, um dos mais poderosos guerreiros da deusa Atena, e o irmão mais novo de Aiolos, o Cavaleiro de Ouro de Sagitário. Aiolia é conhecido por sua personalidade corajosa e justa, bem como por sua grande força física e habilidades em combate, como a velocidade.Inicialmente, Aiolia é retratado como um personagem desconfiado e cético em relação a Atena e aos Cavaleiros de Bronze, mas logo se torna um aliado leal e forte defensor da deusa e seus ideais.";
        document.body.style.backgroundColor = '#DAA520';
        document.body.style.color = 'black';
        imagem2.setAttribute("src","img/leao2.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/08/23' && data<='2023/09/22'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/shakadevirgem.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Shaka é o Cavaleiro de Ouro de Virgem que protege a sexta casa do zodíaco. Ele é considerado a reencarnação de Buda e tem um grande poder espiritual.Ele pode usar técnicas como o Tesouro do Céu, que elimina os cinco sentidos do adversário, e o Tenbu Hōrin, que sela os seis sentidos e leva à iluminação ou à morte. Ele é um dos cavaleiros mais próximos de Deus e tem uma personalidade calma e sábia.";
        document.body.style.backgroundColor = '#FFFF00';
        document.body.style.color = 'black';
        imagem2.setAttribute("src","img/virgem.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/09/23' && data<='2023/10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/dohkodelibra.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Dohko é um dos Cavaleiros de Ouro que protegem o Santuário de Atena e que possui as 12 armas sagradas de Libra. As 12 armas sagradas de Libra são um conjunto de armas que fazem parte da armadura de ouro de Libra. Elas são proibidas por Atena e só podem ser usadas em situações extremas, como para destruir obstáculos poderosos ou enfrentar inimigos muito fortes.Elas são 6 pares de armas: uma espada, uma lança, um tridente, uma nunchaku, um escudo e uma tonfa.Dohko teve grande participação da Guerra Santa contra Hades no século XVIII e foi um dos únicos sobreviventes, junto com seu amigo Shion de Áries. Ele também é o mestre de Shiryu, um dos Cavaleiros de Bronze protagonistas da história.";
        document.body.style.backgroundColor = '#8B0000';
        document.body.style.color = 'white';
        imagem2.setAttribute("src","img/libra.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/101/23' && data<='2023/11/21'){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/milodeescorpiao.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Milo de Escorpião é um dos Cavaleiros de Ouro mais poderosos e velozes do Santuário. Ele possui uma habilidade suprema chamada Agulha Escarlate, que pode atingir 14 pontos vitais do corpo humano e causar uma dor insuportável.Ele também pode bloquear e evitar qualquer técnica ao vê-la uma vez, além de lançar rajadas de energia e manipular átomos. Ele é um guerreiro orgulhoso e corajoso, que não teme enfrentar inimigos mais fortes ou traidores. Apesar de perigoso, Milo é leal à Atena e aos seus ideais de justiça.";
        document.body.style.backgroundColor = '	#9370DB';
        document.body.style.color = 'black';
        imagem2.setAttribute("src","img/escorpiao.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/11/22' && data<='2023/12/21'){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/aiolosdesagitario.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Aiolos de Sagitário é um dos personagens mais importantes da franquia “Cavaleiros do Zodíaco”. Ele é o irmão mais velho de Aiolia de Leão. Ele é o responsável por salvar a vida de Saori Kido, a reencarnação de Athena, quando ela ainda era um bebê.Antes de morrer, ele entregou a Saori uma mensagem importante e a proteção de sua armadura de Sagitário, tornando-se assim um importante símbolo de esperança e resistência para os Cavaleiros de Bronze.";
        document.body.style.backgroundColor = '	#8B4513';
        document.body.style.color = 'white';
        imagem2.setAttribute("src","img/sagitario.png");
        imagem2.setAttribute("height","500px");
    }

    else if(data >='2023/10/22' && data<='2023/01/20'){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/shuradecapricornio.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Shura de Capricórnio é outro Cavaleiro de Ouro que protege a Casa de Capricórnio no Santuário. Ele se considera o cavaleiro mais fiel a Atena, mas sua lealdade ao Santuário o levou a cometer erros. Shura possui uma técnica chamada Excalibur, que é uma espada invisível capaz de cortar qualquer coisa.Ele foi o responsável por matar Aioros de Sagitário, que tentava salvar a bebê Atena do Grande Mestre. Seu oponente nas Doze Casas foi Shiryu, que acabou tendo que se sacrificar para encerrar o combate entre os dois.";
        document.body.style.backgroundColor = '	#008B8B';
        document.body.style.color = 'white';
        imagem2.setAttribute("src","img/capricornio.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/01/21' && data<='2023/02/18'){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/kamusdeaquario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Kamus é o guardião da Casa de Aquário no Santuário e é o responsável por impedir a invasão de qualquer inimigo que tente passar por ela. Ele é considerado um dos mais habilidosos em manipulação do elemento do gelo, sendo capaz de congelar tudo o que está ao seu redor. Durante a Batalha das Doze Casas, os Cavaleiros de Bronze enfrentam Kamus na Casa de Aquário.";
        document.body.style.backgroundColor = '	#778899';
        document.body.style.color = 'white';
        imagem2.setAttribute("src","img/aquario.png");
        imagem2.setAttribute("height","500px");
    }
     
    else if(data >='2023/02/19' && data<='2023/03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/afroditedepeixes.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Afrodite de Peixes é o Cavaleiro de Ouro que protege a última Casa do Zodíaco, a de Peixes12. Ele usa golpes com rosas, que podem ser venenosas, explosivas ou cortantes. Ele se aliou ao Grande Mestre Saga, que se passava por Atena, pois acreditava que só um poder supremo poderia manter a paz no mundo.Ele também pode sentir a pulsação das plantas e se comunicar com ela, ler mentes e é imune às toxinas delas.Na sua batalha, ele enfrentou Shun de Andrômeda e foi derrotado pelo seu golpe Tempestade Nebulosa. Ele também participou da Guerra Santa contra Hades no século XVIII e na era atual em que é revivido.";
        document.body.style.backgroundColor = '	#87CEFA';
        document.body.style.color = 'black';
        imagem2.setAttribute("src","img/peixes.png");
        imagem2.setAttribute("height","500px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'white';
    }

}