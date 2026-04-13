import React, { useState } from "react";
import "./Map.css";
import { COMPANY } from "utils/constants";

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Juja, Kenya coordinates - Near Juja City Mall / Jomo Kenyatta University
  const jujaLocation = {
    lat: -1.1019,
    lng: 37.0114,
    place: "Juja Town",
    area: "Kiambu County",
  };

  // Optimized embed URL with faster parameters
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""
  }&q=Juja,Kenya&center=${jujaLocation.lat},${
    jujaLocation.lng
  }&zoom=15&maptype=roadmap`;

  // Fallback if no API key - standard embed
  const fallbackSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.55062286122!2d36.994368!3d-1.1019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f478401b6332b%3A0x40312c54773487a0!2sJuja%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s`;

  return (
    <div className="map-container">
      {/* Loading Skeleton for faster perceived load */}
      {isLoading && (
        <div className="map-loading">
          <div className="map-loading-spinner"></div>
          <p>
            Loading map of {jujaLocation.place}, {jujaLocation.area}...
          </p>
        </div>
      )}

      <iframe
        src={process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? mapSrc : fallbackSrc}
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="eager"
        title={`${COMPANY.name} - Location in ${jujaLocation.place}, ${jujaLocation.area}`}
        className="map-iframe"
        onLoad={() => setIsLoading(false)}
      ></iframe>

      <div className="map-location-badge">
        <span className="location-pin">📍</span>
        <div className="location-text">
          <strong>{jujaLocation.place}</strong>
          <small>{jujaLocation.area}, Kenya</small>
        </div>
      </div>
    </div>
  );
};

export default Map;
