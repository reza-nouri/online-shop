import '@/app/assets/css/authentication.css'

export default function Auth() {
    return (
        <>
            {/* بخش احراز هویت */}
            <section className="auth-section">
                <div className="container">
                    <div
                        className="auth-container"
                        style={{
                            opacity: 1,
                            transform: "translateY(0px)",
                            transition: "opacity 0.8s, transform 0.8s"
                        }}
                    >
                        {/* سمت چپ - توضیحات */}
                        <div className="auth-left">
                            <div className="auth-left-content">
                                <h2>به خانواده بزرگ ما بپیوندید</h2>
                                <p>
                                    با ثبت نام در فروشگاه آنلاین ما، از مزایای ویژه‌ای بهره‌مند شوید و
                                    تجربه‌ای لذت‌بخش از خرید آنلاین داشته باشید.
                                </p>
                                <ul className="auth-features">
                                    <li>
                                        <i className="fas fa-check" />
                                        <span>تخفیف‌های ویژه برای اعضا</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        <span>پیگیری آسان سفارشات</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        <span>ذخیره آدرس‌های ارسال</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        <span>تاریخچه کامل خریدها</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        <span>پشتیبانی ویژه اعضا</span>
                                    </li>
                                </ul>
                                <div className="trust-badge">
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 15,
                                            background: "rgba(255,255,255,0.1)",
                                            padding: 15,
                                            borderRadius: 12,
                                            backdropFilter: "blur(10px)"
                                        }}
                                    >
                                        <i className="fas fa-shield-alt" style={{ fontSize: 32 }} />
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: 16 }}>
                                                امنیت کامل اطلاعات
                                            </div>
                                            <div style={{ fontSize: 14, opacity: "0.9" }}>
                                                اطلاعات شما نزد ما محفوظ است
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* سمت راست - فرم‌ها */}
                        <div className="auth-right">
                            {/* سوئیچ بین فرم‌ها */}
                            <div className="auth-switch">
                                <button className="auth-switch-btn active" id="loginBtn">
                                    ورود به حساب
                                </button>
                                <button className="auth-switch-btn" id="registerBtn">
                                    ثبت نام جدید
                                </button>
                            </div>
                            {/* فرم ورود */}
                            <form className="auth-form active" id="loginForm">
                                <h3>خوش آمدید!</h3>
                                <p>لطفاً برای ورود به حساب کاربری خود، اطلاعات زیر را وارد کنید.</p>
                                <div className="form-group">
                                    <label htmlFor="loginEmail" className="form-label">
                                        ایمیل یا شماره موبایل
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="text"
                                            id="loginEmail"
                                            className="form-input"
                                            placeholder="example@email.com"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="loginPassword" className="form-label">
                                        رمز عبور
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="password"
                                            id="loginPassword"
                                            className="form-input"
                                            placeholder="رمز عبور خود را وارد کنید"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-lock" />
                                        </span>
                                        <button
                                            type="button"
                                            className="password-toggle"
                                        >
                                            <i className="fas fa-eye" />
                                        </button>
                                    </div>
                                </div>
                                <div className="form-options">
                                    <div className="remember-me">
                                        <div className="remember-checkbox" id="rememberCheckbox">
                                            <i className="fas fa-check" style={{ fontSize: 12 }} />
                                        </div>
                                        <span>مرا به خاطر بسپار</span>
                                    </div>
                                    <a
                                        href="#"
                                        className="forgot-password"
                                    >
                                        رمز عبور را فراموش کرده‌اید؟
                                    </a>
                                </div>
                                <button type="submit" className="btn">
                                    <i className="fas fa-sign-in-alt" /> ورود به حساب
                                </button>
                                <div className="social-auth">
                                    <p>یا با استفاده از</p>
                                    <div className="social-buttons">
                                        <button
                                            type="button"
                                            className="social-btn google"
                                        >
                                            <i className="fab fa-google" />
                                        </button>
                                        <button
                                            type="button"
                                            className="social-btn facebook"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </button>
                                        <button
                                            type="button"
                                            className="social-btn twitter"
                                        >
                                            <i className="fab fa-twitter" />
                                        </button>
                                    </div>
                                </div>
                                <div className="form-footer">
                                    حساب کاربری ندارید؟{" "}
                                    <a href="#">
                                        همین حالا ثبت نام کنید
                                    </a>
                                </div>
                            </form>
                            {/* فرم ثبت نام */}
                            <form className="auth-form" id="registerForm">
                                <h3>ثبت نام جدید</h3>
                                <p>لطفاً اطلاعات زیر را برای ایجاد حساب کاربری جدید وارد کنید.</p>
                                <div className="form-group">
                                    <label htmlFor="registerName" className="form-label">
                                        نام کامل
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="text"
                                            id="registerName"
                                            className="form-input"
                                            placeholder="نام و نام خانوادگی"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registerEmail" className="form-label">
                                        ایمیل
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="email"
                                            id="registerEmail"
                                            className="form-input"
                                            placeholder="example@email.com"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-envelope" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registerPhone" className="form-label">
                                        شماره موبایل
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="tel"
                                            id="registerPhone"
                                            className="form-input"
                                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-phone" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registerPassword" className="form-label">
                                        رمز عبور
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="password"
                                            id="registerPassword"
                                            className="form-input"
                                            placeholder="حداقل ۸ کاراکتر"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-lock" />
                                        </span>
                                        <button
                                            type="button"
                                            className="password-toggle"
                                        >
                                            <i className="fas fa-eye" />
                                        </button>
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 13,
                                            color: "var(--gray-color)",
                                            marginTop: 5
                                        }}
                                    >
                                        رمز عبور باید شامل حداقل ۸ کاراکتر و ترکیبی از حروف و اعداد
                                        باشد.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registerConfirmPassword" className="form-label">
                                        تکرار رمز عبور
                                    </label>
                                    <div className="form-input-with-icon">
                                        <input
                                            type="password"
                                            id="registerConfirmPassword"
                                            className="form-input"
                                            placeholder="تکرار رمز عبور"
                                        />
                                        <span className="form-icon">
                                            <i className="fas fa-lock" />
                                        </span>
                                        <button
                                            type="button"
                                            className="password-toggle"
                                        >
                                            <i className="fas fa-eye" />
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginBottom: 30 }}>
                                    <div
                                        style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                                    >
                                        <div style={{ marginTop: 3 }}>
                                            <input
                                                type="checkbox"
                                                id="agreeTerms"
                                                style={{ width: 18, height: 18 }}
                                            />
                                        </div>
                                        <label
                                            htmlFor="agreeTerms"
                                            style={{
                                                fontSize: 15,
                                                color: "var(--dark-color)",
                                                cursor: "pointer"
                                            }}
                                        >
                                            با{" "}
                                            <a href="#" style={{ color: "var(--primary-color)" }}>
                                                شرایط و قوانین
                                            </a>{" "}
                                            سایت موافقم و حریم خصوصی را مطالعه کرده‌ام.
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn">
                                    <i className="fas fa-user-plus" /> ایجاد حساب کاربری
                                </button>
                                <div className="form-footer">
                                    قبلاً حساب کاربری دارید؟{" "}
                                    <a href="#">
                                        وارد شوید
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* مدال تبریک */}
            <div className="modal-overlay" id="successModal">
                <div className="modal">
                    <div className="modal-icon">
                        <i className="fas fa-check" />
                    </div>
                    <h3 id="modalTitle">ثبت نام موفق!</h3>
                    <p id="modalMessage">
                        حساب کاربری شما با موفقیت ایجاد شد. اکنون می‌توانید وارد حساب خود شوید.
                    </p>
                    <button
                        className="btn"
                        style={{ width: "auto", padding: "15px 40px" }}
                    >
                        <i className="fas fa-home" /> بازگشت به صفحه اصلی
                    </button>
                </div>
            </div>
            
        </>

    )
}