

use mydb

CREATE TABLE `orderBooks1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `amount` double NOT NULL,
  `count` double NOT NULL,
  `exchange` varchar(45) NOT NULL,
  `pairname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=233787 DEFAULT CHARSET=utf8


-- Test Cases 

-- Delete the rows after few seconds otherwise MYSQL rows will reach to thousands. 

-- SELECT * FROM mydb.orderBooks
-- 
-- TRUNCATE TABLE mydb.orderBooks
-- 
-- DELETE FROM mydb.orderBooks


