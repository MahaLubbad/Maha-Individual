import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Quiz from '../components/Quiz';
import './Home.css';

const Home: React.FC = () => {
  return (
   
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">JavaScript Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
    
     
 
        <ExploreContainer />
        <Quiz />
      </IonContent>
    </IonPage>

   
  );
};

export default Home;
