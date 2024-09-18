import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput, IonContent } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const MenuSuhu: React.FC = () => {

  const [dari, setDari] = useState("")
  const [ke, setKe] = useState("")
  const [angka, setAngka] = useState(0)
  const [hasil, setHasil] = useState(0)

  const hitung = () => {
    if(dari === "c" && ke === "f") {
      setHasil(9 / 5 * angka + 32) 
    } else if(dari === "c" && ke === "k") {
      setHasil(angka +273)
    } else if(dari === "c" && ke === "r") {
      setHasil(4 / 5 * angka)
    } else if(dari === "f" && ke === "c") {
      setHasil(5 / 9 * (angka-32))
    } else if(dari === "f" && ke === "k") {
      setHasil(5 / 9 * (angka-32) + 273)
    } else if(dari === "f" && ke === "r") {
      setHasil(4 / 9 * (angka-32))
    } else if(dari === "k" && ke === "c") {
      setHasil(angka - 273)
    } else if(dari === "k" && ke === "f") {
      setHasil(9 / 5 * (angka-273) + 32)
    } else if(dari === "k" && ke === "r") {
      setHasil(4 / 5 * (angka-273))
    } else if(dari === "r" && ke === "c") {
      setHasil(5 / 4 * angka)
    } else if(dari === "r" && ke === "f") {
      setHasil(9 /4 * angka + 32)
    } else if(dari === "r" && ke === "k") {
      setHasil(5 / 4 * angka + 273)
    } else {
      setHasil(angka)
    }
  }
  
  return (
    <>
      <IonContent>
      <p>Dari :</p>
        <IonList>
          <IonItem>
            <IonSelect interface='popover' aria-label="suhu" placeholder="Pilih satuan" onIonChange={(e => setDari(e.target.value))}>
              <IonSelectOption value="c">Celcius</IonSelectOption> <br />
              <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
              <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
              <IonSelectOption value="r">Reamur</IonSelectOption> <br />
            </IonSelect>
          </IonItem>
        </IonList>

        <p>Ke :</p>
        <IonList>
          <IonItem>
            <IonSelect interface='popover' aria-label="suhu" placeholder="Pilih satuan" onIonChange={(e => setKe(e.target.value))}>
              <IonSelectOption value="c">Celcius</IonSelectOption> <br />
              <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
              <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
              <IonSelectOption value="r">Reamur</IonSelectOption> <br />
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

export default MenuSuhu;
