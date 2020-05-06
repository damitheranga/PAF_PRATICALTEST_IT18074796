-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 01:52 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hcs`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE IF NOT EXISTS `hospital` (
  `hospitalID` int(11) NOT NULL AUTO_INCREMENT,
  `hospitalCode` varchar(50) NOT NULL,
  `hospitalName` varchar(50) NOT NULL,
  `hospitalEmail` varchar(50) NOT NULL,
  `hospitalDesc` varchar(50) NOT NULL,
  `hospitalDistrict` varchar(50) NOT NULL,
  `hospitalTel` varchar(10) NOT NULL,
  PRIMARY KEY (`hospitalID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`hospitalID`, `hospitalCode`, `hospitalName`, `hospitalEmail`, `hospitalDesc`, `hospitalDistrict`, `hospitalTel`) VALUES
(7, '555', 'Lanka%2BHospital', 'sadasdefefsfsf', 'Major%2BPvt%2BHospital', 'Colombo', '011452432'),
(8, '004', 'Hemas Hospital', 'hemas@gmail.com', 'Leading Pvt Hospital', 'Thalawathugoda', '0117854652'),
(9, '006', 'Duradans', 'durdans@gmail.com', 'leading hospital', 'leading hospital', '0114562358'),
(17, '165', 'dsad', 'asdasd', 'asdad', 'asdsd', 'asdsad');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
