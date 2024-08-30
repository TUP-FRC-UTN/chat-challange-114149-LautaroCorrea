import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() usuario!: { nombre: string };
  @Output() enviar = new EventEmitter<{ usuario: string, texto: string }>();

  mensajeTexto: string = '';

  enviarMensaje() {
    if (this.mensajeTexto.trim()) {
      this.enviar.emit({ usuario: this.usuario.nombre, texto: this.mensajeTexto });
      this.mensajeTexto = '';
    }
  }
}
