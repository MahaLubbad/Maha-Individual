import { IonButton } from "@ionic/react";
import { Link } from "react-router-dom";
//import './Button.css'

const Button: React.FC = () => {
    return (
        <Link to="/Quiz">
        <IonButton >Start Quiz</IonButton>
        </Link>
    );
  };
  export default Button;