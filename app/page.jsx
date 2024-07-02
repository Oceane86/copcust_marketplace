import Image from "next/image";
import HeaderImage from "../public/images/header-img.svg";
import heart from "../public/images/heart.png";
import artist1 from "../public/images/artist-1.png";
import favoris from "../public/images/favoris.png";
import Badge from "../public/images/badge.png"
import React from "react";
import categorie1 from "../public/images/categorie1.png";
import categorie2 from "../public/images/categorie2.png";
import ellipsePartenaire from "../public/images/elipse-partenaire.png";
import badgeNoir from "../public/images/badgeNoir.png";
import artistCard1 from "../public/images/artist-card-1.png";
import artistCard2 from "../public/images/artist-card-2.png";
import artistCard3 from "../public/images/artist-card-3.png";
import artistCard4 from "../public/images/artist-card-4.png";
import Edit from "../public/images/edit.png";
import Choix from "../public/images/choix.png";
import Suivi from "../public/images/suivi.png";
import VectorValeurs from "../public/images/vector-valeurs.png";
import Vector2 from "../public/images/vector2.png";
import partenairesImg from "../public/images/partenaires-img.png";
import Vector3 from "../public/images/vector3.png";
import articleImg from "../public/images/article-img.png";
import arrowRight from "../public/images/arrowRight.png";
import Pen from "../public/images/pen.png";


const Home = () =>  {
  return (
    <div>
    <header>
      <h1>Bienvenue chez Copcust</h1>
      <p>Achetez des paires personnalisées par nos partenaires ou bien devenez s’en un !</p>
      <button className="btn-rose m-btn">Voir nortre catalogue</button>
      <div>
      <Image src={HeaderImage} alt="Shopping"/>
      </div>
    </header>
    <main>
      <section className="categories">
        <div className="categorie-1">
          <Image src={heart} className="heart" alt="Coeurs"/>
          <h3>Nos top catégories</h3>
          <h2>Pop culture</h2>
        </div>
        <div className="cards">
          <div className="card card-1">
            <div className="d-flex">
              <div className="name-artist s-between">
                <Image src={artist1} alt="Artiste" />
                <div className="right-items-artist">
                  <p>Blacksnip</p>
                  <Image src={Badge} className="badge" alt="Badge" />
                </div>
              </div>
              <div className="icon-heart">
                <Image src={favoris} alt="Favoris" />
              </div>
              <div className="title-card">
                <p>Play with me</p>
                <p>480€</p>
              </div>
            </div>
            
          </div>
          <div className="card card-1">
            <div className="d-flex">
              <div className="name-artist s-between">
                <Image src={artist1} alt="Artiste" />
                <div className="right-items-artist">
                  <p>Blacksnip</p>
                  <Image src={Badge} className="badge" alt="Badge" />
                </div>
              </div>
              <div className="icon-heart">
                <Image src={favoris} alt="Favoris" />
              </div>
              <div className="title-card">
                <p>Play with me</p>
                <p>480€</p>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="categorie-1">
          <h2>Manga</h2>
        </div>
        <div className="cards">
          <div className="card card-1">
            <div className="d-flex">
              <div className="name-artist s-between">
                <Image src={artist1} alt="Artiste" />
                <div className="right-items-artist">
                  <p>Blacksnip</p>
                  <Image src={Badge} className="badge" alt="Badge" />
                </div>
              </div>
              <div className="icon-heart">
                <Image src={favoris} alt="Favoris" />
              </div>
              <div className="title-card">
                <p>Play with me</p>
                <p>480€</p>
              </div>
            </div>
            
          </div>
          <div className="card card-1">
            <div className="d-flex">
              <div className="name-artist s-between">
                <Image src={artist1} alt="Artiste" />
                <div className="right-items-artist">
                  <p>Blacksnip</p>
                  <Image src={Badge} className="badge" alt="Badge" />
                </div>
              </div>
              <div className="icon-heart">
                <Image src={favoris} alt="Favoris" />
              </div>
              <div className="title-card">
                <p>Play with me</p>
                <p>480€</p>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="categorie-1">
          
          <h2>Nos autres catégories</h2>
        </div>
        <div className="other-categories">
          <div className="card-categorie">
          <Image src={categorie1} alt="Categorie" />
          <p>murakami</p>
          </div>
          <div className="card-categorie">
          <Image src={categorie2} alt="Categorie" />
          <p>murakami</p>
          </div>
        </div>
        <div className="btn-categories">
        <button>Voir toutes nos paires</button>
        </div>
        
        
      </section>
      <section className="artistes-partenaires">
      <Image src={partenairesImg} className="partenaire-img" alt="Image" />
      <h3>Nos artistes partenaires</h3>
      <h2>Nos tops créateurs</h2>
      <div className="d-flex">
        <div className="partenaires-cards">
          <div className="card-partenaire">
          <div className="card-p d-flex size-img">
          <Image src={artistCard1} alt="Artiste" />
          <Image src={artistCard2} alt="Artiste" />
          <Image src={artistCard3} alt="Artiste" />
          <Image src={artistCard4} alt="Artiste" />
          </div>
          <div className="title-partenaire">
            <div className="left-p-card">
            <Image src={ellipsePartenaire} className="artistImage" alt="Artiste image" />
              <p>Cus'Tom</p>
              <Image src={badgeNoir} alt="Bagde" />
            </div>
            
          </div>
            
          </div>
        </div>
        <div className="partenaires-cards">
          <div className="card-partenaire">
          <div className="card-p d-flex size-img">
          <Image src={artistCard1} alt="Artiste" />
          <Image src={artistCard2} alt="Artiste" />
          <Image src={artistCard3} alt="Artiste" />
          <Image src={artistCard4} alt="Artiste" />
          </div>
          <div className="title-partenaire">
            <div className="left-p-card">
            <Image src={ellipsePartenaire} className="artistImage" alt="Artiste image" />
              <p>Cus'Tom</p>
              <Image src={badgeNoir} className="badgeNoir" alt="Bagde" />
            </div>
            
          </div>
            
          </div>
        </div>
        </div>
        <div className="btn-partenaires">
        <button>Voir toutes nos paires</button>
        </div>
      </section>
      <section className="valeurs">
      <Image src={VectorValeurs} className="vector" alt="Image" />
      <Image src={Vector3} className="vector3" alt="Image" />

        <h2>Pourquoi acheter sur Copcust</h2>
        <div className="valeurs-cards">
          <div className="valeur-card">
          <Image src={Vector2} className="vector2" alt="Vector" />
            <div className="d-flex">
              <div><Image src={Edit} className="icon" alt="Editer" /></div>
            <div>
            <h3>Expression libre</h3>
            <div className="text-card">
            Chaque paire de sneakers est une oeuvre. Copcust est plus qu'une simple marketplace, c'est une révolution dans la sneakers personnalisée.
            </div>
            </div>
            </div>
           
          </div>
          <div className="valeur-card">
            <div className="d-flex">
            <div>
              <Image src={Choix} className="icon" alt="Editer" />
            </div>
          
            <div>
            <h3>Large choix 
            d’artistes custom</h3>
            <div className="text-card">
            Nous mettons en avant des créateurs émergents et confirmés, Une sélection diverse de style pouvant répondre à tes envies !            </div>
          </div>
            </div>
            
          </div>
          <div className="valeur-card">
            <div className="d-flex">
            <div><Image src={Suivi} className="icon" alt="Suivi" /></div>
            <div>
            <h3>Suivis de ton colis</h3>
            <div className="text-card">
            A tout moment, tu peux suivre étape par étape la création de ta sneakers customisée !             </div>
          </div>
            </div>
            
            </div>
            
        </div>
      </section>
      <section className="blog-market">
        <p>Le Blog</p>
        <h2>Les derniers articles juste pour toi</h2>
        <div className="blog-cards">
          <div className="blog-card">
          <Image src={articleImg} className="articleImg" alt="Article" />
          <div className="article-content">
          <span>Conseils</span>
          <h3>Comment entretenir sa sneaker custom ?</h3>
          <p>Copcust te donne toutes les ficelles en main pour entretenir votre paire ! Consulte notre article et reprends ta paire de sneakers en main ! </p>
          </div>
          
          </div>
          
        </div>
        <div className="btn-blog">
            <button>Visiter le blog <span><Image src={arrowRight} alt="arrow" /></span></button>
          </div>
      </section>
      <section className="newsletter">
      <Image src={Pen} className="pen" alt="Image" />
        <h3>Les sneakers customs t’intéressent ?</h3>
        <p>Inscris toi à notre newsletter pour en découvrir d’avantage sur les customs !</p>
        <div className="input-newsletter">
          <input type="text" placeholder="Adresse mail"/>
        </div>
        <div><button>S'inscrire</button></div>
      </section>
    </main>
    </div>
  );
}
export default Home;