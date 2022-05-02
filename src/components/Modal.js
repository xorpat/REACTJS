import { useState } from 'react'
import "./Modal.css";
import { SettingsModal } from "./SettingsModal";


function Modal({closeModal}) {
    const [openSettings, setOpenSettings] = useState(false);
   

  return (
    
    <div className="modalBackground">
       
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="modalTitle">
                <h1>Are you sure you want to continue?</h1>
            </div>
            <div className="modalBody">
                <h4>Ihre Privatsphäre ist uns wichtig</h4>
                Wir speichern und/oder greifen auf Informationen auf einem Gerät zu, z.B. auf eindeutige Kennungen in Cookies,
                um personenbezogene Daten zu verarbeiten. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien,
                Werbung und Analysen weiter. Sie können Ihre Präferenzen akzeptieren oder verwalten.
                <span>Datenschutz</span>
                <h4>Wir verarbeiten Daten, um Folgendes bereitzustellen:</h4>
                Wenn Sie einwilligen, können wir Daten auf einem Gerät speichern oder abrufen. 
                Damit können wir folgende Funktionen bereitstellen: Genaue Standorterkennung und auslesen der Geräteinformationen zur Identifikation. 
                Personalisierte Anzeigen und Inhalte, Anzeigen- und Inhaltsmessung, Erkenntnisse über Zielgruppen. 
                Sie können die Verwendung von Cookies ablehnen oder jederzeit über Ihre <span className="linkElement" onClick={ setOpenSettings}>Einstellungen</span> anpassen.
            </div>
            <div className="modalFooter">
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
            {openSettings && <SettingsModal closeModal={setOpenSettings} />}
        </div>
    </div>
  )
}

export default Modal