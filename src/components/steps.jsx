import "./Steps.css";

import{AiOutlineUser, AiOutlineStar} from "react-icons/ai"
import { FiSend } from "react-icons/fi";
const Steps = ({ currentStep }) => {
  return (
    <div>
      <h2 className="steps">
        <div className="step active">
            <AiOutlineUser/>
          <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <AiOutlineStar/>
          <p>Avaliação</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
          <FiSend/>
          <p>Envio</p>
        </div>
      </h2>
    </div>
  );
};

export default Steps;
