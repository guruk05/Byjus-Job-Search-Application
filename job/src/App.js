import React, {useEffect, useState} from 'react';
import Job from './Jobs';
import './App.css';
import { Button } from 'reactstrap';




const App = () => {
  
  const url = "https://nut-case.s3.amazonaws.com/jobs.json";
   
  const [jobs , setJobs] = useState([]);
  
 
  useEffect(() => {
    getData();
  }, []); 

 const getData = async() =>{
  const jobData = await fetch(url);
  const data = await jobData.json();
  setJobs(data.data);
}  

  return (
    <div className="App">
      <header className="App-header">
        Job Search
      </header>
      <p>Search Jobs Here</p>
      <form className = "search-Jobs">
        <input className = "search-Form" type ="text" name="searchJob"/>
        <Button outline color="secondary">Search</Button>
      </form>
      {jobs.map(jobData => (
         <Job key = {jobData.companyName}
              title = {jobData.title} 
              companyName = {jobData.companyname} 
              location = {jobData.location} 
              experience = {jobData.experience} 
              skills = {jobData.skills} 
              type = {jobData.type} 
              endDate = {jobData.enddate} 
              apply = {jobData.applylink} />  
      ))}
    </div>
  );
}



export default App;
