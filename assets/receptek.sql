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


INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(1, 0, 'Pisztáciavaj', 'Hozzávalók: 20 dkg pisztácia, egy evőkanál porcukor, egy csipetnyi só, és három evőkanál olaj. A hámozott pisztáciát egy késes aprítóba tesszük. Hozzáadunk egy evőkanál porcukrot és egy csipet sót, aztán finomra daráljuk. Ezután beleöntünk három evőkanál növényi olajat, és tovább dolgoztatjuk a gépet, amíg el nem érjük a kívánt állagot. A házi pisztáciavaj lehet darabos, de akár tökéletesen selymes is. Minél tovább dolgozik a gép, annál homogénebb lesz az állag.', '1', '0');
INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(2, 0, 'Szuper káposztaleves', 'Hozzávalók: 1 fej vöröshagyma, 3 db sárgarépa, 2 db fehérrépa, 1 kis fej zellergumó, egy fej káposzta és kelkáposzta, 3 gerezd fokhagyma, 10 dkg szalonna, 1 teáskanál zsír, 50dkg sertéscomb, 1 csepp pirospaprika, só és bors ízlés szerint. A habaráshoz 2 evőkanál tejföl, 1 evőkanál liszt. Előkészítjük az alapanyagokat, a vöröshagymát megpucoljuk, felkockázzuk, a répákat megtisztítjuk, és felkarikázzuk, a zellergumót meghámozzuk, felkockázzuk, a káposzták külső levelét eltávolítjuk, félbevágjuk, felcsíkozzuk, a fokhagymát apróra vágjuk, a szalonnát felcsíkozzuk. Egy nagyobb lábasban közepes lángon zsiradékot hevítünk, erre rakjuk a hagymát, megsózzuk, hozzáadjuk a szalonnát is, és pár percig dinszteljük. Ha a hagyma üveges lett, és a szalonna kicsi kiengedte a zsírját, hozzáadjuk a felkockázott sertéshúst, kevergetve hagyjuk, hogy a húskockák minden oldala a kifehéredjen, picit piruljon. Ezután fűszerezzük őrölt köménnyel, babérlevéllel, hozzáadjuk a paradicsompürét, elkeverjük, sózzuk, borsozzuk, fűszerezzük pirospaprikával, fokhagymával, kevés vízzel felöntjük, éppen csak annyira, mintha pörköltet készítenénk, lefedjük, és nagyjából egy óráig főzzük. Akkor jó, ha a hús már majdnem teljesen puha. Következhetnek a zöldségek a káposzták kivételével, a sárgarépa, a fehérrépa és a zeller, ízlés szerint sózzuk, borsozzuk, majd felöntjük vízzel vagy alaplével, hogy jól ellepje a zöldségeket. Összekeverjük, és alacsony hőmérsékleten nagyjából 10-15 percig főzzük, ezután hozzáadjuk a káposztát, és 20-30 percig főzzük, addig, amíg a zöldségek meg nem puhulnak. Végül 2 evőkanál tejfölt egy evőkanál lisztel elkeverünk, és hőkiegyenlítéssel hozzáöntjük a habarást a leveshez, pár percig tovább főzzük, és el is készült ez az igazán kiadós, főételnek is beillő leves.', '2', '1');
INSERT INTO `receptek` (`ID`, `userID`, `name`, `recipe`, `type1`, `type2`) VALUES
(3, 0, 'Mustáros tócsni', 'Hozzávalók: 30 dkg krumpli, 4 gerezd fokhagyma, 1 db tojás, 1 evőkanál mustár, 1 evőkanál olaj, 3 evőkanál liszt, só, bors, pirospaprika. Tetejére esetleg reszelt sajt. A nyers burgonyát reszelőn lereszeljük. Hozzáadjuk a lisztet, a tojást, majd a többi hozzávalót, és jól elkeverjük. Egy evőkanál segítségével bő, forró olajba adagoljuk és kisütjük. Amikor kisültek, tálalhatjuk tejföllel és sajttal is, vagy amivel szeretnénk .', '2', '2');


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
