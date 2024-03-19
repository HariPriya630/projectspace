import React,{ useState } from "react"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import { Button, Card, CardBody, Col, FormGroup,InputGroup, Label, Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { connect } from "react-redux";
import axios from 'axios'; // or if you have a specific axios instance: import axiosAPI from 'wherever-it-is-defined';
import { useLocation } from "react-router-dom";
import { useEffect } from "react"
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormValidations = (props) => {
  const location = useLocation();
    const [eventDetails, setEventDetails] = useState({ eventName: '', eventImage: '' });

    useEffect(() => {
        // Assuming the event details are passed in location.state
        if (location.state) {
          console.log(location.state);
            setEventDetails({
                eventName: location.state.eventName,
                eventImage: location.state.eventImage
            });
        }
    }, [location]);
    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const[formdata,setFormdata]=useState({
      'first_name':'',
      'last_name':'',
      'roll_number':'',
      'mobile_number':'',
      'email':'',
      'branch':'',
      'passout_year':'',
      'college':'',
      'gender':'',
      'event_name':''
  })
  // console.log(formdata);
  // let backend_api="++"
  const APP_URL = process.env.REACT_APP_DATABASEURL;
  
  function handleInputChange(event){
      const{name,value}=event.target;
      setFormdata((previousProps)=>({
          ...previousProps,
          [name]:value
      }))
  }
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    const fullUrl = `${APP_URL}/login-user`;


    try {
        const res = await axios.post(fullUrl, formdata);
        console.log(res);
        if (res.status === 201) {
            alert("Registered Successfully");
            window.location.href = '/'
          
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("Please Try again");
    }
};

  return (
    <React.Fragment>
      <Row>
        <Col lg="8" className="center">
          <Card className="card-animation-enter center " >
            <CardBody >
            <h4>Registering for: {eventDetails.eventName}</h4>
                            {eventDetails.eventImage && (
                                <img src={`http://localhost:5000/images/${eventDetails.eventImage}`} alt="Event" style={{ maxWidth: "100%", marginBottom: "20px" }} />
                            )}
              <AvForm onSubmit={handlesubmit} >
                <AvField
                  className="mb-3"
                  name="first_name"
                  label="Enter First name"
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter First Name"
                  validate={{ required: { value: true } }}
                  value={formdata.first_name} 
                  onChange={(e)=>setFormdata({...formdata,first_name:e.target.value})}

                />
                
                <AvField
                  className="mb-3"
                  name="last_name"
                  label="Enter Last name"
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter Last Name"
                  validate={{ required: { value: true } }}
                  value={formdata.last_name} 
                  onChange={(e)=>setFormdata({...formdata,last_name:e.target.value})}

                />
                <AvField
                  className="mb-3"
                  name="event_name"
                  label="Enter Event name"
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter Event Name"
                  validate={{ required: { value: true } }}
                  value={formdata.event_name} 
                  onChange={(e)=>setFormdata({...formdata,event_name:e.target.value})}

                />
                <AvField
                  className="mb-3"
                  name="roll_number"
                  label="Enter Roll number"
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter Roll number"
                  validate={{ required: { value: true } }}
                  value={formdata.roll_number} 
                  onChange={(e)=>setFormdata({...formdata,roll_number:e.target.value})}

                />
                
                <AvField
                  className="mb-3"
                  name="mobile_number"
                  label="mobile number"
                  placeholder="Type Something"
                  type="number"
                  errorMessage="Enter Mobile Number"
                  validate={{ required: { value: true } }}
                  value={formdata.mobile_number} 
                  onChange={(e)=>setFormdata({...formdata,mobile_number:e.target.value})}

                />
                <AvField
                  className="mb-3"
                  name="email"
                  label="Enter Email"
                  placeholder="Type Something"
                  type="email"
                  errorMessage="Enter Email"
                  validate={{ required: { value: true } }}
                  value={formdata.email} 
                  onChange={(e)=>setFormdata({...formdata,email:e.target.value})}

                />
                <Label>Branch</Label>
                <AvField
                  className="mb-3"
                  name="branch name"
                  type="text"
                  placeholder="branch name"
                  errorMessage="Enter branch name"
                  validate={{ required: { value: true } }}
                  value={formdata.branch} 
                  onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}

                />
                
                <AvField
                  className="mb-3"
                  name="passout_year"
                  label="Enter passout year"
                  placeholder="Type Something"
                  type="number"
                  errorMessage="Enter passout year"
                  validate={{ required: { value: true } }}
                  value={formdata.passout_year} 
                  onChange={(e)=>setFormdata({...formdata,passout_year:e.target.value})}

                />
                <AvField
                  className="mb-3"
                  name="college"
                  label="Enter college name"
                  placeholder="Enter college name"
                  type="text"
                  errorMessage="Enter college name"
                  validate={{ required: { value: true } }}
                  value={formdata.college} 
                  onChange={(e)=>setFormdata({...formdata,college:e.target.value})}

                />
                <AvField
                  className="mb-3"
                  name="gender"
                  label="gender"
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter gender"
                  validate={{ required: { value: true } }}
                  value={formdata.gender} 
                  onChange={(e)=>setFormdata({...formdata,gender:e.target.value})}

                />
                
                <FormGroup className="mb-0">
                  <div>
                    <Button type="submit" color="primary" className="ms-1">
                      Submit
                        </Button>
                  </div>
                </FormGroup>
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormValidations);