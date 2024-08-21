import { useState } from "react";

import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import DescriptionComponent from "../../../UI/Form/descriptionComponent/DescriptionComponent";
import ButtonComponent from "../../../UI/buttonComponent/ButtonComponent";

import connexion from "../../../../services/connexion";
import "./ModifyProfil.css";

const initialProfile = {
  firstname: "",
  lastname: "",
  city: "",
  phone: "",
  mail: "",
  description: "",
};

function ProfileModify() {
  const [profile, setProfile] = useState(initialProfile);
  const id = 1;

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmitModify = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/api/profils/${id}`, profile);
    } catch (error) {
      console.error("There was an error updating the profile!", error);
    }
    setProfile((prev) => ({
      ...prev,
    }));
  };

  return (
    <div className="form-profil">
      <h1>Modifier le profil</h1>
      <form onSubmit={handleSubmitModify}>
        <fieldset className="fieldset-profil">
          <legend className="legend-form">Informations Personnelles</legend>
          <InputComponent
            label="Prénom"
            inputType="text"
            id="Prénom"
            inputName="firstname"
            inputValue={profile.firstname}
            handleChange={handleProfileChange}
            classBox="input-profil"
            isRequired
          />
          <InputComponent
            label="Nom"
            inputType="text"
            id="Nom"
            inputName="lastname"
            inputValue={profile.lastname}
            handleChange={handleProfileChange}
            classBox="input-profil"
            isRequired
          />
          <InputComponent
            label="Ville"
            inputType="text"
            id="Ville"
            inputName="city"
            inputValue={profile.city}
            handleChange={handleProfileChange}
            classBox="input-profil"
            isRequired={false}
          />
        </fieldset>
        <fieldset className="fieldset-profil">
          <legend className="legend-form">Contact</legend>
          <InputComponent
            label="Téléphone"
            inputType="text"
            id="Téléphone"
            inputName="phone"
            inputValue={profile.phone}
            handleChange={handleProfileChange}
            classBox="input-profil"
            isRequired={false}
          />
          <InputComponent
            label="Email"
            inputType="email"
            id="Email"
            inputName="mail"
            inputValue={profile.mail}
            handleChange={handleProfileChange}
            classBox="input-profil"
            isRequired
          />
        </fieldset>
        <fieldset className="fieldset-profil">
          <legend className="legend-form">Description</legend>
          <DescriptionComponent
            label=""
            descriptionName="description"
            id="description"
            description={profile.description}
            handleChange={handleProfileChange}
            classBox="textarea-form"
            classBox2="textarea-form"
          />
          <ButtonComponent
            text="Submit"
            handleClick={handleSubmitModify}
            btntype="submit"
            css="button-submit"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default ProfileModify;
