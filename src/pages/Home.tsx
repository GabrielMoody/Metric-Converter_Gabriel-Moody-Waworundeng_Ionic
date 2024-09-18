import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonInput, IonText, IonItem, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import './Home.css';
import MenuPanjang from './MenuPanjang';
import MenuSuhu from './MenuSuhu';
import MenuMassa from './MenuMassa';
import MenuWaktu from './MenuWaktu';
import { useState } from 'react';

const Home: React.FC = () => {

  const [metric, setMetric] = useState("")

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>Metric Converter</IonTitle>
          <p className='ion-text-center ion-no-margin'>By: Gabriel Moody Waworundeng</p>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Pilih Metrik : </p>
        <IonList>
          <IonItem>
            <IonSelect  
              placeholder="Pilih Metrik"
              onIonChange={(e) => setMetric(e.detail.value)}
              interface='popover'
            >
              <IonSelectOption value="panjang">Panjang</IonSelectOption>
              <IonSelectOption value="massa">Massa</IonSelectOption>
              <IonSelectOption value="suhu">Suhu</IonSelectOption>
              <IonSelectOption value="waktu">Waktu</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        { metric === "panjang" ? <MenuPanjang /> : null }
        { metric === "massa" ? <MenuMassa /> : null }
        { metric === "suhu" ? <MenuSuhu /> : null }
        { metric === "waktu" ? <MenuWaktu /> : null }
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
