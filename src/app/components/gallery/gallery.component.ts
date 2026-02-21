import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPhoto } from '../../models/gallery-photo.model';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageModalComponent, RevealDirective],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  modalSrc: string | null = null;

  readonly photos: GalleryPhoto[] = [
    { src: 'assets/images/photo1.png', alt: 'Recuerdo de Brayan', caption: 'Un recuerdo que siempre llevamos en el corazón' },
    { src: 'assets/images/photo2.png', alt: 'Brayan y familia', caption: 'Juntos en cada etapa' },
    { src: 'assets/images/photo3.png', alt: 'Brayan', caption: 'Tu historia en fotos' },
    { src: 'assets/images/photo4.png', alt: 'Familia', caption: 'Familia unida' },
    { src: 'assets/images/photo5.png', alt: 'Brayan y mamá', caption: 'El amor de siempre' },
    { src: 'assets/images/photo6.png', alt: 'Todos juntos', caption: 'Todos contigo' },
    { src: 'assets/images/photo7.png', alt: 'Celebración', caption: 'Celebrando la vida' },
    { src: 'assets/images/photo8.png', alt: 'Hermano', caption: 'Hermano querido' },
    { src: 'assets/images/photo9.png', alt: 'Familia', caption: 'Unidos para siempre' },
  ];

  openModal(src: string): void {
    this.modalSrc = src;
  }

  closeModal(): void {
    this.modalSrc = null;
  }
}
