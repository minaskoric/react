 
import './App.css';
import { useState } from 'react';
import TaskTable from './TaskTable';
import HomePage from './HomePage';
import Navbar from './Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Izvršiti istraživanje za projekat',
      description: 'Pročitati relevantne članke i materijale o temi projekta.',
      time: 60,
      status: 'todo',
    },
    {
      id: 2,
      name: 'Napraviti wireframe za dizajn',
      description: 'Nacrtati osnovni koncept dizajna aplikacije.',
      time: 30,
      status: 'todo',
    },
    {
      id: 3,
      name: 'Implementirati korisnički interfejs',
      description: 'Kreirati osnovne komponente za prikaz podataka.',
      time: 90,
      status: 'in progress',
    },
    {
      id: 4,
      name: 'Povezati korisnički interfejs sa podacima',
      description: 'Implementirati funkcionalnost za prikazivanje dinamičkih podataka.',
      time: 120,
      status: 'in progress',
    },
    {
      id: 5,
      name: 'Dodati mogućnost unosanja novih taskova',
      description: 'Omogućiti korisnicima da dodaju nove taskove u aplikaciju.',
      time: 60,
      status: 'todo',
    },
    {
      id: 6,
      name: 'Implementirati logiku za premeštanje taskova',
      description: 'Omogućiti korisnicima da premeštaju taskove između kategorija.',
      time: 90,
      status: 'todo',
    },
    {
      id: 7,
      name: 'Dodati mogućnost označavanja taskova kao završenih',
      description: 'Omogućiti korisnicima da označe taskove kao završene.',
      time: 60,
      status: 'in progress',
    },
    {
      id: 8,
      name: 'Optimizovati performanse aplikacije',
      description: 'Identifikovati i rešiti moguće probleme sa performansama.',
      time: 120,
      status: 'todo',
    },
    {
      id: 9,
      name: 'Stilizovati aplikaciju',
      description: 'Dodati stilove i poboljšati vizuelni izgled aplikacije.',
      time: 60,
      status: 'in progress',
    },
    {
      id: 10,
      name: 'Testirati aplikaciju i otkloniti greške',
      description: 'Proveriti funkcionalnost aplikacije i ispraviti eventualne greške.',
      time: 90,
      status: 'completed',
    },
  ]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomePage></HomePage>} />
        <Route path="/kanban" element={<TaskTable tasks={tasks}></TaskTable>} />
      </Routes>
    </Router>
  );
}

export default App;

 
 
