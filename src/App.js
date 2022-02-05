import React, {useState} from 'react';
import PatientRecord from './PatientRecord';
import TreatmentRecord from './TreatmentRecord';
 
 
function App() {
  const [patientDetails, setPatientDetails] = useState({})
 
  console.log(patientDetails);
  return (
   <div>
     <h1> Patient Record </h1>
   {!patientDetails.caseNo && <PatientRecord 
     setPatientDetails={setPatientDetails}
   />}
   {patientDetails.caseNo && <TreatmentRecord 
     patientDetails={patientDetails}
     setPatientDetails={setPatientDetails}
   />}
    </div>
  );
}
 
export default App;