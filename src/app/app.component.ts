import { Component } from '@angular/core';
import { SaleService } from './sale.service';

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
  public columnChartData;

   constructor(private saleService:SaleService){
     //initializations
    this.columnChartData = this.saleService.refleshDataChart();
    this.opcaoCategoria = this.saleService.initializeOpcaoCategoria();
    this.opcaoProduto =  this.saleService.initializeOpcaoProduto();
    this.opcaoMarca =  this.saleService.initializeOpcaoMarca();
   }

   changeCategory(event: any){
    this.opcaoProduto = this.saleService.getProductListByCategory(event.target.value);
    this.opcaoMarca = this.saleService.getMarcaByProduct(this.opcaoProduto[0]);
    this.columnChartData = this.saleService.refleshDataChart();
   }

   changeProduct(event: any){
     this.opcaoMarca = this.saleService.getMarcaByProduct(event.target.value);
     this.columnChartData = this.saleService.refleshDataChart();
   }

   changeBrand(event: any){
    this.columnChartData = this.saleService.refleshDataChart();
   }

  
}
