-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 06, 2018 at 05:05 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `temp`
--

-- --------------------------------------------------------

--
-- Table structure for table `myequipment`
--

CREATE TABLE IF NOT EXISTS `myequipment` (
  `myequipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` varchar(4) NOT NULL,
  `equipment` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`myequipment_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `myequipment`
--

INSERT INTO `myequipment` (`myequipment_id`, `category`, `capacity`, `brand`, `model`, `year`, `equipment`, `status`) VALUES
(3, 'test1', '100L', 'brand', 'model', '2000', 'equip11', 1),
(4, 'test2', '100L', 'brand', 'model', '2000', 'equip12', 1),
(5, 'test3', '100L', 'brand', 'model', '2000', 'equip13', 1),
(6, 'test4', '100L', 'brand', 'model', '2000', 'equip14', 1),
(7, 'test5', '100L', 'brand', 'model', '2000', 'equip15', 1),
(8, 'test6', '100L', 'brand', 'model', '2000', 'equip16', 1),
(9, 'test7', '100L', 'brand', 'model', '2000', 'equip17', 1),
(10, 'test8', '100L', 'brand', 'model', '2000', 'equip18', 1),
(11, 'test9', '100L', 'brand', 'model', '2000', 'equip19', 1),
(12, 'test10', '100L', 'brand', 'model', '2000', 'equip110', 1);
