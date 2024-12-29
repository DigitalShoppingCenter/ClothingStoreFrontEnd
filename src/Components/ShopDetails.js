import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import allshops from '../Mock_DataBase/Mock_Shops';
import '../Styling/clothesbin.css'; // Ensure CSS is imported
import Navbar from '../Components/Navbar'; // Ensure Navbar is imported correctly

const ShopDetails = () => {
    const { shopName } = useParams();
    const navigate = useNavigate();
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const shopData = allshops[shopName];

    if (!shopData) {
        return (
            <div>
                <Navbar />
                <div>Shop not found!</div>
            </div>
        );
    }

    const handleViewMore = (product) => {
        navigate(`/product-detail`, { state: { shopName, product } });
    };

    const toggleMaterialSelection = (material) => {
        setSelectedMaterial((prevMaterial) => (prevMaterial === material ? null : material));
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
        <div>
            <Navbar />
            <div className="clothing-shops-container">
                <h1>{shopName}</h1>
                {shopData.map(({ brand, items }) => {
                    const itemsByMaterial = groupItemsByMaterial(items);
                    return (
                        <div key={brand} className="brand-item">
                            <h2>{brand}</h2>
                            {items.length > 0 && (
                                // Display the first item's image as the brand thumbnail
                                <img src={`${process.env.PUBLIC_URL}/${items[0].brandThumbnail}`} alt="Brand Thumbnail" className="brand-thumbnail" />
                            )}
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
                                        <ItemDetail key={item.id} item={item} onViewMore={handleViewMore} />
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const ItemDetail = ({ item, onViewMore }) => {
    return (
        <li className="item-details">
            <img src={`${process.env.PUBLIC_URL}/${item.mainImage}`} alt={item.type}/>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Material:</strong> {item.material}</p>
            <p><strong>Sizes:</strong> {item.sizes.join(', ')}</p>
            <p><strong>Colors:</strong> {item.colors.join(', ')}</p>
            {item.fit && <p><strong>Fit:</strong> {item.fit}</p>}
            <p><strong>Price:</strong> {item.price}</p>
            <button onClick={() => onViewMore(item)} id="view_more_button">View More</button>
        </li>
    );
};

export default ShopDetails;
