import '@/app/assets/css/contact.css'

export default function Content() {
    return (
        <>
            {/* هیرو بخش پشتیبانی */}
            <section className="support-hero">
                <div className="container">
                    <div className="support-hero-content">
                        <h1>
                            مرکز <span>پشتیبانی</span> مشتریان
                        </h1>
                        <p>
                            ما اینجا هستیم تا به تمام سوالات شما پاسخ دهیم. تیم پشتیبانی ۲۴/۷
                            آماده کمک به شماست.
                        </p>
                        <div className="support-stats">
                            <div className="stat-item">
                                <div className="stat-value">۹۸.۵٪</div>
                                <div className="stat-label">رضایت مشتریان</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">۵ دقیقه</div>
                                <div className="stat-label">میانگین زمان پاسخ</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">۲۴/۷</div>
                                <div className="stat-label">پشتیبانی آنلاین</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* بخش راه‌های ارتباطی */}
            <section className="contact-methods">
                <div className="container">
                    <h2 className="section-title">راه‌های ارتباط با ما</h2>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-phone-alt" />
                            </div>
                            <h3>تلفن پشتیبانی</h3>
                            <p>برای مشاوره و پشتیبانی تلفنی با ما تماس بگیرید.</p>
                            <div className="contact-info">۰۲۱-۱۲۳۴۵۶۷۸</div>
                            <div className="contact-time">پاسخگویی ۲۴ ساعته</div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-envelope" />
                            </div>
                            <h3>ایمیل</h3>
                            <p>برای پیگیری سفارشات و ارسال درخواست از طریق ایمیل اقدام کنید.</p>
                            <div className="contact-info">support@onlinestore.ir</div>
                            <div className="contact-time">پاسخ در کمتر از ۲ ساعت</div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-comments" />
                            </div>
                            <h3>چت آنلاین</h3>
                            <p>
                                برای دریافت سریع پاسخ با کارشناسان ما به صورت آنلاین گفتگو کنید.
                            </p>
                            <div className="contact-info">شروع گفتگو</div>
                            <div className="contact-time">همین حالا آنلاین هستیم</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* بخش فرم تماس */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="form-container">
                        <h2 className="form-title">فرم تماس با پشتیبانی</h2>
                        <form id="contactForm">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        نام کامل
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-input"
                                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        ایمیل
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-input"
                                        placeholder="example@email.com"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">
                                        شماره تماس
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-input"
                                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">
                                        موضوع
                                    </label>
                                    <select id="subject" className="form-select">
                                        <option value="">انتخاب موضوع</option>
                                        <option value="order">پیگیری سفارش</option>
                                        <option value="return">مرجوعی کالا</option>
                                        <option value="technical">مشکل فنی</option>
                                        <option value="suggestion">پیشنهاد و انتقاد</option>
                                        <option value="other">سایر</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    پیام شما
                                </label>
                                <textarea
                                    id="message"
                                    className="form-textarea"
                                    placeholder="پیام خود را با جزئیات کامل بنویسید..."
                                    
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-group" style={{ textAlign: "center" }}>
                                <button type="submit" className="btn">
                                    <i className="fas fa-paper-plane" /> ارسال پیام
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* بخش سوالات متداول */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">سوالات متداول</h2>
                    <div className="faq-container">
                        {/* سوال ۱ */}
                        <div className="faq-item" id="faq1">
                            <div className="faq-question">
                                <h3>چگونه می‌توانم سفارشم را پیگیری کنم؟</h3>
                                <span className="faq-icon">
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    برای پیگیری سفارش خود می‌توانید وارد حساب کاربری خود شده و از بخش
                                    "سفارشات من" وضعیت سفارش خود را مشاهده کنید. همچنین کد پیگیری که
                                    از طریق پیامک دریافت کرده‌اید را در بخش "پیگیری سفارش" در صفحه
                                    اصلی وارد نمایید.
                                </p>
                            </div>
                        </div>
                        {/* سوال ۲ */}
                        <div className="faq-item" id="faq2">
                            <div className="faq-question" >
                                <h3>شرایط بازگرداندن کالا چگونه است؟</h3>
                                <span className="faq-icon">
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    شما تا ۷ روز پس از دریافت کالا می‌توانید درخواست بازگرداندن کالا
                                    دهید. کالا باید بدون کوچکترین آسیبی و در بسته‌بندی اصلی خود
                                    بازگردانده شود. هزینه ارسال مرجوعی بر عهده مشتری است. پس از بررسی
                                    کالا در انبار، مبلغ به حساب شما بازگردانده می‌شود.
                                </p>
                            </div>
                        </div>
                        {/* سوال ۳ */}
                        <div className="faq-item" id="faq3">
                            <div className="faq-question">
                                <h3>آیا امکان خرید به صورت اقساطی وجود دارد؟</h3>
                                <span className="faq-icon">
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    بله، برای خریدهای بالای ۵ میلیون تومان امکان پرداخت اقساطی تا ۱۲
                                    ماه با کارت‌های عضو شتاب فراهم است. برای اطلاعات بیشتر می‌توانید
                                    با واحد فروش تماس بگیرید.
                                </p>
                            </div>
                        </div>
                        {/* سوال ۴ */}
                        <div className="faq-item" id="faq4">
                            <div className="faq-question">
                                <h3>زمان ارسال سفارشات چقدر است؟</h3>
                                <span className="faq-icon">
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    سفارشات داخل تهران حداکثر تا ۲۴ ساعت و سفارشات شهرستان حداکثر تا
                                    ۷۲ ساعت پس از ثبت سفارش ارسال می‌شوند. در ایام تعطیل و روزهای خاص
                                    ممکن است این زمان کمی بیشتر باشد.
                                </p>
                            </div>
                        </div>
                        {/* سوال ۵ */}
                        <div className="faq-item" id="faq5">
                            <div className="faq-question">
                                <h3>آیا گارانتی محصولات را ارائه می‌دهید؟</h3>
                                <span className="faq-icon">
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    بله، تمام محصولات الکترونیکی با گارانتی ۱۸ ماهه و محصولات دیگر با
                                    گارانتی ۱۲ ماهه ارائه می‌شوند. گارانتی معتبر همراه با فاکتور رسمی
                                    برای شما ارسال می‌شود.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* بخش سیستم پشتیبانی آنلاین */}
            <section className="live-support">
                <div className="container">
                    <div className="live-support-content">
                        <div className="support-status">
                            <div
                                className="status-indicator"
                                style={{ backgroundColor: "rgb(255, 78, 98)" }}
                            />
                            <span>هم‌اکنون آفلاین هستیم - در ساعات کاری بازمی‌گردیم</span>
                        </div>
                        <h2>پشتیبانی آنلاین</h2>
                        <p>
                            کارشناسان ما هم‌اکنون آماده پاسخگویی به سوالات شما هستند. برای شروع
                            گفتگو، دکمه زیر را بفشارید.
                        </p>
                        <button
                            className="btn"
                            style={{ background: "white", color: "var(--info-color)" }}
                        >
                            <i className="fas fa-comment-dots" /> شروع گفتگوی آنلاین
                        </button>
                        <div className="support-agents">
                            <div className="agent-card">
                                <div className="agent-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="کارشناس پشتیبانی"
                                    />
                                </div>
                                <div className="agent-name">سارا محمدی</div>
                                <div className="agent-role">کارشناس فروش</div>
                            </div>
                            <div className="agent-card">
                                <div className="agent-avatar">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                        alt="کارشناس پشتیبانی"
                                    />
                                </div>
                                <div className="agent-name">علی رضایی</div>
                                <div className="agent-role">کارشناس فنی</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* بخش نقشه */}
            <section className="map-section">
                <div className="container">
                    <h2 className="section-title">دفتر مرکزی ما</h2>
                    <div className="map-container">
                        {/* در حالت واقعی اینجا نقشه گوگل قرار می‌گیرد */}
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                background:
                                    "linear-gradient(135deg, rgba(23, 162, 184, 0.1), rgba(37, 117, 252, 0.1))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--gray-color)",
                                fontSize: 18
                            }}
                        >
                            <div style={{ textAlign: "center", padding: 20 }}>
                                <i
                                    className="fas fa-map-marker-alt"
                                    style={{
                                        fontSize: 50,
                                        color: "var(--info-color)",
                                        marginBottom: 20
                                    }}
                                />
                                <p>
                                    تهران، خیابان آزادی، دانشگاه صنعتی شریف، ساختمان مرکزی، طبقه سوم
                                </p>
                                <p style={{ marginTop: 10 }}>
                                    📍 نقشه گوگل در اینجا نمایش داده می‌شود
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}