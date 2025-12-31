// ------------------
// models/category.go
// ------------------
package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model
	Name     string
	Products []Product // رابطه یک به چند
}
