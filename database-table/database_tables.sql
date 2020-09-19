DROP TABLE IF EXISTS `Backup_Table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Backup_Table` (
  `id` int(10) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirm_psw` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `stage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Backup_Table`
--

LOCK TABLES `Backup_Table` WRITE;
/*!40000 ALTER TABLE `Backup_Table` DISABLE KEYS */;
INSERT INTO `Backup_Table` VALUES (1,'shivani ','s@123navgurukul.org','s123@','s123@',123,'student'),(2,'shivani ','shivanic18@gmail.com','shivani1','shivani1',123456,'instrouctore'),(3,'ninni','k18@gmail.com','k123@','k123@',12345,'student'),(4,'saloni','k183@gmail.com','23456','4567',12345,'student'),(5,'meena','khusi13@gmail.com','67890','67890',1234,'student'),(6,'meena','khusi13@gmail.c','12345','12345',12345,'student'),(7,NULL,'shi@123nav.org','k123@','k123@',12345,'student'),(8,NULL,'shi@123nav.org','k123@','k123@',12345,'student'),(9,NULL,'s123@navg.org','123456789','123456789',12345,'student'),(10,NULL,'shi@123nav.org','123456789','123456789',12345,'student'),(11,NULL,'s12@gmail.com','123456789','123456789',12345,'student'),(12,NULL,'s2@gmail.com','123456789','123456789',12345,'student'),(13,'shivani ','k18@gmail.com','123456789','123456789',12345,'student'),(14,'meeta','me12@gmail.com','12345678','12345678',12345,'student'),(15,'shiveeta','shiveeta1@gmail.com','98765432','98765432',12345,'student'),(16,'shiveet','shiveet1@gmail.com','12345678','12345678',8765,'student'),(17,'meena','me123@gmail.com','123456789','123456789',12345,'student'),(18,'aaa','a@gmail.com','12345678','12345678',123456,'student'),(19,'saloni','s@123navgurukul.org','12345678','12345678',123456,'student'),(20,'nisha','n12@gmail.com','123456789','123456789',123456,'student'),(21,'shivani ','s@123456navgurukul.org','123456789','123456789',123456,'student'),(22,'bulbul','b123@gmail.com','12345678','12345678',123456,'student'),(23,'bulbul','b13@gmail.com','123456789','123456789',123456,'student'),(24,'neha','neha12@gmail.com','12345678','12345678',12345,'student');
/*!40000 ALTER TABLE `Backup_Table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `confirm_details`
--

DROP TABLE IF EXISTS `confirm_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `confirm_details` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `task` varchar(255) DEFAULT NULL,
  `grade` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confirm_details`
--

LOCK TABLES `confirm_details` WRITE;
/*!40000 ALTER TABLE `confirm_details` DISABLE KEYS */;
INSERT INTO `confirm_details` VALUES (1,'shivani ','s@123navgurukul.org',NULL,0),(2,'ninni','k18@gmail.com',NULL,0),(3,'shivani ','s@123navgurukul',NULL,0),(4,'meena',NULL,NULL,0);
/*!40000 ALTER TABLE `confirm_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_submited_task`
--

DROP TABLE IF EXISTS `student_submited_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_submited_task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `task` text,
  `grade` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_submited_task`
--

LOCK TABLES `student_submited_task` WRITE;
/*!40000 ALTER TABLE `student_submited_task` DISABLE KEYS */;
INSERT INTO `student_submited_task` VALUES (47,'shiveeta','shiveeta1@gmail.com',47,'pp.jpeg',2),(48,'shiveet','shiveet1@gmail.com',48,'Screenshot from 2020-08-24 14-18-29.png',3),(49,'meena','me123@gmail.com',49,'banktransfer30.png',4),(50,'avi','a@gmail.com',50,'Screenshot from 2020-09-07 15-00-13.png',3),(52,'shila','avi1@gmail.com',52,'Screenshot from 2020-08-17 18-11-04.png',3),(53,'shikha','s@123navgurukul.org',53,'pp.jpeg',2),(54,'shivani ','shivanic18@gmail.com',54,'Screenshot from 2020-08-17 18-15-51.png',1),(55,'nishu','n12@gmail.com',55,'Screenshot from 2020-08-24 21-43-32.png',2),(56,'neha','neha12@gmail.com',56,'Screenshot from 2020-08-18 21-42-16.png',3);
/*!40000 ALTER TABLE `student_submited_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirm_psw` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `stage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'shivani ','s@123navgurukul.org','s123@','s123@',123,'student'),(2,'shivani ','shivanic18@gmail.com','shivani1','shivani1',123456,'instrouctore'),(3,'ninni','k18@gmail.com','k123@','k123@',12345,'student'),(4,'saloni','k183@gmail.com','23456','4567',12345,'student'),(5,'meena','khusi13@gmail.com','67890','67890',1234,'student'),(6,'meena','khusi13@gmail.c','12345','12345',12345,'student'),(7,NULL,'shi@123nav.org','k123@','k123@',12345,'student'),(8,NULL,'shi@123nav.org','k123@','k123@',12345,'student'),(9,NULL,'s123@navg.org','123456789','123456789',12345,'student'),(10,NULL,'shi@123nav.org','123456789','123456789',12345,'student'),(11,NULL,'s12@gmail.com','123456789','123456789',12345,'student'),(12,NULL,'s2@gmail.com','123456789','123456789',12345,'student'),(13,'shivani ','k18@gmail.com','123456789','123456789',12345,'student'),(14,'meeta','me12@gmail.com','12345678','12345678',12345,'student'),(15,'shiveeta','shiveeta1@gmail.com','98765432','98765432',12345,'student'),(16,'shiveet','shiveet1@gmail.com','12345678','12345678',8765,'student'),(17,'meena','me123@gmail.com','123456789','123456789',12345,'student'),(18,'aaa','a@gmail.com','12345678','12345678',123456,'student'),(19,'saloni','s@123navgurukul.org','12345678','12345678',123456,'student'),(20,'nisha','n12@gmail.com','123456789','123456789',123456,'student'),(21,'shivani ','s@123456navgurukul.org','123456789','123456789',123456,'student'),(22,'bulbul','b123@gmail.com','12345678','12345678',123456,'student'),(23,'bulbul','b13@gmail.com','123456789','123456789',123456,'student'),(24,'neha','neha12@gmail.com','12345678','12345678',12345,'student');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_image`
--

DROP TABLE IF EXISTS `users_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_image` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_image`
--

LOCK TABLES `users_image` WRITE;
/*!40000 ALTER TABLE `users_image` DISABLE KEYS */;
INSERT INTO `users_image` VALUES (1,'Shivani','chouhan','Screenshot from 2020-08-17 22-11-32.png',98876545,'shivani18','1234567'),(2,'Shivani','chouhan','Screenshot from 2020-08-17 22-11-32.png',98876545,'shivani18','1234567'),(3,'Shivani','chouhan','Screenshot from 2020-08-17 22-11-32.png',98876545,'shivani18','1234567'),(4,'Shivani','chouhan','Screenshot from 2020-08-17 22-11-32.png',98876545,'shivani18','1234567'),(5,'Shivani','chouhan','Screenshot from 2020-08-17 22-11-32.png',98876545,'shivani18','1234567'),(6,'Shivani','chouhan','Screenshot from 2020-08-17 22-11-32.png',98876545,'shivani18','1234567'),(7,'Shivani','chouhan','pp.jpeg',98876545,'shivani18','1234567'),(8,'Shivani','chouhan','Screenshot from 2020-09-07 15-00-13.png',98876545,'shivani18','1234567');
-- Dump completed on 2020-09-19 10:26:20
