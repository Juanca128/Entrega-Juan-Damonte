-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2024 a las 22:07:21
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lunalog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  `tipo` varchar(1) NOT NULL DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `img_id`, `cuerpo`, `tipo`) VALUES
(1, '¿Qué es la arcilla polimérica?', 'g66lefllkd6isoh9kqwf', 'La arcilla polimérica es una pasta densa pero moldeable, muy parecida a la plastilina. Esta compuesta de PVC, aceite plastificante, que es el componente que la hace manejable y flexible, y por supuesto, pigmentos de color. Debido a su composición, podemos manipularla tantas veces como queramos sin que se endurezca como sucede con el yeso o la arcilla común.\r\n\r\nLa principal diferencia con la arcilla común es que si utilizamos la polimérica no es necesario añadir pigmento, ya que la podemos encontrar en diferentes tonalidades e incluso diferentes acabados como metálico o de efecto transparente o fosforescente, en tonos pastel... ¡una gran variedad donde elegir!\r\n\r\nUna vez tenemos nuestro diseños listo, es necesario cocerla y para ello basta con un horno doméstico y una temperatura entre los 100 y los 130 para poder endurecer la pasta. Además, para que nuestras creaciones duren años, se recomienda que no estén cerca del calor abrasivo ni de la luz solar directa.', 'n'),
(2, 'Semana Santa en Córdoba: ferias para todos los gustos', 'dqc2v5gldrmubmpvqrku', 'En Córdoba Capital, la próxima Semana Santa en un fin de semana extra largo, tendrá muchas opciones para recorrerla. Clásico para locales, pero también para visitantes (con un gran nivel de reservas previas), habrá espectáculos, experiencias, celebraciones religiosas, y también ferias variadas para aprovechar.\r\n\r\nDesde el miércoles 27 de marzo hasta el martes 2 de abril, el Complejo Ferial se convertirá en un paraíso para los amantes del arte y la artesanía con la Feria Internacional de Artesanías.\r\n\r\nEn el coqueto barrio del Chateau Carreras, esta feria promete una experiencia única, con diversidad de productos exhibidos. Desde piezas tradicionales hasta creaciones contemporáneas, la Feria Internacional de Artesanías ofrece un escaparate de la creatividad de artistas de todo el mundo. Las entradas están disponibles en feriadelartesano.com.\r\n\r\nSe puede combinar esa visita con un paseo por los parques del noroeste, como el del Chateau, el del Kempes o el Brigadier Bustos.\r\n\r\nEn el centro, la Plaza Vélez Sársfield se llena nuevamente de aromas y sabores desde el jueves 28 hasta el martes 2 de abril, con la Feria Sabores y Dulzuras. Este evento, que se ha convertido en un clásico de la Semana Santa en Córdoba, ofrece una amplia gama de productos gastronómicos regionales y artesanales.\r\n\r\nDesde quesos y embutidos hasta dulces y licores, la feria es un festín para los sentidos. Además, la entrada es libre y gratuita, lo que la convierte en una opción accesible para todos los visitantes.', 'f'),
(3, 'Composiciones en arcilla polimérica para principiantes', NULL, 'Usa arcilla polimérica para crear barras compactas decoradas con intrincados patrones de colores que podrás usar para adornar distintos objetos\r\nLos bastones de arcilla polimérica son tubos enrollados con un patrón en el medio, que se pueden cortar para hacer todo tipo de accesorios. Kristin Vaughn, artista de arcilla polimérica y fundadora de Hillside Studio, se especializa en la elaboración artesanal de piezas únicas y coloridas utilizando este método. Comparte sus creaciones con más de 207 000 seguidores en Instagram y ha visto su trabajo destacado en plataformas como Buzzfeed, Bored Panda y MyModernMet.\r\n\r\nEn este curso en línea, aprenda los fundamentos de la composición de la caña de arcilla polimérica. Kristin te enseña cómo fabricar tubos cohesivos llenos de patrones y colores intrincados, así como también cómo darles forma en una variedad de objetos decorativos. Explora tu creatividad y transforma diseños simples en elaboradas obras de arte.', 'c'),
(8, 'Novedad con Imagen', 'qqpxzum4b2zm6rmgbc8g', 'Presentamos las nuevas pulseras para la temporada otoñal.', 'n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarealog`
--

CREATE TABLE `tarealog` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tarealog`
--

INSERT INTO `tarealog` (`id`, `usuario`, `password`) VALUES
(1, 'juanca', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'sabri', 'e35cf7b66449df565f93c607d5a81d09'),
(3, 'diplo', 'caf1a3dfb505ffed0d024130f58c5cfa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarealog`
--
ALTER TABLE `tarealog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tarealog`
--
ALTER TABLE `tarealog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
