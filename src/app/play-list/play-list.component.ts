import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent{
  respuesta:any= {url:"",titulo:"",texto:""}
  @Input() datos :any= [];
  @Output() resultEvent = new EventEmitter<any>();
  constructor (){
    this.datos =[]
  }

  sendRespuesta(item:any){
    this.respuesta.url = item.url
    this.respuesta.texto = item.texto
    this.respuesta.titulo = item.titulo
    this.respuesta.visita = item.visita
    this.resultEvent.emit(this.respuesta)
  }
}
