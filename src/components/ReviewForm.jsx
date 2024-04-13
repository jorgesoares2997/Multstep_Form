import "./ReviewForm.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="Fraco"
            name="review"
            required
            checked={data.review === "Fraco"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Fraco</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="Neutro"
            name="review"
            required
            checked={data.review === "Neutro"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
       
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="Legal"
            name="review"
            required
            checked={data.review === "Legal"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Legal</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="Adorei"
            name="review"
            required
            checked={data.review === "Adorei"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Adorei</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment" className="">
          Comentário
        </label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Deixe um comentario sobre meu portfólio"
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
