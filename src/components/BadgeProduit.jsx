function BadgeProduit({produit}) {
    return (
        <div className="produit-badge">
            <div className="produit-image">
                <img src={require(`../img/products/${produit.photo}`)} alt="Appareil-photo-canon" />
            </div>
            <div className="produit-details">
                <h2>{produit.nom}</h2>
                <h3>{produit.prix} F</h3>
            </div>
            <div className="produit-bouton">
                <button className="ajout-panier-btn" id="1">+Panier</button>
                <button className="details-btn" id="1">Détails</button>
            </div>
        </div>
    )
}

export default BadgeProduit