import React, {useState} from 'react'
function TreatmentRecord(props) {
    const defaultTreatment = {
        treatId: "",
        name: "",
        category: "",
        type: "",
        startDate: "",
        prescription: "no",
        allergy:"no"
      }
 
      const [treatment, setTreatment] = useState(defaultTreatment);
      const [treatments, setTreatments] = useState([]);
      const [filteredTreatments, setFilteredTreatments] = useState([])
      //const [Name, setName] = useState ("");
 
      const handleOnchange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setTreatment(prevData =>  {
            return {
                ...prevData,
                [name]: value
            }
        })
      }
 
      const handleSubmit = () => {
          let data = treatment;
          data.treatId = generateTreatId();
          setTreatments(prevTreatments => [...prevTreatments, treatment])
          setFilteredTreatments(prevTreatments => [...prevTreatments, treatment])
      }
 
      const generateTreatId = () => {
          return Math.floor(Math.random()*10)
      }
 
      const handleSearch = (e) => {
        let searchValue = e.target.value;
        let filteredTreatments = treatments.filter(treatment => treatment.category.includes(searchValue))
        setFilteredTreatments(filteredTreatments)  
    }
 
    return (
        <div>
            <button onClick={() => props.setPatientDetails({})}>Back</button>
            <div>
                <label>Name</label> {props.patientDetails.name}<br/><br/>
                <label>Case No</label> {props.patientDetails.caseNo}<br/><br/>
                <label>Phone</label>  {props.patientDetails.phone}<br/><br/>
            </div>
        <div>
{/* <form> */}
    <label>Type</label><br/>
    <input placeholder = "Type" name="type" type = "text" onChange = {(e) => handleOnchange(e)} /><br/><br/>
    <label>Name</label><br/>
    <input placeholder = "Name" name="name" type = "text" onChange = {(e) =>handleOnchange(e)} /><br/><br/>
    <label>StartDate</label><br/>
    <input placeholder = "StartDate" name="startDate" type = "text" onChange = {(e) =>handleOnchange(e)} /><br/><br/>
    <label>Prescription</label><br/>
    <select name="prescription" onChange = {(e) =>handleOnchange(e)}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
    </select><br/><br/>
    <label>Category</label><br/>
    <input placeholder = "Category" name="category" type = "text" onChange = {(e) =>handleOnchange(e)} /><br/><br/>
    <label>Allergy</label><br/>
    <select name="allergy" onChange = {(e) =>handleOnchange(e)}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
    </select><br/><br/>
<button onClick={() => handleSubmit()}>submit</button>
    {/* </form> */} <br /> <br />
    <input placeholder = 'search' onChange={(e) => handleSearch(e)} />
</div> 
<br/>
<div>
<table>
  <thead>
  <tr>
    <th> Treat Id</th>
    <th>Type</th>
    <th>Name</th>
    <th>StartDate</th>
    <th>Category</th>
    <th >prescription</th>
    <th>allergy</th>
  </tr>
  </thead>
  <tbody>
  {filteredTreatments.map(item => { return (  
    <tr>
        <td>{item.treatId}</td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.startDate}</td>
        <td>{item.category}</td>
        <td 
          style={{color: item.prescription === "yes" ? 'blue' : 'black'}}
        >
            {item.prescription}
        </td>
        <td style = {{color: item.allergy=== "yes" ? 'red' : 'black', fontWeight: item.allergy === "yes" ? 'bold' : 'normal'}}>
            {item.allergy}
        </td>
    </tr>
  )})}
  </tbody>
</table>
</div>
</div>
 
    );
}
 
export default TreatmentRecord;
 