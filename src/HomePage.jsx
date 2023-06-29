import React from 'react';
import './HomePage.css';
 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Dobrodošli na Kanban Tablu</h1>
      <div className="carousel-container">
        <Carousel showArrows={true} infiniteLoop={true}>
          <div>
            <img src="https://www.shutterstock.com/shutterstock/photos/1337303492/display_1500/stock-photo-scrum-task-board-on-dark-wall-in-office-1337303492.jpg" alt="Kanban slika 1" />
            <p className="legend">Slika 1</p>
          </div>
          <div>
            <img src="https://www.shutterstock.com/image-vector/kanban-project-management-system-flat-600w-1255748305.jpg" alt="Kanban slika 2" />
            <p className="legend">Slika 2</p>
          </div>
          <div>
            <img src="https://www.shutterstock.com/image-vector/online-kanban-technology-laptop-paper-600w-1143831317.jpg" alt="Kanban slika 3" />
            <p className="legend">Slika 3</p>
          </div>
        </Carousel>
      </div>
      <div className="kanban-info">
        <h2>Šta je Kanban tabla?</h2>
        <p>
          Kanban tabla je alat za vizuelno upravljanje zadacima i organizaciju
          projekata. To je koncept koji je prvobitno razvijen u okviru Toyota
          proizvodnje kao deo sistema Just-in-Time (JIT) proizvodnje. Kasnije je
          prenesen u industriju softvera i postao popularan među razvojnim
          timovima.
        </p>
        <h2>Istorija Kanban table</h2>
        <p>
          Kanban tabla je prvi put implementirana u Toyotinoj fabrici
          automobila. Njeno ciljno polje bilo je poboljšanje efikasnosti i
          fleksibilnosti proizvodnje. Sistem je koristio vizuelne kartice
          (kanban kartice) za praćenje toka materijala i informacija kroz
          proizvodni proces. Nakon uspeha u Toyoti, kanban metoda je postala
          široko prihvaćena i primenjena u mnogim drugim industrijama i
          sektorima.
        </p>
        <h2>Kako radi Kanban tabla?</h2>
        <p>
          Kanban tabla se sastoji od kolona koje predstavljaju različite faze
          rada, kao što su "To Do", "In Progress" i "Completed". Svaki zadatak
          se predstavlja karticom koja se pomera horizontalno kroz kolone kako
          napreduje. Ovo omogućava timovima da jasno vide stanje i napredak
          projekta.
        </p>
      </div>
 
    </div>
  );
};

export default HomePage;
