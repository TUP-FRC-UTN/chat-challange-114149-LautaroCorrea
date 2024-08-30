import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [CommonModule,MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes: { usuario: string, texto: string }[] = [];

  enviarMensaje(mensaje: { usuario: string, texto: string }) {
    this.mensajes.push(mensaje);
  }
}
