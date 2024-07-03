// pages/catalogue.js

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Styles from "./styles/style.css"; // Import des styles CSS pour ce composant
import React, { useState } from 'react';
import Image from "next/image";

// Importation des images pour ce composant
import ArrowWhite from "../public/images/arrowRight-white.png";
import ArrowBlack from "../public/images/arrow-bottom-black.png";
import Filter from "../public/images/filter.png";
import artisTId from "../public/images/artist-identite.png";
import badgeNoir from "../public/images/badgeNoir.png";
import stars from "../public/images/stars.png";
import vectorTop from "../public/images/vector-valeurs.png";
import artist1 from "../public/images/artist-1.png";
import favoris from "../public/images/favoris.png";
import Badge from "../public/images/badge.png";
import ArrowBottomWhite from "../public/images/arrow-bottom-white.png";

// Définition du composant Catalogue
const Catalogue = () => {
  // État pour afficher/masquer le filtre
  const [showFilterDiv, setShowFilterDiv] = useState(false);

  // Fonction pour gérer le clic sur l'icône de filtre
  const handleIconFilterClick = () => {
    setShowFilterDiv(!showFilterDiv); // Alterner l'état d'affichage du filtre
  };

  return (
    <div>
      <NavBar />
      <main>
        <section className="catalogue">
          {/* Fil d'Ariane pour la navigation */}
          <div className="menu-catalogue">
            <p className="accueil">Accueil</p>
            <Image src={ArrowWhite} alt="Flèche droite" />
            <p className="currentPage">Catalogue</p>
          </div>
          
          {/* Section de filtre */}
          <div className="filter">
            <div className="filter-1">
              <p>Univers</p>
              <Image src={ArrowBlack} alt="Flèche vers le bas" />
            </div>
            <div className="filter-2">
              <p>Artiste</p>
              <Image src={ArrowBlack} alt="Flèche vers le bas" />
            </div>
            <div className="icon-filter" onClick={handleIconFilterClick} aria-label="Filtrer les options">
              <Image src={Filter} alt="Filtre" />
            </div>
          </div>
          
          {/* Div pour le filtre, visible lorsque showFilterDiv est true */}
          {showFilterDiv && (
            <div className="empty-div">
              <Image src={vectorTop} className="vectorTop" alt="Éléments décoratifs" />
              <div className="btn-filter-1">
                <div className="btn-black">
                  <span>Marque</span>
                  <Image src={ArrowBottomWhite} alt="Flèche vers le bas" />
                </div>
                <div className="btn-black">
                  <span>Type</span>
                  <Image src={ArrowBottomWhite} alt="Flèche vers le bas" />
                </div>
              </div>
            </div>
          )}

          {/* Titre de la section "Notre artiste coup de cœur" */}
          <div className="title-catalogue">
            <h1>Notre artiste coup de cœur</h1>
          </div>
          
          {/* Section pour afficher les favoris des artistes */}
          <div className="artist-favoris">
            <Image src={vectorTop} className="vectorTop" alt="Éléments décoratifs" />
            <div className="artist-identite">
              <div className="left-id">
                <Image src={artisTId} alt="Identité de l'artiste" />
              </div>
              <div className="right-id">
                <div className="name">
                  <p>Bazille</p>
                  <Image src={badgeNoir} alt="Badge noir" />
                </div>
                <Image src={stars} alt="Étoiles" />
              </div>
            </div>
            
            {/* Liste des cartes des favoris */}
            <div className="cards-container">
              {[...Array(8)].map((_, index) => (
                <div className="cards-favoris" key={index}>
                  <div className="name-favoris">
                    <Image src={artisTId} alt="Identité de l'artiste" />
                    <div className="d-flex">
                      <p>Bazille</p>
                      <Image src={Badge} className="badge" alt="Badge" />
                    </div>
                  </div>
                  <div className="heart-icon">
                    <Image src={favoris} alt="Favoris" />
                  </div>
                  <div className="title-favoris">
                    <p>Les jolies chausseurs</p>
                    <p>560€</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton pour voir plus de favoris */}
            <div className="btn-favoris">
              <button>
                Voir plus <span><Image src={ArrowWhite} alt="Flèche droite" /></span>
              </button>
            </div>
          </div>
          
          {/* Section pour les derniers drops */}
          <div className="drops">
            <h2>Nos derniers drops</h2>
            <div className="cards">
              {[...Array(8)].map((_, index) => (
                <div className="card card-1" key={index}>
                  <div className="d-flex">
                    <div className="name-artist-favoris s-between">
                      <Image src={artist1} alt="Artiste" />
                      <div className="right-items-artist">
                        <p>Blacksnip</p>
                        <Image src={Badge} className="badge" alt="Badge" />
                      </div>
                    </div>
                    <div className="icon-heart-favoris">
                      <Image src={favoris} alt="Favoris" />
                    </div>
                    <div className="title-card-favoris">
                      <p>Play with me</p>
                      <p>480€</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalogue;
