import Image from 'next/image'
import '@/app/assets/css/productviacat.css'
import laptopImage from '@/app/assets/images/desktop.jpg'; // یا مسیر نسبی
import apiClient from '../lib/axios';
import { Category, Product } from '../types/product';
import { AppConfig } from '../constant/constant';
import Link from 'next/link';

async function getProducts(): Promise<Product[] | null> {
    try {
        const res = await apiClient.get('/api/products');
        return res.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

async function getCategories(): Promise<Category[] | null> {
    try {
        const res = await apiClient.get('/api/category');
        return res.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

export default async function Products() {
    const products = await getProducts();
    const categories = await getCategories();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    }

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
                                    <Link href="/">
                                        <i className="fas fa-home" /> صفحه اصلی
                                    </Link>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-box" /> محصولات
                                    </a>
                                </li>
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
                            {categories?.map((category: Category) => (
                                <a href="#" className="subcategory-card">
                                    <div className="subcategory-icon">
                                        <i className="fas fa-laptop" />
                                    </div>
                                    <div className="subcategory-name">{category.name}</div>
                                </a>
                            ))

                            }
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
                                    {products?.map((product: Product) => (
                                        <div className="product-card" key={product.ID}>
                                            <div className="product-image">
                                                <img
                                                    src={AppConfig.backendFilrUrl + product?.imageUrl}
                                                    alt={product?.name}
                                                    height={220}
                                                    width={278}
                                                />
                                                <span className="product-badge">تخفیف ویژه</span>
                                            </div>
                                            <div className="product-info">
                                                <h3 className="product-title">
                                                    {product.name}
                                                </h3>

                                                <div className="product-price">
                                                    <div>
                                                        <span className="current-price">{formatPrice(product?.price!)}</span>
                                                    </div>
                                                </div>
                                                <button className="add-to-cart">
                                                    <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                                </button>
                                            </div>
                                        </div>
                                    ))

                                    }
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
