import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput, IonContent } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const MenuWaktu: React.FC = () => {

  const [dari, setDari] = useState("")
  const [ke, setKe] = useState("")
  const [angka, setAngka] = useState(0)
  const [hasil, setHasil] = useState(0)
  
  const hitung = () => {
    const metrik = ["s", "m", "h"]
    const kali = [1,60,3600]

    const a = metrik.findIndex(i => i === dari)
    const b = metrik.findIndex(i => i === ke)

    if(a-b < 0) {
      setHasil(angka / kali[Math.abs(a-b)]) 
    } else {
      setHasil(angka * kali[Math.abs(a-b)])
    }
  }
  
  return (
    <>
      <IonContent>
        <p>Dari :</p>
        <IonList>
          <IonItem>
            <IonSelect interface='popover' aria-label="waktu" placeholder="Pilih Satuan" onIonChange={e => setDari(e.target.value)}>
              <IonSelectOption value="s">sekon</IonSelectOption> <br />
              <IonSelectOption value="m">menit</IonSelectOption> <br />
              <IonSelectOption value="h">jam</IonSelectOption> <br />
            </IonSelect>
          </IonItem>
        </IonList>

        <p>Ke :</p>
        <IonList>
          <IonItem>
            <IonSelect interface='popover' aria-label="waktu" placeholder="Pilih Satuan" onIonChange={e => setKe(e.target.value)}>
              <IonSelectOption value="s">sekon</IonSelectOption> <br />
              <IonSelectOption value="m">menit</IonSelectOption> <br />
              <IonSelectOption value="h">jam</IonSelectOption> <br />
            </IonSelect>
          </IonItem>
        </IonList>

        <br />

        <IonInput 
          label="Masukan angka" 
          labelPlacement="floating" 
          fill="outline" 
          type='number' 
          placeholder="Masukan angka"
          onIonInput={(e: any) => setAngka(parseFloat(e.target.value))}></IonInput>
        <IonButton expand='block' color="primary" onClick={() => hitung()}>Convert</IonButton>
        <p className='hasil'>Hasil : {hasil.toFixed(2)} {ke}</p>
      </IonContent>
    </>

    
  );
};

export default MenuWaktu;
