import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { MessageComponent } from '../../components/message/message.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ClosingComponent } from '../../components/closing/closing.component';
import { MusicControlComponent } from '../../components/music-control/music-control.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    MessageComponent,
    GalleryComponent,
    ClosingComponent,
    MusicControlComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
