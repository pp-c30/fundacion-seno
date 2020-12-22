-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-12-2020 a las 02:52:00
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fundacion_seno`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_donaciones`
--

CREATE TABLE `categoria_donaciones` (
  `id_categoria_donaciones` int(11) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria_donaciones`
--

INSERT INTO `categoria_donaciones` (`id_categoria_donaciones`, `descripcion`) VALUES
(2, 'Pelucas'),
(3, 'Salon');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_eventos`
--

CREATE TABLE `categoria_eventos` (
  `id_categoria_eventos` int(11) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria_eventos`
--

INSERT INTO `categoria_eventos` (`id_categoria_eventos`, `descripcion`) VALUES
(1, 'Congresos'),
(4, 'Congresos en Neuquen y Rio Negro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_galeria`
--

CREATE TABLE `categoria_galeria` (
  `id_categoria` int(10) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria_galeria`
--

INSERT INTO `categoria_galeria` (`id_categoria`, `descripcion`) VALUES
(1, 'Imágenes de evento en Neuquén '),
(3, 'Imagenes de evento x');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidados`
--

CREATE TABLE `cuidados` (
  `id_cuidados` int(10) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen_portada` text COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `cuidados`
--

INSERT INTO `cuidados` (`id_cuidados`, `descripcion`, `imagen_portada`, `titulo`) VALUES
(3, '<h4><font size=\"2\" color=\"#0781b6\">Antes del lavado, desenreda.</font></h4><p><font size=\"2\">Es necesario que compruebes que el cabello de la peluca est&#225; desenredado antes de lavarla. Para ello, lo mejor es utilizar un peine de dientes anchos. No utilices nunca cepillos, y recuerda que desenredar siempre con el cabello seco es esencial para cuidar tu peluca,</font></p><p><font size=\"2\"><br></font></p><h4><font size=\"2\" color=\"#0a87bd\">&#160;Utiliza siempre agua tibia o fr&#237;a.</font></h4><h4><font size=\"2\">Ten en cuenta que, por lo general, el pelo de fibra no admite calor. Por ello, lo mejor para lavar tu peluca es optar por el agua tibia/fr&#237;a y utilizar los productos adecuados para este tipo de cabello.</font></h4><p><font size=\"2\" color=\"#0a8ec7\"><br></font></p><h4><font size=\"2\" color=\"#0a8ec7\">&#160;El lavado.</font></h4><p><font size=\"2\">Una vez desenredada, llena el lavabo con agua fr&#237;a/tibia (algo m&#225;s de un litro) y disuelve el tama&#241;o de una avellana de champ&#250; en el agua. Introduce la peluca con suavidad dentro del ba&#241;o de champ&#250; y d&#233;jala en reposo durante unos 30 minutos. No debes frotarla ni peinarla. El champ&#250; cuenta con unas caracter&#237;sticas espec&#237;ficas y no crear&#225; espuma.</font></p><p><font size=\"2\"><br></font></p><h4><font size=\"2\" color=\"#0b8ac1\">El aclarado.</font></h4><p><font size=\"2\">Tras esos 30 minutos de lavado, saca la peluca y aclara directamente con abundante agua fr&#237;a, evitando enredarla. Una vez aclarada, pon una cantidad peque&#241;a de b&#225;lsamo en las manos y aplica sobre el pelo de medios a puntas. Una vez hecho, enjuaga la peluca.</font></p><p><font size=\"2\"><br></font></p><h4><font size=\"2\">&#160;<font color=\"#0a87bd\">El secado.</font></font></h4><p><font size=\"2\">Una vez tenemos bien lavada la peluca, solo nos queda dejarla secar al aire. Para ello, coloca tu peluca en el soporte, ya que este permite secar tanto la zona interior como exterior. Antes de hacerlo, recuerda quitar el exceso de agua envolvi&#233;ndola en una toalla&#8230; &#161;pero siempre sin frotar ni retorcer el pelo!</font></p><p><font size=\"2\"><br></font></p><h4><font size=\"2\" color=\"#cf07b7\">El peinado.</font></h4><p><font size=\"2\">Ten en cuenta que nunca podr&#225;s utilizar con tu peluca sint&#233;tica aparatos de calor como secadores, planchas, tenacillas rizadoras, etc. Una vez la peluca est&#233; seca, utiliza las puntas de los dedos o un peine de dientes anchos para darle a tu peluca el peinado y el estilo que deseas. No es recomendable peinarla cuando est&#225; mojada para que no se estropee. La clave para cuidar tu peluca correctamente est&#225; siempre en peinarla una vez est&#233; bien seca.</font></p><p><font size=\"2\"><br></font></p><h4><font size=\"2\" color=\"#bb07a6\">&#160;&#218;ltimos retoques.</font></h4><p><font size=\"2\">Puedes pulverizar tu peluca con spray acondicionador a unos 10 cm, esto le aportar&#225; protecci&#243;n y brillo al pelo. A continuaci&#243;n, sacudir y peinar d&#225;ndole el estilo deseado.</font></p>', 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989565/cdzsmv9y1zuvtxw68mrd.jpg', 'Cuidados de pelucas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donaciones`
--

CREATE TABLE `donaciones` (
  `id_donaciones` int(11) NOT NULL,
  `titulo` varchar(45) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `categoria` int(11) NOT NULL,
  `contacto` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `donaciones`
--

INSERT INTO `donaciones` (`id_donaciones`, `titulo`, `descripcion`, `categoria`, `contacto`, `estado`) VALUES
(2, 'Donación de dinero', '<font color=\"#030202\" face=\"Arial\">Dinero para el mantenimiento del&#160;</font><font color=\"#030202\" face=\"Arial\">sal&#243;n</font><br><div><br></div>', 3, 'Pablo', 1),
(6, 'Donacion de cabello', '<font color=\"#0c0909\" face=\"Comic Sans MS\">Debe venir en una bolsita, se har&#225;&#160;recepci&#243;n&#160;sin ingreso a la instituci&#243;n&#160;ya que tenemos familias&#160;oncol&#243;gicas</font>', 2, 'Belen', 1),
(7, 'donacion ', '<div><u><b>donaci&#243;n de dinero para el mantenimiento del sal&#243;n</b></u></div>', 3, 'fundacion seno ', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id_evento` int(10) NOT NULL,
  `titulo` varchar(45) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `organizadora` varchar(45) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `responsable` varchar(45) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `categoria` int(11) NOT NULL,
  `precio` int(11) DEFAULT NULL,
  `estado_home` tinyint(1) NOT NULL,
  `imagen_portada` varchar(255) COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id_evento`, `titulo`, `descripcion`, `fecha_hora`, `organizadora`, `responsable`, `categoria`, `precio`, `estado_home`, `imagen_portada`) VALUES
(37, 'Torta infantil del niño oncológico', 'En el evento se festejara el d&#237;a del ni&#241;o, en el cual se podr&#225; colaborar con una torta rectangular', '2020-12-08 19:52:00', 'Fundación Seno', 'María Laura', 1, 10, 1, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607986478/s6q1fdbz6b2gcgi5cgkm.jpg'),
(41, 'Evento en Neuquén', '<div><font face=\"Comic Sans MS\"><span><font color=\"#05a7b3\">Im&#225;genes</font></span><font color=\"#05a7b3\">&#160;tomadas en el evento que se realizo en Neuqu&#233;n&#160;</font></font></div>', '2020-12-24 20:10:00', 'Fundación Seno', 'Eduardo', 1, 20, 1, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988316/oulq1hbn7kouddusbavv.jpg'),
(45, 'evento', 'evento en neuquen', '2020-07-15 18:08:00', 'Fundacion Seno', 'Laura', 4, 20, 1, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1608059195/jffrgbu6zaoktnfonref.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
  `id_galeria` int(10) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `fecha` date NOT NULL,
  `localidad` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `tipo` tinyint(1) NOT NULL,
  `estado_home` tinyint(1) NOT NULL,
  `imagen_portada` text COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`id_galeria`, `descripcion`, `fecha`, `localidad`, `categoria`, `tipo`, `estado_home`, `imagen_portada`) VALUES
(6, 'Cuidados de pelucas', '2020-12-11', 46, 3, 1, 1, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989191/q4eci3yy18mjfiuilbfv.jpg'),
(8, '<div>Evento de la torta del ni&#241;o oncol&#243;gico&#160;</div>', '2020-12-16', 2, 3, 1, 1, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989069/ynpxmklaharje9nrwegf.jpg'),
(13, 'galeria de evento realizado en cipolletti', '2020-12-26', 43, 1, 1, 1, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988917/qrliccy1jvqhvlif44vd.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_cuidados`
--

CREATE TABLE `img_cuidados` (
  `id_img_cuidados` int(11) NOT NULL,
  `id_cuidados` int(11) NOT NULL,
  `imagen` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `public_id` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `portada` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `img_cuidados`
--

INSERT INTO `img_cuidados` (`id_img_cuidados`, `id_cuidados`, `imagen`, `public_id`, `portada`) VALUES
(16, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989545/ljuw6q63fmucztmofozh.jpg', 'ljuw6q63fmucztmofozh', 0),
(17, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989548/qnqvopxchugtg1rovzhg.jpg', 'qnqvopxchugtg1rovzhg', 0),
(18, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989551/l73zxplttj9ryplbfaqs.jpg', 'l73zxplttj9ryplbfaqs', 0),
(19, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989565/cdzsmv9y1zuvtxw68mrd.jpg', 'cdzsmv9y1zuvtxw68mrd', 1),
(20, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989567/eo7pdntvs8e7vtyuhwyc.jpg', 'eo7pdntvs8e7vtyuhwyc', 0),
(21, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989581/onmz6h46bpiphwibvm6b.jpg', 'onmz6h46bpiphwibvm6b', 0),
(22, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989590/pzfwhjjywoyuenj7il5l.jpg', 'pzfwhjjywoyuenj7il5l', 0),
(23, 3, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989599/iecwb0zp4bpntjts0azf.jpg', 'iecwb0zp4bpntjts0azf', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_evento`
--

CREATE TABLE `img_evento` (
  `id_img_evento` int(11) NOT NULL,
  `id_evento` int(10) NOT NULL,
  `imagen` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `public_id` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;


--
-- Volcado de datos para la tabla `img_evento`
--

INSERT INTO `img_evento` (`id_img_evento`, `id_evento`, `imagen`, `public_id`, `portada`) VALUES
(84, 37, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607986478/s6q1fdbz6b2gcgi5cgkm.jpg', 's6q1fdbz6b2gcgi5cgkm', 1),
(85, 37, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607986522/d1azujjistwmgtjpb2rf.jpg', 'd1azujjistwmgtjpb2rf', 0),
(86, 37, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607986533/znaykvp8jlz2zimsgq4m.jpg', 'znaykvp8jlz2zimsgq4m', 0),
(93, 41, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988316/oulq1hbn7kouddusbavv.jpg', 'oulq1hbn7kouddusbavv', 1),
(94, 41, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988377/ekvmkesldiw2mvdtnr6c.jpg', 'ekvmkesldiw2mvdtnr6c', 0),
(95, 41, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988393/dpobloauizxrtakm6otv.jpg', 'dpobloauizxrtakm6otv', 0),
(96, 45, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1608059190/kzrqe60naugwphpifdlp.jpg', 'kzrqe60naugwphpifdlp', 0),
(97, 45, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1608059195/jffrgbu6zaoktnfonref.jpg', 'jffrgbu6zaoktnfonref', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_galeria`
--

CREATE TABLE `img_galeria` (
  `id_img_galeria` int(11) NOT NULL,
  `id_galeria` int(10) NOT NULL,
  `imagen` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `public_id` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `img_galeria`
--

INSERT INTO `img_galeria` (`id_img_galeria`, `id_galeria`, `imagen`, `public_id`, `portada`) VALUES
(42, 13, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988917/qrliccy1jvqhvlif44vd.jpg', 'qrliccy1jvqhvlif44vd', 1),
(43, 13, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607988926/a5rs0qmlgyzdx3kjflkt.jpg', 'a5rs0qmlgyzdx3kjflkt', 0),
(44, 8, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989069/ynpxmklaharje9nrwegf.jpg', 'ynpxmklaharje9nrwegf', 1),
(45, 6, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989182/kyyahra4qfjp6bzszapx.jpg', 'kyyahra4qfjp6bzszapx', 0),
(46, 6, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989191/q4eci3yy18mjfiuilbfv.jpg', 'q4eci3yy18mjfiuilbfv', 1),
(47, 6, 'http://res.cloudinary.com/dj7l5ojza/image/upload/v1607989222/tc2w8nkw6zcuuefthfdz.jpg', 'tc2w8nkw6zcuuefthfdz', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `id_localidad` int(10) NOT NULL,
  `nombre` varchar(45) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `provincia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `localidad`
--

INSERT INTO `localidad` (`id_localidad`, `nombre`, `codigo_postal`, `provincia`) VALUES
(2, 'Cipolletti', 8324, 17),
(43, 'Viedma ', 1234, 17),
(44, 'Neuquén ', 1245, 37),
(45, 'Zapalla ', 5633, 37),
(46, 'Allen ', 7823, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id_provincia` int(10) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id_provincia`, `descripcion`) VALUES
(17, 'Rio Negro'),
(35, 'Mendoza'),
(37, 'Neuquén '),
(38, 'Chubut ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienes_somos`
--

CREATE TABLE `quienes_somos` (
  `id_qs` int(11) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `quienes_somos`
--

INSERT INTO `quienes_somos` (`id_qs`, `descripcion`) VALUES
(10, '<font color=\"#0c0808\">FUNDACI&#211;N S.E.N.O. es una entidad sin fines de lucro, con alta vocaci&#243;n de servicio social, que trabaja a favor de los ni&#241;os y su n&#250;cleo familiar directo, gestionando y adelantando programas de atenci&#243;n integral en a&#233;reas de asistencia psicosocial, soporte y acompa&#241;amiento legal e implementaci&#243;n  de iniciativas de desarrollo econ&#243;mico para generar bienestar en el corto, mediano y largo plazo, y la implementaci&#243;n de estrategias que permitan la construcci&#243;n de realidades de bienestar para estos y su n&#250;cleo familiar.-&#10;Defender los derechos del ni&#241;o enfermo de c&#225;ncer trabajar conjuntamente con quienes est&#225;n a cargo de las legislaciones para lograr un proyecto de ley que los ampare en el periodo de Tratamiento ya sea en los factores m&#225;s importantes que hacen a la mejor calidad de vida, para no producir un impacto en lo econ&#243;mico, laboral, social y educativo.El ni&#241;o y el joven enfermo de c&#225;ncer y su familia se enfrentan no solo a la lucha contra la enfermedad, sino tambi&#233;n al trastorno que esta provoca en sus vidas.- Largas estancias en el hospital, posible p&#233;rdida del curso escolar, el aburrimiento, la soledad y la angustia conjuntamente con el ausentismo laboral de los padres, falta de informaci&#243;n, constantes traslados desde lejos, la falta de recursos econ&#243;micos&#8230;..forman parte de la otra cara de la lucha contra el c&#225;ncer.&#10;</font>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_acompaniamiento`
--

CREATE TABLE `tipo_acompaniamiento` (
  `id_acomp` int(11) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo_acompaniamiento`
--

INSERT INTO `tipo_acompaniamiento` (`id_acomp`, `descripcion`) VALUES
(8, '<font color=\"#0d0808\" size=\"3\">&#9;El ni&#241;o y el joven enfermo de c&#225;ncer y su familia se enfrentan no solo a la lucha contra la enfermedad, sino tambi&#233;n al trastorno que esta provoca en sus vidas.- Largas estancias en el hospital, posible p&#233;rdida del curso escolar, el aburrimiento, la soledad y la angustia conjuntamente con el ausentismo laboral de los padres, falta de informaci&#243;n, constantes traslados desde lejos, la falta de recursos econ&#243;micos&#8230;..forman parte de la otra cara de la lucha contra el c&#225;ncer.</font>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `email`) VALUES
(2, 'braian', '$2a$10$rUlH/xbF1md4VuhpYAdh0uXr5hDDhqqj13Co0bulkj4hL5oR9huS2', 'braianvillarroel90@gmail.com'),
(3, 'braianvillarroel', '$2a$10$bZpG.MMLBriLSXX1L.wRfePkGly73on5VDjOTVPnpNBxIuwZrRa1e', 'braianvillarroel70@gmail.com'),
(4, 'braianvillarroel1', '$2a$10$TjT4XxEieJRC4s5GmvVHM.G2sQqWnTdbEH1NOM42RPi4/wB5ZoDLy', 'brain@90gmail.com'),
(5, 'braianvillarroel1', '$2a$10$M1ns0kvZu0ALobvK2LZ0meDtr7qqX0Gdmhl4mocYMTJUSnus83fWG', ''),
(6, 'FundacionSeno', '$2a$10$sgJf95Mh1.vgc7WnrzQgnOk/YryffJ1QVWQ3tBYe1JPJy5kIfiJDG', 'braianvillarroel90@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria_donaciones`
--
ALTER TABLE `categoria_donaciones`
  ADD PRIMARY KEY (`id_categoria_donaciones`);

--
-- Indices de la tabla `categoria_eventos`
--
ALTER TABLE `categoria_eventos`
  ADD PRIMARY KEY (`id_categoria_eventos`);

--
-- Indices de la tabla `categoria_galeria`
--
ALTER TABLE `categoria_galeria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `cuidados`
--
ALTER TABLE `cuidados`
  ADD PRIMARY KEY (`id_cuidados`);

--
-- Indices de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id_donaciones`),
  ADD KEY `fk_doncaciones_categoria` (`categoria`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `fk_evento_categoria` (`categoria`);

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id_galeria`),
  ADD KEY `fk_galeria_localidad` (`localidad`),
  ADD KEY `fk_galeria_categoria` (`categoria`);

--
-- Indices de la tabla `img_cuidados`
--
ALTER TABLE `img_cuidados`
  ADD PRIMARY KEY (`id_img_cuidados`),
  ADD KEY `fk_cuidados_img` (`id_cuidados`);

--
-- Indices de la tabla `img_evento`
--
ALTER TABLE `img_evento`
  ADD PRIMARY KEY (`id_img_evento`),
  ADD KEY `fk_eventos_img` (`id_evento`);

--
-- Indices de la tabla `img_galeria`
--
ALTER TABLE `img_galeria`
  ADD PRIMARY KEY (`id_img_galeria`),
  ADD KEY `fk_galeria_img` (`id_galeria`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`id_localidad`),
  ADD KEY `fk_localidad_provincia` (`provincia`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id_provincia`);

--
-- Indices de la tabla `quienes_somos`
--
ALTER TABLE `quienes_somos`
  ADD PRIMARY KEY (`id_qs`);

--
-- Indices de la tabla `tipo_acompaniamiento`
--
ALTER TABLE `tipo_acompaniamiento`
  ADD PRIMARY KEY (`id_acomp`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria_donaciones`
--
ALTER TABLE `categoria_donaciones`
  MODIFY `id_categoria_donaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categoria_eventos`
--
ALTER TABLE `categoria_eventos`
  MODIFY `id_categoria_eventos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categoria_galeria`
--
ALTER TABLE `categoria_galeria`
  MODIFY `id_categoria` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cuidados`
--
ALTER TABLE `cuidados`
  MODIFY `id_cuidados` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id_donaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id_evento` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id_galeria` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `img_cuidados`
--
ALTER TABLE `img_cuidados`
  MODIFY `id_img_cuidados` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `img_evento`
--
ALTER TABLE `img_evento`
  MODIFY `id_img_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT de la tabla `img_galeria`
--
ALTER TABLE `img_galeria`
  MODIFY `id_img_galeria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `id_localidad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id_provincia` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `quienes_somos`
--
ALTER TABLE `quienes_somos`
  MODIFY `id_qs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tipo_acompaniamiento`
--
ALTER TABLE `tipo_acompaniamiento`
  MODIFY `id_acomp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD CONSTRAINT `fk_doncaciones_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria_donaciones` (`id_categoria_donaciones`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `fk_evento_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria_eventos` (`id_categoria_eventos`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD CONSTRAINT `fk_galeria_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria_galeria` (`id_categoria`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_galeria_localidad` FOREIGN KEY (`localidad`) REFERENCES `localidad` (`id_localidad`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `img_cuidados`
--
ALTER TABLE `img_cuidados`
  ADD CONSTRAINT `fk_cuidados_img` FOREIGN KEY (`id_cuidados`) REFERENCES `cuidados` (`id_cuidados`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `img_evento`
--
ALTER TABLE `img_evento`
  ADD CONSTRAINT `fk_eventos_img` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id_evento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `img_galeria`
--
ALTER TABLE `img_galeria`
  ADD CONSTRAINT `fk_galeria_img` FOREIGN KEY (`id_galeria`) REFERENCES `galeria` (`id_galeria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD CONSTRAINT `fk_localidad_provincia` FOREIGN KEY (`provincia`) REFERENCES `provincia` (`id_provincia`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
