const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "Basketball":[
            
                {
                  "nome": "Nike Kobe 6 Protro Grinch (2020)",
                  "descrizione": "Le Nike Kobe 6 Protro 'Grinch' sono una versione aggiornata e rinnovata delle iconiche scarpe da basket Nike Kobe 6, originariamente rilasciate nel 2010. Il termine 'Protro' è una combinazione di 'Performance' e 'Retro', indicando che la scarpa mantiene il design classico ma è migliorata con le più recenti tecnologie e materiali per le prestazioni sportive. La colorazione 'Grinch' è ispirata al personaggio del Grinch, con una combinazione di verde e rosso vibrante che richiama lo spirito natalizio. La tomaia della scarpa è realizzata con materiali di alta qualità, offrendo comfort e supporto ottimali durante l'attività sportiva. La suola è progettata con tecnologie avanzate per migliorare l'aderenza e la reattività sul campo da basket.",
                  "immagine": "https://droper-media.us-southeast-1.linodeobjects.com/2712023191545256.webp"
                },
                {
                  "nome": "Puma LaMelo Ball MB.01 Golden Child",
                  "descrizione": "La MB.01, prima scarpa di LaMelo Ball, presenta dettagli Not From Here firmati da Melo, come le inconfondibili ali e il motto '1 of 1'. La suola galattica e la tecnologia spaziale PUMA Hoops, inclusa la schiuma NITRO™, donano al tuo look uno stile interplanetario. La tomaia è decorata con fiamme di un’astronave che escono dal collo, richiamo al tatuaggio di Melo sulla gamba che raffigura una navicella spaziale.",
                  "immagine": "https://sneakernews.com/wp-content/uploads/2023/11/puma-mb-01-golden-child-379223-01-release-date-2.jpg"
                },
                {
                  "nome": "Nike LeBron 20 All-Star",
                  "descrizione": "Le Nike LeBron 20 All-Star Game del 2023 celebrano sia la ventesima stagione di LeBron James nell'NBA che la sua ventesima partecipazione all'All-Star Game. La selezione all'All-Star Game del 2023 ha segnato il record di LeBron James per il maggior numero di selezioni all'NBA All-Star. Il modello Nike LeBron 20 ASG presenta una tomaia in maglia Blue Lightning e Coconut Milk con doppio Swoosh inverso sul retro della sneaker. Le sneakers in edizione limitata hanno lacci dorati e riportano il messaggio 'Legacy Preserved' con il logo di LBJ stampato sulla linguetta. Le Nike LeBron 20 All-Star sono uscite il 16 febbraio del 2023.",
                  "immagine": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F01%2Fnike-lebron-20-all-star-DV1191-400-release-info-002.jpg?cbr=1&q=90"
                },
                {
                  "nome": "Nike Kyrie 5 Spongebob Pineapple House",
                  "descrizione": "Le Nike Kyrie 5 SpongeBob Pineapple House sono una versione specializzata delle scarpe da basket Kyrie 5, progettate in collaborazione con Nickelodeon per celebrare il personaggio di SpongeBob SquarePants. Queste scarpe presentano un design vivace e colorato ispirato alla casa di SpongeBob, la 'Pineapple House' (Casa dell'Ananas). La tomaia è caratterizzata da dettagli gialli e marroni, che richiamano il tema dell'ananas, mentre la suola presenta un motivo che ricorda la forma della casa di SpongeBob. Questa edizione limitata combina lo stile distintivo delle Kyrie 5 con l'umorismo e l'immaginario di SpongeBob SquarePants, rendendole uniche e apprezzate sia dagli appassionati di basket che dai fan del personaggio animato.",
                  "immagine": "https://sneakerbardetroit.com/wp-content/uploads/2019/09/SpongeBob-Nike-Kyrie-5-Pineapple-House-CJ6951-800-Release-Date-4.jpg"
                },
                {
                  "nome": "Nike Kobe NXT 360 Yellow Strike",
                  "descrizione": "La linea Nike Kobe NXT 360 è nota per l'utilizzo di materiali leggeri e traspiranti nella tomaia, spesso realizzata con la tecnologia Flyknit. La suola è progettata per offrire un'ottima trazione e supporto, essenziali per il gioco del basket. La tecnologia NXT 360 di solito si riferisce all'approccio all'intersuola e alla suola, mirando a fornire una combinazione di ammortizzazione reattiva e flessibilità.",
                  "immagine": "https://sneakerbardetroit.com/wp-content/uploads/2018/04/Nike-Kobe-AD-NXT-360-Yellow-Strike-Lakers-AQ1087-700-Release-Date.jpg"
                },
                {
                  "nome": "Nike KD 16 NRG Aunt Pearl",
                  "descrizione": "Kevin Durant è un vero canestro. Sarebbe altrettanto felice di correre a rimorchio per tutto il pomeriggio così come di perdere 40 pezzi nei playoff. Quando il tuo avido appetito per il gioco non può essere soddisfatto, allaccia le KD16. Nike Air e Zoom Air lavorano insieme per fornire velocità e stabilità per tutti e quattro i quarti, mentre la tomaia è più bassa e il carico complessivo è più leggero rispetto all'iterazione precedente. È l'ideale per gli hoopaholic che non possono dire di no anche solo a un altro gioco. Questo speciale design tutto rosa rende omaggio alla zia di KD, morta di cancro ai polmoni nel 2000, ma ispira tutti noi a continuare a lottare per trovare una cura.",
                  "immagine": "https://www.kicksonfire.com/wp-content/uploads/2023/09/nike-kd-16-aunt-pearl-10.jpeg?x58464"
                }
              ],
         "Streetwear":[
                {
                  "nome": "Jordan 5 Retro Off-White Muslin",
                  "descrizione": "Virgil Abloh aggiunge una seconda mostrina alla sua collezione in collaborazione con Nike: le Jordan 5 Retro High Off-White Black, ora disponibili su StockX. Questa release rende omaggio alle prime Jordan di Virgil: le Air Jordan 5 Black Metallic. In piena linea con il suo inconfondibile stile, Virgil ha reinventato questa silhouette classica per abbracciare ed esaltare la tecnologia Nike Air.",
                  "immagine": "https://www.unitystore.it/wp-content/uploads/2022/10/Air-Jordan-5-Retro-Off-White-Black-Muslin-Virgil-Abloh-Luxury-Collab-Negozio-Resell-Reggio-Emilia-Unity-Store-Laterali.jpg"
                },
                {
                  "nome": "Jordan 4 Retro bianco avorio Off-White",
                  "descrizione": "Jordan e Virgil Abloh tornano alla carica con la terza sneakers della loro collab: le Jordan 4 Retro Off-White Sail (W) sono ora disponibili su StockX. Dopo i tanti teaser per il lancio delle Off-White 4 con piccoli assaggi nella mostra MCA seguiti dal debutto nella passerella Off-White FW2020, Virgil Abloh propone finalmente quella che si pensa essere la versione più attesa del 2020.",
                  "immagine": "https://shatastore.com/cdn/shop/products/sail-off-white-air-jordan-4-cv9388-100-release-date-1-1-outpump_1445x.jpg?v=1676309151"
                },
                {
                  "nome": "Nike SB Dunk Low Freddy Krueger",
                  "descrizione": "La Nike SB Dunk Low \"Freddy Krueger\" è una sneaker ispirata al personaggio iconico dei film horror \"Nightmare on Elm Street\". Questa scarpa fa parte della collezione Nike SB Dunk, con una tomaia che richiama il tema del famoso assassino nei sogni. La tomaia presenta un mix di materiali, tra cui pelle scamosciata e tessuto, con colori ispirati alla divisa strappata di Freddy Krueger, come il marrone scuro e il rosso. La suola è spesso progettata con dettagli che richiamano l'estetica dell'orribile personaggio cinematografico. Rilasciata in edizione limitata, questa sneaker è diventata molto ricercata tra gli appassionati di calzature e apprezzata per la sua unicità e il collegamento con la cultura popolare.",
                  "immagine": "https://www.outpump.com/wp-content/uploads/2021/10/nike-freddy-krueger-outpump6.jpg"
                },
                {
                  "nome": "Jordan 1 Retro High Union Los Angeles Black Toe",
                  "descrizione": "Le Jordan 1 Retro High Union Los Angeles Black Toe sono una versione particolare delle iconiche scarpe da basket Air Jordan 1. Realizzate in collaborazione con Union Los Angeles, un noto negozio di abbigliamento streetwear, queste sneaker presentano un design distintivo che combina elementi delle colorway \"Black Toe\" e \"Storm Blue\" delle Jordan 1. La tomaia è realizzata in pelle di alta qualità con sovrapposizioni di colore nero, bianco e blu, creando un contrasto accattivante. Un dettaglio unico è la cucitura esposta sul pannelo laterale, che conferisce un tocco artigianale al design. Queste sneaker sono diventate molto ricercate per il loro stile distintivo e la loro connessione con il mondo della moda streetwear.",
                  "immagine": "https://www.retrostoreroma.com/data/images/galleries/490/air-jordan-1-retro-high-union-los-angeles-black-toe-2.png"
                },
                {
                  "nome": "Nike Air Force 1 Low Travis Scott",
                  "descrizione": "Le Nike Air Force 1 Low Travis Scott sono una collaborazione tra il famoso rapper e designer di moda Travis Scott e il marchio di abbigliamento sportivo Nike. Questa edizione speciale delle iconiche Nike Air Force 1 Low presenta dettagli unici e elementi distintivi che riflettono lo stile distintivo di Travis Scott. Queste scarpe sono diventate molto ambite dai collezionisti e dagli appassionati di sneakers, grazie al loro design distintivo e alla limitata disponibilità.",
                  "immagine": "https://d2j6dbq0eux0bg.cloudfront.net/images/64089002/2443918928.jpg"
                },
                {
                  "nome": "Nike SB Dunk Low Supreme Rammellzee",
                  "descrizione": "Supreme ha collaborato di nuovo con Nike per un'altra ambitissima SB Dunk Low. Le Nike SB Dunk Low Supreme Rammellzee sono uscite il 31 agosto del 2023. Le sneakers sono andate rapidamente esaurite nelle sedi Supreme di tutto il mondo. Queste esclusive SB Dunk Low presentano l'arte del compianto Rammellzee, che ha collaborato con Supreme numerose volte nel corso degli anni, anche nel 2003. L'artista newyorkese presta il suo stile iconico alla tomaia di questa sneakers in edizione limitata, che mostra i suoi motivi unici in stile graffiti.",
                  "immagine": "https://thesortage.com/cdn/shop/files/IMG_6302.jpg?v=1695391748&width=1946"
                }
              
              
              
         ]
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});