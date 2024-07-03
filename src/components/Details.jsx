import React from 'react'
import { produits } from '../dataTest/produits'
import { useParams } from 'react-router-dom'

function Details() {
  const {id} = useParams()
  const produit = produits.find((elt) => elt.id===Number(id))
  return (
    <main>
      <div id="details-photo">
          <img src={require(`../img/products/${produit.photo}`)} alt="Pollo bleu" />
      </div>
      <div id="details-droite">
          <div id="details-nom-cat-prix">
              <div id="details-nom-cat">
                  <h2>{produit.nom}</h2>
                  <span>{produit.categorie}</span>
              </div>
              <div id="details-prix">
                  <span>{produit.prix}</span> F CFA
              </div>
          </div>
          <div id="details-description">
            {produit.description}
          </div>
          <div id="details-boutons">
              <button class="like-btn">Liker</button>
              <button class="ajout-panier-btn" id="2">+Panier</button>
          </div>
      </div>
  </main>
  )
}

export default Details
