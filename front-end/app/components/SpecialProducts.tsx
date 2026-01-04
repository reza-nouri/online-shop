"use client";

import { useEffect, useState } from "react"
import apiClient from "../lib/axios";
import { Product } from "../types/product";
import { AppConfig } from "../constant/constant";
import Link from "next/link";

export default function SpecialProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiClient.get<Product[]>('/api/products/specials');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching special products:', error);
                throw error;
            }
        }

        fetchData()
    }, []);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    }
    return (
        <section className="swiper-section featured-products" id="featured-products">
            <div className="container">
                <h2 className="section-title">محصولات ویژه</h2>
                <div className="swiper featuredSwiper swiper-initialized swiper-horizontal swiper-rtl swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-1cd6f412ab4b7d91"
                        aria-live="off"
                    >
                        {/* محصولات ویژه (6 محصول قبلی) */}
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="swiper-slide"
                                role="group"
                                aria-label="6 / 8"
                                style={{ width: 265, marginLeft: 30 }}
                                data-swiper-slide-index={5}
                            >
                                <div className="product-card">
                                    <div className="product-image">
                                        <img
                                            src={AppConfig.backendFilrUrl + product.imageUrl}
                                            alt={product.name}
                                        />
                                        <span className="product-badge">فروش ویژه</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">
                                            <Link href={'/product/' + product.ID} style={{ textDecoration: "none" }}>
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="current-price">{formatPrice(product.price)}</span>
                                        </div>
                                        <button className="add-to-cart">
                                            <i className="fas fa-cart-plus" /> افزودن به سبد خرید
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}