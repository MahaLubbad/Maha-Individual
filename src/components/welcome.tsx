import { IonContent } from "@ionic/react";
import Button from './Button';
//import { useState } from 'react';
//import Dashboard from '../pages/Dashboard';

const Welcome: React.FC = () => {
//const [showDashboard, setShowDashboard] = useState(false)
//   if(showDashboard) {
//     setShowDashboard(true)
//     return <Dashboard/>
//   } else {
    return (
      <IonContent>
        <Button />
      </IonContent>
    );
  }
   
  
  
  export default Welcome;