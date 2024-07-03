import { Link } from "react-router-dom"

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
                <button className="ajout-panier-btn">+Panier</button>
                <Link to={`/details/${produit.id}`} className="details-btn">Détails</Link>
            </div>
        </div>
    )
}

export default BadgeProduit