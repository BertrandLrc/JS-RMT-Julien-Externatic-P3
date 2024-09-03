import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Submit from "../../../UI/buttonComponent/SubmitComponent";
import Textarea from "../../../UI/Form/descriptionComponent/DescriptionComponent";
import Input from "../../../UI/Form/inputComponent/InputComponent";
import Select from "../../../UI/Form/selectComponent/SelectComponent";

import "./OfferForm.css";
import connexion from "../../../../services/connexion";
import { useExternatic } from "../../../../context/ExternaticContext";

function OfferForm({ contentProps }) {
  const { setIsModalOpen } = contentProps;
  const { logedUser } = useExternatic();
  const [offer, setOffer] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      setOffer((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setOffer((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const needNumber = [
      "salary",
      "company_id",
      "study_level_id",
      "consultant_id",
      "contract_id",
      "work_time_id",
      "work_format_id",
      "category_id",
    ];

    const formattedOffer = { ...offer };

    Object.keys(formattedOffer).forEach((key) => {
      if (needNumber.includes(key)) {
        formattedOffer[key] = parseInt(formattedOffer[key], 10);
      }
    });

    try {
      await connexion.post(`/api/offers`, formattedOffer);
    } catch (error) {
      throw new Error(error);
    }
    setIsModalOpen(false);
    navigate(".", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="style-title-h1">Ajouter une offre</h1>
      <fieldset className="top-fieldset-offer">
        <legend className="legend-form">Informations Générales</legend>
        <Input
          id="title"
          label="Titre"
          inputType="text"
          inputName="title"
          inputValue={offer.title}
          handleChange={handleChange}
          classBox="title-offer-form"
          isRequired
        />
        <Select
          url={`api/companies/?type=List&consultant=${logedUser.id}`}
          id="company_id"
          label="Entreprise"
          defaultOpt="Choisir une option"
          name="company_id"
          value={offer.company_id}
          handleChange={handleChange}
          classBox=""
          classBox2=""
          isRequired
        />
      </fieldset>
      <div className="bottom-part-offer">
        <fieldset className="fieldset-offer">
          <legend className="legend-form">Détails du poste</legend>
          <Select
            url="api/category"
            id="category_id"
            label="Secteur d'activité"
            defaultOpt="Choisir une option"
            name="category_id"
            value={offer.category_id}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired
          />
          <Select
            url="api/workTime"
            id="work_time_id"
            label="Temps de travail"
            defaultOpt="Choisir une option"
            name="work_time_id"
            value={offer.work_time_id}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired
          />
          <Select
            url="api/workFormat"
            id="work_format_id"
            label="Format"
            defaultOpt="Choisir une option"
            name="work_format_id"
            value={offer.work_format_id}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired
          />
          <Input
            id="salary"
            label="Salaire"
            inputType="text"
            inputName="salary"
            inputValue={offer.salary}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired={false}
          />
          <Select
            url="api/studyLevel"
            id="study_level_id"
            label="Formation demandée"
            defaultOpt="Choisir une option"
            name="study_level_id"
            value={offer.study_level_id}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired
          />
          <Select
            url="api/contract"
            id="contract_id"
            label="Type de contrat"
            defaultOpt="Choisir une option"
            name="contract_id"
            value={offer.contract_id}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired
          />
          <Input
            id="start_date"
            label="Date de prise de poste"
            inputType="text"
            inputName="start_date"
            inputValue={offer.start_date}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired={false}
          />
          <Input
            id="city"
            label="Lieu d'activité"
            inputType="text"
            inputName="city"
            inputValue={offer.city}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-details"
            isRequired
          />
          <Input
            id="is_cadre"
            label="Status Cadre"
            inputType="checkbox"
            inputName="is_cadre"
            inputValue={offer.is_cadre}
            handleChange={handleChange}
            classBox2="checkbox"
            classBox="offer-form-details-checkbox"
            isRequired={false}
          />
        </fieldset>
        <fieldset className="fieldset-offer">
          <legend className="legend-form">Texte de l'annonce</legend>
          <Textarea
            id="missions"
            label="Détails de la mission"
            descriptionName="missions"
            description={offer.missions}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-longtext"
            isRequired
          />
          <Textarea
            id="profil_desc"
            label="Profil recherché"
            descriptionName="profil_desc"
            description={offer.profil_desc}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-longtext"
            isRequired
          />
          <Textarea
            id="benefits"
            label="Avantages"
            descriptionName="benefits"
            description={offer.benefits}
            handleChange={handleChange}
            classBox2=""
            classBox="offer-form-longtext"
            isRequired
          />
        </fieldset>
      </div>
      <Submit text="Valider" css="validate-offer" handleClick={handleSubmit} />
    </form>
  );
}

OfferForm.propTypes = {
  contentProps: PropTypes.shape({
    setIsModalOpen: PropTypes.func.isRequired,
  }).isRequired,
};

export default OfferForm;
