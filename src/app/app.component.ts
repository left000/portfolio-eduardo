import { Component } from '@angular/core';
import { Persona, Hobbies, Nivello } from './model/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persona: Persona = {
    anagrafica: {
      nome: 'Lorenzo Eduardo',
      cognome: 'Furio',
      indirizzo: 'BA, Molfetta - Via isonzo n 11',
      dataDiNascita: '29-12-1998',
      nazionalita: [{
        nazionalita: 'Italiano'
      },]
    },
    contatti: {
      email: 'eduardofurio22@gmail.com',
      telfFisso: '',
      telf: '327 899 3018'
    },
    lingue: [
      { flag: '', lingua: 'Spagnolo', level: Nivello.MADRELINGUA },
      { flag: '', lingua: 'Italiano', level: Nivello.MADRELINGUA },
      { flag: '', lingua: 'Inglese', level: Nivello.BASE },
    ],
    descrizione: `Sviluppatore Junior determinato a raggiungere risultati concreti. 
      Approccio pragmatico nel risolvere sfide, con un’attenzione 
      particolare all’efficacia e alla funzionalià delle soluzioni. Abilità 
      nell’instaurare rapporti positivi e collaborativi con il team. Flessibile
      nell’adattarsi a nuovi contesti. Appassionato di informatica
      e constantemente aggiornato sulle ultime novità del settore.`,
    mestiere: 'Junior Web Developer',
    hobbies: [
      { icona: 'fa-solid fa-gamepad', descrizione: 'Games' },
      { icona: 'fa-solid fa-headphones', descrizione: 'Ascoltare Podcast' },
      { icona: 'fa-solid fa-plane', descrizione: 'Viaggiare' },
      { icona: 'fa-solid fa-code', descrizione: 'Code' },
      { icona: 'fa-solid fa-film', descrizione: 'Film' },
      { icona: 'fa-solid fa-dumbbell', descrizione: 'Gym' },

    ],
    socials: [
      { icona: 'fa-brands fa-github', link: 'https://github.com/left000', social: 'GitHub' },
      { icona: 'fa-brands fa-instagram', link: 'https://www.instagram.com/left29/', social: 'Instagram' },
      { icona: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/lorenzo-eduardo-furio-84729b226/', social: 'GitHub' },
    ],
    skills: [
      {
        softSkills: [
          { competenze: 'Flessibilità e capacità di adattamento' },
          { competenze: 'Propensione al lavoro per obiettivi' },
          { competenze: 'Autonomia operativa' },
          { competenze: 'Problem solving' },
          { competenze: 'Propensione a lavorare in team' },
          { competenze: 'Gestione del tempo' },
          { competenze: 'Creatività' },
          { competenze: 'Gestione dello stress' },
          { competenze: 'Attenzione ai dettagli' },
          { competenze: 'Empatia' },
          { competenze: 'Pensiero critico' },
          { competenze: 'Capacità di ascolto attivo' },
          { competenze: 'Gestione dei conflitti' },
        ],
        hardSkills: [
          { linguaggi: 'JavaScript', icona: 'fa-brands fa-js' },
          { linguaggi: 'Java', icona: 'fa-brands fa-java' },
          { linguaggi: 'Java EE', icona: 'fa-brands fa-java' },
          { linguaggi: 'Spring Boot', icona: '' },
          { linguaggi: 'JavaScript', icona: 'fab fa-js' },
          { linguaggi: 'Angular', icona: 'fa-brands fa-angular' },
          { linguaggi: 'Docker', icona: 'fa-brands fa-docker' },
          { linguaggi: 'HTML', icona: 'fa-brands fa-html5' },
          { linguaggi: 'CSS', icona: 'fa-brands fa-css3-alt' },
          { linguaggi: 'Git', icona: 'fa-brands fa-git-alt' },
          { linguaggi: 'GitHub', icona: 'fab fa-github' },
          { linguaggi: 'SQL', icona: 'fa-solid fa-database' },
          { linguaggi: 'Jasmine', icona: '' },
          { linguaggi: 'PHP', icona: 'fa-brands fa-php' },
          { linguaggi: 'Laravel', icona: 'fa-brands fa-laravel' },
        ]
      }
    ],
    istruzione: [
      {
        formazione: 'Corso ItConsulting - JAVA AVANZATO & SQL',
        data: 'Gennaio 2025 - Marzo 2025',
        titolo: 'Attestato Java & SQL',
        descrizione: 'Java Avanzato, Design Pattern, SQL, Spring boot'
      },
      {
        formazione: 'UNIVERSITÀ DEGLI STUDI DI BARI',
        data: 'Novembre 2024 - In corso',
        titolo: 'Certificato Java Junior Developer',
        descrizione: 'Percoso di studi in corso'
      },
      {
        formazione: 'Corso UMANA - JAVA DEVELOPER',
        data: 'Settembre 2023 - Novembre 2023',
        titolo: 'Certificato Java Junior Developer',
        descrizione: 'Java Base, Spring Boot, Angular'
      },
      {
        formazione: 'Corso Java Udemy',
        data: 'Aprile 2023 - Agosto 2023',
        titolo: 'Certificato Java junior',
        descrizione: 'Java Base, Java Avanzato, Java EE'
      },
      {
        formazione: 'DIGITAZON',
        data: 'Ottobre 2022 – Aprile 2023',
        titolo: 'Diploma full stack developer',
        descrizione: 'HTML, CSS, PHP, Laravel, Javascript, Vue.js'
      },
      {
        formazione: 'Università de Falcon, UDEFA',
        data: 'Ottobre 2018 ',
        titolo: 'Corso di laurea: ingegnieria elettronica ',
        descrizione: 'Percorso di studi interrotti a causa della situazione politica Venezuelana.'
      },
    ],
    esperienzeLavorative: [
      {
        azienda: 'MASVIS - Sviluppo FrontEnd',
        data: 'Ottobre 2024 - Gennaio 2025',
        descrizione: [
          'Sviluppo e manutenzione di applicazioni web responsive utilizzando Angular e JavaScript',
          `Implementazione di componenti riutilizzabili seguendo i principi di Design System`,
        ]
      },
      {
        azienda: 'Auriga - Bug fix Delivery Server',
        data: 'Giugno 2024 - Ottobre 2024',
        descrizione: [
          'Gestione e risoluzione di ticket provenienti da vari istituti di credito, con attività di bug fixing su sistemi ATM basati su Java EE e EJB.',
          `Gestione e implementazione di patch e aggiornamenti tramite TFS e Git,lavorando su pull request per garantire un'integrazione fluida delle modifiche.`,
          'Collaborazione con il team per la gestione di changelog e la tracciabilità dellemodifiche.',
          `Configurazione e deployment delle applicazioni su WebSphere Application Server.`,
          'Analisi e ottimizzazione delle query SQL'
        ]
      },
      {
        azienda: 'Almaviva Digitaltec',
        data: 'Novembre 2023 -  Maggio 2024',
        descrizione: [
          'Sviluppo e integrazione di componenti UI per applicazioni web utilizzando Angular.',
          `Gestione delle chiamate API REST per l'ottenimento e la visualizzazione di dati dinamici`,
          'Creazione e esecuzione di test automatizzati per verificare il corretto funzionamento delle funzionalità critiche, collaborando attivamente con altri membri del team.',
          `Migrazione di pagine web verso nuove piattaforme, con particolare attenzione all'adattamento del codice esistente per garantirne la compatibilità.`
        ]
      },
      {
        azienda: 'Centro scommesse "Sisal Matchpoint" ',
        data: 'Febbraio 2019 - Ottobre 2022',
        descrizione: [
          'Gestione dei contratti attivati per via telematica per la partecipazione ai giochi a distanza.',
          `Organizzazione dell'intervento del team tecnico per la manutenzione dei macchinari in caso di danni o malfunzionamenti`,
          'Apertura e chiusura cassa.',
        ]
      }
    ],
    progetti: [
      { nome: 'Microservices' , descrizione: 'Spring Boot, OpenFeign, Eureka, Gateway', url: 'https://github.com/left000/MicroServices'},
      { nome: 'Project-Digitazon' , descrizione: 'Laravel, PHP', url: 'https://github.com/left000/Project-Digitazon'},
      { nome: 'CRUD PHP' , descrizione: 'PHP', url: 'https://github.com/left000/crud-php-sql'},


    ]
  }

}
