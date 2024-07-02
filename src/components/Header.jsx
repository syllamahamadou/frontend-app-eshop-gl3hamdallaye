import React from 'react'

function Header() {
  return (
    <header>
        <div id="header-top">
            <div id="logo-nom">
                <img src={require("../img/icons/ico-eshop-s.png")} alt="Logo de eshop" />
                <h1>Shopez en toute sécurité !</h1>
            </div>
            <div id="user-nav">
                <div id="user">
                    <div class="profile">
                        <h3>Username<br/><span>Vu le 01/01/2024</span></h3>
                        <div class="imgBx">
                            <img src={require("../img/user.png")} alt="Profil du user" />
                        </div>
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a href="connexion.html"><ion-icon name="log-in-outline"></ion-icon>Connexion</a></li>
                            <li><a href="inscription.html"><ion-icon name="person-add-outline"></ion-icon>Inscription</a></li>
                            <li><a href="#"><ion-icon name="person-outline"></ion-icon>Profile</a></li>
                            <li><a href="#"><ion-icon name="cart-outline"></ion-icon>Mes commandes</a></li>
                            <li><a href="deconnexion.html"><ion-icon name="log-out-outline"></ion-icon>Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html" class="active">Accueil</a></li>
                        <li><a href="panier.html" class="">Panier (<span id="nav-panier">0</span>)</a></li>
                        <li><a href="#" class="">Contact</a></li>                        
                    </ul>
                </nav>
            </div>
        </div>
        <div id="header-banniere">
            <div id="banniere_promo">
                -20% <br/>
                Faites le plein du panier &#129321;
            </div>
            <div id="banniere_bouton">
                <marquee behavior direction>
                Livraison partout au Mali. Satisfait ou remboursé sur 3 jours !
                </marquee>
                <a href="produits.html" class="bouton_rouge">Voir les produits <img src="img/icons/fleche.png" alt="" /></a>
            </div>
        </div>
    </header>
  )
}

export default Header