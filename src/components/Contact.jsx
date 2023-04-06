import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      alert("E-mail envoyé avec succès !");
      e.target.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    }
  };

  return (
    <>
      <div className="form-container-all">
        <div className="title-contain">
          <p className="title">Essayer le crossfit</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="filter"></div>
          <div className="name-container">
            <div className="name-contain">
              <label>Nom :</label>
              <input
                type="text"
                placeholder="Nom"
                {...register("name", { required: true })}
              />{" "}
            </div>
            <div className="fisrtName-contain">
              {" "}
              <label>Prénom :</label>
              <input
                type="text"
                placeholder="Prénom"
                {...register("firstName", { required: true })}
              />
            </div>
          </div>
          {errors.name && <span>Le nom est obligatoire.</span>}
          {errors.firstName && <span>Le prénom est obligatoire.</span>}
          <div className="label-contain">
            <label>Age :</label>
            <input
              type="number"
              placeholder="Age"
              {...register("age", { required: true })}
            />
          </div>
          {errors.age && <span>L'âge est obligatoire.</span>}
          <div className="label-contain">
            {" "}
            <label>Niveau en crossfit :</label>
            <input
              type="text"
              placeholder="Débutant - confirmé  "
              {...register("crossfitLevel", { required: true })}
            />
          </div>
          {errors.crossfitLevel && (
            <span>Le niveau en crossfit est obligatoire.</span>
          )}
          <div className="label-contain">
            {" "}
            <label>Numéro de téléphone :</label>
            <input
              type="tel"
              placeholder="06.01.11.22.33"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          {errors.phoneNumber && (
            <span>Le numéro de téléphone est obligatoire.</span>
          )}
          <div className="label-contain">
            <label>Adresse e-mail :</label>
            <input
              type="email"
              placeholder="votreadresse@mail.com"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <span>L'adresse e-mail est obligatoire.</span>}
          <div className="btn-contain">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
