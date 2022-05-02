import  {useState} from 'react'
import Switch from "react-switch";

export function SettingsModal({closeModal}) {
  const [checked, setChecked] = useState(false);
  return (
        <div className='modalSettingsBackground'>
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="modalTitle">
                <h1>Wählen Sie welche Cookie Kategorie Sie zulassen möchten.</h1>
            </div>
            <div className="modalSettingsBody">
            <h4>Funktionelle Cookies</h4>
            <Switch onChange={ setChecked} checked={checked}/>
            <p>
                Diese Cookies werden für die Kernfunktion der Webseite benötigt
            </p>
            <h4>Marketing Cookies</h4>
            <Switch onChange={ setChecked} checked={checked}/>
            <p>
                Für Werbe und Remarketing werden Daten gesammelt wie Klicks bzw. bestimmte Seitenaufrufe und in einem Cookie gespeichert.
            </p>
            </div>
            <div className="modalFooter">
                <hr></hr>
            </div>
        </div>
        
        </div>
  )
}
