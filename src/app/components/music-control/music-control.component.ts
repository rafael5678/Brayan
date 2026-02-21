import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-control',
  standalone: true,
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css'],
})
export class MusicControlComponent {
  isPlaying = false;

  constructor(private music: MusicService) {}

  toggle(): void {
    this.isPlaying = this.music.toggle();
  }
}
