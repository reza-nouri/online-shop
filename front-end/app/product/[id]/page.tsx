import apiClient from "@/app/lib/axios";
import { Product } from "@/app/types/product";
import "@/app/assets/css/product.css"
import { AppConfig } from "@/app/constant/constant";
import Link from "next/link";
import ProductTabs from "./ProductTabs";

async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await apiClient.get('/api/products/' + id);
        return res.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const par = await params;
    const product = await getProduct(par.id);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    }

    return (
        <section className="product-detail-section">
            <div className="container">
                {/* مسیر ناوبری */}
                <div className="breadcrumb">
                    <ul>
                        <li>
                            <Link href="/">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href="#">{product?.Category?.name}</Link>
                        </li>
                        <li>{product?.name}</li>
                    </ul>
                </div>
                {/* محتوای اصلی محصول */}
                <div className="product-detail-container">
                    {/* گالری محصول */}
                    <div className="product-gallery">
                        <div className="main-image">
                            <img
                                id="mainImage"
                                src={AppConfig.backendFilrUrl + product?.imageUrl}
                                alt={product?.name}
                            />
                            <span className="product-badge">محصول ویژه</span>
                        </div>
                    </div>
                    {/* اطلاعات محصول */}
                    <div className="product-info">
                        <h1 className="product-title">
                            {product?.name}
                        </h1>
                        <div className="product-meta">
                            <div className="product-code">
                                کد محصول: <span>{product?.ID}</span>
                            </div>
                        </div>
                        <p className="product-description">
                            {product?.description}
                        </p>
                        <div className="product-features">
                            <ul className="feature-list">
                                {product?.tags.map((value, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check-circle" />
                                        {value}
                                    </li>
                                ))

                                }
                            </ul>
                        </div>
                        <div className="product-price-section">
                            <div className="price-row">
                                <div>
                                    <span className="current-price">{formatPrice(product?.price!)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-actions">
                            <div className="quantity-selector">
                                <button className="quantity-btn minus-btn">-</button>
                                <input
                                    type="text"
                                    className="quantity-input"
                                    defaultValue={1}
                                    readOnly
                                />
                                <button className="quantity-btn plus-btn">+</button>
                            </div>
                            <button className="btn btn-primary d-block" id="addToCartBtn">
                                <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                            </button>
                        </div>
                    </div>
                </div>
                {/* تب‌های اطلاعات محصول */}
                <ProductTabs product={product} />
            </div>
        </section>

    )
}