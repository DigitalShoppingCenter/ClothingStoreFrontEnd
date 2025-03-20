import React, { useEffect, useState } from "react";
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
    const shops = allshops
      .filter((shop) => shop.name.toLowerCase().includes(query))
      .map((shop) => ({ name: shop.name, slug: shop.slug }));

    // Search for clothing items
    const clothingItems = allshops.flatMap((shop) =>
      shop.clothingItems
        .filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        )
        .map((item) => ({
          ...item,
          shopName: shop.name,
          shopSlug: shop.slug,
        }))
    );

    setSearchResults([
      { category: "Shops", results: shops },
      {
        category: "Clothing Items",
        results: clothingItems.map((item) => ({
          display: `${item.name} (${item.category})`,
          shop: item.shopName,
          data: item,
        })),
      },
    ]);
  };

  const highlightQuery = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // UPDATED: Use product slug for navigation for clothing items
  const handleNavigation = (selectedItem) => {
    if (selectedItem.slug) {
      // It's a shop
      window.location.href = `/${selectedItem.slug}`;
    } else if (selectedItem.data) {
      // It's a clothing item
      const { slug: productSlug, shopSlug } = selectedItem.data;
      window.location.href = `/${shopSlug}/${productSlug}`;
    } else {
      console.error("Unknown navigation item:", selectedItem);
    }
  };

  const startVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window)) {
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
                    className="search-result-item"
                  >
                    {group.category === "Clothing Items" ? (
                      <div className="result-with-image">
                        <img
                          src={item.data.imageUrl}
                          alt={item.display}
                          className="result-image"
                        />
                        <span>
                          {highlightQuery(item.display, searchQuery)} (
                          {item.shop})
                        </span>
                      </div>
                    ) : (
                      highlightQuery(item.name, searchQuery)
                    )}
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
