-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 24 2021 г., 15:43
-- Версия сервера: 10.4.19-MariaDB
-- Версия PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `info_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `item_info`
--

CREATE TABLE `item_info` (
  `id` int(11) NOT NULL,
  `long_info` varchar(255) NOT NULL,
  `name_vendor` varchar(30) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `link` varchar(150) NOT NULL,
  `discount` tinyint(101) NOT NULL,
  `valid_to` date NOT NULL,
  `hashtags` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `item_info`
--

INSERT INTO `item_info` (`id`, `long_info`, `name_vendor`, `creator_id`, `link`, `discount`, `valid_to`, `hashtags`) VALUES
(2, 'interesting book', 'Book', 32334353, '1984.org', 45, '2021-06-10', '#fantasic'),
(3, 'TikTok', 'TikTok', 345554657, 'https://play.google.com/store/apps/details?id=com.', 10, '2021-08-19', 'tiktok;music;app'),
(4, 'Instagram', 'Facebook', 35354556, 'https://play.google.com/store/apps/details?id=com.', 20, '2021-05-31', 'photo;music;app'),
(5, 'Spotify', 'Spotify Ltd.', 78656434, 'https://play.google.com/store/apps/details?id=com.', 5, '2021-06-02', 'audio;music;app'),
(6, 'WhatsApp Messenger', 'WhatsApp LLC', 55152525, 'https://play-lh.googleusercontent.com/bYtqbOcTYOlg', 35, '2021-09-01', 'social;app');

-- --------------------------------------------------------

--
-- Структура таблицы `review_info`
--

CREATE TABLE `review_info` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `review_text` varchar(255) NOT NULL,
  `rating` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `review_info`
--

INSERT INTO `review_info` (`user_id`, `product_id`, `review_text`, `rating`) VALUES
(3453454, 3245435, 'Hallo! Its something wrong with it. ', 1),
(4546754, 3456677, 'So bad! Dont buy it!', 3),
(34565657, 43234334, 'No comments...', 3),
(98786755, 878765, 'Very good! ', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user_info`
--

INSERT INTO `user_info` (`id`, `name`, `role`, `password`) VALUES
(233546, 'electronic', 'user', 'awpawp'),
(2343563, 'Anatoly Levakov', 'customer', '23343423'),
(32345453, 's1mple', 'user', 'ilovenavi'),
(32434342, 'Natalya Karpovich', 'admin', '12341234');

-- --------------------------------------------------------

--
-- Структура таблицы `vendor_info`
--

CREATE TABLE `vendor_info` (
  `vendor_id` int(11) NOT NULL,
  `vendor_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `vendor_info`
--

INSERT INTO `vendor_info` (`vendor_id`, `vendor_name`) VALUES
(2434342, 'Spotify Ltd'),
(4242424, 'WhatsApp LLC'),
(4242427, 'Facebook'),
(4323278, 'TikTok'),
(4353533, 'Odnoklassniki Ltd'),
(42435463, 'Viber Media');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `item_info`
--
ALTER TABLE `item_info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `review_info`
--
ALTER TABLE `review_info`
  ADD PRIMARY KEY (`user_id`,`product_id`);

--
-- Индексы таблицы `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `vendor_info`
--
ALTER TABLE `vendor_info`
  ADD PRIMARY KEY (`vendor_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `item_info`
--
ALTER TABLE `item_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
