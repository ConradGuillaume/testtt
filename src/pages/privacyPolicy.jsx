import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Politique de confidentialité</h1>

      <h2>1. Introduction</h2>
      <p>
        Bienvenue sur notre site dédié au Crossfit CrossfitPBC. Cette politique
        de confidentialité vise à informer nos visiteurs sur la manière dont
        nous gérons et protégeons les informations collectées sur notre site
        web.
      </p>

      <h2>2. Collecte des données personnelles</h2>
      <p>
        Notre site vitrine ne collecte pas activement de données personnelles,
        telles que le nom, l'adresse e-mail ou l'adresse postale de nos
        visiteurs. Cependant, nous utilisons des cookies pour améliorer
        l'expérience utilisateur et analyser le trafic du site.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Les cookies sont de petits fichiers stockés sur le navigateur de
        l'utilisateur et qui permettent de conserver des informations sur les
        préférences de l'utilisateur ou les visites précédentes. Nous utilisons
        des cookies pour les raisons suivantes :
      </p>

      <p>
        a. Cookies fonctionnels : Ces cookies sont nécessaires pour le bon
        fonctionnement du site et permettent de mémoriser les préférences de
        l'utilisateur, comme la langue ou la taille du texte.
      </p>

      <p>
        b. Cookies analytiques : Ces cookies nous aident à comprendre comment
        nos visiteurs utilisent notre site, en collectant des informations
        anonymes sur le nombre de visiteurs, la durée des visites et les pages
        consultées. Nous utilisons ces informations pour améliorer notre site et
        offrir une meilleure expérience à nos visiteurs.
      </p>

      <p>
        Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre
        navigateur. Veuillez noter que la désactivation des cookies peut
        affecter le fonctionnement du site et votre expérience utilisateur.
      </p>

      <h2>4. Sécurité des données</h2>
      <p>
        Nous nous engageons à protéger les informations collectées sur notre
        site web. Bien que notre site ne collecte pas de données personnelles
        sensibles, nous mettons en œuvre des mesures de sécurité pour protéger
        notre site contre les accès non autorisés, les modifications ou la
        divulgation des informations.
      </p>

      <h2>5. Modifications de la politique de confidentialité</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Les modifications entreront en vigueur
        dès leur publication sur notre site web. Nous vous encourageons à
        consulter régulièrement cette page pour vous tenir informé de toute mise
        à jour.
      </p>

      <h2>6. Contact</h2>
      <p>
        Si vous avez des questions ou des préoccupations concernant cette
        politique de confidentialité, n'hésitez pas à nous contacter à
        agence.conrad.co@gmail.com .
      </p>
      <div className="legal-mentions">
        <h1>MENTIONS LÉGALES</h1>

        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site CrossfitPBC l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h2>Edition du site</h2>
        <p>
          Le présent site, accessible à l’URL https://crossfit-pbc.netlify.app/
          (le « Site »), est édité par : Guillaume Conrad, résidant 9 Rue longue
          57510 puttellange-aux-lacs, de nationalité Française (France), né(e)
          le 05/01/1994,
        </p>

        <h2>Hébergement</h2>
        <p>
          Le Site est hébergé par Netlify.
        </p>

        <h2>Directeur de publication</h2>
        <p>Le Directeur de la publication du Site est Guillaume Conrad.</p>

        <h2>Nous contacter</h2>
        <p>Par téléphone : +33602413965</p>
        <p>Par email : conrad.guillaume01@gmail.com</p>
        <p>Par courrier : 9 Rue longue 57510 puttellange-aux-lacs</p>

        <p>Génération des mentions légales par Legalstart.</p>
      </div>
      <Link to="/" className="back-to-home">
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
