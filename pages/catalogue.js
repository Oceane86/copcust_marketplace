
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer";
import Styles from "./styles/style.css";
import React, { useState } from 'react';
import ArrowWhite from "../public/images/arrowRight-white.png";
import Image from "next/image";
import ArrowBlack from "../public/images/arrow-bottom-black.png";
import Filter from "../public/images/filter.png";
import artisTId from "../public/images/artist-identite.png";
import badgeNoir from "../public/images/badgeNoir.png";
import stars from "../public/images/stars.png";
import vectorTop from "../public/images/vector-valeurs.png"
import artist1 from "../public/images/artist-1.png";
import favoris from "../public/images/favoris.png";
import Badge from "../public/images/badge.png";
import ArrowBottomWhite from "../public/images/arrow-bottom-white.png";

const Catalogue = () =>  {
  const [showFilterDiv, setShowFilterDiv] = useState(false);

  const handleIconFilterClick = () => {
    setShowFilterDiv(!showFilterDiv);
  };
    return(
        <div>
           <NavBar />
           <main >
            <section className="catalogue">
                <div className="menu-catalogue">
                    <p className="accueil">Accueil</p>
                    <Image src={ArrowWhite} alt="Arrow"/>
                    <p className="currentPage">Catalogue</p>
                </div>
                <div className="filter">
                    <div className="filter-1">
                        <p>Univers</p>
                        <Image src={ArrowBlack} alt="Arrow"/>
                    </div>
                    <div className="filter-2">
                    <p>Artiste</p>
                    <Image src={ArrowBlack} alt="Arrow"/>
                    </div>
                    <div className="icon-filter" onClick={handleIconFilterClick}>
                    <Image src={Filter} alt="Filter"/>
                    </div>
                </div>
                {showFilterDiv && <div className="empty-div">
                  <Image src={vectorTop} className="vectorTop" alt="Image"/>
                  <div className="btn-filter-1">
                    <div className="btn-black">
                    <span>Marque</span>
                    <Image src={ArrowBottomWhite} alt="Filter"/>
                    </div>
                    <div className="btn-black">
                    <span>Type</span>
                    <Image src={ArrowBottomWhite} alt="Filter"/>
                    </div>
                  </div>
                  </div>}
                <div className="title-catalogue"><h1>Notre artiste coup de cœur</h1></div>
                <div className="artist-favoris">
                <Image src={vectorTop} className="vectorTop" alt="Image"/>
                    <div className="artist-identite">
                        <div className="left-id"><Image src={artisTId} alt="Image"/></div>
                        <div className="right-id">
                            <div className="name">
                                <p>Bazille</p>
                                <Image src={badgeNoir} alt="Image"/>
                            </div>
                            <Image src={stars} alt="Image"/>

                        </div>
                    </div>
                    <div>
                    <div className="cards-container">
                    <div className="cards-favoris">
                        <div className="name-favoris">
                            <Image src={artisTId} alt="Image"/>
                            <div className="d-flex">
                                <p>Bazille</p>
                                <Image src={Badge} className="badge" alt="Badge" />
                            </div>
                        </div>
                        <div className="heart-icon">
                            <Image src={favoris} alt="Heart" />
                        </div>
                        <div className="title-favoris">
                            <p>Les jolies chausseurs</p>
                            <p>560€</p>
                        </div>
                    </div>
                    <div className="cards-favoris">
                        <div className="name-favoris">
                            <Image src={artisTId} alt="Image"/>
                            <div className="d-flex">
                                <p>Bazille</p>
                                <Image src={Badge} className="badge" alt="Badge" />
                            </div>
                        </div>
                        <div className="heart-icon">
                            <Image src={favoris} alt="Heart" />
                        </div>
                        <div className="title-favoris">
                            <p>Les jolies chausseurs</p>
                            <p>560€</p>
                        </div>
                    </div>
                    </div>
                   
                    </div>
                    <div className="btn-favoris">
                        <button>Voir plus <span><Image src={ArrowWhite} alt="Arrow"/></span></button>
                    </div>
                </div>
                <div className="drops">
                    <h2>Nos derniers drops</h2>
                    <div className="cards">
          <div className="card card-1">
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
          <div className="card card-1">
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
          <div className="card card-1">
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
          <div className="card card-1">
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
          <div className="card card-1">
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
          <div className="card card-1">
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
          
          <div className="card card-1">
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
                <div className="card card-1">
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
          
        </div>
                </div>
           </section>

           </main>
           <Footer />

        </div>
       
    )

}
export default Catalogue;