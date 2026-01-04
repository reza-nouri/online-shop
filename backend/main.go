// ================================
// Project: Simple Shop API
// Tech: Golang + Gin + GORM + PostgreSQL + JWT
// Roles: admin, user
// Features:
// - Auth (register, login)
// - JWT middleware
// - Role-based access
// - Product CRUD (admin only)
// - Product image upload
// ================================

// ------------------
// main.go
// ------------------
package main

import (
	"online-shop/config"
	"online-shop/middleware"
	"online-shop/routes"
	"online-shop/seed"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDB()
	seed.Seed()
	r := gin.Default()

	r.Use(middleware.CORSMiddleware())
	r.Static("/uploads", "./uploads")

	routes.SetupRoutes(r)

	r.Run(":8080")
}
