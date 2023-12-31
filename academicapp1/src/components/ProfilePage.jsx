import React from 'react';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4" className='w-auto'>
            <MDBCard className="mb-4">
              <MDBCardBody className="text-left pt-5 ps-5 m-0">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                   />


                   <div>
                   <p className="text-muted mb-1">student name</p>
                   <p className="text-muted mb-1">E-number</p>
                   </div>
                
                
              <div className='d-flex'>
                <div className='m-5 p-5 pt-0' >
                  <h1 className='p-4 cen text-center'>
                      Personal Infomation
                  </h1>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">20kkexxx@eng.lk</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Date Of Birth</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">dd-mm-yyyy</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Home Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">No:x example address</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>NIC</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">xxxxxxxxv</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Z-score(or gpa should discuss)</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">2.7</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Contact</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">0000000000</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="vertical-line mt-5"></div>
                <div className='m-5 p-5 pt-0'>
                
                  <h1 className='p-4 cen text-center'>
                      University Information
                  </h1>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Register Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">20kk/E/nnn</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>University Email:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">20kkexxx@eng.lk</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Registration Date:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">dd-mm-yyyy</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Current Semester:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">sem num</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Department:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Computer Engineering</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Academic Year:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">20kk/20yy</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Semester Based Infomation:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                          <div>
                              <button>see more</button>
                          </div>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </div>

              </div>
              


              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                

                <br/>
                <br/>
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol> */}
          
        </MDBRow>
      </MDBContainer>

    </section>
    
  );
}