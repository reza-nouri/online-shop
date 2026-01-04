// handlers/review_handler.go
package controllers

import (
	"net/http"
	"strconv"

	"online-shop/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type ReviewHandler struct {
	DB *gorm.DB
}

// NewReviewHandler ایجاد یک هندلر جدید
func NewReviewHandler(db *gorm.DB) *ReviewHandler {
	return &ReviewHandler{DB: db}
}

// CreateReview ایجاد نظر جدید
func (h *ReviewHandler) CreateReview(c *gin.Context) {
	var dto models.CreateReviewDTO

	// بررسی و پارس کردن داده‌های ورودی
	if err := c.ShouldBindJSON(&dto); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "داده‌های ورودی نامعتبر هستند",
			"details": err.Error(),
		})
		return
	}

	// بررسی وجود محصول
	var product models.Product
	if err := h.DB.First(&product, dto.ProductID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "محصول مورد نظر یافت نشد",
		})
		return
	}

	// ایجاد نظر جدید
	review := models.Review{
		ProductID: dto.ProductID,
		Name:      dto.Name,
		Email:     dto.Email,
		Comment:   dto.Comment,
	}

	// ذخیره در دیتابیس
	if err := h.DB.Create(&review).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "خطا در ثبت نظر",
		})
		return
	}

	// بارگذاری اطلاعات محصول برای پاسخ
	h.DB.Preload("Product").First(&review, review.ID)

	c.JSON(http.StatusCreated, gin.H{
		"message": "نظر شما با موفقیت ثبت شد و پس از تایید مدیر نمایش داده خواهد شد",
		"data":    review,
	})
}

// GetReviews دریافت نظرات
func (h *ReviewHandler) GetReviews(c *gin.Context) {
	// پارامترهای کوئری
	productID := c.Query("product_id")

	// ایجاد کوئری پایه
	query := h.DB.Model(&models.Review{})

	// فیلتر بر اساس محصول
	if productID != "" {
		pid, err := strconv.ParseUint(productID, 10, 32)
		if err == nil {
			query = query.Where("product_id = ?", uint(pid))
		}
	}

	// گرفتن نظرات با pagination
	var reviews []models.Review
	err := query.
		Preload("Product", func(db *gorm.DB) *gorm.DB {
			return db.Select("id", "name")
		}).
		Order("created_at DESC").
		Find(&reviews).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "خطا در دریافت نظرات",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": reviews,
	})
}

// GetReviewByID دریافت یک نظر خاص
func (h *ReviewHandler) GetReviewByID(c *gin.Context) {
	id := c.Param("id")

	var review models.Review
	err := h.DB.
		Preload("Product").
		Where("id = ? AND deleted_at IS NULL", id).
		First(&review).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "نظر مورد نظر یافت نشد",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": review,
	})
}
