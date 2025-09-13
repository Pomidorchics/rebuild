import React, { useState } from "react";
import "../styles/Block7.css";
import document from "../assets/document_block7.png";

const Letter = () => {
  return (
    <section className="letter" id="letter">
      <div className="container">
        <div className="letter-grid">
          <p className="letter-text">
            О нас, ed ut perspiciatis, unde omnis iste natus error sit
            voluptatem doloremque laudantium, totam rem aperiam eaque ipsa, quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt, explicabo. Nemo enim voluptatem, quia voluptas sit, aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos, qui
            ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
            dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt, ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure.
          </p>
        </div>
        <div className="right-documents">
          <div className="contract">
            <img src={document} alt="Договор" />
            <p className="right-text">Договор</p>
          </div>
          <div className="example-estimate">
            <img src={document} alt="Пример сметы" />
            <p className="right-text">Пример сметы</p>
          </div>
          <div className="documents">
            <img src={document} alt="Документы ИП" />
            <p className="right-text">Документы ИП</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
