// components/ProductTabs.tsx
'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import { Attribute, Review } from '@/app/types/product';
import apiClient from '@/app/lib/axios';

interface ReviewFormData {
    name: string;
    email: string;
    comment: string;
    productId: number;
}

interface ProductTabsProps {
    product: Product;
    initialTab?: 'specs' | 'reviews' | 'add-review';
}

export default function ProductTabs({
    product,
    initialTab = 'specs'
}: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<'specs' | 'reviews' | 'add-review'>(initialTab);
    const [formData, setFormData] = useState<ReviewFormData>({
        name: '',
        email: '',
        comment: '',
        productId: product.ID
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string>('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        try {
            const response = await apiClient.post('/api/reviews', JSON.stringify(formData));

            const data = await response.data;

            if (response.data == null) {
                throw new Error(data.error || 'خطا در ارسال نظر');
            }

            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                comment: '',
                productId: product.ID
            });

            // بعد از 3 ثانیه به تب نظرات برو
            setTimeout(() => {
                setActiveTab('reviews');
            }, 3000);

        } catch (error: any) {
            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const tabs = [
        { id: 'specs', label: 'مشخصات فنی' },
        { id: 'reviews', label: 'نظرات کاربران' },
        { id: 'add-review', label: 'ثبت نظر' },
    ];

    return (
        <div className="product-tabs">
            <div className="tab-headers">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-header ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id as any)}
                        style={{border: 'none'}}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {/* مشخصات فنی */}
                {activeTab === 'specs' && (
                    <div className="tab-pane active">
                        <h3>{product.name}</h3>
                        <table className="specs-table">
                            <tbody>
                                {product.attributes.map((attr: Attribute, index: number) => (
                                    <tr key={index}>
                                        <td>{attr.name}</td>
                                        <td>{attr.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* نظرات کاربران */}
                <div className={`tab-pane ${activeTab === 'reviews' ? 'active' : ''}`}>
                    <h3>نظرات کاربران درباره این محصول</h3>
                    {product.review.map((value:Review) => (
                        <div className="review-item" key={value.id}>
                            <div className="reviewer-avatar">
                                <img
                                    src='/img/avatar.png'
                                    alt="رضا حسینی"
                                />
                            </div>
                            <div className="review-content">
                                <div className="review-header">
                                    <div className="reviewer-name">{value.name}</div>
                                </div>
                                <p className="review-text">
                                   {value.comment}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                    {/* سایر نظرات... */}
                </div>

                {/* فرم ثبت نظر */}
                {activeTab === 'add-review' && (
                    <div className="tab-pane active">
                        <form onSubmit={handleSubmit} className="review-form">
                            <h3 className="form-title">ثبت نظر جدید</h3>

                            {submitSuccess && (
                                <div className="alert alert-success">
                                    <i className="fas fa-check-circle"></i>
                                    نظر شما با موفقیت ثبت شد. پس از تایید مدیر نمایش داده خواهد شد.
                                </div>
                            )}

                            {submitError && (
                                <div className="alert alert-error">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {submitError}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="reviewName">نام و نام خانوادگی *</label>
                                <input
                                    type="text"
                                    id="reviewName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="نام خود را وارد کنید"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="reviewEmail">ایمیل *</label>
                                <input
                                    type="email"
                                    id="reviewEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="ایمیل خود را وارد کنید"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="reviewText">متن نظر *</label>
                                <textarea
                                    id="reviewText"
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="تجربه خود از استفاده از این محصول را بنویسید"
                                    rows={5}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> در حال ارسال...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane"></i> ارسال نظر
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>

        </div>
    );
}