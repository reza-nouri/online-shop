// ------------------
// middleware/auth.go
// ------------------
package middleware

import (
	"net/http"
	"strings"

	"online-shop/utils"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenStr := strings.Replace(c.GetHeader("Authorization"), "Bearer ", "", 1)

		token, err := utils.ValidateToken(tokenStr)
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
			c.Abort()
			return
		}

		claims := token.Claims.(jwt.MapClaims)
		c.Set("role", claims["role"])
		c.Set("user_id", claims["user_id"])
		c.Next()
	}
}

func AdminOnly() gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.GetString("role") != "admin" {
			c.JSON(http.StatusForbidden, gin.H{"error": "admin only"})
			c.Abort()
			return
		}
		c.Next()
	}
}