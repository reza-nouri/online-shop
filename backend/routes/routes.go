
// ------------------
// routes/routes.go
// ------------------
package routes

import (
	"online-shop/controllers"
	"online-shop/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")

	api.POST("/register", controllers.Register)
	api.POST("/login", controllers.Login)

	api.GET("/products", controllers.GetProducts)

	admin := api.Group("/admin")
	admin.Use(middleware.AuthMiddleware(), middleware.AdminOnly())
	admin.POST("/products", controllers.CreateProduct)
}
