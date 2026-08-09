import "./StepCard.scss";

function StepCard({ number, title }) {
  return (
    <article className="step-card">
      <div className="step-card__number">{number}</div>
      <p className="step-card__text">{title}</p>
    </article>
  );
}

export default StepCard;