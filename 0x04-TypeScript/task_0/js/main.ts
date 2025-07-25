interface Student {
    firstname:string;
    lastname:string;
    age:number;
    location:string;
}



 const abel:Student ={
    firstname:'abel',
    lastname: 'kebede',
    age: 13,
    location:'Addis Ababa',

 }
  const konjit:Student ={
    firstname:'konjit',
    lastname: 'kebede',
    age: 17,
    location:'Addis Ababa',

 }

const studentsList: Student[] = [abel, konjit];


function renderStudentTable(students: Student[]): void {

  let table = document.getElementById("studentsTable") as HTMLTableElement;
  
  if (!table) {
    // Create table if it doesn't exist
    table = document.createElement('table');
    table.id = 'studentsTable';
    table.innerHTML = `
      <thead>
        <tr>
          <th>First Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    document.body.appendChild(table);
  }

  // Get table body
  const tbody = table.getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; 

  students.forEach(student => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.textContent = student.firstname;
    cell2.textContent = student.location;
  });
}


document.addEventListener('DOMContentLoaded', () => {
  renderStudentTable(studentsList);
});


  
 