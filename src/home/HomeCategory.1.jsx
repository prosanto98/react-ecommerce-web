import React from 'react';
import { Link } from 'react-router-dom';
import { subTitle, title, categoryList, btnText } from './HomeCategory';

export const HomeCategory = () => {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className='container'>
                {/* section header */}
                <div className='section-header text-center'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>
                {/* section end */}
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                        {categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to="/shop" className="category-item">
                                <div className='category-inner'>
                                    {/* image thumbnail */}
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt="" />
                                    </div>
                                    {/* content */}
                                    <div className='category-content'>
                                        <div className='cate-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>))}
                    </div>
                    <div className='text-center mt-5'>
                        <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
