import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardEx from '../components/CardEx'



//import VerticalDividerExample from '../components/VerticalDividerExample'
//import TableEx from '../components/TableEx'
//rafce- shortcut

const Title = () => {
  return (
    <h1 className='text-black text-center bg-green nav-inner'>
      Home Page
    </h1>
    
  )
}


const CustomAccordion = () => {
  return (
    <Accordion id="accordion">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Collapsible Group Item #1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Collapsible Group Item #2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Collapsible Group Item #3
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};




const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* content */}
        <Title/>
        <div className='d-flex justify-content-center'>
          <div className='mx-5'>
              <CardEx title="Students Details" 
                      text="My Text" 
                      imgSrc="./SMS_Logo.png" />
          </div>
          <div className='mx-5'>
              <CardEx title="Coordinating Cource Details" 
                      text="My Text" 
                      imgSrc="./SMS_Logo.png" />
          </div>
          <div className='mx-5'>
              <CardEx title="Advisor Approvel Details" 
                      text="My Text" 
                      imgSrc="./SMS_Logo.png" />
          </div>
        </div>

       
        
        {/* footer */}
        <Footer/>

        
    </div>
  )
}

export default Home;