// ------------------
// config/db.go
// ------------------
package config

import (
	"fmt"
	"log"
	"online-shop/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	dsn := "host=localhost user=postgres password=123 dbname=shop port=5432 sslmode=disable"
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect DB")
	}

	database.AutoMigrate(&models.User{}, &models.Product{})
	DB = database
	fmt.Println("Database connected")
}