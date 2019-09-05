# Tentin Twitch Arvonta Botti
>Luoja: TenDRILLL 2019, Ten#0010

## Tietoja
Botti on kirjoitettu _Javascript_ -koodikielellä, hyötykäyttäen Node runtime-ympäristöä.
<br>Botin pääasiallinen tehtävä on valita satunnainen voittaja arvontaan osallistuneista.
<br>Toimiakseen botti tarvitsee seuraavia pakkauksia:

- twitch-bot
- enmap
    - better-sqlite-pool
    
Lisää aiheesta kohdassa Asennus.

#### Osallistujat
>TenDRILLL - Botin kehittäjä.

## Toiminnot
Botti tällä hetkellä tukee vain arvontojen pitämistä siten,
<br>että käyttäjät ilmoittavat osallistumisensa komennolla,
<br>ja botti valitsee osallistuneista satunnaisen käyttäjän.

Komennot:
<br><br>%moi
> Tällä komennolla ei ole muuta virkaa, kuin toimia testikomentona.

%arvonta
> Komentoa käytetään hallinnoimaan arvontaa.
<br>Mikäli argumentteja ei anneta, komento aloittaa uuden arvonnan.
<br><br>Komennosta löytyvät seuraavat alikomennot:
>
> * **arvo** => Valitsee osallistuneista satunnaisen voittajan, sekä tyhjentää osallistuineiden listan.
> * **lopeta** => Lopettaa käynnissä olevan arvonnan, sekä tyhjentää osallistuneiden listan.
> * **debug** => Näyttää tällä hetkellä arvontaan osallistuneiden käyttäjänimet.

%o
> Tällä komennolla käyttäjät osallistuvat arvontaan.
<br>HUOM! Ennen komennon käyttämistä arvonnan tulee olla käynnissä.

## Asennus

- 1: Lataa [Node](https://nodejs.org/en/)

- 2: Lataa tämä projekti.
>    - Omalle koneelle, tai palvelimelle. Muista tallennussijanti.
- 3: Asenna tarvittavat paketit.
>    - Asentaminen tapahtuu ``npm i paketin_nimi_tähän`` komentoa käyttämällä.
>        - Komentoa käytetään komentosarjakehoitteessa (cmd), tallennussijainnissa.
>    - Tarvittavia paketteja ovat: ``twitch-bot, enmap, better-sqlite-pool``
- 4: Aseta Botin arvot.
> - Main.js tiedostossa, sinun tulee määrittää seuraavat rivit:
>   - const botusername = "nimi";
>       - Laita tähän botin käyttäjänimi, botilla oltava siis käyttäjä Twitchissä.
>   - const secretKey = "oauth:avain";
>       - Tähän tulee botin oauth avain.<br>Voit generoida sellaisen [tästä](https://twitchapps.com/tmi/).
>   - const botadmins = ["nimi"];
>       - Tässä määrität kuka saa käyttää botin Admin komentoja.
>   - const prefix = "%";
>       - Tässä pääset laittamaan botille haluamasi prefixin<br>(etuliitteen, joka viestissä on oltava jotta botti huomioi sen.)
- 5: Käynnistä Botti.
> - Käynnistäminen tapahtuu käyttämällä komentoa ``node Main.js``.
>   - Tätäkin komentoa käytetään komentosarjakehoitteessa (cmd).  

## Lisenssi
TenDRILLL 2019
<br>05.09.2019

Tämä kohta tarkentaa käyttäjälle mitä koodilla saa, ja mitä ei saa tehdä.

TenDRILLL varaa kaikki oikeudet evätä kohdassa mainitut etuudet, mikäli ehtoja ei noudateta.
<br><br>
##### Määritelmät
TenDRILLL: TenDRILLL/Ten#0010, Botin alkuperäinen koodaaja.
<br>Botti: Tämä projekti.
<br><br>
##### Ennen lataamista
Lataamalla Botin, sitoudut automattisesti noudattamaan näitä ehtoja.
<br>Mikäli nämä ehdot eivät sovi teille, voitte perua sitoutumisenne poistamalla kaikki projektin kopiot.
<br>Sinun TULEE lisätä tämä kohta oman muunnelmasi mukana, ilman muutoksia.
<br><br>
#####Ehdot
(Mitä saat tehdä, ja mitä et.)
<br>Sinulla on oikeus:
* Käyttää Bottia omalla kanavallasi
* Käyttää Bottia kanavilla, joihin olet saanut luvan käyttää sitä.
* Käyttää Botin koodia osana eri projektia, tai eri nimellä.
* Muokata Botin lähdekoodia. 

<br> Kehittäjä kannustaa käyttäjää tekemään "Pull requesteja" muutoksilla,
<br>joita käyttäjä mahdollisesti tahtoisi Bottiin tulevan.
<br><br>

##### Tiivistelmä
Liitä nämä ehdot mukaan, mikäli teet Botista oman versiosi.
<br>Paranna koodia, tai tee ehdotuksia "Pull Requesteilla",
<br>niin pääset Osallistujat kohtaan :)

-TenDRILLL
