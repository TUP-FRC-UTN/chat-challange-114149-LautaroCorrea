import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from "./sala/sala.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-desafio';
  mensajes: { usuario: string, texto: string }[] = [];
  enviarMensaje(mensaje: any) {
    this.mensajes.push(mensaje);
  }
}
