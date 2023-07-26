const todoTitle = "Call Family";

const date = new Date();

const year1 = date.getFullYear();
const month1 = date.getMonth();
const day1 = date.getDay();

function Card() {
  return (
    <div className="card">
      <h4 className="cardTitle"> {todoTitle} </h4>
      <p className="cardDesc"> Alhamdulillah lorem jgjhghuyhuyhui </p>{" "}
      <p className="cardFooter"> {day1 + " /" + month1 + " /" + year1} </p>{" "}
    </div>
  );
}

export default Card;
