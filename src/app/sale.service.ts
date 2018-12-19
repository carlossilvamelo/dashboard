import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  //initial chart settings
  private columnChartData =  {
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

  //productList definition
  private produtoList = {
    roupas: ["camisa","sapato","bone"],
    veiculos:["carro","moto", "caminhao"],
    eletronicos:["computador","tv","Som"]
  }

//brandList definition
private marcaList = {
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

  constructor() { }


  initializeOpcaoCategoria(){
      return ["roupas","veiculos","eletronicos"];
  }
  initializeOpcaoMarca(){
    return this.marcaList["camisa"];
  }
  initializeOpcaoProduto(){
    return this.produtoList["roupas"];
  }

  getProductListByCategory(category){
    return this.produtoList[category];
  }

  getMarcaByProduct(product){
    return this.marcaList[product];
  }
  

   refleshDataChart(){
    var data = {
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
    return data;
  }

  /**
    * generator numbers from 0 to 600
    */
   randomIntFromInterval(){
    return Math.floor(Math.random()*(600-0+1)+0);
    }
}
