import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music-control',
  standalone: true,
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css'],
})
export class MusicControlComponent {
  panelOpen = false;
  readonly ytVideoId = 'YlVkILcdMo0';
  ytUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  toggle(): void {
    this.panelOpen = !this.panelOpen;
    if (this.panelOpen) {
      this.ytUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + this.ytVideoId + '?autoplay=1'
      );
    } else {
      this.ytUrl = null;
    }
  }

  close(): void {
    this.panelOpen = false;
    this.ytUrl = null;
  }
}
