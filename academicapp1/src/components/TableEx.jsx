import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function TableEx(props) {
  const navigate = useNavigate();
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name Of The Student</th>
          <th scope='col'>e-number</th>
          <th scope='col'>semester</th>
          <th scope='col'>subject</th>
          <th scope='col'>Full Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.data.map((row) => (
          <tr key={row.name}>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src={row.imgSrc}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{row.name}</p>
                  <p className='text-muted mb-0'>{row.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{row.registerNumber}</p>
              <p className='text-muted mb-0'>{row.academicYear}</p>
            </td>
            <td>
              <MDBBadge color={row.statusColor} pill>
                {row.status}
              </MDBBadge>
            </td>
            <td>{row.subject}</td>
            <td>
              <MDBBtn color='dark' rounded size='sm' onClick={() => navigate(row.link)}>
                See More
              </MDBBtn>
            </td>
          </tr> 
        ))}
      </MDBTableBody> 
    </MDBTable> 
  ); 
} 

export default TableEx;
