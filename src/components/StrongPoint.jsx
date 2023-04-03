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
            Le CrossFit est une communauté d'entraide et d'amitié. Les
            participants se soutiennent mutuellement et encouragent les autres à
            donner le meilleur d'eux-mêmes. Les entraînements effectués en
            groupe, ce qui crée un sentiment de camaraderie et de motivation
            supplémentaire.
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
            Des séances de coaching personnalisé adaptées à tous
            les niveaux, que vous soyez débutant, confirmé ou senior. Nos
            programmes sur mesure sont conçus pour vous guider dans votre
            parcours, vous permettre d'améliorer vos compétences et maintenir
            une bonne condition physique.
          </p>
        </div>
      </article>
    </div>
  );
};

export default StrongPoint;
