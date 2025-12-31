import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-top">
                    <div className="logo">
                        <i className="fas fa-shopping-bag" />
                        فروشگاه آنلاین
                    </div>
                    <div className="search-bar">
                        <button>
                            <i className="fas fa-search" />
                        </button>
                        <input type="text" placeholder="جستجوی محصولات..." />
                    </div>
                    <div className="user-actions">
                        <a href="accounting.html" className="user-icon">
                            <i className="fas fa-user" />
                        </a>
                        <a href="accounting.html" className="wishlist-icon">
                            <i className="fas fa-heart" />
                        </a>
                        <a href="accounting.html" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                            <span className="cart-count">۳</span>
                        </a>
                    </div>
                    {/* دکمه منوی موبایل */}
                    <button className="mobile-menu-btn" id="mobileMenuBtn">
                        <i className="fas fa-bars" />
                    </button>
                </div>
                {/* نوبار تو در تو */}
                <nav>
                    <div className="navbar" id="navbar">
                        <ul className="nav-links">
                            <li>
                                <Link href="/">
                                    <i className="fas fa-home" /> صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Link href="/products">
                                    <i className="fas fa-box" /> محصولات
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/offers">
                                    <i className="fas fa-percent" /> تخفیف‌ها
                                </Link>
                            </li>
                            <li className="dropdown">
                                <a href="#">
                                    <i className="fas fa-list" /> دسته‌بندی{" "}
                                    <i className="fas fa-chevron-down" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="productviacat.html">
                                            <i className="fas fa-laptop" /> الکترونیک
                                        </a>
                                    </li>
                                    <li>
                                        <a href="productviacat.html">
                                            <i className="fas fa-home" /> خانه و آشپزخانه
                                        </a>
                                    </li>
                                    <li>
                                        <a href="productviacat.html">
                                            <i className="fas fa-tshirt" /> مد و پوشاک
                                        </a>
                                    </li>
                                    <li>
                                        <a href="productviacat.html">
                                            <i className="fas fa-shopping-cart" /> کالای سوپرمارکتی
                                        </a>
                                    </li>
                                    <li>
                                        <a href="productviacat.html">
                                            <i className="fas fa-running" /> ورزش و سفر
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <i className="fas fa-headset" /> پشتیبانی
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth" className="auth-simple-link">
                                    <i className="fas fa-user-circle" />
                                    <span>ورود / ثبت نام</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* overlay برای بستن منو */}
            <div className="overlay" id="overlay" />
        </header>
    )
}