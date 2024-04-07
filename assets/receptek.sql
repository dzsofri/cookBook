-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 25. 13:01
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `cookbook`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `receptek`
--

CREATE TABLE `receptek` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `recipe` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `type1` varchar(10) COLLATE utf8_hungarian_ci NOT NULL,
  `type2` varchar(10) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `receptek`
--


-- Reggeli receptek

INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(1, 0, 'Omlett', 'Hozzávalók: 3 tojás, 2 evőkanál tej, só, bors ízlés szerint, 1 evőkanál vaj vagy olaj, ízlés szerinti feltétek (pl. sajt, sonka, zöldségek). A tojásokat felverjük egy tálban, hozzáadjuk a tejet, sózzuk, borsozzuk. Egy serpenyőben felmelegítjük a vajat vagy olajat, majd beleöntjük a tojáskeveréket. Lassú tűzön, folyamatosan kevergetve sütjük, amíg össze nem áll, de még fényes marad. Közben hozzáadhatjuk az ízlés szerinti feltéteket is. Tálalhatjuk friss zöldségekkel vagy pirítóssal.', 1, 0),
(2, 0, 'Gyümölcsös zabkása', 'Hozzávalók: 1 csésze zabpehely, 2 csésze tej vagy növényi tej, 1 banán, 1 alma, 1 marék bogyós gyümölcs (pl. áfonya, málna), méz vagy juharszirup ízlés szerint. A zabpelyhet és a tejet egy lábasba tesszük, és alacsony hőmérsékleten főzzük, gyakran kevergetve, amíg besűrűsödik. Közben a banánt és az almát felkockázzuk, majd hozzáadjuk a zabkásához, és tovább főzzük, amíg a gyümölcsök megpuhulnak. Végül hozzákeverjük a bogyós gyümölcsöket, és mézzel vagy juharsziruppal ízesítjük.', 1, 0),
(3, 0, 'Avokádós pirítós', 'Hozzávalók: 2 szelet teljes kiőrlésű pirítós kenyér, 1 érett avokádó, só, bors, 1 gerezd fokhagyma (opcionális), citromlé. A pirítóst megpirítjuk. Az avokádót felvágjuk, kimagozzuk, majd a húsát kanállal kikaparjuk egy tálba. Villával összetörjük, és ízlés szerint sóval, borssal, és opcionálisan összetört fokhagymával ízesítjük. A pirítósra kenjük az avokádókrémet, és meglocsoljuk néhány csepp citromlével. Tálalhatjuk paradicsommal vagy tojással is.', 1, 0),
(4, 0, 'Túrós palacsinta', 'Hozzávalók: 2 tojás, 1 csésze túró, 1 evőkanál liszt, 1 evőkanál cukor, 1 csipet só, 1 csomag vaníliás cukor, olaj a sütéshez. A tojásokat felverjük egy tálban, majd hozzáadjuk a túrót, lisztet, cukrot, sót, vaníliás cukrot, és alaposan összekeverjük. Egy serpenyőben kevés olajat felhevítünk, majd merőkanállal adagoljuk bele a palacsintatésztát. Mindkét oldalát aranybarnára sütjük. Tálalhatjuk porcukorral, lekvárral vagy friss gyümölccsel.', 1, 0),
(5, 0, 'Pisztáciavaj', 'Hozzávalók: 20 dkg pisztácia, egy evőkanál porcukor, egy csipetnyi só, és három evőkanál olaj. A hámozott pisztáciát egy késes aprítóba tesszük. Hozzáadunk egy evőkanál porcukrot és egy csipet sót, aztán finomra daráljuk. Ezután beleöntünk három evőkanál növényi olajat, és tovább dolgoztatjuk a gépet, amíg el nem érjük a kívánt állagot. A házi pisztáciavaj lehet darabos, de akár tökéletesen selymes is. Minél tovább dolgozik a gép, annál homogénebb lesz az állag.', '1', '0'),
(6, 0, 'Tojásrántotta', 'Hozzávalók: 3 tojás, 1 evőkanál tej, só, bors ízlés szerint, 1 evőkanál vaj vagy olaj. A tojásokat felverjük egy tálban, hozzáadjuk a tejet, sózzuk, borsozzuk. Egy serpenyőben felolvasztjuk a vajat vagy melegítjük az olajat, majd hozzáadjuk a tojáskeveréket. Lassú tűzön, folyamatosan kevergetve, addig sütjük, amíg össze nem áll. Tálalhatjuk zöldségekkel, pirítóssal vagy akár egy kis sonkával is.', 1, 0);

-- Előétel receptek

INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(7, 0, 'Gazpacho', 'Hozzávalók: 6 db paradicsom, 1 db uborka, 1 db paprika, 1 gerezd fokhagyma, 2 evőkanál olívaolaj, 1 evőkanál vörösborecet, só, bors, friss petrezselyem vagy bazsalikom ízlés szerint. A paradicsomot, uborkát, és paprikát megtisztítjuk, majd felkockázzuk. Egy turmixgépbe tesszük a felkockázott zöldségeket, hozzáadjuk a fokhagymát, olívaolajat, vörösborecetet, sót, borsot, és turmixoljuk simára. Ha túl sűrűnek találjuk, hígíthatjuk egy kevés hideg vízzel. Frissen vágott petrezselyemmel vagy bazsalikommal díszíthetjük.', 2, 1),
(8, 0, 'Caprese saláta', 'Hozzávalók: 3 db paradicsom, 1 labneh sajt, friss bazsalikom levelek, olívaolaj, balzsamecet, só, frissen őrölt fekete bors. A paradicsomot és a sajtot vékony szeletekre vágjuk. Egy tálba rétegezzük a paradicsom- és sajtszeleteket. Minden réteget megszórunk friss bazsalikomlevéllel. A tetejét meglocsoljuk olívaolajjal és balzsamecettel, majd sózzuk és borsozzuk ízlés szerint.', 2, 1),
(9, 0, 'Csiperke gombafejek baconbe tekerve', 'Hozzávalók: 12 db csiperke gombafej, 6 szelet bacon, só, frissen őrölt fekete bors. A csiperke gombafejeket megtisztítjuk, majd félbevágjuk. A bacon szeleteket félbevágjuk, és mindegyik szeletbe belecsomagoljuk a gombafejeket. Egy sütőpapírral bélelt tepsire tesszük a csomagolt gombafejeket. Sózzuk és borsozzuk őket, majd előmelegített sütőben 180 fokon kb. 15-20 percig sütjük, amíg a bacon megpirul és a gombák megpuhulnak.', 2, 1),
(10, 0, 'Gesztenyekrémleves', 'Hozzávalók: 40 dkg gesztenyepüré, 1 liter zöldségalaplé, 1 dl tejszín, 1 db hagyma, 2 gerezd fokhagyma, 1 evőkanál vaj, só, bors, friss petrezselyem. A hagymát és fokhagymát apróra vágjuk, majd kevés vajon üvegesre pároljuk. Hozzáadjuk a gesztenyepürét, és felöntjük zöldségalaplével. Felforraljuk, majd alacsony hőfokon 20-25 percig főzzük. Botmixerrel pépesítjük a levest, majd hozzáadjuk a tejszínt. Ízlés szerint sózzuk, borsozzuk. Friss petrezselyemmel megszórva tálaljuk.', 2, 1),
(11, 0, 'Aszalt paradicsomos crostini', 'Hozzávalók: 1 bagett, 150 g aszalt paradicsom olajban, 100 g mascarpone, friss bazsalikom levelek, só, frissen őrölt fekete bors. A bagettet vékony szeletekre vágjuk, majd egy sütőben vagy grillen megpirítjuk. Az aszalt paradicsomot leszűrjük az olajából, majd a bagett szeletekre helyezzük. Mindegyikre egy kevés mascarpone-t teszünk, majd friss bazsalikom levéllel díszítjük. Sózzuk és borsozzuk ízlés szerint.', 2, 1),
(12, 0, 'Csirkesaláta görög joghurttal', 'Hozzávalók: 2 db csirkemellfilé, 1 db uborka, 1 db paradicsom, 1 db paprika, 1 db lilahagyma, 1 gerezd fokhagyma, 1 csokor friss koriander vagy petrezselyem, 1 csésze görög joghurt, só, bors, citromlé. A csirkemellfiléket sózzuk, borsozzuk, majd grillen vagy serpenyőben aranybarnára sütjük. Miután kihűlt, felkockázzuk. Az uborkát, paradicsomot, paprikát, lilahagymát felkockázzuk, és egy tálba tesszük. Hozzáadjuk a felkockázott csirkemellet. A fokhagymát apróra vágjuk, és a görög joghurthoz keverjük. Ezt az öntetet ráöntjük a salátára. Friss korianderrel vagy petrezselyemmel díszítjük, majd citromlével meglocsoljuk.', 2, 1);

-- Főétel receptek

INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(13, 0, 'Pörkölt marharaguval', 'Hozzávalók: 50 dkg marharagu, 2 db vöröshagyma, 2 gerezd fokhagyma, 2 db paradicsom, 2 db paprika, 2 evőkanál pirospaprika, 1 teáskanál őrölt kömény, só, bors, olaj, víz. A húst megmossuk, kockákra vágjuk. A vöröshagymát és fokhagymát apróra vágjuk, majd kevés olajon üvegesre pirítjuk. Hozzáadjuk a húst, és mindkét oldalát megpirítjuk. Beletesszük a kockákra vágott paradicsomot, paprikát, és fűszerezzük pirospaprikával, őrölt köménnyel, sóval, borssal. Felöntjük vízzel, majd lefedve puhára pároljuk.', 2, 2),
(14, 0, 'Rakott cukkini', 'Hozzávalók: 3 db közepes méretű cukkini, 25 dkg darált hús (sertés és marha keveréke), 1 db vöröshagyma, 2 gerezd fokhagyma, 2 db paradicsom, 10 dkg reszelt sajt, só, bors, olaj. A cukkinit megmossuk, majd hosszában vékony szeletekre vágjuk. A vöröshagymát és fokhagymát apróra vágjuk, majd kevés olajon üvegesre pirítjuk. Hozzáadjuk a darált húst, és addig pirítjuk, amíg ki nem pirul. Beletesszük a kockára vágott paradicsomot, sózzuk, borsozzuk, majd lefedve főzzük, amíg a paradicsom összeesik. Egy tűzálló tálat kivajazunk, majd rétegezünk bele cukkinit, húsos-paradicsomos keveréket, majd reszelt sajtot. Ismételjük meg a rétegezést, majd a tetejét reszelt sajttal borítjuk. Előmelegített sütőben 180 fokon kb. 30 percig sütjük, amíg a teteje aranybarnára sül.', 2, 2),
(15, 0, 'Lasagne bolognese', 'Hozzávalók: 20 dkg lasagne tészta, 25 dkg darált marhahús, 1 db vöröshagyma, 2 gerezd fokhagyma, 2 db paradicsom, 2 evőkanál paradicsompüré, 2 dl tejszín, 10 dkg reszelt sajt, só, bors, olaj. A vöröshagymát és fokhagymát apróra vágjuk, majd kevés olajon üvegesre pirítjuk. Hozzáadjuk a darált húst, és addig pirítjuk, amíg ki nem pirul. Beletesszük a kockára vágott paradicsomot, paradicsompürét, sózzuk, borsozzuk, majd lefedve főzzük, amíg a paradicsom összeesik. Egy tűzálló tálat kivajazunk, majd rétegezünk bele lasagne tésztát, húsos-paradicsomos keveréket, tejszínt, majd reszelt sajtot. Ismételjük meg a rétegezést, majd a tetejét reszelt sajttal borítjuk. Előmelegített sütőben 180 fokon kb. 40 percig sütjük, amíg a teteje aranybarnára sül.', 2, 2),
(16, 0, 'Padlizsános görög tál', 'Hozzávalók: 2 db padlizsán, 2 db paradicsom, 1 db vöröshagyma, 2 gerezd fokhagyma, 1 csésze feta sajt, 1 csésze olívabogyó, 2 evőkanál olívaolaj, friss bazsalikom levelek, só, bors. A padlizsánokat megmossuk, majd hosszában vékony szeletekre vágjuk. Sózzuk és hagyjuk állni kb. 20 percig, majd leöblítjük és leszárítjuk. A vöröshagymát és fokhagymát apróra vágjuk, majd kevés olajon üvegesre pirítjuk. Beletesszük a kockára vágott paradicsomot, sózzuk, borsozzuk, és együtt pároljuk, amíg a paradicsom összeesik. Egy tűzálló tálat kivajazunk, majd rétegezünk bele padlizsánt, paradicsomos keveréket, feta sajtot, olívabogyót, és friss bazsalikom leveleket. Ismételjük meg a rétegezést, majd az utolsó réteg tetejét meglocsoljuk olívaolajjal. Előmelegített sütőben 180 fokon kb. 30 percig sütjük, amíg a teteje szép aranybarna lesz.', 2, 2),
(17, 0, 'Tenger gyümölcsei rizottó', 'Hozzávalók: 30 dkg tenger gyümölcsei (pl. garnélarák, kagylók, kalmár), 2 csésze rizottó rizs, 1 db vöröshagyma, 2 gerezd fokhagyma, 1 dl fehérbor, 1 liter zöldségalaplé, 2 evőkanál vaj, 1 csokor friss petrezselyem, só, bors. A vöröshagymát és fokhagymát apróra vágjuk, majd kevés vajon üvegesre pirítjuk. Hozzáadjuk a rizst, és addig pirítjuk, amíg üveges lesz. Felöntjük a fehérborral, és addig főzzük, amíg teljesen elpárolog. Apránként hozzáadjuk a zöldségalaplevet, és folyamatosan kevergetve főzzük, amíg a rizs megpuhul, és a folyadék teljesen besűrűsödik. Közben a tenger gyümölcseit megmossuk, majd a rizs tetejére helyezzük. Fedő alatt hagyjuk, hogy a tenger gyümölcsei átsüljenek, majd friss petrezselyemmel megszórva tálaljuk.', 2, 2),
(18, 0, 'Sült csirke édesburgonyával', 'Hozzávalók: 4 db csirkemell, 4 db közepes édesburgonya, 2 gerezd fokhagyma, 1 csokor friss rozmaring, 2 evőkanál olívaolaj, só, bors. A csirkemellet megmossuk, és szárazra töröljük. Az édesburgonyákat megmossuk, és héjastól felkarikázzuk. A fokhagymagerezdeket meghámozzuk és vékony szeletekre vágjuk. A friss rozmaringot felaprítjuk. Egy tepsit kibélelünk sütőpapírral, majd ráhelyezzük a csirkemelleket, az édesburgonyát, a fokhagymaszeleteket, és a friss rozmaringot. Meglocsoljuk olívaolajjal, majd sózzuk, borsozzuk. Előmelegített sütőben 200 fokon kb. 30 percig sütjük, amíg a csirkehús megpirul, és az édesburgonya megpuhul.', 2, 2);

-- Köret receptek

INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(19, 0, 'Fokhagymás parmezános sült brokkoli', 'Hozzávalók: 1 fej brokkoli, 2 gerezd fokhagyma, 2 evőkanál olívaolaj, 1/4 csésze reszelt parmezán sajt, só, frissen őrölt fekete bors. A brokkolit rózsáira szedjük. Egy tálban összekeverjük az olívaolajat és az apróra vágott fokhagymát. Beleforgatjuk a brokkoli rózsákat. Egy sütőpapírral bélelt tepsibe tesszük a brokkolit, és egyenletesen eloszlatjuk. Megszórjuk reszelt parmezán sajttal, sózzuk, borsozzuk. Előmelegített sütőben 200 fokon kb. 20 percig sütjük, amíg a brokkoli megpuhul, és a sajt megolvad és aranybarnára pirul.', 2, 3),
(20, 0, 'Sült fűszeres édesburgonya', 'Hozzávalók: 4 db közepes édesburgonya, 2 evőkanál olívaolaj, 1 teáskanál őrölt kömény, 1 teáskanál őrölt füstölt paprika, só, frissen őrölt fekete bors. Az édesburgonyákat megmossuk, és héjastól felkarikázzuk. Egy tálban összekeverjük az olívaolajat, őrölt köményt, őrölt füstölt paprikát, sót, és frissen őrölt fekete borsot. Beleforgatjuk az édesburgonya karikákat. Egy sütőpapírral bélelt tepsibe tesszük az édesburgonyát, és egyenletesen eloszlatjuk. Előmelegített sütőben 200 fokon kb. 25-30 percig sütjük, amíg az édesburgonya megpuhul, és aranybarnára pirul.', 2, 3),
(21, 0, 'Tárkonyos zöldbab párolt rizzsel', 'Hozzávalók: 30 dkg zöldbab, 1 csokor friss tárkony, 2 csésze rizs, só, olaj. A zöldbabot megmossuk, és megtisztítjuk. Egy lábasban vizet forralunk, majd besózzuk, és beletesszük a zöldbabot. Kb. 8-10 percig főzzük, amíg megpuhul, de még roppanós marad. Leszűrjük, és hideg vízzel leöblítjük. A tárkony leveleit lecsipkedjük a szárról, majd felaprítjuk. Egy serpenyőben kevés olajon megpároljuk a tárkonyt. Közben egy másik edényben megfőzzük a rizst. Tálaláskor a tányérra tesszük a párolt rizst, majd a tetejére helyezzük a párolt zöldbabot, és megszórjuk friss tárkonnyal.', 2, 3),
(22, 0, 'Petrezselymes sütőtök', 'Hozzávalók: 1 kg sütőtök, 3 evőkanál olívaolaj, 2 gerezd fokhagyma, só, frissen őrölt fekete bors, friss petrezselyem. A sütőtököt meghámozzuk, kis kockákra vágjuk. Egy tálban összekeverjük az olívaolajat, apróra vágott fokhagymát, sót, és frissen őrölt fekete borsot. Beleforgatjuk a sütőtök kockákat. Egy sütőpapírral bélelt tepsibe tesszük a sütőtököt, és egyenletesen eloszlatjuk. Előmelegített sütőben 200 fokon kb. 25-30 percig sütjük, amíg a sütőtök megpuhul és aranybarnára pirul. Tálaláskor megszórjuk friss petrezselyemmel.', 2, 3),
(23, 0, 'Sült paradicsom feta sajttal', 'Hozzávalók: 6 db paradicsom, 150 g feta sajt, 2 evőkanál olívaolaj, friss bazsalikom levelek, só, frissen őrölt fekete bors. A paradicsomokat megmossuk, majd félbevágjuk. Egy sütőpapírral bélelt tepsibe tesszük a paradicsomokat, és egyenletesen eloszlatjuk. Meglocsoljuk olívaolajjal, majd sózzuk, borsozzuk. Előmelegített sütőben 180 fokon kb. 15-20 percig sütjük, amíg a paradicsomok megpuhulnak és kissé megpirulnak. Tálaláskor a megsült paradicsomok tetejére morzsoljuk a feta sajtot, és friss bazsalikom levelekkel díszítjük.', 2, 3),
(24, 0, 'Grillezett zöldségek', 'Hozzávalók: 2 db cukkini, 2 db paprika, 1 db padlizsán, 2 db paradicsom, 2 evőkanál olívaolaj, friss rozmaring, só, frissen őrölt fekete bors. A cukkinit, paprikát és padlizsánt megmossuk, majd hosszában vékony szeletekre vágjuk. A paradicsomokat félbevágjuk. Egy tálban összekeverjük az olívaolajat, sót, és frissen őrölt fekete borsot. Beleforgatjuk a zöldségeket. Egy grillserpenyőt felforrósítunk, majd ráhelyezzük a zöldségeket, és mindkét oldalukat kb. 2-3 percig grillre sütjük. Tálaláskor megszórjuk friss rozmaringgal.', 2, 3);

-- Desszert receptek

INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(25, 0, 'Csokoládés brownie', 'Hozzávalók: 200 g étcsokoládé, 150 g vaj, 150 g cukor, 3 db tojás, 100 g liszt, 1 teáskanál sütőpor, 1 csipet só. A sütőt előmelegítjük 180 fokra. Egy lábasban felolvasztjuk a vajat és a csokoládét. Egy tálban habosra keverjük a cukrot a tojásokkal, majd hozzáadjuk a lisztet, sütőport és sót. Végül belekeverjük a vaj-csokoládé keveréket. Egy sütőpapírral bélelt tepsibe öntjük a masszát, majd kb. 20-25 percig sütjük, amíg a brownie megsül, de belül még puha marad.', 2, 4),
(26, 0, 'Vaníliás puding', 'Hozzávalók: 500 ml tej, 1 csomag vaníliás pudingpor, 50 g cukor. Egy kisebb lábasban felforraljuk a tejet. Közben egy tálban elkeverjük a pudingport a cukorral. Amikor a tej felforrt, hozzáadjuk a pudingporos keveréket, és folyamatosan kevergetve addig főzzük, amíg besűrűsödik. Amikor a puding besűrűsödött, levesszük a tűzről, és kihűtjük.', 2, 4),
(27, 0, 'Almás pite', 'Hozzávalók: 4 db alma, 150 g cukor, 1 teáskanál őrölt fahéj, 2 evőkanál citromlé, 200 g liszt, 100 g hideg vaj, 50 g cukor, 1 db tojás, csipet só. A sütőt előmelegítjük 180 fokra. Az almákat meghámozzuk, magházukat eltávolítjuk, majd felkockázzuk. Egy tálban összekeverjük az almát, cukrot, fahéjat és citromlevet. Egy másik tálban elmorzsoljuk a hideg vajat a liszttel és cukorral, majd hozzáadjuk a tojást és csipet sót, és összegyúrjuk a tésztát. Egy sütőpapírral bélelt tepsibe terítjük a tésztát, majd rászórjuk az almás keveréket. Előmelegített sütőben kb. 40-45 percig sütjük, amíg a pite teteje aranybarnára pirul.', 2, 4),
(28, 0, 'Vaníliás sült banán', 'Hozzávalók: 4 db banán, 2 evőkanál vaj, 2 evőkanál barna cukor, 1 teáskanál vanília kivonat, 1 teáskanál fahéj. A sütőt előmelegítjük 180 fokra. A banánokat meghámozzuk, majd hosszában kettévágjuk. Egy tepsit kibélelünk sütőpapírral, majd ráhelyezzük a banánokat. Megolvasztjuk a vajat, majd hozzáadjuk a barna cukrot, vanília kivonatot és fahéjat. Ezt a keveréket meglocsoljuk a banánokra. Előmelegített sütőben kb. 10-15 percig sütjük, amíg a banánok megpuhulnak és kissé megpirulnak.', 2, 4),
(29, 0, 'Epres panna cotta', 'Hozzávalók: 500 ml tejszín, 100 g cukor, 1 csomag zselatin, 1 teáskanál vanília kivonat, 200 g eper. Egy lábasban felmelegítjük a tejszínt a cukorral és vanília kivonattal. Közben egy kis tálban elkeverjük a zselatint hideg vízzel, majd hozzáadjuk a meleg tejszínhez, és kevergetve főzzük, amíg a zselatin felolvad. Egy pohárba öntjük a tejszínes keveréket, majd hűtőbe tesszük kb. 2-3 órára, amíg teljesen megdermed. Közben az epret megmossuk, és felkockázzuk. Tálaláskor a panna cottát megszórjuk az eperkockákkal.', 2, 4),
(30, 0, 'Sárgabarackos túrótorta', 'Hozzávalók: 250 g túró, 250 g sárgabarack (konzi.), 100 g porcukor, 2 db tojás, 1 csomag vaníliás cukor, 100 g darált keksz, 50 g vaj. A sütőt előmelegítjük 180 fokra. Egy tálban összekeverjük a túrót, porcukrot, tojásokat és vaníliás cukrot. Egy másik tálban összekeverjük a darált kekszet a vajjal. Egy sütőformát kibélelünk sütőpapírral, majd a kekszes keveréket egyenletesen eloszlatjuk az alján. Erre öntjük rá a túrós keveréket, majd rászórjuk a felszeletelt sárgabarackokat. Előmelegített sütőben kb. 30-35 percig sütjük, amíg a teteje aranybarnára pirul.', 2, 4);


-- Vacsora receptek

INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(31, 0, 'Sült lazac filé', 'Hozzávalók: 4 db lazac filé, 2 evőkanál olívaolaj, 2 gerezd fokhagyma, só, bors, friss citrom. A lazac filéket megmossuk, leitatjuk, majd sózzuk, borsozzuk mindkét oldalát. Egy serpenyőben felmelegítjük az olívaolajat, és hozzáadjuk az apróra vágott fokhagymát. Amikor a fokhagyma illata kezd elterjedni, ráhelyezzük a lazac filéket, és mindkét oldalukat aranybarnára sütjük. Friss citromkarikákkal tálaljuk.', 3, 0),
(32, 0, 'Rakott krumpli', 'Hozzávalók: 1 kg burgonya, 25 dkg füstölt sonka, 25 dkg sajt, 3 dl tejföl, só, bors ízlés szerint. A burgonyát megpucoljuk, feldaraboljuk, majd sós vízben megfőzzük. Amikor megfőtt, leszűrjük, majd még melegen áttörjük, hozzákeverjük a tejfölt, sózzuk, borsozzuk. Egy tűzálló tálba rétegezzük a burgonyapürét, a felszeletelt sonkát, és a reszelt sajtot. Ismételjük meg a rétegezést, majd a tetejére tehetünk még egy kevés sajtot. Előmelegített sütőben 180 fokon kb. 20-25 percig sütjük, amíg a teteje szép aranybarna lesz.', 3, 0),
(33, 0, 'Töltött paprika', 'Hozzávalók: 8 db paprika, 50 dkg darált hús (sertés és marha keveréke), 1 fej vöröshagyma, 2 gerezd fokhagyma, 2 dl rizs, só, bors, pirospaprika, 2 evőkanál paradicsompüré, olaj, 1 l alaplé. A paprikákat megmossuk, kivájjuk a magházukat. A hagymát és a fokhagymát finomra vágjuk, majd kevés olajon üvegesre pároljuk. Hozzáadjuk a darált húst, és addig pirítjuk, amíg ki nem pirul. Hozzáadjuk a megmosott rizst, fűszerezzük sóval, borssal, pirospaprikával. Felöntjük az alaplével, majd fedő alatt puhára pároljuk. Ha megpuhult a rizs, hozzáadjuk a paradicsompürét, összefőzzük. A tölteléket a paprikákba töltjük, majd egy tűzálló tálba helyezzük. Előmelegített sütőben kb. 30-40 percig sütjük.', 3, 0),
(34, 0, 'Spenótos ricottás cannelloni', 'Hozzávalók: 200 g cannelloni tészta, 250 g ricotta sajt, 200 g spenót (fagyasztott vagy friss), 1 db tojás, 1 gerezd fokhagyma, 50 g reszelt parmezán sajt, só, bors, olívaolaj, 2 dl paradicsomszósz. A spenótot megpucoljuk, megmossuk, majd apróra vágjuk. Egy serpenyőben kevés olívaolajon dinszteljük az apróra vágott fokhagymát, majd hozzáadjuk a spenótot, sózzuk, borsozzuk, és addig pároljuk, amíg a leve elpárolog. A ricotta sajtot egy tálban összekeverjük a tojással, reszelt parmezánnal, és a spenótos keverékkel. A cannelloni tésztát megtöltjük a ricottás spenótos töltelékkel, majd egy tűzálló tálba sorakoztatjuk. Meglocsoljuk paradicsomszósszal, majd előmelegített sütőben kb. 30 percig sütjük, amíg a tészta megpuhul és a teteje szép aranybarna lesz.', 3, 0),
(35, 0, 'Csirkemell római tálban', 'Hozzávalók: 4 db csirkemellfilé, 4 db szelet sonka, 4 szelet sajt, 2 evőkanál olívaolaj, só, bors, fűszerek ízlés szerint. A csirkemellfiléket kiklopfoljuk, sózzuk, borsozzuk, és ízlés szerinti fűszerekkel megszórjuk. Egy serpenyőben felhevítjük az olívaolajat, majd a csirkemellfiléket mindkét oldalukon megpirítjuk. Egy tűzálló tálat kivajazunk, majd belehelyezzük a csirkemellfiléket. Minden filé tetejére egy szelet sonkát és egy szelet sajtot teszünk. Előmelegített sütőben 180 fokon kb. 20 percig sütjük, amíg a sajt megolvad és a csirkemell megpuhul.', 3, 0),
(36, 0, 'Mexikói csirke chili', 'Hozzávalók: 50 dkg csirkemell, 1 fej vöröshagyma, 2 gerezd fokhagyma, 1 db paprika, 1 db paradicsom, 1 doboz fekete bab, 1 doboz kukorica, 1 dl paradicsompüré, 1 teáskanál őrölt kömény, 1 teáskanál őrölt chili paprika, só, bors, olaj. A csirkemellet kockákra vágjuk, és kevés olajon aranybarnára pirítjuk. A vöröshagymát apróra vágjuk, és az olajon üvegesre pároljuk. Hozzáadjuk az apróra vágott fokhagymát, paprikát, paradicsomot, és addig pároljuk, amíg a zöldségek megpuhulnak. Ezután hozzáadjuk a paradicsompürét, őrölt köményt, chili paprikát, sót, borsot, és egy kevés vizet. Végül hozzáadjuk a fekete babot és a kukoricát, majd összefőzzük. Tálaláskor a csirkemellet a chilivel összekeverjük.', 3, 0);




--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `receptek`
--
ALTER TABLE `receptek`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `receptek`
--
ALTER TABLE `receptek`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
