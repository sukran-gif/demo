import React, { Component } from "react";
import Email from "./Email";
import Ad from "./Ad";
import Adress from "./Adres";
import PersonalInfo from "./PersonalInfo";

class Profil extends Component {
  render() {
    return (
      <div className="Profil">
        <Ad title="Şukran Məmmədşərifov" />
        <Email title="Suroboss1718@gmail.com" />
        <Adress title="Gabala" />
        <PersonalInfo age={20} specialty="ITIF" />
      </div>
    );
  }
}