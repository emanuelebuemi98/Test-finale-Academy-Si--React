-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: test_finale
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `datimeteo`
--

DROP TABLE IF EXISTS `datimeteo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datimeteo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `citta` varchar(255) NOT NULL,
  `temperatura` varchar(255) NOT NULL,
  `umidita` varchar(255) NOT NULL,
  `descrizione` varchar(255) NOT NULL,
  `pressione` varchar(255) NOT NULL,
  `velocita_vento` varchar(255) NOT NULL,
  `direzione_vento` varchar(255) NOT NULL,
  `visibilita` varchar(255) NOT NULL,
  `fk_id_u` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_u` (`fk_id_u`),
  CONSTRAINT `datimeteo_ibfk_1` FOREIGN KEY (`fk_id_u`) REFERENCES `utente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datimeteo`
--

LOCK TABLES `datimeteo` WRITE;
/*!40000 ALTER TABLE `datimeteo` DISABLE KEYS */;
INSERT INTO `datimeteo` VALUES (1,'Rome','21.48','56','clear sky','1013','0','0','10000',NULL),(2,'Roma','25.0','60%','Sunny','1013 hPa','5 m/s','180°','10000 metri',NULL),(3,'Messina','21.66','75','broken clouds','1009','5.14','220','10000',NULL),(4,'Catania','21.73','78','few clouds','1007','8.23','100','10000',NULL);
/*!40000 ALTER TABLE `datimeteo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `cognome` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES (1,'Filippo','Milli','filippo.milli@gmail.com','d1cd71348b59e94763805e6b8a32ad7126ea1006715ae17640fa8def78887f1c'),(2,'Fabiana','Valentini','fabiana.valenti@gmail.com','c507963072ead2a13b2de5e29a707c30b6e50bbdaa2b9ac07d14869b7ea0d207');
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 17:33:11
