// ------------------
// seed/seed.go
// ------------------
package seed

import (
	"encoding/json"
	"fmt"
	"online-shop/config"
	"online-shop/models"
	"time"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type ProductAttribute struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}

// ساختار ورودی ساده‌تر برای سید
type SeedProduct struct {
	Name        string             `json:"name"`
	Price       float64            `json:"price"`
	Description string             `json:"description"`
	Tags        []string           `json:"tags"`
	Attributes  []ProductAttribute `json:"attributes"`
	CategoryID  uint               `json:"category_id"`
	InMainPage  bool               `json:"is_active"`
	ImageURL    string             `json:"imageUrl"`
}

func Seed() {
	// جلوگیری از تکرار
	var count int64
	config.DB.Model(&models.User{}).Count(&count)
	if count > 0 {
		// کاربران پیش‌فرض
		adminPass, _ := bcrypt.GenerateFromPassword([]byte("admin123"), 10)
		userPass, _ := bcrypt.GenerateFromPassword([]byte("user123"), 10)

		admin := models.User{
			Username: "admin",
			Password: string(adminPass),
			Role:     "admin",
		}

		user := models.User{
			Username: "user",
			Password: string(userPass),
			Role:     "user",
		}

		config.DB.Create(&admin)
		config.DB.Create(&user)
	}

	// سپس محصولات را ایجاد می‌کنیم
	err := seedProducts(config.DB)
	fmt.Println(err)
}

// ایجاد محصولات
func seedProducts(db *gorm.DB) error {
	categories := []models.Category{
		{
			Name: "لپ‌تاپ",
		},
		{
			Name: "موبایل",
		},
		{
			Name: "تبلت",
		},
		{
			Name: "کامپیوتر",
		},
		{
			Name: "لوازم جانبی",
		},
	}

	// حذف و ایجاد مجدد (برای development)
	db.Exec("DELETE FROM categories")

	// استفاده از index به جای value
	for i := 0; i < len(categories); i++ {
		if err := db.Create(&categories[i]).Error; err != nil {
			return err
		}
	}

	products := []SeedProduct{
		{
			Name:        "لپ‌تاپ ایسر Nitro 5",
			Price:       35000000,
			Description: "لپ‌تاپ گیمینگ با مشخصات بالا",
			Tags:        []string{"گیمینگ", "پرسرعت", "گرافیک بالا", "گران"},
			Attributes: []ProductAttribute{
				{Name: "RAM", Value: "16 گیگ"},
				{Name: "حافظه داخلی", Value: "512 گیگ SSD"},
				{Name: "پردازنده", Value: "Intel Core i7-11800H"},
				{Name: "کارت گرافیک", Value: "NVIDIA RTX 3060"},
				{Name: "صفحه نمایش", Value: "15.6 اینچ FHD"},
				{Name: "سیستم عامل", Value: "Windows 11"},
			},
			CategoryID: categories[0].ID, // لپ‌تاپ
			InMainPage: true,
			ImageURL:   "uploads/nitro5.jpg",
		},
		{
			Name:        "آیفون 14 پرو",
			Price:       65000000,
			Description: "پرچمدار اپل با دوربین پیشرفته",
			Tags:        []string{"اپل", "پرچمدار", "دوربین عالی", "گران قیمت"},
			Attributes: []ProductAttribute{
				{Name: "RAM", Value: "6 گیگ"},
				{Name: "حافظه", Value: "256 گیگ"},
				{Name: "پردازنده", Value: "Apple A16 Bionic"},
				{Name: "دوربین اصلی", Value: "48 مگاپیکسل"},
				{Name: "باتری", Value: "3200 میلی‌آمپر"},
				{Name: "صفحه نمایش", Value: "6.1 اینچ Super Retina XDR"},
			},
			CategoryID: categories[1].ID, // موبایل
			InMainPage: true,
			ImageURL:   "uploads/iphone14.jpg",
		},
		{
			Name:        "سامسونگ گلکسی S23",
			Price:       45000000,
			Description: "پرچمدار سامسونگ با طراحی مدرن",
			Tags:        []string{"سامسونگ", "اندروید", "پرچمدار", "باتری قوی"},
			Attributes: []ProductAttribute{
				{Name: "RAM", Value: "8 گیگ"},
				{Name: "حافظه", Value: "256 گیگ"},
				{Name: "پردازنده", Value: "Snapdragon 8 Gen 2"},
				{Name: "دوربین اصلی", Value: "50 مگاپیکسل"},
				{Name: "باتری", Value: "3900 میلی‌آمپر"},
				{Name: "شارژ", Value: "25 وات"},
			},
			CategoryID: categories[1].ID, // موبایل
			InMainPage: true,
			ImageURL:   "uploads/galaxys23.jpg",
		},
		{
			Name:        "مک‌بوک پرو M2",
			Price:       75000000,
			Description: "لپ‌تاپ اپل با پردازنده M2",
			Tags:        []string{"اپل", "مک", "طراحی زیبا", "سبک"},
			Attributes: []ProductAttribute{
				{Name: "RAM", Value: "16 گیگ"},
				{Name: "حافظه", Value: "512 گیگ SSD"},
				{Name: "پردازنده", Value: "Apple M2"},
				{Name: "صفحه نمایش", Value: "13.3 اینچ Retina"},
				{Name: "باتری", Value: "تا 17 ساعت کارکرد"},
				{Name: "وزن", Value: "1.4 کیلوگرم"},
			},
			CategoryID: categories[0].ID, // لپ‌تاپ
			InMainPage: true,
			ImageURL:   "uploads/macbookm2.jpg",
		},
		{
			Name:        "آیپد پرو 12.9",
			Price:       40000000,
			Description: "تبلت قدرتمند اپل با صفحه نمایش عالی",
			Tags:        []string{"تبلت", "اپل", "طراحی", "قلم نوری"},
			Attributes: []ProductAttribute{
				{Name: "RAM", Value: "8 گیگ"},
				{Name: "حافظه", Value: "128 گیگ"},
				{Name: "پردازنده", Value: "Apple M1"},
				{Name: "صفحه نمایش", Value: "12.9 اینچ Liquid Retina XDR"},
				{Name: "پشتیبانی از قلم", Value: "Apple Pencil 2"},
				{Name: "سیستم عامل", Value: "iPadOS 16"},
			},
			CategoryID: categories[2].ID, // تبلت
			InMainPage: false,
			ImageURL:   "uploads/ipdadpro.jpg",
		},
		{
			Name:        "کیس گیمینگ",
			Price:       4500000,
			Description: "کیس گیمینگ با RGB و طراحی مهاجم",
			Tags:        []string{"لوازم جانبی", "گیمینگ", "RGB", "ارزان"},
			Attributes: []ProductAttribute{
				{Name: "سایز", Value: "Mid Tower"},
				{Name: "رنگ", Value: "مشکی"},
				{Name: "فن‌های از پیش نصب شده", Value: "3 عدد"},
				{Name: "پنل جانبی", Value: "شیشه‌ای"},
				{Name: "پورت‌های جلو", Value: "USB 3.0 × 2, Audio"},
			},
			CategoryID: categories[4].ID, // لوازم جانبی
			InMainPage: false,
			ImageURL:   "uploads/casegaiming.jpg",
		},
		{
			Name:        "ماوس گیمینگ Razer",
			Price:       2500000,
			Description: "ماوس حرفه‌ای گیمینگ با DPI بالا",
			Tags:        []string{"گیمینگ", "Razer", "ماوس", "DPI بالا"},
			Attributes: []ProductAttribute{
				{Name: "DPI", Value: "20000"},
				{Name: "کلیدها", Value: "8 کلید programmable"},
				{Name: "نورپردازی", Value: "RGB Chroma"},
				{Name: "اتصال", Value: "باسیم"},
				{Name: "سنسور", Value: "Optical"},
			},
			CategoryID: categories[4].ID, // لوازم جانبی
			InMainPage: false,
			ImageURL:   "uploads/mousegaimng.jpg",
		},
		{
			Name:        "مانیتور سامسونگ 4K",
			Price:       18000000,
			Description: "مانیتور 32 اینچ 4K با نرخ نوسازی 144Hz",
			Tags:        []string{"مانیتور", "4K", "گیمینگ", "سامسونگ"},
			Attributes: []ProductAttribute{
				{Name: "سایز", Value: "32 اینچ"},
				{Name: "رزولوشن", Value: "3840x2160 (4K)"},
				{Name: "نرخ نوسازی", Value: "144Hz"},
				{Name: "پنل", Value: "IPS"},
				{Name: "پورت‌ها", Value: "HDMI 2.1, DisplayPort 1.4"},
			},
			CategoryID: categories[4].ID, // لوازم جانبی
			InMainPage: false,
			ImageURL:   "uploads/SamsungCurved-Monitor-5.jpg",
		},
	}

	// حذف داده‌های قدیمی
	db.Exec("DELETE FROM products")

	for _, seedProduct := range products {
		// تبدیل SeedProduct به Product
		product := convertSeedToProduct(seedProduct)

		// اضافه کردن تاریخ‌ها
		product.CreatedAt = time.Now()
		product.UpdatedAt = time.Now()

		// ایجاد محصول در دیتابیس
		if err := db.Create(&product).Error; err != nil {
			return err
		}

	}

	return nil
}

// تبدیل SeedProduct به Product
func convertSeedToProduct(seed SeedProduct) models.Product {
	// تبدیل تگ‌ها به JSON
	tagsJSON, _ := json.Marshal(seed.Tags)

	// تبدیل مشخصات به JSON
	attributesJSON, _ := json.Marshal(seed.Attributes)

	return models.Product{
		Name:        seed.Name,
		Price:       seed.Price,
		Description: seed.Description,
		Tags:        datatypes.JSON(tagsJSON),
		Attributes:  datatypes.JSON(attributesJSON),
		CategoryID:  seed.CategoryID,
		InMainPage:  seed.InMainPage,
		ImageURL:    seed.ImageURL,
	}
}
