import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent {

  ctx : any;
  config : any;
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  
      this.chartDatalabels.push('A');
      this.chartDatalabels.push('B');
      this.chartDatalabels.push('C');
  
      this.ctx = document.getElementById('myChart');

      this.config = {
        type : 'bar',
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Chart Data 1',
            data: [1,2,3],
            borderWidth: 5,
            borderColor: 'grey',
            backgroundColor: ['pink', 'yellow','red']
          },
          { 
            label: 'Chart Data 2',
            data: [1,4,6],
            borderWidth: 5,
            borderColor: 'blue',
            backgroundColor: ['yellow', 'pink', 'red']
          },
        { 
          label: 'Chart Data 3',
          data: [1,5,9],
          borderWidth: 5,
          borderColor: 'grey',
          backgroundColor: ['red','pink', 'grey']
        }
      ],
        options : {
          scales: {
            x: {
                grid: {
                  offset: true,
                  stacked: true
                }
            },
            y: {
              grid: {
                offset: true,
                stacked: true
              }
          }
        }
        }
        }
      }
      const myChart = new Chart(this.ctx, this.config);
    }

}
