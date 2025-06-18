"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";

// TASK - React 1 week 2
// Move this to its own file
const PlanetWishlistItem = ({ name, onRemove, thumbnail }) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
};

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name, index) => {
    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
    if (selectedPlanets.includes(name)) {
      setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
    } else {
      setSelectedPlanets([...selectedPlanets, name]);
    }
  };

  const isPlanetSelected = (name) => selectedPlanets.includes(name);
  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}

          {/* Example for Europa */}
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-europa.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>EUROPA {isPlanetSelected("europa") ? "- SELECTED" : ""}</h2>
              <p>The smallest of the four Galilean moons orbiting Jupiter.</p>
            </div>
            <button
              className="roundButton"
              onClick={() => onAddOrRemovePlanet("europa", 0)}
            >
              {isPlanetSelected("europa") ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>

          {/* Example for Moon */}
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-moon.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>MOON {isPlanetSelected("moon") ? "- SELECTED" : ""}</h2>
              <p>
                Earth’s only natural satellite and our nearest neighbor in
                space.
              </p>
            </div>
            <button
              className="roundButton"
              onClick={() => onAddOrRemovePlanet("moon", 1)}
            >
              {isPlanetSelected("moon") ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>

          {/* Example for Mars */}
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-mars.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>MARS {isPlanetSelected("mars") ? "- SELECTED" : ""}</h2>
              <p>
                The Red Planet with the tallest volcano and the deepest canyon
                in the solar system.
              </p>
            </div>
            <button
              className="roundButton"
              onClick={() => onAddOrRemovePlanet("mars", 2)}
            >
              {isPlanetSelected("mars") ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>

          {/* Example for Titan */}
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-titan.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>TITAN {isPlanetSelected("titan") ? "- SELECTED" : ""}</h2>
              <p>
                The largest moon of Saturn, known for its thick atmosphere and
                lakes of methane.
              </p>
            </div>
            <button
              className="roundButton"
              data-planet="europa"
              onClick={(e) => {
                const name = e.currentTarget.dataset.planet;
                const index = 0; // if needed
                onAddOrRemovePlanet(name, index);
              }}
            >
              {isPlanetSelected("europa") ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;
