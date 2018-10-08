
CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(9) NOT NULL AUTO_INCREMENT,
  `status` int(1) NOT NULL DEFAULT '1',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `mydp` varchar(250) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `admin_fk0` (`createdby`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `status`, `full_name`, `email`, `date_time`, `createdby`, `adminname`, `password`, `password_token`, `token_time`, `admin_ip`, `mydp`) VALUES
(1,'equip1',1, '', '', '2018-09-04 13:35:26', 0, 'parag', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 0, 'paragdineshgupta', '', '2018-09-21 12:24:36', 0, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3,'equip1',1, 'parag', '', '2018-09-22 15:30:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', '');


CREATE TABLE IF NOT EXISTS `myequip1ment` (
  `myequip1ment_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` varchar(4) NOT NULL,
   `equip1ment` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`myequip1ment_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `myequip1ment`
--

INSERT INTO `myequip1ment` (`myequip1ment_id`, `category`, `capacity`, `brand`, `model`, `year`,`equip1ment`, `status`) VALUES
(1, 'test2', '200 L', 'test1', 'test1', '2001', 0),
(1, 'test', '100L', 'brand', 'model', '2000','equip1',1),
(1, 'test1', '100L', 'brand', 'model', '2000','equip11',1),
(1, 'test2', '100L', 'brand', 'model', '2000','equip12',1),
(1, 'test3', '100L', 'brand', 'model', '2000','equip13',1),
(1, 'test4', '100L', 'brand', 'model', '2000','equip14',1),
(1, 'test5', '100L', 'brand', 'model', '2000','equip15',1),
(1, 'test6', '100L', 'brand', 'model', '2000','equip16',1),
(1, 'test7', '100L', 'brand', 'model', '2000','equip17',1),
(1, 'test8', '100L', 'brand', 'model', '2000','equip18',1),
(1, 'test9', '100L', 'brand', 'model', '2000','equip19',1),
(1, 'test10', '100L', 'brand', 'model', '2000','equip110',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip111',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip112',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip113',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip114',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip115',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip116',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip117',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip118',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip119',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip120',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip121',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip122',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip123',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip124',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip125',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip126',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip127',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip128',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip129',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip130',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip131',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip132',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip133',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip134',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip135',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip136',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip137',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip138',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip139',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip140',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip141',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip142',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip143',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip144',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip145',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip146',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip147',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip148',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip149',1),
(1, 'test', '100L', 'brand', 'model', '2000','equip150',1),

(1, 'test1', '101L', 'brand1', 'model1', '2001','equip1',1),
(2, 'abd', '4', 'baba', 'ra', '2013','equip1',1);
