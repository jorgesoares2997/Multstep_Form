import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import { FiSend } from "react-icons/fi";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import "./App.css";

import { useForm } from "./hooks/useForm";
import Steps from "./components/steps";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  function sendEmail(e) {
    e.preventDefault();
    if (data.name === "" || data.email === "" || data.review === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "jorgesoares2997@gmail.com",
      Password: "15672F23AC3676E7023F7F8189CF312DDE82",
      To: data.email,
      From: "jorgesoares2997@gmail.com",
      Subject: `Olá ${data.name}`,
      Body: `Muito obrigado por sua avaliação ao meu portfólio, te agradeço.<br> 
      sua avaliação foi: ${data.review}<br>
      e o seu comentario foi: ${data.comment}<br>
      <br>
      <br>
      Mais uma vez, muito obrigado! 
      <br>
      att.
      <br>
      Jorge Soares
      `,
    }).then(
      (message) => alert("Avaliação enviada, obrigado por participar."),
      location.reload()
    );
  }

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua visita, utilize o formulário abaixo para
          avaliar o portfólio
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={sendEmail}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                className="btn"
                type="button"
                onClick={(e) => changeStep(currentStep - 1, e)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button
                type="button"
                className="btn"
                onClick={(e) => changeStep(currentStep + 1, e)}
              >
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit" className="btn">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
