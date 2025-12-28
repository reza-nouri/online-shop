import '@/app/assets/css/offers.css'

export default function Offers() {
    return (
        <>
            {/* هیرو بخش تخفیف‌ها */}
            <section className="discounts-hero">
                <div className="container">
                    <div className="discounts-hero-content">
                        <h1>
                            تخفیف‌های <span>شگفت‌انگیز</span> ویژه شما
                        </h1>
                        <p>
                            بهترین فرصت برای خرید با تخفیف‌های استثنایی تا ۸۰٪! زمان محدود است،
                            فرصت را از دست ندهید.
                        </p>
                        <div className="countdown-timer">
                            <div className="countdown-item">
                                <div className="countdown-value" id="days">
                                    ۰۵
                                </div>
                                <div className="countdown-label">روز</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-value" id="hours">
                                    ۱۲
                                </div>
                                <div className="countdown-label">ساعت</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-value" id="minutes">
                                    ۳۰
                                </div>
                                <div className="countdown-label">دقیقه</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-value" id="seconds">
                                    ۴۵
                                </div>
                                <div className="countdown-label">ثانیه</div>
                            </div>
                        </div>
                        <button className="btn">
                            <i className="fas fa-bolt" /> مشاهده همه تخفیف‌ها
                        </button>
                    </div>
                </div>
            </section>
            {/* تب‌های دسته‌بندی تخفیف‌ها */}
            <div className="container">
                <div className="discount-tabs">
                    <div className="tabs-header">
                        <h2 className="section-title">تخفیف‌های ویژه</h2>
                        <div className="tabs-navigation">
                            <button className="tab-btn active" data-category="all">
                                همه
                            </button>
                            <button className="tab-btn" data-category="electronics">
                                الکترونیک
                            </button>
                            <button className="tab-btn" data-category="fashion">
                                مد و پوشاک
                            </button>
                            <button className="tab-btn" data-category="home">
                                خانه و آشپزخانه
                            </button>
                            <button className="tab-btn" data-category="sports">
                                ورزشی
                            </button>
                        </div>
                    </div>
                    {/* تخفیف ویژه برتر */}
                    <div className="featured-discount">
                        <div className="featured-discount-content">
                            <div className="featured-discount-text">
                                <span className="featured-discount-badge">تخفیف پایان فصل</span>
                                <h2>تا ۷۰٪ تخفیف روی تمام محصولات الکترونیکی</h2>
                                <p>
                                    فقط تا پایان این هفته فرصت دارید از بهترین تخفیف سال بهره‌مند
                                    شوید. لپ‌تاپ، موبایل، هدفون و سایر لوازم الکترونیکی با قیمت
                                    باورنکردنی!
                                </p>
                                <button className="btn">
                                    <i className="fas fa-shopping-cart" /> خرید سریع
                                </button>
                            </div>
                            <div className="featured-discount-image">
                                <img
                                    src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="محصولات الکترونیکی"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* بخش محصولات تخفیف دار */}
            <section className="discount-products">
                <div className="container">
                    <div className="products-grid" id="discountProducts">
                        {/* محصول 1 */}
                        <div className="product-card" data-category="electronics">
                            <div className="product-image">
                                <img
                                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="لپ‌تاپ گیمینگ"
                                />
                                <span className="product-badge">تخفیف ویژه</span>
                                <div className="discount-percent">۴۰٪</div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">لپ‌تاپ گیمینگ ایسوس ROG Strix G15</h3>
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                    <span>(۴.۵)</span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">۶۴,۹۰۰,۰۰۰ تومان</span>
                                    <span className="old-price">۷۲,۰۰۰,۰۰۰ تومان</span>
                                </div>
                                <button className="add-to-cart">
                                    <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                        {/* محصول 2 */}
                        <div className="product-card" data-category="electronics">
                            <div className="product-image">
                                <img
                                    src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="ماوس گیمینگ"
                                />
                                <span className="product-badge">پرفروش</span>
                                <div className="discount-percent">۳۵٪</div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">ماوس گیمینگ حرفه‌ای با ۱۲ دکمه</h3>
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span>(۵.۰)</span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">۱,۲۸۰,۰۰۰ تومان</span>
                                    <span className="old-price">۱,۷۵۰,۰۰۰ تومان</span>
                                </div>
                                <button className="add-to-cart">
                                    <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                        {/* محصول 3 */}
                        <div className="product-card" data-category="fashion">
                            <div className="product-image">
                                <img
                                    src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="کفش نایک"
                                />
                                <span className="product-badge">پرطرفدار</span>
                                <div className="discount-percent">۵۰٪</div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">کفش ورزشی نایک ایر مکس ۲۰۲۳</h3>
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <span>(۴.۰)</span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">۴,۵۰۰,۰۰۰ تومان</span>
                                    <span className="old-price">۶,۲۰۰,۰۰۰ تومان</span>
                                </div>
                                <button className="add-to-cart">
                                    <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                        {/* محصول 4 */}
                        <div className="product-card" data-category="home">
                            <div className="product-image">
                                <img
                                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="مخلوط کن"
                                />
                                <span className="product-badge">جدید</span>
                                <div className="discount-percent">۳۰٪</div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">مخلوط کن حرفه‌ای با ۶ تیغه استیل</h3>
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                    <span>(۴.۷)</span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">۱,۸۵۰,۰۰۰ تومان</span>
                                    <span className="old-price">۲,۴۰۰,۰۰۰ تومان</span>
                                </div>
                                <button className="add-to-cart">
                                    <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* بخش تخفیف‌های لحظه‌ای */}
            <section className="flash-sales">
                <div className="container">
                    <div className="flash-sales-header">
                        <div className="flash-title">
                            <div className="flash-icon">
                                <i className="fas fa-bolt" />
                            </div>
                            <div>
                                <h2 className="section-title">فروش لحظه‌ای</h2>
                                <p>تخفیف‌های ویژه با زمان محدود</p>
                            </div>
                        </div>
                        <div className="countdown-timer">
                            <div className="countdown-item">
                                <div className="countdown-value" id="flash-hours">
                                    ۰۳
                                </div>
                                <div className="countdown-label">ساعت</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-value" id="flash-minutes">
                                    ۱۵
                                </div>
                                <div className="countdown-label">دقیقه</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-value" id="flash-seconds">
                                    ۳۰
                                </div>
                                <div className="countdown-label">ثانیه</div>
                            </div>
                        </div>
                    </div>
                    <div className="products-grid">
                        {/* محصول لحظه‌ای 1 */}
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="ساعت هوشمند"
                                />
                                <span className="product-badge">فروش لحظه‌ای</span>
                                <div className="discount-percent">۶۰٪</div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">
                                    ساعت هوشمند اندروید با گارانتی ۲۴ ماهه
                                </h3>
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span>(۵.۰)</span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">۴,۳۲۰,۰۰۰ تومان</span>
                                    <span className="old-price">۵,۵۰۰,۰۰۰ تومان</span>
                                </div>
                                <button className="add-to-cart">
                                    <i className="fas fa-cart-plus" /> خرید سریع
                                </button>
                            </div>
                        </div>
                        {/* محصول لحظه‌ای 2 */}
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="هدفون"
                                />
                                <span className="product-badge">فروش لحظه‌ای</span>
                                <div className="discount-percent">۵۵٪</div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">هدفون بی‌سیم نویز کانسلیگ حرفه‌ای</h3>
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                    <span>(۴.۵)</span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">۲,۴۹۰,۰۰۰ تومان</span>
                                    <span className="old-price">۳,۲۰۰,۰۰۰ تومان</span>
                                </div>
                                <button className="add-to-cart">
                                    <i className="fas fa-cart-plus" /> خرید سریع
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* تبلیغات تخفیف */}
            <div className="container">
                <div className="discount-promo">
                    <div className="promo-card">
                        <div className="promo-icon">
                            <i className="fas fa-truck" />
                        </div>
                        <h3>ارسال رایگان</h3>
                        <p>برای تمام سفارشات بالای ۵۰۰ هزار تومان، ارسال کاملاً رایگان است.</p>
                        <button
                            className="btn"
                            style={{ backgroundColor: "white", color: "var(--primary-color)" }}
                        >
                            <i className="fas fa-shopping-cart" /> خرید کنید
                        </button>
                    </div>
                    <div className="promo-card">
                        <div className="promo-icon">
                            <i className="fas fa-gift" />
                        </div>
                        <h3>هدیه ویژه</h3>
                        <p>با هر خرید بالای ۲ میلیون تومان، یک هدیه شگفت‌انگیز دریافت کنید.</p>
                        <button
                            className="btn"
                            style={{ backgroundColor: "white", color: "#ff6b35" }}
                        >
                            <i className="fas fa-gift" /> دریافت هدیه
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}