import React from 'react';

export default function AuthorsList() {
  return (
    <div>
      <h3>Author List</h3>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
