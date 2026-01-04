// ------------------
// routes/routes.go
// ------------------
package routes

import (
	"online-shop/config"
	"online-shop/controllers"
	"online-shop/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")

	reviewHandler := controllers.NewReviewHandler(config.DB)

	// عملیات عمومی
	api.POST("/reviews", reviewHandler.CreateReview)
	api.GET("/reviews", reviewHandler.GetReviews)
	api.GET("/reviews/:id", reviewHandler.GetReviewByID)

	api.POST("/register", controllers.Register)
	api.POST("/login", controllers.Login)

	api.GET("/products", controllers.GetProducts)
	api.GET("/products/specials", controllers.GetSpecials)
	api.GET("/products/:id", controllers.GetProductById)
	api.GET("/category", controllers.GetGategories)

	admin := api.Group("/admin")
	admin.Use(middleware.AuthMiddleware(), middleware.AdminOnly())
	admin.POST("/products", controllers.CreateProduct)
}
