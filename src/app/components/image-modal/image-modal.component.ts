import { Component, input, output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
})
export class ImageModalComponent {
  src = input<string | null>(null);
  close = output<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.src()) this.close.emit();
  }

  onBackdropClick(): void {
    this.close.emit();
  }
}
