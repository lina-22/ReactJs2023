const date = new Date();
const year1 = date.getFullYear();
const month1 = date.getMonth();
const day1 = date.getDay();

const name = ["dog", "cat"]; // array distruction use third bracket
// name[0];
// name[1];

const [dog, cat] = name;
// const dog = name[0];
// const cat = name[1];

function Card(props) {
  //console.log(props)
  const { titleText, descText } = props; // obj distruction use second bracket
  return (
    <div className="card">
      {/* <h4 className="cardTitle"> {props.titleText} </h4> */}
      <h4 className="cardTitle"> {titleText} </h4>
      {/* <p className="cardDesc"> {props.descText} </p> */}
      <p className="cardDesc"> {descText} </p>
      <p className="cardFooter"> {day1 + " /" + month1 + " /" + year1} </p>
    </div>
  );
}

export default Card;
