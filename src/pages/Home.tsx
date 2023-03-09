import { IonContent, IonHeader, IonPage, IonTitle} from '@ionic/react';
import Quiz from '../components/Quiz';
import './Home.css';

const Home: React.FC = () => {
  return (
   
    <IonPage>
     <IonHeader>
     <IonTitle class="ion-text-center">JavaScript Test</IonTitle>
     </IonHeader>
      <IonContent fullscreen>
        <Quiz />
      </IonContent>
    </IonPage>

   
  );
};

export default Home;
