import React from "react";

const StrongPoint = () => {
  return (
    <div className="Strong-container">
      <p className="title">Nos valeurs</p>
      <article className="open-to-all">
        <div className="contain">
          <div class="wrapper">
            <div class="bg"> Ouvert à tous</div>
            <div class="fg"> Ouvert à tous </div>
          </div>
          <div className="img-contain">
            <div className="img"></div>
          </div>
          <p className=" article-main">
            Nous proposons des cours de Crossfit adaptés à tous les niveaux, que
            vous soyez débutant, confirmé ou senior. Nous avons des programmes
            conçus pour vous guider dans votre pratique, vous permettre de vous
            perfectionner ou rester en forme. Venez découvrir notre salle de
            Crossfit et trouvez le cours qui vous convient le mieux
          </p>
        </div>
      </article>
      <article className="Community">
        <div className="contain">
          <div class="wrapper">
            <div class="bg"> Communauté</div>
            <div class="fg"> Communauté </div>
          </div>
          <div className="img-contain-2">
            <div className="img-2"></div>
          </div>

          <p className=" article-main">
            Le sens de la communauté est un facteur essentiel du succès pour le
            crossfit. Ce sont des personnes qui ne se conaissent pas mais qui
            s'unissent dans l'effort,se soutiennent et s'encouragent. C'est ça
            la communauté Crossfit
          </p>
        </div>
      </article>
      <article className="coachs">
        <div className="contain">
          <div class="wrapper">
            <div class="bg"> Coaching personalisé</div>
            <div class="fg"> Coaching personalisé </div>
          </div>
          <div className="img-contain-3">
            <div className="img-3"></div>
          </div>
          <p className=" article-main">
            Vous avez un objectif précis ? <br />
            Perte de poids,prise de masse,préparation concours,travail de
            faiblesse... Le coaching personalisé est fait pour vous ! Nos coachs
            vous accompagne dans cet objectif défini par vous-même en coaching
            one-to-one infos et horraires des coachings à définir avec le coach
          </p>
        </div>
      </article>
    </div>
  );
};

export default StrongPoint;
