import React, { useState } from 'react';
import Slider from 'react-slick';
import allshops from '../Mock_DataBase/Mock_Shops';
import '../Styling/clothesbin.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const ClothingShops = () => {
    const [selectedShop, setSelectedShop] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const navigate = useNavigate();

    const handleViewMore = (shopName, product) => {
        navigate(`/product-detail`, { state: { shopName, product } });
    };

    const toggleShopSelection = (shopName) => {
        setSelectedShop((prevShop) => (prevShop === shopName ? null : shopName));
        setSelectedMaterial(null); // Reset material selection when shop is changed
    };

    const toggleMaterialSelection = (material) => {
        setSelectedMaterial((prevMaterial) => (prevMaterial === material ? null : material));
    };

    const settings = {
        infinite: true,
        speed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'linear',
    };

    const groupItemsByMaterial = (items) => {
        return items.reduce((acc, item) => {
            const material = item.material || 'Unknown';
            acc[material] = acc[material] || [];
            acc[material].push(item);
            return acc;
        }, {});
    };

    return (
        <div className="clothing-shops-container">
            <h1>Clothing Shops</h1>
            <Slider {...settings}>
                {Object.keys(allshops).map((shopName) => {
                    const shopData = allshops[shopName][0];
                    return (
                        <div key={shopName} className="shop-name" onClick={() => toggleShopSelection(shopName)}>
                            <img src={`${process.env.PUBLIC_URL}${shopData.logo}`} alt={`${shopName} Logo`} className="shop-logo" />
                            <h2>{shopName}</h2>
                        </div>
                    );
                })}
            </Slider>

            {selectedShop && (
                <div className="shop-details">
                    <h2>Items in {selectedShop}</h2>
                    {allshops[selectedShop].map(({ brand, items }) => {
                        const itemsByMaterial = groupItemsByMaterial(items);

                        return (
                            <div key={brand} className="brand-item">
                                <h3>{brand}</h3>
                                <div className="material-categories">
                                    {Object.keys(itemsByMaterial).map((material) => (
                                        <button
                                            key={material}
                                            className={`material-category ${selectedMaterial === material ? 'active' : ''}`}
                                            onClick={() => toggleMaterialSelection(material)}
                                        >
                                            {material}
                                        </button>
                                    ))}
                                </div>
                                {selectedMaterial && (
                                    <ul className="shop-items-list">
                                        {itemsByMaterial[selectedMaterial]?.map((item) => (
                                            <ItemDetail key={item.id} item={item} shopName={selectedShop} onViewMore={handleViewMore} />
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const ItemDetail = ({ item, shopName, onViewMore }) => {
    return (
        <li className="item-details">
            <img src={`${process.env.PUBLIC_URL}${item.mainImage}`} alt={item.type}/>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Material:</strong> {item.material}</p>
            <p><strong>Sizes:</strong> {item.sizes.join(', ')}</p>
            <p><strong>Colors:</strong> {item.colors.join(', ')}</p>
            {item.fit && <p><strong>Fit:</strong> {item.fit}</p>}
            <p><strong>Price:</strong> {item.price}</p>
            <button onClick={() => onViewMore(shopName, item)} id="view_more_button">View More</button>
        </li>
    );
};

export default ClothingShops;
