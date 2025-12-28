export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>درباره فروشگاه</h3>
                        <p>
                            فروشگاه آنلاین ما با بیش از ۱۰ سال سابقه در زمینه فروش محصولات با
                            کیفیت، همواره سعی در ارائه بهترین خدمات به مشتریان خود داشته است.
                        </p>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-telegram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-whatsapp" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>لینک‌های سریع</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#">صفحه اصلی</a>
                            </li>
                            <li>
                                <a href="#">محصولات پرفروش</a>
                            </li>
                            <li>
                                <a href="#">تخفیف‌های ویژه</a>
                            </li>
                            <li>
                                <a href="#">مقالات آموزشی</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>خدمات مشتریان</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#">پیگیری سفارش</a>
                            </li>
                            <li>
                                <a href="#">راهنمای خرید</a>
                            </li>
                            <li>
                                <a href="#">سوالات متداول</a>
                            </li>
                            <li>
                                <a href="#">شرایط بازگرداندن کالا</a>
                            </li>
                            <li>
                                <a href="#">حریم خصوصی</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>تماس با ما</h3>
                        <ul className="footer-links">
                            <li>
                                <i className="fas fa-map-marker-alt" /> تهران، خیابان آزادی،
                                دانشگاه صنعتی شریف
                            </li>
                            <li>
                                <i className="fas fa-phone" /> ۰۲۱-۱۲۳۴۵۶۷۸
                            </li>
                            <li>
                                <i className="fas fa-envelope" /> info@onlinestore.ir
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>کلیه حقوق این وبسایت متعلق به فروشگاه آنلاین می‌باشد. © ۲۰۲۳</p>
                </div>
            </div>
        </footer>
    )
}