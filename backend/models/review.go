// models/review.go
package models

import (
	"time"
)

type Review struct {
	ID        uint       `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `gorm:"index" json:"deleted_at,omitempty"`

	ProductID uint    `gorm:"not null" json:"product_id"`
	Product   Product `gorm:"constraint:OnDelete:CASCADE;foreignKey:ProductID" json:"product,omitempty"`

	Name    string `gorm:"not null" json:"name"`
	Email   string `gorm:"not null" json:"email"`
	Comment string `gorm:"type:text;not null" json:"comment"`
}

// DTO برای دریافت داده‌های فرم
type CreateReviewDTO struct {
	Name      string `json:"name" binding:"required,min=2,max=100"`
	Email     string `json:"email" binding:"required,email,max=100"`
	Comment   string `json:"comment" binding:"required,min=10,max=1000"`
	ProductID uint   `json:"productId" binding:"required"`
}
