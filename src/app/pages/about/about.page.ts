import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public databaseUrl = `${environment.firebase.databaseURL}/${environment.spreadsheetId}.json`;
  public faqEntries = [
    {
      question: 'Esta é uma fonte oficial?',
      answer: 'Não. Este projeto apenas agrega os dados publicados por outras fontes.'
    },
    {
      question: 'Quais são as fontes dos dados utilizados?',
      answer: 'Atualmente, as redes sociais da Prefeitura Municipal de Belém de Maria e os dados disponibilizados pelo projeto <a href="https://brasil.io">Brasil.IO</a>.'
    },
    {
      question: 'Por que existem diferenças entre os valores do site com relação à de outras fontes?',
      answer: 'Podemos contabilizar os casos de forma diferente. Em alguns locais, oferecemos informações adicionais sobre a contabilização no botão de informações. Além disso, as fontes que usamos podem estar mais ou menos atualizadas que outras.'
    },
    {
      question: 'Por que as porcentagens não somam 100%?',
      answer: 'A plataforma realiza arredondamentos para o inteiro mais próximo nos valores calculados. Por isso, nem sempre a soma das porcentagens totaliza 100%.'
    },
    {
      question: 'Quem são vocês?',
      answer: 'Este projeto é mantido por Ladson Gomes, bacharelando em Engenharia da Computação na Universidade Federal de Pernambuco (UFPE) além de contribuidores que podem ser visualizados na nossa página do GitHub.'
    },
    {
      question: 'Por que vocês criaram este projeto já que não vão ganhar um centavo com ele?',
      answer: 'Porque o novo Coronavírus é um problema que afeta todos nós e a informação é algo essencial para combatê-lo. Hoje, são outras pessoas que estão infectadas. Amanhã, pode ser a gente. Documentar e armazenar esses dados pode ajudar as pessoas a tomarem decisões melhores.'
    }
  ];

  public buildData = {
    production: environment.production,
    buildVersion: environment.buildVersion
  };

  constructor() { }

  ngOnInit() {
  }

}
