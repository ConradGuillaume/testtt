import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Define the slide transition variants for the carousel
const slideVariants = {
  hidden: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const Avis = () => {
  // State to keep track of the current slide direction
  const [slideDirection, setSlideDirection] = useState(0);
  // Set up swipe handlers for left and right swipes
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      goToNextReview();
    },
    onSwipedRight: () => {
      goToPreviousReview();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });
  // Array of fixed reviews to be displayed in the carousel
  const fixedReviews = [
    {
      author_name: "Oriane Ordener",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ACB-R5SM9EAibNokeGQI-jq5zelMbg4N7e4jxuZVHOi0kw=w60-h60-p-rp-mo-br100",
      rating: 5,
      text: "Une box de Crossfit comme on les aime ! J'ai eu l'occasion de découvrir les nouveaux locaux lors de mon drop in chez PBC, qui sont très beaux et spacieux ! Je suivais déjà les cours de Pauline avant l'ouverture de la box, c'est une superbe coach, à notre écoute et qui nous aide à progresser💪 Les cours sont adaptés à tous les niveaux je ne peux que vous recommander d'aller y faire votre première séance !!",
    },
    {
      author_name: "Camille Fersing",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ACB-R5St0TPFqaP1Bu_XgIfOr28c9D5mLVA_YlTk13tU=w60-h60-p-rp-mo-br100",
      rating: 4,
      text: "Une salle bien équipée avec des cours variés et adaptés à tous les niveaux. Les coachs sont vraiment performants et à l'écoute afin de faire progresser chaque adhérant. Ambiance très conviviale. Je recommande ! 💪",
    },
    {
      author_name: "Sophie PANETTA",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ACB-R5QiCWSdnQ-rZISb2OxAb3OYXLoB-YWaYFsQWTz1NXs=w60-h60-p-rp-mo-br100",
      rating: 4,
      text: "J’adore !!!! Je n’étais pas une sportive mais Pauline m’a donné l’envie les conseils et cette ambiance familiale est juste extraordinaire. Je recommande a fond PBC crossfit",
    },
    {
      author_name: "Hussein Kassim",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ACB-R5QuLsjSkXbbr-YFlLud4W7qnfjA6n8Ge4QDQUbavA=w60-h60-p-rp-mo-br100",
      rating: 4,
      text: "Superbe salle, coach au top qui sait s’adapter à tous les niveaux. Des programmes et séances au top pour progresser sans jamais être répétitif. Matériel de qualité. Tout cela dans une ambiance plus qu’agréable et conviviale. Je recommande les yeux fermés !",
    },
    {
      author_name: "Mathieu Houlle",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ACB-R5St0TPFqaP1Bu_XgIfOr28c9D5mLVA_YlTk13tU=w60-h60-p-rp-mo-br100",
      rating: 4,
      text: "PBC et Crossfit ne font qu'un Des installations modernes et propres, une qualité ainsi qu'un suivi des entraînements.Je recommande chaleureusement, cette salle pour les novices comme pour les experts.",
    },
  ];
  // Function to display star rating based on the provided rating
  const displayStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "filledStar" : "emptyStar"}>
          &#9733;
        </span>
      );
    }
    return stars;
  };
  // State to keep track of the current review index
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  // Function to go to the previous review in the carousel
  const goToPreviousReview = () => {
    setSlideDirection(-1);
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? fixedReviews.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next review in the carousel

  const goToNextReview = () => {
    setSlideDirection(1);
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === fixedReviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Function to display the current review in the carousel
  const displayReviews = () => {
    const review = fixedReviews[currentReviewIndex];

    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={`review-${currentReviewIndex}`}
          className="reviewContainer"
          custom={slideDirection}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <div className="reviewHeader">
            <p className="reviewAuthor">{review.author_name}</p>
            <img
              className="profilePhoto"
              src={review.profile_photo_url}
              alt={`${review.author_name}'s profile`}
            />
            <div className="reviewStars">{displayStars(review.rating)}</div>
          </div>
          <p className="reviewText">{review.text}</p>
        </motion.div>
      </AnimatePresence>
    );
  };
  // Return the carousel with swipe handlers, displayed reviews, and navigation buttons
  return (
    <div className="carouselContainer" {...handlers}>
      <div className="titleContain">
        <p className="titleReview">Ils nous font confiance</p>
      </div>
      {displayReviews()}
      <div className="navButtonsContainer">
        <button
          className="navButton prevButton"
          onClick={goToPreviousReview}
        ></button>
        <button
          className="navButton nextButton"
          onClick={goToNextReview}
        ></button>
      </div>
      <span className="googleLink">
        Retrouvez-nous sur{" "}
        <a
          href="https://www.google.com/maps/place/CROSSFIT+PBC/@49.061541,7.037006,15z/data=!4m6!3m5!1s0x479449e436100e7d:0x470c3812c200c9ff!8m2!3d49.061541!4d7.037006!16s%2Fg%2F11q3s0vl1z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="blueLetter">G</span>
          <span className="redLetter">o</span>
          <span className="yellowLetter">o</span>
          <span className="blueLetter">g</span>
          <span className="greenLetter">l</span>
          <span className="redLetter">e</span>
        </a>
      </span>
    </div>
  );
};
export default Avis;
