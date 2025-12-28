import Image from 'next/image'
import '@/app/assets/css/productviacat.css'
import laptopImage from '@/app/assets/images/desktop.jpg'; // یا مسیر نسبی

export default function Products() {
    return (
        <>
            <>
                {/* بخش دسته‌بندی محصولات */}
                <section className="category-section">
                    <div className="container">
                        {/* مسیر ناوبری */}
                        <div className="breadcrumb">
                            <ul>
                                <li>
                                    <a href="index.html">
                                        <i className="fas fa-home" /> صفحه اصلی
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-box" /> محصولات
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-laptop" /> الکترونیک
                                    </a>
                                </li>
                                <li>لپ‌تاپ و کامپیوتر</li>
                            </ul>
                        </div>
                        {/* هدر دسته‌بندی */}
                        <div className="category-header">
                            <div className="category-title">
                                <div className="category-icon">
                                    <i className="fas fa-laptop" />
                                </div>
                                <span>لپ‌تاپ و کامپیوتر</span>
                            </div>
                           
                        </div>
                        {/* زیر دسته‌ها */}
                        <div className="subcategories">
                            <a href="#" className="subcategory-card">
                                <div className="subcategory-icon">
                                    <i className="fas fa-laptop" />
                                </div>
                                <div className="subcategory-name">لپ‌تاپ</div>
                                <div className="subcategory-count">۱۸ محصول</div>
                            </a>
                            <a href="#" className="subcategory-card">
                                <div className="subcategory-icon">
                                    <i className="fas fa-desktop" />
                                </div>
                                <div className="subcategory-name">کامپیوتر رومیزی</div>
                                <div className="subcategory-count">۱۲ محصول</div>
                            </a>
                            <a href="#" className="subcategory-card">
                                <div className="subcategory-icon">
                                    <i className="fas fa-gamepad" />
                                </div>
                                <div className="subcategory-name">کامپیوتر گیمینگ</div>
                                <div className="subcategory-count">۸ محصول</div>
                            </a>
                            <a href="#" className="subcategory-card">
                                <div className="subcategory-icon">
                                    <i className="fas fa-server" />
                                </div>
                                <div className="subcategory-name">قطعات و لوازم جانبی</div>
                                <div className="subcategory-count">۲۴ محصول</div>
                            </a>
                        </div>
                        <div className="category-container">
                            {/* فیلتر سایدبار */}
                            <aside className="filter-sidebar">
                                <div className="filter-header">
                                    <h3 className="filter-title">فیلتر محصولات</h3>
                                </div>
                                {/* فیلتر دسته‌بندی */}
                                <div className="filter-group">
                                    <div className="group-title active">
                                        <span>دسته‌بندی</span>
                                    </div>
                                    <div className="filter-options active">
                                        <ul className="filter-list">
                                            <li className="filter-item">
                                                <div className="filter-checkbox checked" />
                                                <label className="filter-label">لپ‌تاپ</label>
                                                <span className="filter-count">(۱۸)</span>
                                            </li>
                                            <li className="filter-item">
                                                <div className="filter-checkbox" />
                                                <label className="filter-label">کامپیوتر رومیزی</label>
                                                <span className="filter-count">(۱۲)</span>
                                            </li>
                                            <li className="filter-item">
                                                <div className="filter-checkbox" />
                                                <label className="filter-label">کامپیوتر گیمینگ</label>
                                                <span className="filter-count">(۸)</span>
                                            </li>
                                            <li className="filter-item">
                                                <div className="filter-checkbox" />
                                                <label className="filter-label">قطعات جانبی</label>
                                                <span className="filter-count">(۲۴)</span>
                                            </li>
                                            <li className="filter-item">
                                                <div className="filter-checkbox" />
                                                <label className="filter-label">مانیتور</label>
                                                <span className="filter-count">(۱۴)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-buttons">
                                    <button className="btn btn-primary">
                                        <i className="fas fa-filter" /> اعمال فیلترها
                                    </button>
                                    <button className="btn btn-outline">
                                        <i className="fas fa-redo" /> بازنشانی
                                    </button>
                                </div>
                            </aside>
                            {/* بخش محصولات */}
                            <main className="products-area">
                                <div className="products-header">
                                    <div className="sort-options">
                                        <select className="sort-select">
                                            <option>مرتب‌سازی بر اساس: پیش‌فرض</option>
                                            <option>پرفروش‌ترین</option>
                                            <option>محبوب‌ترین</option>
                                            <option>جدیدترین</option>
                                            <option>ارزان‌ترین</option>
                                            <option>گران‌ترین</option>
                                            <option>بیشترین تخفیف</option>
                                        </select>
                                        <div className="view-options">
                                            <button className="view-btn active" data-view="grid">
                                                <i className="fas fa-th-large" />
                                            </button>
                                            <button className="view-btn" data-view="list">
                                                <i className="fas fa-list" />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{ color: "var(--gray-color)" }}>
                                            نمایش ۱-۱۲ از ۴۲ محصول
                                        </span>
                                    </div>
                                </div>
                                <div className="products-grid" id="productsContainer">
                                    {/* محصول 1 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">تخفیف ویژه</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                لپ‌تاپ گیمینگ ایسوس ROG Strix G15
                                            </h3>
                                            <div className="product-specs">
                                                پردازنده Core i7 - رم ۱۶GB - حافظه ۱TB SSD - کارت گرافیک RTX
                                                3060
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۶۴,۹۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۷۲,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 2 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">جدید</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">لپ‌تاپ اپل مک‌بوک پرو ۱۴ اینچ</h3>
                                            <div className="product-specs">
                                                چیپ M2 Pro - رم ۱۶GB - حافظه ۵۱۲GB SSD - نمایشگر Liquid Retina
                                                XDR
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۸۹,۹۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۹۵,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 3 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">پرفروش</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">لپ‌تاپ ایسر Nitro 5 گیمینگ</h3>
                                            <div className="product-specs">
                                                پردازنده Core i5 - رم ۸GB - حافظه ۵۱۲GB SSD - کارت گرافیک GTX
                                                1650
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۳۲,۵۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۳۸,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 4 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">محصول منتخب</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">لپ‌تاپ لنوو Legion 5 Pro</h3>
                                            <div className="product-specs">
                                                پردازنده Ryzen 7 - رم ۱۶GB - حافظه ۱TB SSD - کارت گرافیک RTX
                                                3070
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۷۵,۹۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۸۴,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 5 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">فروش ویژه</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">کامپیوتر رومیزی گیمینگ آماده</h3>
                                            <div className="product-specs">
                                                پردازنده Core i9 - رم ۳۲GB - حافظه ۲TB SSD - کارت گرافیک RTX
                                                4080
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۱۵۲,۰۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۱۷۰,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 6 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">پرطرفدار</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                لپ‌تاپ مایکروسافت سرفیس لپ‌تاپ ۴
                                            </h3>
                                            <div className="product-specs">
                                                پردازنده Core i7 - رم ۱۶GB - حافظه ۵۱۲GB SSD - تاچ اسکرین
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۶۸,۵۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۷۵,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 7 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">تخفیف</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">لپ‌تاپ دل XPS 13</h3>
                                            <div className="product-specs">
                                                پردازنده Core i5 - رم ۸GB - حافظه ۲۵۶GB SSD - نمایشگر ۴K
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۴۵,۹۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۵۲,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                    {/* محصول 8 */}
                                    <div className="product-card">
                                        <div className="product-image">
                                            <Image
                                                src={laptopImage}
                                                alt="لپ‌تاپ گیمینگ"
                                                height={220}
                                                width={278}
                                            />
                                            <span className="product-badge">جدیدترین</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">لپ‌تاپ اچ‌پی Spectre x360</h3>
                                            <div className="product-specs">
                                                پردازنده Core i7 - رم ۱۶GB - حافظه ۱TB SSD - قلم دیجیتال
                                            </div>
                                            <div className="product-price">
                                                <div>
                                                    <span className="current-price">۷۲,۰۰۰,۰۰۰ تومان</span>
                                                    <span className="old-price">۸۰,۰۰۰,۰۰۰ تومان</span>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">
                                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* پینیشن */}
                                <div className="pagination">
                                    <button className="page-btn disabled">
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                    <button className="page-btn active">۱</button>
                                    <button className="page-btn">۲</button>
                                    <button className="page-btn">۳</button>
                                    <span className="page-dots">...</span>
                                    <button className="page-btn">۴</button>
                                    <button className="page-btn">
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                </div>
                                {/* تبلیغات دسته‌بندی */}
                                <div className="category-promo">
                                    <div className="promo-content">
                                        <div className="promo-badge">تخفیف ویژه ۲۵٪</div>
                                        <h2 className="promo-title">
                                            بهترین لپ‌تاپ‌های گیمینگ با قیمت استثنایی
                                        </h2>
                                        <p className="promo-text">
                                            الان بهترین فرصت برای ارتقاء سیستم گیمینگ شماست! با خرید از این
                                            مجموعه، از گارانتی ۳ ساله و پشتیبانی ۲۴ ساعته بهره‌مند شوید.
                                        </p>
                                        <button
                                            className="btn btn-outline"
                                            style={{ borderColor: "white", color: "white" }}
                                        >
                                            <i className="fas fa-fire" /> مشاهده پیشنهادات ویژه
                                        </button>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </section>
            </>

        </>

    );
}
