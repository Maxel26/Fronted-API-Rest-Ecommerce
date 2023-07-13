import { Component } from '@angular/core';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent {
   data = [
    {
    title : 'Como fue mi papa',
    content : 'Hagolo real ',
    buttom : `ver mas`
    },
    {
      title : 'Que te fumas y tan!',
      content : 'pgl!!!',
      buttom : `ver algo mas`
    },
    {
      title : 'Que te tomas y tan!',
      content : 'blue labeel',
      buttom : `ver un poco mas`
      },
] ;
}
