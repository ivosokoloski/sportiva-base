import React from "react";
import "./ExploreActivities.css";
import SimpleMap from "../MapComponent/SimpleMap";

export default function ExploreActivities() {
  return (
    <>
      <div className="explore-container">
        <div class="platform-container">
          <header class="filter-section">
            <h3 class="section-title">Explore Activities</h3>
            <div class="filter-bar">
              <button class="filter-chip active">All</button>
              <button class="filter-chip">Gyms</button>
              <button class="filter-chip">Boxing</button>
              <button class="filter-chip">Sports Halls</button>
            </div>
          </header>

          <div class="activities-grid">
            <div class="activity-card">
              <div class="card-image">
                <img></img>{" "}
              </div>
              <div class="card-content">
                <div class="info-top">
                  <span class="category-tag">Gym</span>
                  <h4 class="location-name">Arena Fitness Center</h4>
                  <p class="address">Prilep, Center</p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-details">Details</button>
                  <button class="btn btn-directions">Directions</button>
                </div>
              </div>
            </div>
             <div class="activity-card">
              <div class="card-image">
                <img></img>{" "}
              </div>
              <div class="card-content">
                <div class="info-top">
                  <span class="category-tag">Gym</span>
                  <h4 class="location-name">Arena Fitness Center</h4>
                  <p class="address">Prilep, Center</p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-details">Details</button>
                  <button class="btn btn-directions">Directions</button>
                </div>
              </div>
            </div>
             <div class="activity-card">
              <div class="card-image">
                <img></img>{" "}
              </div>
              <div class="card-content">
                <div class="info-top">
                  <span class="category-tag">Gym</span>
                  <h4 class="location-name">Arena Fitness Center</h4>
                  <p class="address">Prilep, Center</p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-details">Details</button>
                  <button class="btn btn-directions">Directions</button>
                </div>
              </div>
            </div>

            <div class="activity-card">
              <div class="card-image">
                <img></img>{" "}
              </div>
              <div class="card-content">
                <div class="info-top">
                  <span class="category-tag">Boxing</span>
                  <h4 class="location-name">Spartan Boxing Club</h4>
                  <p class="address">Prilep, Tochila</p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-details">Details</button>
                  <button class="btn btn-directions">Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-map-container"></div>
            <SimpleMap
            costumStyle={{ height: "100%", width: "500px", borderRadius: "15px" }}
            />
      </div>
    </>
  );
}
