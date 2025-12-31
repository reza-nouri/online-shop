// ------------------
// controllers/auth.go
// ------------------
package controllers

import (
	"net/http"
	"online-shop/config"
	"online-shop/models"
	"online-shop/utils"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *gin.Context) {
	var body struct {
		Username string
		Password string
	}

	c.BindJSON(&body)

	hash, _ := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	user := models.User{
		Username: body.Username,
		Password: string(hash),
		Role:     "user",
	}

	config.DB.Create(&user)

	c.JSON(http.StatusOK, gin.H{"message": "registered"})
}

func Login(c *gin.Context) {
	var body struct {
		Username string
		Password string
	}

	c.BindJSON(&body)

	var user models.User
	config.DB.Where("username = ?", body.Username).First(&user)

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid credentials"})
		return
	}

	token, _ := utils.GenerateToken(user.ID, user.Role)

	c.JSON(http.StatusOK, gin.H{"token": token})
}
