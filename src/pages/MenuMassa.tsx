import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput, IonText, IonContent } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const MenuMassa: React.FC = () => {

  const [dari, setDari] = useState("")
  const [ke, setKe] = useState("")
  const [angka, setAngka] = useState(0)
  const [hasil, setHasil] = useState(0)

  const hitung = () => {
    const metrik = ["mg", "cg", "dg", "g", "dag", "hg", "kg"]
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
            <IonSelect interface='popover' aria-label="massa" placeholder="Pilih Satuan" onIonChange={e => setDari(e.target.value)}>
              <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
              <IonSelectOption value="cg">centigram</IonSelectOption> <br />
              <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
              <IonSelectOption value="g">gram</IonSelectOption> <br />
              <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
              <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
              <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
            </IonSelect>
          </IonItem>
        </IonList>

        <p>Ke :</p>
        <IonList>
          <IonItem>
            <IonSelect interface='popover' aria-label="massa" placeholder="Pilih Satuan" onIonChange={e => setKe(e.target.value)}>              
              <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
              <IonSelectOption value="cg">centigram</IonSelectOption> <br />
              <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
              <IonSelectOption value="g">gram</IonSelectOption> <br />
              <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
              <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
              <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
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

export default MenuMassa;
