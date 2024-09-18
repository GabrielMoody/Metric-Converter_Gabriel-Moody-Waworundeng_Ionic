import { IonList, IonItem, IonSelect, IonSelectOption, IonInput, IonButton, IonContent } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const MenuPanjang: React.FC = () => {

  const [dari, setDari] = useState("")
  const [ke, setKe] = useState("")
  const [angka, setAngka] = useState(0)
  const [hasil, setHasil] = useState(0)

  const hitung = () => {
    const metrik = ["mm", "cm", "dm", "m", "dam", "hm", "km"]
    const kali = [1, 10, 100, 1000, 10000, 100000, 1000000]

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
            <IonSelect interface='popover' aria-label="panjang" placeholder="Pilih satuan" onIonChange={(e) => setDari(e.detail.value)}>              
              <IonSelectOption value="mm">mililimeter</IonSelectOption> <br />
              <IonSelectOption value="cm">centimeter</IonSelectOption> <br />
              <IonSelectOption value="dm">desimeter</IonSelectOption> <br />
              <IonSelectOption value="m">meter</IonSelectOption> <br />
              <IonSelectOption value="dam">dekameter</IonSelectOption> <br />
              <IonSelectOption value="hm">hektameter</IonSelectOption> <br />
              <IonSelectOption value="km">kilometer</IonSelectOption> <br />
            </IonSelect>
          </IonItem>
        </IonList>

        <p>Ke :</p>
        <IonList>
          <IonItem>
            <IonSelect interface='popover' aria-label="panjang" placeholder="Pilih satuan" onIonChange={(e) => setKe(e.detail.value)}>
              <IonSelectOption value="mm">mililimeter</IonSelectOption> <br />
              <IonSelectOption value="cm">centimeter</IonSelectOption> <br />
              <IonSelectOption value="dm">desimeter</IonSelectOption> <br />
              <IonSelectOption value="m">meter</IonSelectOption> <br />
              <IonSelectOption value="dam">dekameter</IonSelectOption> <br />
              <IonSelectOption value="hm">hektameter</IonSelectOption> <br />
              <IonSelectOption value="km">kilometer</IonSelectOption> <br />
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

export default MenuPanjang;
