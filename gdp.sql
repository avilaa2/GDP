-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-06-2016 a las 00:30:41
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gdp`
--
CREATE DATABASE IF NOT EXISTS `gdp` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gdp`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE IF NOT EXISTS `municipios` (
  `idmunicipios` int(11) NOT NULL AUTO_INCREMENT,
  `municipio` varchar(45) DEFAULT NULL,
  `g2012` varchar(20) DEFAULT NULL,
  `g2015` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idmunicipios`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`idmunicipios`, `municipio`, `g2012`, `g2015`) VALUES
(1, 'ACATIC', 'PRI', 'PAN\r'),
(2, 'ACATLAN DE JUAREZ', 'PRI', 'MC\r'),
(3, 'AHUALULCO DE MERCADO', 'PRI', 'PRI\r'),
(4, 'AMACUECA', 'PRI', 'PRI\r'),
(5, 'AMATITAN', 'PRI', 'PAN-PRD\r'),
(6, 'AMECA', 'PAN', 'PRI-PVEM\r'),
(7, 'ARANDAS', 'PRI', 'PRI-PVEM\r'),
(8, 'ATEMAJAC DE BRIZUELA', 'PRI', 'PAN-PRD\r'),
(9, 'ATENGO', 'PRI', 'PRI\r'),
(10, 'ATENGUILLO', 'PRI', 'MC\r'),
(11, 'ATOTONILCO EL ALTO', 'PRI', 'PRI\r'),
(12, 'ATOYAC', 'PRI', 'PRI\r'),
(13, 'AUTLAN DE NAVARRO', 'MC', 'PRI-PVEM\r'),
(14, 'AYOTLAN', 'PRI', 'ES\r'),
(15, 'AYUTLA', 'PAN', 'PAN \r'),
(16, 'BOLANOS', 'PRI', 'PRI\r'),
(17, 'CABO CORRIENTES', 'PRI', 'PRI\r'),
(18, 'CANADAS DE OBREGON', 'PRI', 'PRI\r'),
(19, 'CASIMIRO CASTILLO', 'PRI', 'PRI\r'),
(20, 'CHAPALA', 'PAN', 'PRI-PVEM\r'),
(21, 'CHIMALTITAN', 'PAN', 'PAN\r'),
(22, 'CHIQUILISTLAN', 'PRI', 'PRD\r'),
(23, 'CIHUATLAN', 'PAN', 'MC\r'),
(24, 'COCULA', 'PAN', 'PRI-PVEM\r'),
(25, 'COLOTLAN', 'PRI', 'PAN\r'),
(26, 'CONCEPCION DE BUENOS AIRES', 'PRI', 'PRI\r'),
(27, 'CUAUTITLAN DE GARCIA BARRAGAN', 'PRI', 'PAN\r'),
(28, 'CUAUTLA', ' PAN', 'PAN\r'),
(29, 'CUQUIO', 'MC', 'PT\r'),
(30, 'DEGOLLADO', 'PRI', 'PAN\r'),
(31, 'EJUTLA', 'PRI', 'PRI\r'),
(32, 'EL ARENAL', 'PRI', 'PAN\r'),
(33, 'EL GRULLO', 'PRI', 'PRI\r'),
(34, 'EL LIMON', 'PRD', 'PRD\r'),
(35, 'EL SALTO', 'PRI', 'PRI \r'),
(36, 'ENCARNACION DE DIAZ', 'PAN', 'PAN\r'),
(37, 'ETZATLAN', 'PAN', 'MC\r'),
(38, 'GOMEZ FARIAS', 'PRI', 'MC\r'),
(39, 'GUACHINANGO', 'PAN', 'PRI\r'),
(40, 'GUADALAJARA', 'PRI', 'MC\r'),
(41, 'HOSTOTIPAQUILLO', 'PRI', 'PRI\r'),
(42, 'HUEJUCAR', 'PRI', 'PRI\r'),
(43, 'HUEJUQUILLA EL ALTO', 'PRI', 'PAN\r'),
(44, 'IXTLAHUACAN DE LOS MEMBRILLOS', 'PRI', 'PRI\r'),
(45, 'IXTLAHUACAN DEL RIO', 'PRI', 'PT\r'),
(46, 'JALOSTOTITLAN', 'PRI', 'PAN\r'),
(47, 'JAMAY', 'PAN', 'PRI\r'),
(48, 'JESUS MARIA', 'PRI', 'PRI\r'),
(49, 'JILOTLAN DE LOS DOLORES', 'PRI', 'MC\r'),
(50, 'JOCOTEPEC', 'PRI', 'MC\r'),
(51, 'JUANACATLAN', 'PRI', 'MC\r'),
(52, 'JUCHITLAN', 'PRI', 'PRI\r'),
(53, 'LA BARCA', 'PAN', 'PRI-PVEM\r'),
(54, 'LA HUERTA', 'PRI', 'PRI-PVEM\r'),
(55, 'LA MANZANILLA DE LA PAZ', 'MC', 'PRI\r'),
(56, 'LAGOS DE MORENO', 'PRI', 'PRI-PVEM\r'),
(57, 'MAGDALENA', 'PRI', 'PRI\r'),
(58, 'MASCOTA', 'MC', 'PRI-PVEM\r'),
(59, 'MAZAMITLA', 'PRI', 'PRI-PVEM\r'),
(60, 'MEXTICACAN', 'PAN', 'PRI\r'),
(61, 'MEZQUITIC', 'PRI', 'PRI\r'),
(62, 'MIXTLAN', 'PRI', 'MC\r'),
(63, 'OCOTLAN', 'PRI', 'MC\r'),
(64, 'OJUELOS DE JALISCO', 'PRI', 'PRI-PVEM\r'),
(65, 'PIHUAMO', 'MC', 'MC\r'),
(66, 'PONCITLAN', 'PRI', 'PRI-PVEM\r'),
(67, 'PUERTO VALLARTA', 'MC', 'MC\r'),
(68, 'QUITUPAN', 'PRI', 'PRI\r'),
(69, 'SAN CRISTOBAL DE LA BARRANCA', 'PRI', 'PAN\r'),
(70, 'SAN DIEGO DE ALEJANDRIA', 'PRI', 'PRI\r'),
(71, 'SAN GABRIEL', 'PRI', 'PRI\r'),
(72, 'SAN IGNACIO CERRO GORDO', 'PRI', 'PRI\r'),
(73, 'SAN JUAN DE LOS LAGOS', 'PRI', 'PAN-PRD\r'),
(74, 'SAN JUANITO DE ESCOBEDO', 'PRI', 'PRI\r'),
(75, 'SAN JULIAN', 'PRI', 'PRI\r'),
(76, 'SAN MARCOS', 'PRI', 'PRI\r'),
(77, 'SAN MARTIN DE BOLANOS', 'PRI', 'PAN\r'),
(78, 'SAN MARTIN HIDALGO', 'PRI', 'MC\r'),
(79, 'SAN MIGUEL EL ALTO', 'PRI', 'PAN\r'),
(80, 'SAN SEBASTIAN DEL OESTE', 'PRI', 'MC\r'),
(81, 'SANTA MARIA DE LOS ANGELES', 'PRI', 'PRI\r'),
(82, 'SANTA MARIA DEL ORO', 'PRI', 'PRI\r'),
(83, 'SAYULA', 'PRI', 'PRD\r'),
(84, 'TALA', 'PRI', 'PRI-PVEM\r'),
(85, 'TALPA DE ALLENDE', 'PRI', 'PRI-PVEM\r'),
(86, 'TAMAZULA DE GORDIANO', 'PRD', 'PRI-PVEM\r'),
(87, 'TAPALPA', 'PNAL', 'PRD\r'),
(88, 'TECALITLAN', 'PRD', 'PRI\r'),
(89, 'TECHALUTA DE MONTENEGRO', 'MC', 'MC\r'),
(90, 'TECOLOTLAN', 'PRI', 'PAN\r'),
(91, 'TENAMAXTLAN', 'PAN', 'PAN\r'),
(92, 'TEOCALTICHE', 'PRI', 'PAN\r'),
(93, 'TEOCUITATLAN DE CORONA', 'PRI', 'PAN\r'),
(94, 'TEPATITLAN DE MORELOS', 'PAN', 'MC\r'),
(95, 'TEQUILA', 'PAN', 'PRI-PVEM\r'),
(96, 'TEUCHITLAN', 'PRD', 'PAN\r'),
(97, 'TIZAPAN EL ALTO', 'PRI', 'PRI\r'),
(98, 'TLAJOMULCO DE ZUNIGA', 'MC', 'MC\r'),
(99, 'SAN PEDRO TLAQUEPAQUE', 'PRI', 'MC\r'),
(100, 'TOLIMAN', 'PRI', 'PRI\r'),
(101, 'TOMATLAN', 'PRD', 'PRD-PAN\r'),
(102, 'TONALA', 'PRI', 'PRI\r'),
(103, 'TONAYA', 'PAN', 'PAN-PRD\r'),
(104, 'TONILA', 'PAN', 'PRI\r'),
(105, 'TOTATICHE', 'PRI', 'PRI\r'),
(106, 'TOTOTLAN', 'PRI', 'PRI\r'),
(107, 'TUXCACUESCO', 'PRI', 'PRI\r'),
(108, 'TUXCUECA', 'PRI', 'MC\r'),
(109, 'TUXPAN', 'PRI', 'PANAL\r'),
(110, 'UNION DE SAN ANTONIO', 'PAN', 'PAN\r'),
(111, 'UNION DE TULA', 'PRI', 'PRI\r'),
(112, 'VALLE DE GUADALUPE', 'PAN', 'PRI\r'),
(113, 'VALLE DE JUAREZ', 'PAN', 'PAN\r'),
(114, 'VILLA CORONA', 'PRI', 'H\r'),
(115, 'VILLA GUERRERO', 'PRI', 'PAN\r'),
(116, 'VILLA HIDALGO', 'PANAL', 'PRI\r'),
(117, 'VILLA PURIFICACION', 'PRI', 'PAN\r'),
(118, 'YAHUALICA DE GONZALEZ GALLO', 'PANAL', 'PRI-PVEM\r'),
(119, 'ZACOALCO DE TORRES', 'PVEM', 'MC\r'),
(120, 'ZAPOPAN', 'PRI', 'MC\r'),
(121, 'ZAPOTILTIC', 'PRI', 'PRI\r'),
(122, 'ZAPOTITLAN DE VADILLO', 'PRI', 'PRI\r'),
(123, 'ZAPOTLAN DEL REY', 'PRI', 'PRD\r'),
(124, 'ZAPOTLAN EL GRANDE', 'PRI', 'MC\r'),
(125, 'ZAPOTLANEJO', 'PRI', 'MC\r');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
