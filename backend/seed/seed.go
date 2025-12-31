// ------------------
// seed/seed.go
// ------------------
package seed

import (
	"online-shop/config"
	"online-shop/models"

	"golang.org/x/crypto/bcrypt"
)

func Seed() {
	// جلوگیری از تکرار
	var count int64
	config.DB.Model(&models.User{}).Count(&count)
	if count > 0 {
		return
	}

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

	// محصولات نمونه
	categories := []models.Category{
		{Name: "موبایل"},
		{Name: "لپ‌تاپ"},
		{Name: "تبلت"},
	}

	// ذخیره با Preload
	config.DB.Create(&categories)

	// محصولات نمونه
	products := []models.Product{
		{Name: "گوشی سامسونگ Galaxy A55", Description: "گوشی موبایل سامسونگ مدل Galaxy A55 نسخه‌ی به روزشده‌ی میان‌رده‌ی محبوب A54 محسوب می‌شود. این گوشی با بهره‌مندی از نمایشگر 6.6 اینچی Super AMOLED با کیفیت با نرخ تازه‌سازی 120 فریم برثانیه یکی از بهترین نمایشگرهای میانرده را دارد. در بخش دوربین، رزولوشن 50 مگاپیکسلی و لرزشگیر اپتیکال تصاویر بسیار با کیفیتی ثبت می‌کند و باتری 5000 میلی‌آمپرساعتی آن به راحتی تا یک روز شارژدهی دارد. اما یکی از مهمترین پیشرفت‌های این گوشی در بخش طراحی است و به قاب پشتی شیشه‌ای و فریم آلومینیومی مجهز شده است که علاوه بر زیبایی، استحکام بسیار خوبی به آن بخشیده است. در مجموع، Galaxy A55 با همه‌ی امکانات مناسبی که دارد توانسته است در مدت کمی به یکی از پرفروش‌ترین میان‌رده‌های بازار تبدیل شده است.",
			Price: 2000000, ImageURL: "uploads/a55.jpg", CategoryID: categories[0].ID, InMainPage: true},
		{Name: "لپ‌تاپ اپل مدل MacBook Air MW0Y3 2025 LLA", Description: "مک‌بوک ایر مدل 2025 با نمایشگر ۱۳.۶ اینچی، یکی از جدیدترین لپ‌تاپ‌های شرکت اپل است که با طراحی بسیار باریک، سبک و مدرن عرضه شده است. این مدل به چیپ قدرتمند Apple M4 مجهز شده که عملکردی سریع و مصرف انرژی بهینه‌تری نسبت به نسل‌های قبلی ارائه می‌دهد. نمایشگر Liquid Retina با وضوح بالا، رنگ‌هایی زنده و دقیق را ارائه می‌دهد که آن را برای تماشای فیلم، طراحی گرافیکی، و کارهای روزمره ایده‌آل می‌سازد.",
			Price: 127000000, ImageURL: "uploads/mackbook.jpg", CategoryID: categories[1].ID, InMainPage: true},
		{Name: "تبلت ۱۴.۶ اینچ سامسونگ مدل Galaxy Tab S10 Ultra Wi-Fi", Description: "تبلت پرچمدار سامسونگ گلکسی Tab S10 Ultra با ابعاد غول‌پیکر و سخت‌افزار قدرتمندش حتی می‌تواند نقش یک لپ‌تاپ را ایفا کند. بدنه تمام‌فلزی خوش‌ساخت این تبلت با بهره‌مندی از استاندارد IP68 حس پریمیوم و لوکسی را القا می‌کند. وزن ۷۱۸ گرمی این تبلت به‌خودی خود زیاد است؛ اما با در نظر گرفتن کاربری و قابلیت‌های آن، می‌توانید گلکسی Tab S10 Ultra را در کیف و کوله‌های مخصوص برای حمل‌ونقل راحت قرار دهید.",
			Price: 5000000, ImageURL: "uploads/galaxy-tab.jpg", CategoryID: categories[2].ID, InMainPage: true},
	}

	config.DB.Create(&products)
}
