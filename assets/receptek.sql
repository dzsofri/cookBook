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
