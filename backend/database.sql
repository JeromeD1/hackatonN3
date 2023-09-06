-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: hackaton3
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `idevent` int NOT NULL AUTO_INCREMENT,
  `nameEvent` varchar(50) DEFAULT NULL,
  `coordX` decimal(8,5) DEFAULT NULL,
  `coordY` decimal(8,5) DEFAULT NULL,
  PRIMARY KEY (`idevent`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'tsunami',44.84079,-0.56778),(2,'tornado',48.38576,-4.48993),(3,'meteorite',48.85667,2.34312),(4,'volcanicEruption',45.77505,3.11628),(5,'Fire',43.26976,5.39284),(6,'radioActivity',47.91731,7.53288);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventhasshelters`
--

DROP TABLE IF EXISTS `eventhasshelters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventhasshelters` (
  `event_idevent` int NOT NULL,
  `shelters_idshelters` int NOT NULL,
  PRIMARY KEY (`event_idevent`,`shelters_idshelters`),
  KEY `fk_event_has_shelters_shelters1_idx` (`shelters_idshelters`),
  KEY `fk_event_has_shelters_event1_idx` (`event_idevent`),
  CONSTRAINT `fk_event_has_shelters_event1` FOREIGN KEY (`event_idevent`) REFERENCES `event` (`idevent`),
  CONSTRAINT `fk_event_has_shelters_shelters1` FOREIGN KEY (`shelters_idshelters`) REFERENCES `shelters` (`idshelters`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventhasshelters`
--

LOCK TABLES `eventhasshelters` WRITE;
/*!40000 ALTER TABLE `eventhasshelters` DISABLE KEYS */;
INSERT INTO `eventhasshelters` VALUES (1,1),(2,2),(6,3),(4,4),(3,5),(2,6),(2,7),(2,8),(5,9),(2,10),(3,11),(2,12),(3,13),(5,14),(2,15);
/*!40000 ALTER TABLE `eventhasshelters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventhasusers`
--

DROP TABLE IF EXISTS `eventhasusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventhasusers` (
  `event_idevent` int NOT NULL,
  `users_idusers` int NOT NULL,
  PRIMARY KEY (`event_idevent`,`users_idusers`),
  KEY `fk_event_has_users_users1_idx` (`users_idusers`),
  KEY `fk_event_has_users_event1_idx` (`event_idevent`),
  CONSTRAINT `fk_event_has_users_event1` FOREIGN KEY (`event_idevent`) REFERENCES `event` (`idevent`),
  CONSTRAINT `fk_event_has_users_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventhasusers`
--

LOCK TABLES `eventhasusers` WRITE;
/*!40000 ALTER TABLE `eventhasusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventhasusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelters`
--

DROP TABLE IF EXISTS `shelters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelters` (
  `idshelters` int NOT NULL AUTO_INCREMENT,
  `nameShelters` varchar(50) DEFAULT NULL,
  `coordXschelters` decimal(8,5) DEFAULT NULL,
  `coordYschelters` decimal(8,5) DEFAULT NULL,
  PRIMARY KEY (`idshelters`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelters`
--

LOCK TABLES `shelters` WRITE;
/*!40000 ALTER TABLE `shelters` DISABLE KEYS */;
INSERT INTO `shelters` VALUES (1,'tower',48.51300,2.17400),(2,'bunker',48.40000,-4.48330),(3,'anti-atomic',48.80596,2.12017),(4,'cave',45.03135,1.10121),(5,'subwayStation',48.51230,2.05407),(6,'parking',44.84408,-0.57589),(7,'parking',44.82652,-0.60634),(8,'parking',44.83056,-0.56804),(9,'bunker',44.82561,-0.27584),(10,'bunker',44.70180,-0.58209),(11,'bunker',44.95190,-0.70875),(12,'subwayStation',48.83874,2.31610),(13,'subwayStation',48.88188,2.35992),(14,'subwayStation',48.85288,2.38910),(15,'SubwayStation',48.85813,2.27556);
/*!40000 ALTER TABLE `shelters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sheltershasusers`
--

DROP TABLE IF EXISTS `sheltershasusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sheltershasusers` (
  `shelters_idshelters` int NOT NULL,
  `users_idusers` int NOT NULL,
  PRIMARY KEY (`shelters_idshelters`,`users_idusers`),
  KEY `fk_shelters_has_users_users1_idx` (`users_idusers`),
  KEY `fk_shelters_has_users_shelters_idx` (`shelters_idshelters`),
  CONSTRAINT `fk_shelters_has_users_shelters` FOREIGN KEY (`shelters_idshelters`) REFERENCES `shelters` (`idshelters`),
  CONSTRAINT `fk_shelters_has_users_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sheltershasusers`
--

LOCK TABLES `sheltershasusers` WRITE;
/*!40000 ALTER TABLE `sheltershasusers` DISABLE KEYS */;
INSERT INTO `sheltershasusers` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(1,2),(2,2),(3,2),(4,2),(5,2),(6,2);
/*!40000 ALTER TABLE `sheltershasusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `emails` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `coordXusers` decimal(8,5) DEFAULT NULL,
  `coordYusers` decimal(8,5) DEFAULT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'arthur ','Raimbeau','a.raimbeau@aol.fr','07.01.01.01.01',44.83778,-5.57912),(2,'paul','Verlain','p.verlain@aol.fr','07.01.01.01.02',48.86667,2.32750);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'hackaton3'
--

--
-- Dumping routines for database 'hackaton3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-06 19:55:06
