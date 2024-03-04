import React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from './lion.jpg'
import './index.css';

function DateInformation({dateInformation}){
  return(
    <>
    <div className='date-information'>
      <div className='left-section'>
        <h4>{dateInformation[0]}</h4>
        <h4>{dateInformation[1]}</h4>
      </div>
      <div className='right-section'>
        <h4>{dateInformation[2]}</h4>
      </div>
    </div>
    </>
  );
}

function Section({ titleText, informationText, dateArray}){
  return(
    <div className={"section-information"}>
      {titleText ? <Title title={titleText}/> : ""}
      <div>
        {dateArray ? <DateInformation dateInformation={dateArray}/> : ""}
      </div>
      {informationText ? <Paragraph information={informationText}/> : ""}
    </div>
  );
}

function Paragraph({information}){
  return (
    <p className='paraphra-text'>{information}</p>
  );
}

function Title({title}){
  return(
    <h2 className='h1-text'>{title}</h2>
  );
}

function Main(){
  const jsonData = require('./information.json');

  console.log(jsonData)
  
  jsonData.map((value) => {return console.log(value.titleText, value.informationText)})

  return(
    jsonData.map(
      (section) => { 

        return <Section titleText={section.titleText} dateArray={section.dateText} informationText={section.informationText}></Section>
      }
    )
  );

}

function MyInformation(){
  return(
    <div className='section-person-info'>
      <img className="avatar-img" src={Avatar} alt="avatar"/>
      <h1>Joaquin Cuello</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='principal-section'>
      <div className='left-section'>
        <Main/>
      </div>
      <div className='right-section-personal-info'> 
        <MyInformation/>
      </div>
    </div>

  </>
);  