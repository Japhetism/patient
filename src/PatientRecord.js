import React, {useState} from 'react';
 
 
function PatientRecord({setPatientDetails}) {
    // case no, name, email, phone
    const defaultPatient = {
      caseNo: "",
      name: "",
      email: "",
      phone: ""
    }
 
    const [patient, setPatient] = useState(defaultPatient);
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([])
    //const [Name, setName] = useState ("");
 
    const handleOnchange = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      setPatient(prevData =>  {
          return {
              ...prevData,
              [name]: value
          }
      })
    }
 
    const handleSubmit = () => {
        let data = patient;
        data.caseNo = generateCaseNumber();
        setPatients(prevPatients => [...prevPatients, patient])
        setFilteredPatients(prevPatients => [...prevPatients, patient])
    }
 
    const generateCaseNumber = () => {
        return Math.floor(Math.random()*10)
    }
 
    const handleSearch = (e) => {
      let searchValue = e.target.value;
      let filteredPatients = patients.filter(item=> item.phone === searchValue)
      setFilteredPatients(filteredPatients) 
    }
 
    return (
        <div>
        <div>
{/* <form> */}
    <label>Name</label><br/>
    <input placeholder = "Name" name="name" type = "text" onChange = {(e) => handleOnchange(e)} /><br/><br/>
    <label>Email</label><br/>
    <input placeholder = "email" name="email" type = "text" onChange = {(e) => handleOnchange(e)} /><br/><br/>
    <label>Phone</label><br/>
    <input placeholder = "phone" name="phone" type = "text" onChange = {(e) =>handleOnchange(e)} /><br/><br/>
<button onClick={() => handleSubmit()}>submit</button>
    {/* </form> */} <br /> <br />
    <input placeholder = 'search' onChange={(e) => handleSearch(e) }/>
</div> 
<br/>
<div>
<table>
  <thead>
  <tr>
    <th>Case no</th>
    <th>Name</th>
    <th>Enail</th>
    <th>Phone</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  {filteredPatients.map(item => { return (  
    <tr>
        <td>{item.caseNo}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>
          <button onClick={() => setPatientDetails(item)}>View</button>
        </td>
    </tr>
  )})}
  </tbody>
</table>
</div>
</div>
 
    );
}

export default PatientRecord;