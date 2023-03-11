import {  IonContent, IonImg } from "@ionic/react";
import Button from './Button';
import './Welcome.css';

const Welcome: React.FC = () => {

    return (
      <IonContent scrollY={false}>
          
          <div className="image">
              <IonImg  src="../../assets/javascript-img.png" alt="code"></IonImg>
        
              <Button />
             </div>
      </IonContent>
    );
  }
   
  
  
  export default Welcome;