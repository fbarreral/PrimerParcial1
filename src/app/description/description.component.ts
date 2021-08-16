import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  constructor() { }
  respuesta:any={url:"assets/imagen8.jpg",titulo:"El Espacio", texto:"El espacio físico es el lugar donde se encuentran los objetos y en el que los eventos que ocurren tienen una posición y dirección relativas.1​ El espacio físico es habitualmente concebido con tres dimensiones lineales, aunque los físicos modernos usualmente lo consideran, con el tiempo, como una parte de un infinito continuo de cuatro dimensiones conocido como espacio-tiempo, que en presencia de materia es curvo."}

  Rep:any= [
    {url:"assets/imagen1.jpg",titulo:"Colores", texto:"Los colores son importantes para darle vida a los ambientes y hacer que combinen objetos o vestuarios"},
    {url:"assets/imagen2.jpg",titulo:"Ella",texto:"Es una mujer y le gusta el fondo de colores"},
    {url:"assets/imagen3.jpg",titulo:"Photos",texto:"Es una aplicacion web de Google para guardar y subir a la nube las fotos mas importantes y guardarlas para siempre"},
    {url:"assets/imagen4.jpg",titulo:"Android",texto:"Es un sistema operativo para movil que es el primer sistema operativo para moviles utilizado en el mundo"},
    {url:"assets/imagen5.png",titulo:"Tablet",texto:"Es un dispositivo inteligente como un SmartPhone pero de mayor tamaño, capacidades y propositos"},
    {url:"assets/imagen7.webp",titulo:"browse",texto:"Es un buscador web que permite hacer busquedas especificas y mas abstractas"},
    {url:"assets/imagen10.jpg",titulo:"Gamer",texto:"Se le denomina gamer a una persona que dedica su tiempo completo a los videojuegos y streaming para las redes sociales"},
  ];
  ngOnInit(): void {
  }
  getRespuesta($event:any){
    this.respuesta = $event

  }
}
