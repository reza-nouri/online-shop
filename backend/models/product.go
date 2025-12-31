// ------------------
// models/product.go
// ------------------
package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Name        string
	Description string
	Price       float64
	ImageURL    string
	InMainPage  bool
	CategoryID  uint     // کلید خارجی
	Category    Category // رابطه معکوس
}
