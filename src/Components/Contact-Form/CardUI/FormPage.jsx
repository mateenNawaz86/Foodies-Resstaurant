import React from "react";
import PageTitle from "../../DishPage/CardUI/Title/PageTitle";
import Card from "../../UI/Card";
import ContactInfo from "./ContactInfo";
import Form from "../Form/Form";

import "./FormPage.css";

const FormPage = () => {
  return (
    <>
      <div className="main__container">
        <div className="title__section">
          <PageTitle title="Get In Touch" />
        </div>

        <div className="form-card">
          <Card>
            <div className="form-inner">
              <div className="form-info">
                <ContactInfo />
              </div>

              <div className="contact-form">
                <Form />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormPage;
