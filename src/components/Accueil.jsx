import React from 'react'

function Accueil() {
  return (
    <main>
        <section id="produits">
            <div id="produits-liste">
                <div class="produit-badge">
                    <div class="produit-image">
                        <img src="img/products/product-1.jpg" alt="Appareil-photo-canon" />
                    </div>
                    <div class="produit-details">
                        <h2>Appareil photo Canon</h2>
                        <h3>35000 F</h3>
                    </div>
                    <div class="produit-bouton">
                        <button class="ajout-panier-btn" id="1">+Panier</button>
                        <button class="details-btn" id="1">Détails</button>
                    </div>
                </div>
            </div>
            <div id="produits-boutons">
                <a href="produits.html">Voir plus</a>
            </div>
        </section>
        <aside id="filtre">
            <form>
                <div class="form-group">
                    <label for="nom">Produit:</label>
                    <input type="research" class="form-control" name="nom" id="nom" placeholder="Que cherchez-vous?" />
                </div>
                <div class="form-group">
                    <label for="cat">Categorie:</label>
                    <select name="cat" id="cat" class="form-control">
                        <option value="Tout">Toutes les catégories</option>
                        <option value="Habits/Mode">Habits/Mode</option>
                        <option value="Electronique">Appareils électroniques</option>
                        <option value="Meuble">Meubles</option>
                        <option value="Cosmétique">Produits cosmétiques</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prixmin">Prix min:</label>
                    <input type="text" class="form-control" name="prixmin" id="prixmin" placeholder="Prix min" />
                </div>
                <div class="form-group">
                    <label for="prixmax">Prix max:</label>
                    <input type="text" class="form-control" name="prixmax" id="prixmax" placeholder="Prix max" />
                </div>
                <div>
                    <button class="btn btn-primary" id="btn-filter">Filtrer les produits</button>
                </div>
            </form>
        </aside>
    </main>
  )
}

export default Accueil
