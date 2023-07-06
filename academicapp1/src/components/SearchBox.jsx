import React, { useState } from 'react';

const SearchComponent = ({ students }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredStudents = students.filter((student) =>
      student.registerNumber.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filteredStudents);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by E number"
        value={searchValue}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((student) => (
              <li key={student.registerNumber}>
                <div>
                  <img src={student.imgSrc} alt={student.name} />
                </div>
                <div>
                  <h3>{student.name}</h3>
                  <p>Email: {student.email}</p>
                  <p>Register Number: {student.registerNumber}</p>
                  <p>Academic Year: {student.academicYear}</p>
                  <p>Status: {student.status}</p>
                  <p>Subject: {student.subject}</p>
                  <a href={student.link}>Link</a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;




//how to call this component Note 
// import React from 'react';
// import SearchComponent from './SearchComponent';

// class ParentComponent extends React.Component {
//   // Define your state and other necessary functions

//   render() {
//     return (
//       <div>
//         {/* Other components and content */}
//         <SearchComponent students={this.state.students} />
//         {/* Other components and content */}
//       </div>
//     );
//   }
// }

// export default ParentComponent;
