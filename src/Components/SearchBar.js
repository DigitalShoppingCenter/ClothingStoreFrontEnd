import React, { useState, useEffect } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import "../Styling/searchbar.css";
import allshops from "../Mock_DataBase/Mock_Shops"; // Adjust the path to your database file

const SearchBar = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Search for shops
    const shops = Object.keys(allshops).filter((shopName) =>
      shopName.toLowerCase().includes(query)
    );

    // Search for clothing items
    const clothingItems = Object.entries(allshops).flatMap(([shopName, shopBrands]) =>
      shopBrands.flatMap((brand) =>
        brand.items
          .filter((item) =>
            item.type.toLowerCase().includes(query) ||
            item.material.toLowerCase().includes(query)
          )
          .map((item) => ({
            ...item,
            shop: shopName, // Include the shop name for navigation
          }))
      )
    );

    setSearchResults([
      { category: "Shops", results: shops },
      {
        category: "Clothing Items",
        results: clothingItems.map((item) => ({
          display: `${item.type} (${item.material})`,
          data: item,
        })),
      },
    ]);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleNavigation = (selectedItem) => {
    if (typeof selectedItem === "string") {
      // It's a shop
      window.location.href = `/shops/${selectedItem}`;
    } else if (selectedItem.data) {
      // It's a clothing item
      const { id, shop } = selectedItem.data;
      window.location.href = `/shops/${shop}/items/${id}`;
    } else {
      console.error("Unknown navigation item:", selectedItem);
    }
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice search is not supported in your browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      handleSearch({ target: { value: transcript } });
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search shops, clothing items ..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <FaSearch className="search-icon" />
      <FaMicrophone
        className={`microphone-icon ${isListening ? "Listening" : ""}`}
        onClick={startVoiceSearch}
      />
      {searchQuery && (
        <button className="clear-button" onClick={clearSearch}>
          ✕
        </button>
      )}

      {searchResults.length > 0 && (
        <div className={`search-dropdown ${searchResults.length > 0 ? "active" : ""}`}>
          {searchResults.map((group, index) => (
            <div key={index} className="search-category">
              <h4>{group.category}</h4>
              <ul>
                {group.results.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleNavigation(item)}
                  >
                    {group.category === "Clothing Items" ? item.display : item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
