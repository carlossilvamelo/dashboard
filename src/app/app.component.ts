import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['width: 20px']
})
export class AppComponent {

  public opcaoCategoria;
  public opcaoProduto;
  public opcaoMarca;


  public columnChartData =  {
    chartType: 'ColumnChart',
    dataTable: [
      ['mouth', 'Ventas', { role: 'style' }],
      ['Januery', this.randomIntFromInterval(), '#5896E6'],
      ['February', this.randomIntFromInterval(), '#5896E6'],
      ['March', this.randomIntFromInterval(), '#5896E6'],
      ['April', this.randomIntFromInterval(), '#5896E6']
    ],
    options: {
      height: 400,
      legend: { position: 'bottom', alignment: 'center' },
      vAxis: {
        "title": "Ventas"
      },
      hAxis: {
          "title": "Meses"
      }
    }
  };

  produtoList = {
    roupas: ["camisa","sapato","bone"],
    veiculos:["carro","moto", "caminhao"],
    eletronicos:["computador","tv","Som"]
  }

  marcaList = {
    camisa: ["camisa1","camisa2","camisa3"],
    sapato: ["sapato1","sapato2","sapato3"],
    bone: ["bone1","bone2","bone3"],
    carro:["carro1","carro2", "carro3"],
    moto:["moto1","moto2", "moto3"],
    caminhao:["caminhao1","caminhao2", "caminhao3"],
    computador:["computador1","computador2","computador3"],
    tv:["tv1","tv2","tv3"],
    Som:["Som1","Som2","Som3"]
  }


   constructor(){
    this.opcaoCategoria = ["roupas","veiculos","eletronicos"];
    this.opcaoProduto = this.produtoList["roupas"];
    this.opcaoMarca = this.marcaList["camisa"]
   }

   changeCategory(event: any){
    this.opcaoProduto = this.produtoList[event.target.value];
    this.opcaoMarca = this.marcaList[this.opcaoProduto[0]];
    this.refleshDataTable();
   }

   changeProduct(event: any){
     this.opcaoMarca = this.marcaList[event.target.value];
     this.refleshDataTable();
   }

   changeBrand(event: any){
    this.refleshDataTable();
   }

  randomIntFromInterval(){
      return Math.floor(Math.random()*(600-0+1)+0);
  }

  refleshDataTable(){
    this.columnChartData = {
      chartType: 'ColumnChart',
      dataTable: [
        ['mouth', 'Ventas', { role: 'style' }],
        ['Januery', this.randomIntFromInterval(), '#5896E6'],
        ['February', this.randomIntFromInterval(), '#5896E6'],
        ['March', this.randomIntFromInterval(), '#5896E6'],
        ['April', this.randomIntFromInterval(), '#5896E6']
      ],
      options: {
        height: 400,
        legend: { position: 'bottom', alignment: 'center' },
        vAxis: {
          "title": "Ventas"
        },
        hAxis: {
            "title": "Meses"
        }
      }
    };
  }


}
