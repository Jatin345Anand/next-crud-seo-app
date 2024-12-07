import { useEffect, useState } from 'react';
import { getStudents } from '../services/api';
import SearchBar from './SearchBar';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const { data } = await getStudents();
      setStudents(data);
      setFilteredStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const results = students.filter(
      (student) =>
        student.first_name.toLowerCase().includes(lowerQuery) ||
        student.last_name.toLowerCase().includes(lowerQuery) ||
        student.email.toLowerCase().includes(lowerQuery) ||
        student.grade.toString().includes(lowerQuery)
    );
    setFilteredStudents(results);
  };

  return (
    <div>
      <h1>Student List</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.first_name} {student.last_name} - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
