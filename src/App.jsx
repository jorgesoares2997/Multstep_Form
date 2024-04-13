import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import { FiSend } from "react-icons/fi";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import "./App.css";
import emailjs from "@emailjs/browser";
import { useForm } from "./hooks/useForm";
import Steps from "./components/steps";
import { useState } from "react";
// import { send } from "vite";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [comment, setComment] = useState("");

  function sendEmail(e) {
    // e.preventDefault();
    if (data.name === "" || data.email === "" || data.review === ""){
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Avaliação enviada, obrigado por participar.")
    

    const templateParams = {
      from_name : name,
      comment : comment,
      email : email,
      review : review
    }
    emailjs.send("service_gwctcy4","template_gviem3n",templateParams,"Da8SFaIxNe3yq2uoM")
    .then((response) => {
      console.log("Email enviado", response.status, response.text);
      setName("")
      setEmail("")
      setComment("")
      setReview("")
    }, (err) => {
      console.log("Erro: ", err)
    },);
    function spaces(){
      if(formTemplates.nome === "" && formTemplate.email === "" && formTemplate.comment === "" ){
        alert("Por favor, preencha todos os campos.")
      }else{
        (e) => changeStep(currentStep + 1, e)
      }
    }
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
                onClick={ (e) => changeStep(currentStep + 1, e)}
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