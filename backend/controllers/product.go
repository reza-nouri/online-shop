// ------------------
// controllers/product.go
// ------------------
package controllers

import (
	"fmt"
	"net/http"
	"online-shop/config"
	"online-shop/models"
	"path/filepath"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateProduct(c *gin.Context) {
	name := c.PostForm("name")
	description := c.PostForm("description")
	price, _ := strconv.ParseFloat(c.PostForm("price"), 64)

	file, _ := c.FormFile("image")
	path := "uploads/" + filepath.Base(file.Filename)
	c.SaveUploadedFile(file, path)

	product := models.Product{
		Name:        name,
		Description: description,
		ImageURL:    path,
		Price:       price,
	}

	config.DB.Create(&product)
	c.JSON(http.StatusOK, product)
}

func GetProducts(c *gin.Context) {
	var products []models.Product
	config.DB.Find(&products)
	c.JSON(http.StatusOK, products)
}

func GetSpecials(c *gin.Context) {
	fmt.Println("start")
	var products []models.Product
	config.DB.Where(&models.Product{InMainPage: true}).Find(&products)
	c.JSON(http.StatusOK, products)
}

func GetProductById(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))

	var product models.Product
	config.DB.Preload("Category").Preload("Reviews").Find(&product, "id = ?", id)
	c.JSON(http.StatusOK, product)
}

func GetGategories(c *gin.Context) {
	var categories []models.Category
	config.DB.Find(&categories)
	c.JSON(http.StatusOK, categories)
}
