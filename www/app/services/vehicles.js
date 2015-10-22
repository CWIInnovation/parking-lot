angular.module('parking-lot').service('vehiclesService', function(){ 
           
        this.getVehicles = function() {
            var vehicles = [
                {  
                    "driver":"Yuri Zamboni Pinheiro",
                    "licensePlate":"IUW 6465",
                    "vehicleType":"Sandero Prata",
                    "team":"Margarete SP"
                },
                {  
                    "driver":"Yuri Podhorodeski",
                    "licensePlate":"LSJ 2425",
                    "vehicleType":"Sandero Prata",
                    "team":"Prytula"
                },
                {  
                    "driver":"Yuri Podhorodeski",
                    "licensePlate":"IVC 8030",
                    "vehicleType":"Peugeot 208 Branco",
                    "team":"Prytula"
                },
                {  
                    "driver":"Wagner Lemos",
                    "licensePlate":"IKJ 4365",
                    "vehicleType":"Celta Vermelho",
                    "team":"Prytula 92736325"
                },
                {  
                    "driver":"Vitório Eugenio Wingert",
                    "licensePlate":"ITI 4223",
                    "vehicleType":"Prisma LT preto",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Vinicius Paz",
                    "licensePlate":"IMA 2908",
                    "vehicleType":"Fiesta Prata",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Vinicios Adonis",
                    "licensePlate":"IHK 1819",
                    "vehicleType":"Corsa Sedan verde",
                    "team":"Renner"
                },
                {  
                    "driver":"Vinicios Adonis",
                    "licensePlate":"IVC 0122",
                    "vehicleType":"HB20 Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Victor Kindermann da Silva",
                    "licensePlate":"IRM 3742",
                    "vehicleType":"Gol verde",
                    "team":"Kátia"
                },
                {  
                    "driver":"Tiago Teixeira",
                    "licensePlate":"ILP 9664",
                    "vehicleType":"Palio Branco",
                    "team":"Suporte Oracle"
                },
                {  
                    "driver":"Tiago Silveira Scheffel",
                    "licensePlate":"IAU 1091",
                    "vehicleType":"Uno Mille vermelho",
                    "team":"Crescer"
                },
                {  
                    "driver":"Tiago Silveira da Silva ",
                    "licensePlate":"IOS 5097",
                    "vehicleType":"Ka Vermelho",
                    "team":"Renner"
                },
                {  
                    "driver":"Tiago Silva",
                    "licensePlate":"IRM 8623",
                    "vehicleType":"Voyage Chumbo",
                    "team":"Equipe Prytula"
                },
                {  
                    "driver":"Tiago Rodrigues da Rosa",
                    "licensePlate":"IVJ8836",
                    "vehicleType":"Chery",
                    "team":"Kátia"
                },
                {  
                    "driver":"Tiago Maggi Borges",
                    "licensePlate":"IPF 3373",
                    "vehicleType":"Polo Preto",
                    "team":"Infra"
                },
                {  
                    "driver":"Tiago Maggi Borges",
                    "licensePlate":"ISU 1746",
                    "vehicleType":"GOL ",
                    "team":"Infra"
                },
                {  
                    "driver":"Tiago Maggi Borges",
                    "licensePlate":"IUA 5236",
                    "vehicleType":"FOX PRETO",
                    "team":"Infra"
                },
                {  
                    "driver":"Tiago Lauxen",
                    "licensePlate":"ITL 7999",
                    "vehicleType":"Honda Fit Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Tiago Lauxen",
                    "licensePlate":"IHN 9573",
                    "vehicleType":"GOL Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Tiago Guedes",
                    "licensePlate":"ILK 8452",
                    "vehicleType":"Honda Fit prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Tiago Acosta Dias",
                    "licensePlate":"IQD 6890",
                    "vehicleType":"Prisma Preto",
                    "team":"Infra"
                },
                {  
                    "driver":"Thomas Metz",
                    "licensePlate":"IQB 2020",
                    "vehicleType":"Coralla XEI",
                    "team":"Eq. Elias"
                },
                {  
                    "driver":"Thomas Gustavo Dietrich",
                    "licensePlate":"ISS 2226",
                    "vehicleType":"Uno Branco ( novo )",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Thomas F. Rodrigues",
                    "licensePlate":"IRQ-0982",
                    "vehicleType":"Fox Branco",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Thiago Dias Melin",
                    "licensePlate":"IVH 4062",
                    "vehicleType":"HB 20 Prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Terence Kleber",
                    "licensePlate":"IRM 8432",
                    "vehicleType":"Captiva Cinza",
                    "team":"Crediare"
                },
                {  
                    "driver":"Tefferson Guterres",
                    "licensePlate":"IPQ 5500",
                    "vehicleType":"Civic Preto",
                    "team":"Crescer"
                },
                {  
                    "driver":"Talles Ludwig Strack",
                    "licensePlate":"INS 6351",
                    "vehicleType":"Sandero Preto",
                    "team":"Nucleo"
                },
                {  
                    "driver":"Taiane Freire",
                    "licensePlate":"IPQ-5120",
                    "vehicleType":"Corsa Prata",
                    "team":"Unimed POA"
                },
                {  
                    "driver":"Stela Barcellos de Farias",
                    "licensePlate":"IQQ 0459",
                    "vehicleType":"Prisma Preto",
                    "team":"Poa"
                },
                {  
                    "driver":"Silas dos Santos Candiolli",
                    "licensePlate":"ILM 1871",
                    "vehicleType":"Siena Branco",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Sheine Tyara Gomes Pavão",
                    "licensePlate":"IQG 0059",
                    "vehicleType":"Peugeout 207 preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Sérgio Michels",
                    "licensePlate":"ITV 7430",
                    "vehicleType":"Gol G6 Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Sandro Castanheira",
                    "licensePlate":"LQE 9719",
                    "vehicleType":"Peugeot 308",
                    "team":"Renner"
                },
                {  
                    "driver":"Sandro Alberto Dutra Castanheira",
                    "licensePlate":"ITM 3276",
                    "vehicleType":"Uno EVO Sporting 1.4",
                    "team":"--"
                },
                {  
                    "driver":"Salvador Moraes Júnior",
                    "licensePlate":"IRI 5854",
                    "vehicleType":"Corsa Preto",
                    "team":"Poa"
                },
                {  
                    "driver":"Ronaldo Rothe Pinto",
                    "licensePlate":"IUU 1410",
                    "vehicleType":"Fit Prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Ronaldo Machado",
                    "licensePlate":"IQW 6756",
                    "vehicleType":"Linea Prata",
                    "team":"Infra"
                },
                {  
                    "driver":"Ronaldo Machado",
                    "licensePlate":"IOR 6504 ",
                    "vehicleType":"FOX PRETO",
                    "team":"Infra"
                },
                {  
                    "driver":"Ronaldo Lisot",
                    "licensePlate":"ISD 9506",
                    "vehicleType":"Sandero Cinza",
                    "team":"Walmart"
                },
                {  
                    "driver":"Rômulo Tomé Mendes",
                    "licensePlate":"IPX 3681",
                    "vehicleType":"Gol Branco",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Rômulo Soares Spier",
                    "licensePlate":"IQS 2318",
                    "vehicleType":"Fox Preto",
                    "team":"Eq. Prytula"
                },
                {  
                    "driver":"Rômulo Augusto Alves",
                    "licensePlate":"IUB 9562",
                    "vehicleType":"Gol Preto",
                    "team":"Unimed 2º piso"
                },
                {  
                    "driver":"Romulo",
                    "licensePlate":"IUB 7668",
                    "vehicleType":"Nisan Versa sl ",
                    "team":"Edgar "
                },
                {  
                    "driver":"Rogério Figueira da Mota",
                    "licensePlate":"IKN 0732",
                    "vehicleType":"GOL preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Rogério Figueira da Mota",
                    "licensePlate":"INS 0591",
                    "vehicleType":"Fox vermelho",
                    "team":"Renner"
                },
                {  
                    "driver":"Rodrigo wagner ",
                    "licensePlate":"iwc 5061",
                    "vehicleType":"corsa preto",
                    "team":"Suporte Elias "
                },
                {  
                    "driver":"Rodrigo Wagner ",
                    "licensePlate":"ITE 8731 ",
                    "vehicleType":"Corsa preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Rodrigo Teixeira Machado de Oliveira ",
                    "licensePlate":"IUJ-1978",
                    "vehicleType":"Fiesta Sedan Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Rodrigo Molter",
                    "licensePlate":"IOF-0168",
                    "vehicleType":"Clio Prata",
                    "team":"Crediare"
                },
                {  
                    "driver":"Rodrigo Molina Munhoz",
                    "licensePlate":"IWJ 3988",
                    "vehicleType":"Palio Azul marinho",
                    "team":"DLL Kátia"
                },
                {  
                    "driver":"Rodrigo Frohlich",
                    "licensePlate":"IKY 6879",
                    "vehicleType":"Uno Prata",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Rodrigo Bastos",
                    "licensePlate":"ITO 7404",
                    "vehicleType":"Focus Cinza",
                    "team":"Kátia"
                },
                {  
                    "driver":"Rodrigo Alécio de Moraes",
                    "licensePlate":"IJQ 1503",
                    "vehicleType":"Palio Weekend Prata",
                    "team":"Suporte"
                },
                {  
                    "driver":"Robson Luiz Valim de Bitencourt",
                    "licensePlate":"IUR 6888",
                    "vehicleType":"Onix branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Robson Luís Baum",
                    "licensePlate":"LQN 4882",
                    "vehicleType":"City prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Robson Fraga do Nascimento",
                    "licensePlate":"ITX 1340",
                    "vehicleType":"Siena Branco",
                    "team":"Eq. Prytula"
                },
                {  
                    "driver":"Robinson de Vargas Severo",
                    "licensePlate":"IAM 7860",
                    "vehicleType":"Idea Adventure Preto",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Ricardo Schultz",
                    "licensePlate":"JKU 6121",
                    "vehicleType":"Omega Bege",
                    "team":"Spanhol"
                },
                {  
                    "driver":"Ricardo Nunes",
                    "licensePlate":"ITT- 1237",
                    "vehicleType":"Celta Branco",
                    "team":"Infra"
                },
                {  
                    "driver":"Ricardo Frederico Souza da Silva",
                    "licensePlate":"IOR 3703",
                    "vehicleType":"Celta preto",
                    "team":"--"
                },
                {  
                    "driver":"Renato Silveira dos Santos",
                    "licensePlate":"IQQ 6396",
                    "vehicleType":"Polo Preto",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Renato Padilha",
                    "licensePlate":"ITG 7058",
                    "vehicleType":"Pajero Preto",
                    "team":"Gerente Renner"
                },
                {  
                    "driver":"Renata Frota de Souza",
                    "licensePlate":"ILV 9581",
                    "vehicleType":"Polo Dourado",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Renata Frota de Souza",
                    "licensePlate":"IJC 9985",
                    "vehicleType":"Ka Dourado",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Renan de Oliveira",
                    "licensePlate":"JAT 2214",
                    "vehicleType":"Golf Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Rejane Apolo",
                    "licensePlate":"IUY 5822",
                    "vehicleType":"Sandero Way Prata",
                    "team":"Eq. Kátia"
                },
                {  
                    "driver":"Rafael Saraiva Garcia",
                    "licensePlate":"IRO 2992",
                    "vehicleType":"New Fiesta Verde",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Rafael de Souza Bueno",
                    "licensePlate":"IVZ 6243",
                    "vehicleType":"Ka Preto",
                    "team":"Equipe Crediare"
                },
                {  
                    "driver":"Rafael Cristiano da Silva",
                    "licensePlate":"INW 3201",
                    "vehicleType":"Polo Branco",
                    "team":"DLL/ Kátia"
                },
                {  
                    "driver":"Rafael Carlos Bohnen",
                    "licensePlate":"IQE 2831",
                    "vehicleType":"i30 Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Rafael Bellotti",
                    "licensePlate":"IQZ 8113",
                    "vehicleType":"Focus Preto",
                    "team":"CWI POLO"
                },
                {  
                    "driver":"Rafael Augusto Eyng",
                    "licensePlate":"IQY 8414",
                    "vehicleType":"Fiesta Preto",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Rafael Augusto Eyng",
                    "licensePlate":"ITW 1817",
                    "vehicleType":"EcoSport branca",
                    "team":"Marcopolo"
                },
                {  
                    "driver":"Priscila Pereira ",
                    "licensePlate":"IMU 3163",
                    "vehicleType":"Fiesta Prata",
                    "team":"--"
                },
                {  
                    "driver":"Pedro Vanzella",
                    "licensePlate":"IQU 8561",
                    "vehicleType":"Fiesta Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Pedro Ramos ",
                    "licensePlate":"ivp 7901",
                    "vehicleType":"UP branco ",
                    "team":"Unimed POA "
                },
                {  
                    "driver":"Pedro Prates Ramos",
                    "licensePlate":"IRS 4855",
                    "vehicleType":"Peugeot 207 Branco",
                    "team":"Unimed"
                },
                {  
                    "driver":"Pedro Luiz Guedes Romero",
                    "licensePlate":"EJK-0228",
                    "vehicleType":"TUCSON Prata",
                    "team":"Badesul - Hoffmann"
                },
                {  
                    "driver":"Pedro Landfeldt",
                    "licensePlate":"IVS 7362",
                    "vehicleType":"Vermelho",
                    "team":"CWI POA"
                },
                {  
                    "driver":"Pedro Henrique Pires",
                    "licensePlate":"IPR 6140",
                    "vehicleType":"Gol G5 Vermelho ",
                    "team":"Nucleo"
                },
                {  
                    "driver":"Paulo Ricardo Rossi",
                    "licensePlate":"ILE 7209",
                    "vehicleType":"Gol Bege/dourado",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Paulo Ricardo Rossi",
                    "licensePlate":"JAL 7313",
                    "vehicleType":"Sandero verde",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Paulo Guterres dos Santos Junior",
                    "licensePlate":"JAM 8287",
                    "vehicleType":"Cruze Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Paulo André de Souza",
                    "licensePlate":"IOI-2386",
                    "vehicleType":"Palio Prata",
                    "team":"?"
                },
                {  
                    "driver":"Pamela Julius",
                    "licensePlate":"ITY 7944",
                    "vehicleType":"Agile Verde",
                    "team":"RH - Poa"
                },
                {  
                    "driver":"Pablo Luis Brodt",
                    "licensePlate":"IMG 2306",
                    "vehicleType":"Celta Branco",
                    "team":"Crescer"
                },
                {  
                    "driver":"Nívia Carvalho",
                    "licensePlate":"IQJ 1893",
                    "vehicleType":"Sandero branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Nicolas Michels",
                    "licensePlate":"IVX 2580",
                    "vehicleType":"Chevrollet Classic Branco",
                    "team":"-"
                },
                {  
                    "driver":"Nádia Borges Gandini",
                    "licensePlate":"IUO 2299",
                    "vehicleType":"Lancer Prata",
                    "team":"Nádia"
                },
                {  
                    "driver":"Murilo da Silveira Grübler",
                    "licensePlate":"IVP 2578",
                    "vehicleType":"HB 20 Hatch Prata",
                    "team":"Unimed 2º piso"
                },
                {  
                    "driver":"Morgana Berlitz",
                    "licensePlate":"IUE 2124",
                    "vehicleType":"Linea Branca",
                    "team":"Renner"
                },
                {  
                    "driver":"Morgana Berlitz",
                    "licensePlate":"IYV 6700",
                    "vehicleType":"Palio Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Miguel Simczak Prates",
                    "licensePlate":"ILH 3884",
                    "vehicleType":"Uno Bordô",
                    "team":"Renner"
                },
                {  
                    "driver":"Michel Mauri",
                    "licensePlate":"ISD 6777",
                    "vehicleType":"Ka Branco",
                    "team":"Marcopolo"
                },
                {  
                    "driver":"Michael Brito Santa Helena",
                    "licensePlate":"IJX 8232",
                    "vehicleType":"Siena Verde",
                    "team":"Renner"
                },
                {  
                    "driver":"Maxoel Ribeiro",
                    "licensePlate":"INE 7911",
                    "vehicleType":"Uno Branco",
                    "team":"Infra"
                },
                {  
                    "driver":"Mauricio Borges",
                    "licensePlate":"IMM 1164",
                    "vehicleType":"Stilo Vermelho",
                    "team":"Credz- Margarete Ricardo/ Wildfaier"
                },
                {  
                    "driver":"Matheus dos santos Hickmann",
                    "licensePlate":"IOP 9166",
                    "vehicleType":"Palio Vermelho",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Mateus da Rosa",
                    "licensePlate":"IUM 6578",
                    "vehicleType":"NEW FIESTA AZUL",
                    "team":"BADESUL CWICG"
                },
                {  
                    "driver":"Marvan Boff",
                    "licensePlate":"IVZ 1049",
                    "vehicleType":"Fiesta Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Marlon Bernardes",
                    "licensePlate":"INO 1296",
                    "vehicleType":"Focus Hatch Preto",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Mário Antônio Machado",
                    "licensePlate":"ISF 0046",
                    "vehicleType":"Sentra Prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Marcos Paulo Klauck",
                    "licensePlate":"IGY 1077",
                    "vehicleType":"Cinza metálico",
                    "team":"Outsourcing – TNT "
                },
                {  
                    "driver":"Marcos Michel Machado Koch",
                    "licensePlate":"IJZ 0184",
                    "vehicleType":"Celta Preto",
                    "team":"Credz- Margarete Ricardo/ Wildfaier"
                },
                {  
                    "driver":"Marcos Hommerding",
                    "licensePlate":"Placa - IOS8567",
                    "vehicleType":"Prisma vermelho",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Marcos Gomes",
                    "licensePlate":"IUS 8947",
                    "vehicleType":"Spacefox Branco",
                    "team":"POA"
                },
                {  
                    "driver":"Marcos Fabiano de Los Santos Gomes",
                    "licensePlate":"ITX 1281",
                    "vehicleType":"Sandero Prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Marcos A. de Oliveira Dias",
                    "licensePlate":"ILK 8425",
                    "vehicleType":"Clio Bege",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Marco Antonio Blos de Souza",
                    "licensePlate":"IPF 9026",
                    "vehicleType":"Fiesta Sedan",
                    "team":"Marcopolo"
                },
                {  
                    "driver":"Márcio Tesser",
                    "licensePlate":"ITI 2403",
                    "vehicleType":"BMW",
                    "team":"Presidente"
                },
                {  
                    "driver":"Marcia Scheid",
                    "licensePlate":"ILH9622 ",
                    "vehicleType":"Honda Fit Dourado",
                    "team":"POA- Fabrica de Testes"
                },
                {  
                    "driver":"Márcia Petry",
                    "licensePlate":"IVI 1165",
                    "vehicleType":"HB 20 preto",
                    "team":"RH"
                },
                {  
                    "driver":"Marcelo Wildfaier",
                    "licensePlate":"IQW 8131",
                    "vehicleType":"Honda Civic Preto",
                    "team":"CREDZ"
                },
                {  
                    "driver":"Marcelo Schmidt",
                    "licensePlate":"DWL 3426",
                    "vehicleType":"Fit Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Marcelo Rosenthal",
                    "licensePlate":"ITP 0719",
                    "vehicleType":"Fiesta Preto",
                    "team":"Eq. Spanhol"
                },
                {  
                    "driver":"Marcelo Prytula",
                    "licensePlate":"IWT 4290",
                    "vehicleType":"Focus Branco",
                    "team":"Eq. Prytula"
                },
                {  
                    "driver":"Marcelo Gulias",
                    "licensePlate":"IPY5892",
                    "vehicleType":"Sandero Preto",
                    "team":".."
                },
                {  
                    "driver":"Marcelo G. Rosenthal",
                    "licensePlate":"ITP 3023",
                    "vehicleType":"Focus Prata",
                    "team":"Eq. Spanhol"
                },
                {  
                    "driver":"Marcelo Flores",
                    "licensePlate":"IMR 0595",
                    "vehicleType":"Clio Prata",
                    "team":"Crediare"
                },
                {  
                    "driver":"Manoela Dias Dell' Aglio ",
                    "licensePlate":"IUM 4995",
                    "vehicleType":"HB 20 Preto",
                    "team":"RH"
                },
                {  
                    "driver":"Luiz Felipe Sírio Flores",
                    "licensePlate":"ITR 0801",
                    "vehicleType":"Escapade 207 Verde",
                    "team":"Sicredi -Kátia"
                },
                {  
                    "driver":"Luciana Prytula",
                    "licensePlate":"IRF 3048",
                    "vehicleType":"Ka Preto",
                    "team":"Crediare"
                },
                {  
                    "driver":"Lucas Manique Leal",
                    "licensePlate":"ITL 0992",
                    "vehicleType":"Palio Vermelho",
                    "team":"CREDZ"
                },
                {  
                    "driver":"Lucas Manique Leal",
                    "licensePlate":"HLH 7299",
                    "vehicleType":"GOL G5 Prata",
                    "team":"CREDZ"
                },
                {  
                    "driver":"Lucas Manique Leal",
                    "licensePlate":"IIF 1837",
                    "vehicleType":"Opala Bordô",
                    "team":"Nucleo"
                },
                {  
                    "driver":"Lucas Luis Tesser",
                    "licensePlate":"IUU 6468",
                    "vehicleType":"Prisma Vermelho",
                    "team":"Walmart"
                },
                {  
                    "driver":"LUCAS GRAEBIN",
                    "licensePlate":"ITX 0275",
                    "vehicleType":"Fiesta preto",
                    "team":"Prytula"
                },
                {  
                    "driver":"Lucas Gallon",
                    "licensePlate":"HGJ 8933",
                    "vehicleType":"Fox Prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Lucas Felix",
                    "licensePlate":"IQS 9845",
                    "vehicleType":"Clio Prata",
                    "team":"Wal"
                },
                {  
                    "driver":"Lucas Eskeff Freitas",
                    "licensePlate":"IOW 0922",
                    "vehicleType":"Cruze Branco",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Lucas Eskeff Freitas",
                    "licensePlate":"IVE 5581",
                    "vehicleType":"Peugeot 408 Preto",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Lucas Britz",
                    "licensePlate":"IOQ 2698",
                    "vehicleType":"GOL G4 branco",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Lucas Balensiefer",
                    "licensePlate":"IVA 7847",
                    "vehicleType":"Civic Branco",
                    "team":"TNT"
                },
                {  
                    "driver":"Letiele Malaquias",
                    "licensePlate":"MHT 7338",
                    "vehicleType":"Pálio Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Leonardo Teixeira da Silva",
                    "licensePlate":"IOA 8419",
                    "vehicleType":"UNO BRANCO",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Leonardo Oliveira",
                    "licensePlate":"IVM 2509",
                    "vehicleType":"Corolla Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Leandro Severino",
                    "licensePlate":"ION 1326",
                    "vehicleType":"Corsa Classic preto",
                    "team":"Datacom"
                },
                {  
                    "driver":"Kátia Einsfeld da Rocha",
                    "licensePlate":"IZI 0807",
                    "vehicleType":"Civic Preto",
                    "team":"DLL/ Kátia"
                },
                {  
                    "driver":"Kátia Cilene Rauber Peil",
                    "licensePlate":"IVG-0577",
                    "vehicleType":"Idea Bege",
                    "team":"--"
                },
                {  
                    "driver":"Jussara Inacio",
                    "licensePlate":"IUD0715",
                    "vehicleType":"SPIN Prata",
                    "team":"Walmart"
                },
                {  
                    "driver":"Junior Peixoto",
                    "licensePlate":"IQQ 7669",
                    "vehicleType":"Peugeot ",
                    "team":"Renner"
                },
                {  
                    "driver":"Julia Roehe",
                    "licensePlate":"ILM 8142",
                    "vehicleType":"Honda Fit Preta",
                    "team":"Unimed Poa"
                },
                {  
                    "driver":"Julia Flores",
                    "licensePlate":"AID 4872",
                    "vehicleType":"Corsa Bordô",
                    "team":"Prytula"
                },
                {  
                    "driver":"Julcimeri P. de Freitas",
                    "licensePlate":"IVG-9800",
                    "vehicleType":"Citroen C3 vermelho",
                    "team":"Equipe DLL/ Kátia"
                },
                {  
                    "driver":"Juarez Fiuza",
                    "licensePlate":"IHO 3755",
                    "vehicleType":"Opala Bege",
                    "team":"Walmart "
                },
                {  
                    "driver":"Juarez Fiuza",
                    "licensePlate":"MDU 2938",
                    "vehicleType":"EcoSport preta",
                    "team":"Walmart"
                },
                {  
                    "driver":"Josiel Ieque Lilge",
                    "licensePlate":"IVG 6372",
                    "vehicleType":"Celta preto",
                    "team":"Elias Suporte"
                },
                {  
                    "driver":"Josias",
                    "licensePlate":"IRI 8839",
                    "vehicleType":"Sandero verde",
                    "team":"Ad. Solutions"
                },
                {  
                    "driver":"Jorge Eduardo Dahmer Filho",
                    "licensePlate":"COI 1447",
                    "vehicleType":"Fiesta Bordo",
                    "team":"Renner"
                },
                {  
                    "driver":"Jorge Eduardo Dahmer Filho",
                    "licensePlate":"IEE 5011",
                    "vehicleType":"Uno Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Jonathan Machado",
                    "licensePlate":"IQK 6668",
                    "vehicleType":"Siena Prata",
                    "team":"Walmart"
                },
                {  
                    "driver":"Jonas Rafael Colling",
                    "licensePlate":"IKI 7392",
                    "vehicleType":"Gol Prata",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Jonas Elias Flesh",
                    "licensePlate":"IUV 6979",
                    "vehicleType":"Peugeot 308 Branco",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"John Voloski",
                    "licensePlate":"IOA 3776",
                    "vehicleType":"Palio Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"John Lenon Marques de Oliveira",
                    "licensePlate":"IOW6009",
                    "vehicleType":"Punto Prata",
                    "team":"Crescer"
                },
                {  
                    "driver":"Jocimar Felau",
                    "licensePlate":"IJW 4674",
                    "vehicleType":"Ka Branco",
                    "team":"Out.Expresso Mercurio"
                },
                {  
                    "driver":"João Paulo Fink",
                    "licensePlate":"IRT 6943",
                    "vehicleType":"Prisma Preto",
                    "team":"Spanhol"
                },
                {  
                    "driver":"João Paulo Fink",
                    "licensePlate":"IWM 5001",
                    "vehicleType":"Prisma Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"João Paulo dos Santos",
                    "licensePlate":"IJV 3923",
                    "vehicleType":"Corsa Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"João Paulo dos Santos",
                    "licensePlate":"ITH 1108 ",
                    "vehicleType":"Corsa Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Jeizer Marinho",
                    "licensePlate":"INY 5734",
                    "vehicleType":"Polo Prata",
                    "team":"Infra"
                },
                {  
                    "driver":"Jean Pinzon",
                    "licensePlate":"IVM 1349",
                    "vehicleType":"Honda City Preto",
                    "team":"Creds"
                },
                {  
                    "driver":"Jean Pinzon",
                    "licensePlate":"ITM 7311",
                    "vehicleType":"Elantra branco",
                    "team":"Credz- Margarete Ricardo/ Wildfaier"
                },
                {  
                    "driver":"Jean Carlo Leal de Carli",
                    "licensePlate":"IPH-7844",
                    "vehicleType":"Peugeout 207 vermelho",
                    "team":"CREDZ"
                },
                {  
                    "driver":"Janice Tressoldi",
                    "licensePlate":"IUP 2510",
                    "vehicleType":"HB 20 Branco",
                    "team":"RH"
                },
                {  
                    "driver":"James",
                    "licensePlate":"JAB 4044",
                    "vehicleType":"Volvo Preto",
                    "team":"Poa"
                },
                {  
                    "driver":"Jackelyn Oliveira",
                    "licensePlate":"ALL 3436",
                    "vehicleType":"Palio Branco",
                    "team":"UPF - Hoffmann"
                },
                {  
                    "driver":"Jack Faria Rocha",
                    "licensePlate":"LQL-4633 (RJ)",
                    "vehicleType":"Grand Siena prata",
                    "team":"TNT Express"
                },
                {  
                    "driver":"Ivan da Silveira",
                    "licensePlate":"ITU 7763",
                    "vehicleType":"Ka Preto",
                    "team":"Eq. Prytula"
                },
                {  
                    "driver":"Ingo Jost",
                    "licensePlate":"IVL 8948",
                    "vehicleType":"Polo Prata",
                    "team":"Equipe Hoffmann"
                },
                {  
                    "driver":"Huelen Mendes e André Xavier",
                    "licensePlate":"IWP 9627",
                    "vehicleType":"Peugeot 208 Branco",
                    "team":"Crediare"
                },
                {  
                    "driver":"Henrique Gonçalves Pinto",
                    "licensePlate":"IRQ 6717",
                    "vehicleType":"Air Cross",
                    "team":"TNT Express"
                },
                {  
                    "driver":"Henrique Gonçalves Pinto",
                    "licensePlate":"IRW 9582",
                    "vehicleType":"Sandeiro Preto",
                    "team":"TNT Express"
                },
                {  
                    "driver":"Gustavo Jotz",
                    "licensePlate":"ISG 4297",
                    "vehicleType":"i30 Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Guilherme Linde Hoch",
                    "licensePlate":"IVC 9521",
                    "vehicleType":"Gol G6 Preto",
                    "team":"Crediare"
                },
                {  
                    "driver":"Guilherme Hugentobler",
                    "licensePlate":"IRS 9752",
                    "vehicleType":"Fox Cinza",
                    "team":"Suporte Gestão"
                },
                {  
                    "driver":"Guilherme de Lima Bazei",
                    "licensePlate":"IZS 0006",
                    "vehicleType":"Astra Prata",
                    "team":"Suporte"
                },
                {  
                    "driver":"Gregory Miola da Silva",
                    "licensePlate":"ISU 9028",
                    "vehicleType":"Savana (variação do prata)",
                    "team":"Crediare"
                },
                {  
                    "driver":"Graciéle Cunha",
                    "licensePlate":"ISN 9629",
                    "vehicleType":"Fiesta Hatch Branco",
                    "team":"Prytula"
                },
                {  
                    "driver":"Giovani Decusati",
                    "licensePlate":"ILQ 5526",
                    "vehicleType":"Pálio Branco",
                    "team":"Nícleo"
                },
                {  
                    "driver":"Giovani Barilli",
                    "licensePlate":"IWB 7397",
                    "vehicleType":"Cruze Cinza",
                    "team":"ramal 620"
                },
                {  
                    "driver":"Gabriela Lessa",
                    "licensePlate":"IUS 2480",
                    "vehicleType":"Nissan March preto",
                    "team":"Terence"
                },
                {  
                    "driver":"Gabriel Balensiefer",
                    "licensePlate":"IQH 6498",
                    "vehicleType":"i30 Preto",
                    "team":"Lojas Colombo"
                },
                {  
                    "driver":"Fredi Dilan da Silva",
                    "licensePlate":"IOA 2201",
                    "vehicleType":"Peugeot 206 Prata.",
                    "team":"Prytula"
                },
                {  
                    "driver":"Franco Bulich Junior",
                    "licensePlate":"ITH 6369",
                    "vehicleType":"Nissan versa",
                    "team":"Equipe DLL/ Kátia"
                },
                {  
                    "driver":"Filipe Martinelli Chaves",
                    "licensePlate":"IVG 5099",
                    "vehicleType":"Punto Vermelho",
                    "team":"Unimed"
                },
                {  
                    "driver":"Fernando Spanhol",
                    "licensePlate":"ISR 4925",
                    "vehicleType":"Fiesta Sedan Preto",
                    "team":"Gerente"
                },
                {  
                    "driver":"Fernando Spanhol",
                    "licensePlate":"IVH 3896",
                    "vehicleType":"Sandero Prata",
                    "team":"Gerente"
                },
                {  
                    "driver":"Fernando Rubenich Ribeiro",
                    "licensePlate":"IWC-6260",
                    "vehicleType":"Cruze Chevrolet Branco",
                    "team":"Walmart"
                },
                {  
                    "driver":"Fernando Rafael de Lima",
                    "licensePlate":"IJA 4172",
                    "vehicleType":"Corsa Prata",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Fernando Rafael de Lima",
                    "licensePlate":"IOO 2683",
                    "vehicleType":"Montana Vermelha",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Fernando Metz",
                    "licensePlate":"IVN 2750",
                    "vehicleType":"Sandero Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Fernando Hoeser Cardoso",
                    "licensePlate":"IRK 5571",
                    "vehicleType":"Peugeout 207 preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Fernando de Siqueira Porazzi",
                    "licensePlate":"IOE-2950",
                    "vehicleType":"Celta branco",
                    "team":"Equipe Elias"
                },
                {  
                    "driver":"Fernanda ResslerFeiten",
                    "licensePlate":"IVU-4617",
                    "vehicleType":"C3 Preto",
                    "team":"AD Solutions"
                },
                {  
                    "driver":"Fernanda Nicole Oliveira",
                    "licensePlate":"IPI 3893",
                    "vehicleType":"Eco esporte prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Fernanda Lessa",
                    "licensePlate":"EFP 6897",
                    "vehicleType":"Fusion preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Fernanda Lessa",
                    "licensePlate":"IEB 9023",
                    "vehicleType":"Uno Bordo",
                    "team":"Renner"
                },
                {  
                    "driver":"Felipe Poersh",
                    "licensePlate":"IQH 3091",
                    "vehicleType":"Polo Preto",
                    "team":"DLL/ Kátia"
                },
                {  
                    "driver":"Felipe Liska Madeira",
                    "licensePlate":"ISS 7597",
                    "vehicleType":"Gol Vermelho",
                    "team":"Suporte"
                },
                {  
                    "driver":"Felipe Andre Nervo Teixeira",
                    "licensePlate":"ISY 9536",
                    "vehicleType":"Ka PRETO",
                    "team":"Credz- Margarete Ricardo/ Wildfaier"
                },
                {  
                    "driver":"Fausto Blanco",
                    "licensePlate":"IOR 1685",
                    "vehicleType":"Sandero Preto",
                    "team":"Poa"
                },
                {  
                    "driver":"Fabrício Rissetto da Silva",
                    "licensePlate":"IGX 1413",
                    "vehicleType":"Vectra Vermelho",
                    "team":"Eq. Prytula"
                },
                {  
                    "driver":"Fabrício Kirinus",
                    "licensePlate":"ISK 1751",
                    "vehicleType":"Idea Cinza",
                    "team":"Renner"
                },
                {  
                    "driver":"Fabricio Elias Risseto",
                    "licensePlate":"IWJ 4641",
                    "vehicleType":"Prisma LT Branco",
                    "team":"Prytula"
                },
                {  
                    "driver":"Fabrício dos S. Moraes",
                    "licensePlate":"IXJ&nbsp; 1313",
                    "vehicleType":"Spacefox Vermelho",
                    "team":"Suporte Web"
                },
                {  
                    "driver":"Fábio Szymanski Winck",
                    "licensePlate":"ITM 7070",
                    "vehicleType":"Peugeot 307 Preto",
                    "team":"Eq. Elias"
                },
                {  
                    "driver":"Fabio Blum Junqueira",
                    "licensePlate":"IVC 7655",
                    "vehicleType":"Corsa Branco",
                    "team":"Ad. Solutions"
                },
                {  
                    "driver":"Fabiano de Andrade",
                    "licensePlate":"IRH 2912",
                    "vehicleType":"VW Saveiro Trooper",
                    "team":"Walmart"
                },
                {  
                    "driver":"Fabiano de Andrade",
                    "licensePlate":"IRD 6282",
                    "vehicleType":"Uno Mille vermelho",
                    "team":"Walmart"
                },
                {  
                    "driver":"Fabiano da Silva Monteiro",
                    "licensePlate":"FGH 5465",
                    "vehicleType":"Fiesta Prata",
                    "team":"Eq. André Hoffmann"
                },
                {  
                    "driver":"Fabiano Correa da Silveira ",
                    "licensePlate":"IWJ 9784",
                    "vehicleType":"VW UP Vermelho",
                    "team":"WMS"
                },
                {  
                    "driver":"Ezequiel do Nascimento",
                    "licensePlate":"IRY 2064",
                    "vehicleType":"Clio Vermelho",
                    "team":"Renner"
                },
                {  
                    "driver":"Éverton Zanatta",
                    "licensePlate":"IUH 9508",
                    "vehicleType":"Fox Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Everton Yuri Porto",
                    "licensePlate":"MFC 3219",
                    "vehicleType":"Palio Branco",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Éverton Luis Confortin ",
                    "licensePlate":"IOC-3121",
                    "vehicleType":"GOL Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Everton Lemes",
                    "licensePlate":"IVJ 4950",
                    "vehicleType":"GOLF PRETO",
                    "team":"Prytula"
                },
                {  
                    "driver":"Emil Knorst",
                    "licensePlate":"ITH 8150",
                    "vehicleType":"Polo Preto",
                    "team":"Kátia"
                },
                {  
                    "driver":"Elis Biélen da Silva",
                    "licensePlate":"ISK 2312",
                    "vehicleType":"Punto Branco",
                    "team":"Suporte"
                },
                {  
                    "driver":"Elias Marcelo Exner",
                    "licensePlate":"IVK 7721",
                    "vehicleType":"Honda City",
                    "team":"Suporte"
                },
                {  
                    "driver":"Elias Marcelo Exner",
                    "licensePlate":"IWK 0247",
                    "vehicleType":"Focus Branco",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"ELIANE DA SILVA ORTIZ",
                    "licensePlate":"IOP 3871",
                    "vehicleType":"Authentique vermelho",
                    "team":"Walmart"
                },
                {  
                    "driver":"Eduardo Wermuth",
                    "licensePlate":"IRX-5121",
                    "vehicleType":"Celta Prata",
                    "team":"Finaud"
                },
                {  
                    "driver":"Eduardo Precht",
                    "licensePlate":"IVE 8655",
                    "vehicleType":"Punto Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Eduardo Pereira ",
                    "licensePlate":"IQG 2431",
                    "vehicleType":"Ka prata",
                    "team":"Prytula"
                },
                {  
                    "driver":"Eduardo Pacheco Gomes",
                    "licensePlate":"IIH 9360",
                    "vehicleType":"Palio Cinza",
                    "team":"Nucleo POA "
                },
                {  
                    "driver":"Eduardo Henrique Kasper",
                    "licensePlate":"IOM 5320",
                    "vehicleType":"Celta Branco",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Eduardo Freitas de Paula",
                    "licensePlate":"IEQ 7788",
                    "vehicleType":"Corsa Classic Prata",
                    "team":"Eq. Hoffmann"
                },
                {  
                    "driver":"Eduardo Francisco Kreisig",
                    "licensePlate":"IOO 4531",
                    "vehicleType":"Honda Civic Preto",
                    "team":"Gerente"
                },
                {  
                    "driver":"Eduardo Bokorny Adams",
                    "licensePlate":"IVZ 7115",
                    "vehicleType":"Onix Preto",
                    "team":"Walmart"
                },
                {  
                    "driver":"Edson Ricardo Friedrich",
                    "licensePlate":"NIN0264",
                    "vehicleType":"Nissan Tiida prata",
                    "team":"Sicredi/POA"
                },
                {  
                    "driver":"Edgar Guaranha Cardia",
                    "licensePlate":"IWB 1861",
                    "vehicleType":"Palio Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Ederson Philereno",
                    "licensePlate":"IPJ1865",
                    "vehicleType":"Sandero Preto",
                    "team":"Walmart"
                },
                {  
                    "driver":"Edenílson Fornazri",
                    "licensePlate":"IVT8397",
                    "vehicleType":"Cobalt prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Douglas Nunes",
                    "licensePlate":"IQR 0910",
                    "vehicleType":"Civic Prata",
                    "team":"Infra"
                },
                {  
                    "driver":"Diraci Trindade Junior",
                    "licensePlate":"IRP 6550",
                    "vehicleType":"Ka PRETO",
                    "team":"Testes CG"
                },
                {  
                    "driver":"Diogo Santinon",
                    "licensePlate":"IWF 5024",
                    "vehicleType":"City",
                    "team":"Renner"
                },
                {  
                    "driver":"Dimitri Luis Candemil",
                    "licensePlate":"IVP-8492",
                    "vehicleType":"Onix Branco",
                    "team":"Suporte Oracle"
                },
                {  
                    "driver":"Diego Weege",
                    "licensePlate":"IVT 8587",
                    "vehicleType":"Uno Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"Diego Santinon ",
                    "licensePlate":"IVM 2900",
                    "vehicleType":"HB 20",
                    "team":"Desenvolvimento "
                },
                {  
                    "driver":"Diego Medeiros Weege",
                    "licensePlate":"IOG-6100",
                    "vehicleType":"Astra Bordô",
                    "team":"Pe. Rick"
                },
                {  
                    "driver":"Diego Haggstron",
                    "licensePlate":"IVP 9371",
                    "vehicleType":"Citroen C3 Branco",
                    "team":"Unimed"
                },
                {  
                    "driver":"Diego Feldmann",
                    "licensePlate":"ITI-5636",
                    "vehicleType":"Peugeot Cinza 308",
                    "team":"Maristas - Elias"
                },
                {  
                    "driver":"Deise Elias",
                    "licensePlate":"INC 0850",
                    "vehicleType":"Celta Vermelho",
                    "team":"Sicredi"
                },
                {  
                    "driver":"David Rafael Cardoso",
                    "licensePlate":"IRL 3758",
                    "vehicleType":"Focus azul marinho",
                    "team":"Walmart"
                },
                {  
                    "driver":"Daniela Eufrasio de Araujo",
                    "licensePlate":"IWA 5472",
                    "vehicleType":"Sportage prata ",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Daniel Zimpel Wayhs",
                    "licensePlate":"IUG 7417",
                    "vehicleType":"Onix vermelho",
                    "team":"CWI POA"
                },
                {  
                    "driver":"Daniel Ribeiro Barcellos",
                    "licensePlate":"IVK 4823",
                    "vehicleType":"Fiesta Vermelho",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Daniel Ribeiro Barcellos",
                    "licensePlate":"ITV 3607",
                    "vehicleType":"Palio Prata",
                    "team":"Kátia"
                },
                {  
                    "driver":"Daniel Maycá",
                    "licensePlate":"IQW 4867",
                    "vehicleType":"Uno Preto ( novo )",
                    "team":"Poa"
                },
                {  
                    "driver":"Daniel Maycá ",
                    "licensePlate":"IWD 6192",
                    "vehicleType":"Citroen C3 Prata",
                    "team":"--"
                },
                {  
                    "driver":"Daniel Assis da Silva",
                    "licensePlate":"IPD 6786",
                    "vehicleType":"Uno Cinza",
                    "team":"Crediare"
                },
                {  
                    "driver":"Cristina Derenji ",
                    "licensePlate":"IDS 5391 ",
                    "vehicleType":"Fusca Vermelho",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Cristina Derenji ",
                    "licensePlate":"IFH 9566",
                    "vehicleType":"Fusca amarelo",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Cristiano Silva Neves",
                    "licensePlate":"IQP 2333",
                    "vehicleType":"C3 - preto",
                    "team":"Equipe-Katia"
                },
                {  
                    "driver":"Cleidi silva",
                    "licensePlate":"ITR 5323",
                    "vehicleType":"Fiesta Rocan Branco",
                    "team":"Renner"
                },
                {  
                    "driver":"Claudio Arno Frohlich Junior",
                    "licensePlate":"ISL8666 ",
                    "vehicleType":"Gol G5 Vermelho ",
                    "team":"Walmart"
                },
                {  
                    "driver":"Claudia Botega",
                    "licensePlate":"IWN 6246",
                    "vehicleType":"Logan Branco",
                    "team":"CWI POA"
                },
                {  
                    "driver":"Cíntia Silva Mayer Rodrigues",
                    "licensePlate":"IRS 9412",
                    "vehicleType":"Clio vermelho",
                    "team":"Kátia"
                },
                {  
                    "driver":"Cheferson Washington Lovatto",
                    "licensePlate":"IWN 2549",
                    "vehicleType":"NEW FIESTA HATCH BRANCO",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"César- Zelador",
                    "licensePlate":"IKE 5954",
                    "vehicleType":"GOL Branco",
                    "team":"Adm"
                },
                {  
                    "driver":"César Jacó Habitzreuter",
                    "licensePlate":"EZI 4023",
                    "vehicleType":"Fluence prata",
                    "team":"Diretor"
                },
                {  
                    "driver":"César Augusto",
                    "licensePlate":"IVO 3842",
                    "vehicleType":"HB 20 Prata",
                    "team":"CIEE - Suporte"
                },
                {  
                    "driver":"Cassiano das Neves",
                    "licensePlate":"IVD 7382",
                    "vehicleType":"Space Fox Branco",
                    "team":"Coca-Cola - Jonas Flash"
                },
                {  
                    "driver":"Carolina Hoffmann",
                    "licensePlate":"IND-0744",
                    "vehicleType":"Celta Vermelho",
                    "team":"Crediare"
                },
                {  
                    "driver":"Carlos Reinheimer",
                    "licensePlate":"IVQ 9207",
                    "vehicleType":"volkswagen up Branco",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Carlos Nonnemacher",
                    "licensePlate":"IUX 5244",
                    "vehicleType":"Duster Verde",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Carlos Alberto Filho",
                    "licensePlate":"JBW 8889",
                    "vehicleType":"Focus Prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Candida Cristina Konrad",
                    "licensePlate":"HLH 2467",
                    "vehicleType":"Sandero Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Camila Capellão",
                    "licensePlate":"IWA7933",
                    "vehicleType":"Cobalt prata",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Bruno Zambiazi",
                    "licensePlate":"ISC9594",
                    "vehicleType":"Agile Prata",
                    "team":"TNT Express"
                },
                {  
                    "driver":"Bruno Vier Hoffmeister",
                    "licensePlate":"IVP 6640",
                    "vehicleType":"Peugeot 208 Branco",
                    "team":"Nucleo"
                },
                {  
                    "driver":"Bruno Nunes Trassante",
                    "licensePlate":"IPK 3071",
                    "vehicleType":"Fiesta preto",
                    "team":"CG"
                },
                {  
                    "driver":"Bruno Murawski",
                    "licensePlate":"INR 8908",
                    "vehicleType":"Fiesta Preto",
                    "team":"NPC"
                },
                {  
                    "driver":"Bruno Medeiros",
                    "licensePlate":"IRB 1346",
                    "vehicleType":"C4 PallasCinza",
                    "team":"DLL/ Kátia"
                },
                {  
                    "driver":"Bruno Jorge dos Santos Luz",
                    "licensePlate":"HBL 6439",
                    "vehicleType":"Uno Cinza",
                    "team":"Renner"
                },
                {  
                    "driver":"Bernardo Bosak",
                    "licensePlate":"IRQ 5935",
                    "vehicleType":"I30 Preto",
                    "team":"Crescer POA - Apoio"
                },
                {  
                    "driver":"Bellotti",
                    "licensePlate":"IWK 2979 ",
                    "vehicleType":"City prata",
                    "team":"Diretor"
                },
                {  
                    "driver":"ARTHUR VICTORIA SILVA",
                    "licensePlate":"IPM6864",
                    "vehicleType":"SANDERO ",
                    "team":"RENNER "
                },
                {  
                    "driver":"Ariovaldo Jr.",
                    "licensePlate":"IVJ 4099",
                    "vehicleType":"Chery Tiggo Preta",
                    "team":"DLL/ Kátia"
                },
                {  
                    "driver":"Ariel Dornelles",
                    "licensePlate":"IOV 8850",
                    "vehicleType":"Peugeot 206 preto",
                    "team":"Prytula"
                },
                {  
                    "driver":"ARI Oyarzabal",
                    "licensePlate":"IVF 3770",
                    "vehicleType":"Clio Prata",
                    "team":"Walmart"
                },
                {  
                    "driver":"Ari Oyarzabal",
                    "licensePlate":"IVF 3770",
                    "vehicleType":"Clio prata",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Ari Cristhian Pinheiro Oyarzabal",
                    "licensePlate":"IRF 0855",
                    "vehicleType":"i30 Preto",
                    "team":"-"
                },
                {  
                    "driver":"Aquiles Boff da Silva",
                    "licensePlate":"IPP 7718",
                    "vehicleType":"Fiesta Cinza",
                    "team":"Colombo / Kátia"
                },
                {  
                    "driver":"Antonio Augusto Andre Silveira",
                    "licensePlate":"IPV 5300",
                    "vehicleType":"Sandero Preto",
                    "team":"Suporte- Elias"
                },
                {  
                    "driver":"Anne C. Rocha da Fontoura",
                    "licensePlate":"ILA 4011 ",
                    "vehicleType":"Palio",
                    "team":"Renner"
                },
                {  
                    "driver":"Andrei Martins",
                    "licensePlate":"ISQ 6423",
                    "vehicleType":"Focus Preto",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Andrei Beschoren de Oliveira",
                    "licensePlate":"ITM 0141",
                    "vehicleType":"Duster Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"André Xavier",
                    "licensePlate":"IUI 3438",
                    "vehicleType":"Peugeot 208",
                    "team":"DLL Kátia"
                },
                {  
                    "driver":"André Vinicius Alves",
                    "licensePlate":"IUX 3928",
                    "vehicleType":"March Nissan cinza",
                    "team":"Unimed Poa"
                },
                {  
                    "driver":"André Nunes",
                    "licensePlate":"IWI 7268",
                    "vehicleType":"Peugeot 207 prata",
                    "team":"--"
                },
                {  
                    "driver":"André Moeller",
                    "licensePlate":"IQO 6335",
                    "vehicleType":"Punto verde",
                    "team":"Betiati"
                },
                {  
                    "driver":"André Mayer",
                    "licensePlate":"IVE 8710",
                    "vehicleType":"Sandero Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"André Luiz Zahn de Matos",
                    "licensePlate":"IQR6047",
                    "vehicleType":"Sandero Preto",
                    "team":"Renner"
                },
                {  
                    "driver":"André Luís Nunes",
                    "licensePlate":"IRR 6128",
                    "vehicleType":"Peugeot 307 Vermelho",
                    "team":"Núcleo de Tecnologia"
                },
                {  
                    "driver":"André Hoffmann",
                    "licensePlate":"IVE 6652",
                    "vehicleType":"Peugeot 408 Preto",
                    "team":"Gerente"
                },
                {  
                    "driver":"Anderson Ritter de Souza",
                    "licensePlate":"IJT3427",
                    "vehicleType":"Celta Prata",
                    "team":"DLL Kátia"
                },
                {  
                    "driver":"Ana Contti",
                    "licensePlate":"IQT 0435",
                    "vehicleType":"GOL Branco",
                    "team":"Badesul- Hoffmann"
                },
                {  
                    "driver":"Álvaro Piccinin",
                    "licensePlate":"IPY 8780",
                    "vehicleType":"Fox Prata",
                    "team":"Unimed 2º piso"
                },
                {  
                    "driver":"Altamir Junior Dias",
                    "licensePlate":"ILP 0564",
                    "vehicleType":"Celta Branco",
                    "team":"Ad. Solutions"
                },
                {  
                    "driver":"Altamir Junior Dias",
                    "licensePlate":"ITW 2458",
                    "vehicleType":"Celta Prata",
                    "team":"Prytula"
                },
                {  
                    "driver":"Alisson Wagner Rodrigues",
                    "licensePlate":"IWK 9541",
                    "vehicleType":"Clio Branco",
                    "team":"Colombo"
                },
                {  
                    "driver":"Aline Kutti",
                    "licensePlate":"IKG 6254",
                    "vehicleType":"Palio Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Alexandre Uczak",
                    "licensePlate":"IKY 6358",
                    "vehicleType":"Peugeot 206 Prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Alexandre Tomazini",
                    "licensePlate":"HEE 2043",
                    "vehicleType":"Tucson Preta",
                    "team":"Prytula"
                },
                {  
                    "driver":"Alexandre Silveira",
                    "licensePlate":"IPP 8385",
                    "vehicleType":"Focus Dourado",
                    "team":"Renner"
                },
                {  
                    "driver":"Alexandre Palagem",
                    "licensePlate":"ISN 5381",
                    "vehicleType":"Corsa Prata",
                    "team":"Unimed"
                },
                {  
                    "driver":"Alexandre Dal Zotto",
                    "licensePlate":"IVJ 0508",
                    "vehicleType":"HB 20 Vermelhor",
                    "team":"Renner"
                },
                {  
                    "driver":"Alexandre Dal Zotto",
                    "licensePlate":"IPS 7676",
                    "vehicleType":"Peugeot 206 Prata.",
                    "team":"Renner"
                },
                {  
                    "driver":"Alexandre Azambuja",
                    "licensePlate":"ISB 9579",
                    "vehicleType":"Corsa prata",
                    "team":"Renner"
                },
                {  
                    "driver":"Alencar W. Teixeira",
                    "licensePlate":"IRA 3529",
                    "vehicleType":"Corsa Hatch Vermelho",
                    "team":"Sicredi"
                },
                {  
                    "driver":"Adrisson Fagner da Silva",
                    "licensePlate":"IKC 1678",
                    "vehicleType":"GOL Cinza grafite",
                    "team":"Sicredi/Kátia"
                },
                {  
                    "driver":"AdaltoAfonso Wagner",
                    "licensePlate":"ISW2869",
                    "vehicleType":"Chery Tiggo Preta",
                    "team":"POA"
                },
                {  
                    "driver":"Adalto Afonso Wagner",
                    "licensePlate":"ISH-9659",
                    "vehicleType":"Chery QQ Branco",
                    "team":"Gerente de outsourcing"
                }
            ]; 
            
            return vehicles;
        }
    });