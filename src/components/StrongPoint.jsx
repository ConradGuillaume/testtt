import React from "react";

const StrongPoint = () => {
  return (
    <div className="Strong-container">
      <div class="wrapper">
        <div class="bg"> Pourquoi nous choisir ? </div>
        <div class="fg"> Pourquoi nous choisir ? </div>
      </div>
      <article className="open-to-all">
        <div className="contain">
          <p className="article-title"> ouvert à tous </p>
          <div className="img"></div>
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
          {" "}
          <p className="article-title"> Une communauté </p>
          <div className="img-2"></div>
          <p className=" article-main">
            Nous proposons des cours de Crossfit adaptés à tous les niveaux, que
            vous soyez débutant, confirmé ou senior. Nous avons des programmes
            conçus pour vous guider dans votre pratique, vous permettre de vous
            perfectionner ou rester en forme. Venez découvrir notre salle de
            Crossfit et trouvez le cours qui vous convient le mieux
          </p>
        </div>
      </article>
    </div>
  );
};

export default StrongPoint;
