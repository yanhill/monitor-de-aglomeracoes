
let instructionToggle = true;

var highLightStyle = {
    color: '#2262CC',  
    weight: 3,
    fillOpacity: 0,
    fillColor: '#2262CC'
};
var defaultStyle = {
    color: '#ffffff', 
    weight: 1,
    fillOpacity: 0.75,
    fillColor: '#2262CC'
};
var blackIcon = L.icon({
    iconUrl: 'marker-orange.svg',
    iconSize: [40,40],
    iconAnchor: [20,30],
    popupAnchor: [0,-30]                
});

var mymap = L.map('mapid').setView([-22.911835523932268 ,-43.49377899169921], 11);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    maxZoom: 17,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',                subdomains: 'abcd',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(mymap);

var geojsonLayer = new L.GeoJSON.AJAX("https://gist.githubusercontent.com/esperanc/db213370dd176f8524ae6ba32433f90a/raw/6dff5654e9ff6395f09f18ea2692f40ed2060cb9/Limite_Bairro.geojson", {
    
    style : function(feature){
        return{
            color: '#ffff', 
            weight: 1,
            fillOpacity: 0.75,
            fillColor: '#2262CC'
        }
    },
    onEachFeature: function(feature, layer) {
        /*
            layer.bindPopup(feature.properties.NOME);
            layer.on('mouseover', function(e){
                this.openPopup();
                this.setStyle(highLightStyle);
            });
            layer.on('mouseout', function(e){
                this.closePopup();
                this.setStyle(defaultStyle);
            });
            layer.on('click', function(e){
           //     mymap.fitBounds(this.getBounds());
                console.log(this);
                this.setStyle(highLightStyle);
            });
            */
    }
    
    
}); 

var locations = [
    {lat:-22.971945347197924, lng:-43.580358788354424, district:'Guaratiba',address:'R. Ibema, 100',date:"12/03/2021", hour:"20h", img:"privadinha.webp"},
    {lat:-22.989463107108623, lng:-43.59702385787735, district:'Guaratiba',address:'R. Francisco Furtado, 433',date:"12/03/2021", hour:"21h", img:"convoca.webp"},
    {lat:-22.887006302036205, lng:-43.49128733527789, district:'Senador Camará',address:'Sem endereço exato',date:"19/02/2021", hour:"00h", img:"primeiro-role.webp"},
    {lat:-22.877631845098733, lng:-43.58014263089042, district:'Inhoaíba, Campo Grande',address:'R. Projetada Três',date:"21/02/2021", hour:"15h", img:"tardezinha.webp"},
    {lat:-22.914209583368933, lng:-43.58983131739516, district:'Inhoaíba, Campo Grande',address:'Espaço mansão - Vilar Carioca<br>(sem endereço exato)',date:"14/03/2021", hour:"10h", img:"30-anos.webp"},
    {lat:-22.916519095024633, lng:-43.601543931081224, district:'Campo Grande',address:'R. Florestal, 2 - Vilar Carioca',date:"27/03/2021", hour:"22h", img:"vilar-show.webp"},
    {lat:-22.827476568763657, lng:-43.30390324438575, district:'Cordovil',address:'R. Tenente Palestrina, 715',date:"14/03/2021", hour:"14h", img:"sistema-nervoso.webp"},
    {lat:-22.909076238025637, lng:-43.29675403088973, district:'Engenho de Dentro',address:'R. Camarista Méier',date:"20/02/2021", hour:"", img:"micareta-maridao.webp"},
    {lat:-22.900909788880494, lng:-43.26762867321953, district:'Céu Azul, Engenho Novo',address:'R. Souza Barros, 395',date:"20/02/2021", hour:"19h", img:"classicos.webp"},
    {lat:-22.89866711827307, lng:-43.263402229043926, district:'Engenho Novo',address:'R. Dois de Maio, 246',date:"21/02/2021", hour:"14h", img:"kadinho.webp"},
    {lat:-22.82777150727137, lng:-43.31905871739654, district:'Vista Alegre',address:'Estrada da Água Grande, 782',date:"19/02/2021", hour:"22h", img:"love-rio-bbb.webp"},
    {lat:-22.878800254342156, lng:-43.24539383511024, district:'Manguinhos',address:'Bar do Barro',date:"19/02/2021", hour:"21h", img:"carnaval-do-barro.webp"},
    {lat:-22.838482316761855, lng:-43.35954574623134, district:'Coelho Neto',address:'R. Gustavo Viana Filho',date:"Todos os dias", hour:"", img:"festival-dos-cria.webp"},
    {lat:-22.849008311296473, lng:-43.357176130890856, district:'Honório Gurgel',address:'R. das Safiras, 242',date:"09/04/2021", hour:"21h", img:"baile-de-maldivas.webp"},
    {lat:-22.88579202086949, lng:-43.25515820390117, district:'Jacaré',address:'Praça da concordia(sem endereço exato)',date:"Toda sexta", hour:"", img:"baile-do-jaca.webp"},
    {lat:-22.891852755458753, lng:-43.25714042589415, district:'Jacaré',address:'"Função"',date:"18/02/2021", hour:"21h", img:"pago-funk.webp"},
    {lat:-22.93529661035586, lng:-43.21267189040586, district:'Rio Comprido',address:'R. Paula Ramos, 426',date:"05/03/2021", hour:"22h", img:"demo-baile.webp"},
    {lat:-22.889378487752907, lng:-43.49317561026568, district:'Senador Camará',address:'"Favela chique"(sem endereço exato)',date:"12/03/2021", hour:"21h", img:"favela-chique.webp"},
    {lat:-22.8530527052938, lng:-43.343017002055774, district:'Rocha Miranda',address:'R. Paulo Viana, 149',date:"28/02/2021", hour:"15h", img:"taka-raba.webp"},
    {lat:-22.88288164185477, lng:-43.31043388845239, district:'Piedade',address:'R. Antonio Vargas, 48',date:"19/02/2021", hour:"19h", img:"seduction-fest.webp"},
    {lat:-22.858896100554066, lng:-43.340344735688355, district:'Turiaçu',address:'R. Monsenhor Inácio da Silva, 355',date:"06/03/2021", hour:"14h", img:"tardezinha-do-alan.webp"},
    {lat:-22.84570632839793, lng:-43.3790191596171, district:'Irajá',address:'Quadra do amarelinho (passarela 27)',date:"19/02/2021", hour:"22h", img:"caju-para-baixo.webp"},
    {lat:-22.872920510384102, lng:-43.23859781543601, district:'Vila do João, Maré',address:'R. Um, prox. 162',date:"21/02/2021", hour:"14h", img:"feijoada-do-bloco.webp"},
    {lat:-22.875458389363256, lng:-43.33621831543604, district:'Madureira',address:'Papa G - Tv. Almerinda Freitas, 42',date:"19/02/2021", hour:"22h", img:"gloss.webp"},
    {lat:-22.91969763185647, lng:-43.170151624859955, district:'Glória',address:'Marina da Glória',date:"28/02/2021", hour:"14h (embarque)", img:"jump.webp"},
    {lat:-22.959454623593253, lng:-43.68553927310715, district:'Sepetiba',address:'R. 51, praça das ilhas cayman',date:"15/02/2021", hour:"19h", img:"baile-de-carnaval.webp"},
    {lat:-22.988008266231503, lng:-43.32301960009007, district:'Muzema',address:'Estrada de Jacarepaguá, 520',date:"19/02/2021", hour:"21h", img:"enfim-sexta.webp"},
    {lat:-22.880511661145565, lng:-43.27045126146922, district:'Del Castilho',address:'Comunidade da Bandeira 2',date:"19/02/2021", hour:"23h", img:"pagofunk-da-b2.webp"},
    {lat:-22.88576731016234, lng:-43.25553371297878, district:'Jacaré',address:'Praça de Concórdia',date:"15/02/2021", hour:"22h", img:"carnaval-do-jaca.webp"},
    {lat:-22.857334526774935, lng:-43.241105339586746, district:'Campo da Maré',address:'Laje Paradinha',date:"05/03/2021", hour:"23h", img:"do-martins.webp"},
    {lat:-22.883803465458236, lng:-43.32168121543592, district:'Cascadura',address:'Rua Moisés Lienbaum, 121',date:"15/02/2021", hour:"21h", img:"bloco-dos-canalhas.webp"},
    {lat:-22.864006952716814, lng:-43.336973086600324, district:'Madureira',address:'Comunidade Cajueiro',date:"15/02/2021", hour:"18h", img:"cajueiro-folia.webp"},
    {lat:-22.908641403568744, lng:-43.296582369402415, district:'Engenho de Dentro',address:'Camarista Méier - Âncora',date:"15/02/2021", hour:"22h", img:"pagofunk-camarista.webp"},
    {lat:-22.860092915806774, lng:-43.23855367548396, district:'Nova Holanda',address:'Campo da Rubens Vaz',date:"20/02/2021", hour:"23h", img:"baile-da-nova-holanda.webp"},
    {lat:-22.98326585595873, lng:-43.2009018327347, district:'Ipanema',address:'R. Farme de Amoedo, 95',date:"13-16/02/2021", hour:"", img:"point-meninos.webp"},
    {lat:-22.964298849636258, lng:-43.17403215787776, district:'Copacabana',address:'Av. Princesa Isabel, 21',date:"15/02/2021", hour:"23h", img:"black-cat.webp"},
    {lat:-22.965948767492176, lng:-43.17644721554819, district:'Copacabana',address:'Av. Atlântica, 1424',date:"15/02/2021", hour:"23h", img:"bloquinho-da-dolce.webp"},
    {lat:-22.936907988112917, lng:-43.179253573219064, district:'Flamengo',address:'R. Bibiano Pereira da Rocha',date:"15/02/2021", hour:"22h", img:"black-cat.webp"},
    {lat:-22.93420229470518, lng:-43.211852813614264, district:'Rio Comprido',address:'R. Paula Ramos, 402',date:"15/02/2021", hour:"", img:"mirante-do-caribe.webp"},
    {lat:-22.949744651038927, lng:-43.36129711015485, district:'Cidade de Deus',address:'Praça do Dantas',date:"14/02/2021", hour:"14h", img:"saida-dos-pirulitos.webp"},
    {lat:-22.948199590501527, lng:-43.36341183068254, district:'Cidade de Deus',address:'Quadra do Lazer',date:"16/02/2021", hour:"12h", img:"correto.webp"},
    {lat:-22.880659914944403, lng:-43.463947217192434, district:'Bangu',address:'R. Santa Cecília, 800',date:"16/02/2021", hour:"17h", img:"caju-para-baixo-2.webp"},
    {lat: -22.89545058078427, lng:-43.41838557682063, district:'Realengo',address:'R. Leonor Chrisman Mulle (Pistão da Leonor)',date:"12/02/2021", hour:"", img:"pistao-da-leonor.webp"},
    {lat:-22.87694619228239, lng:-43.44195237486469, district:'Padre Miguel',address:'R. Barão de Piraquara, 446',date:"", hour:"", img:"bloco-desce-redondo.webp"},
    {lat:-22.858274207873357, lng:-43.49051775766046, district:'Vila Kennedy',address:'Quadra da Manilha',date:"13/02/2021", hour:"20h", img:"marrocos-folia.webp"},
    {lat:-22.815324981966132, lng:-43.29206910184868, district:'Cordovil',address:'R. Mar Grande, 332',date:"20/02/2021", hour:"20h", img:"pre-carnaval-dos-cria.webp"},
    {lat:-22.90669026447363, lng:-43.190391044174866, district:'Centro',address:'Praça da República, 141',date:"10-17/02/2021", hour:"22h", img:"cruising-festival.webp"},
    {lat:-22.945757507041982, lng:-43.67747644232083, district:'Sepetiba',address:'PH Carioca',date:"12/02/2021", hour:"20h", img:"clima-das-favelas.webp"},
    {lat:-22.92752031665353, lng:-43.33941298835522, district:'Jacararepaguá',address:'Estrada do Pau Ferro, 653',date:"16/02/2021", hour:"15h", img:"um-dia-na-mansao.webp"},
    {lat:-22.956120773324876, lng:-43.682942959518634, district:'Santa Crus',address:'Quadra das Casinhas',date:"19/02/2021", hour:"22h", img:"casinhas-on-folia.webp"},
    {lat:-22.875219869171385, lng:-43.31286623253729, district:'Cavalcante',address:'Rua Joacena, 133',date:"14/02/2021", hour:"22h", img:"baile-de-carnaval-da-doacena.webp"},
    {lat:-22.847939787318623, lng:-43.24201954603928, district:'Maré',address:'Ciep 326 Professor César Pernetta',date:"12/02/2021", hour:"22h", img:"belo.webp"},
    {lat:-22.90669026447363, lng:43.358317688351816, district:'Honório Gurgel',address:'Travesse Ururai',date:"13/02/2021", hour:"21h", img:"fuzue-dos-barraqueiros.webp"},
    {lat:-22.84834369570489, lng:-43.35507338043333, district:'Honório Gurgel',address:'"Praça do 326"',date:"12-14/02/2021", hour:"22h", img:"carna-folia.webp"},
    {lat:-22.848556232328995, lng:-43.28297786147728, district:'Vila Cruzeiro / Penha',address:'R. do Campo do Ordem',date:"12/02/2021", hour:"21h", img:"baile-da-principal.webp"},
    {lat:-22.822001195677064, lng:-43.30534570380658, district:'Cordovil',address:'R. Oliveira Melo',date:"13/02/2021", hour:"22h", img:"pagode-muita-midia.webp"},
    {lat:-22.88656791644172, lng:-43.257365919147816, district:'Jacaré',address:'R. Vieira Fazenda, 56',date:"12/02/2021", hour:"21h", img:"traplize.webp"},
    {lat:-22.875286204144196, lng:-43.349384796329005, district:'Oswaldo Cruz',address:'R. Antonieta',date:"12/02/2021", hour:"18h", img:"tropa-da-esquina.webp"},
    {lat:-22.857495413046497, lng:-43.31448845962735, district:'Vicente de Carvalho',address:'R. Igramerim',date:"13/02/2021", hour:"19h", img:"juramento-folia.webp"},
    {lat:-22.837789790840738, lng:-43.332731757846645, district:'Colégio',address:'Estrada do Colégio, 11',date:"12-16/02/2021", hour:"", img:"para-paz-folia.webp"},
    {lat:-22.865586158706858, lng:-43.29518982026106, district:'Engenho da Rainha',address:'R. Mario Ferreira (R. da feira)',date:"12-16/02/2021", hour:"18h", img:"canada-folia.webp"},
    {lat:-22.818099165975713, lng:-43.37531101534036, district:'Pavuna',address:'R. Tiradentes (Bar do Josias)',date:"13-14/02/2021", hour:"22h", img:"cruising-festival.webp"},
    {lat:-22.856218442912034, lng:-43.345748946028735, district:'Rocha Miranda',address:'R. Santo Elias, 74',date:"13/02/2021", hour:"18h", img:"kaboom.webp"},
    {lat:-22.937205858589415, lng:-43.17913764151031, district:'Flamengo',address:'Quadra do Morro Azul',date:"12/02/2021", hour:"22h", img:"micareta-do-mix.webp"},
    {lat:-22.990776600086534, lng:-43.24758643391048, district:'Rocinha',address:'R. 2 (Quadra da rua)',date:"12/02/2021", hour:"22h", img:"resenha-dos-de-fe.webp"},
]


for(let i = 0 ; i < locations.length ; i++){
    marker = new L.marker([locations[i].lat, locations[i].lng], {
        icon: blackIcon
    })
    .bindPopup("<div class='popup-complete-address'>" + "<div class='popup-district'>" + locations[i].district + "</div>" +
               "<div class='popup-address'>" + locations[i].address + "</div>" + "</div>" + 
               "<div class='popup-date-and-hour'>" + locations[i].date + " " + locations[i].hour  + "</div>")
    .on('mouseover', function(){
        this.openPopup()
        
        document.getElementById("flyerImage").src = "img/"+locations[i].img;  
    })
    .on('mouseout', function(){
     //   this.closePopup();
        document.getElementById("flyerImage").src = "";  
    }).addTo(mymap)
}
document.getElementById("totalDeEventos").innerHTML = locations.length + " eventos localizados";

document.getElementById("observacoes").onclick = function(){
    let instrucoes = document.getElementsByClassName("instrucoes");
    let instrucoesWrapper = document.getElementById("instrucoesWrapper");

    instructionToggle = !instructionToggle;
    console.log(instructionToggle)

    if(instructionToggle == true){
            instrucoesWrapper.style.display = 'block';
            document.getElementById("instrucoes-arrow").scr = "file://img/arrow-down.png";
    }
    else{
            instrucoesWrapper.style.display = 'none';
            document.getElementById("instrucoes-arrow").scr = "file://img/arrow-side.png";
    }
}

//var markers2 = L.markerClusterGroup();
//markers2.addLayer(L.marker(markers));

geojsonLayer.addTo(mymap); 