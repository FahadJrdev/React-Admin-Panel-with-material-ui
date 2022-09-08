/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { Grid, Button, Card, CardContent, Typography } from '@mui/material';
import './form.css';
import Element from './component/Elements';
// component
import Iconify from '../../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


function NewForm({title, 
                  initialValue, 
                  inputFormElements, 
                  setAttemptToAdd, 
                  setAttemptToEdit
                }) {
  const [values, setValues] = useState(initialValue);
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  // console.log(values);
  
  function handleClose(){
    if(setAttemptToAdd){
      setAttemptToAdd("close");
    }
    if(setAttemptToEdit){
      setAttemptToEdit("close");
    }
    
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(values);
  }
 return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div onClick={handleClose} className="form-overlay"> </div>
      <div className="form">
        <Grid>
          <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <span onClick={handleClose} className="cancel">
                {getIcon('fa-solid:times')}
              </span>
              <Typography gutterBottom variant="h5" align="center">
                {title}
              </Typography> 
              <form method='POST' action='' onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  {
                   inputFormElements ? inputFormElements.map((input,i)=><Element key={i} input={input} handleInputChange={handleInputChange} value={``} /> ) : null
                  }
                  <Grid item xs={12}>
                    <span onClick={()=>setTimeout(() => {handleClose()}, 100)}><Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button></span>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
}
export default NewForm;