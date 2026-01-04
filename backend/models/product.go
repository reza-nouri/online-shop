// ------------------
// models/product.go
// ------------------
package models

import (
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Attribute struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}

type Product struct {
	gorm.Model
	Tags        datatypes.JSON `json:"tags" gorm:"type:json"`
	Attributes  datatypes.JSON `json:"attributes" gorm:"type:json"`
	Name        string         `json:"name"`
	Description string         `json:"description"`
	Price       float64        `json:"price"`
	ImageURL    string         `json:"imageUrl"`
	InMainPage  bool           `json:"inMainPage"`
	CategoryID  uint           `json:"categoryID"`
	Category    Category
	Reviews     []Review `json:"review" gorm:"foreignKey:ProductID"`
}
