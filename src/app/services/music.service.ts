import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MusicService {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  init(): void {
    if (typeof document === 'undefined') return;
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  }

  toggle(): boolean {
    if (!this.audio) this.init();
    if (!this.audio) return false;
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      return false;
    }
    this.audio.play().catch(() => {});
    this.isPlaying = true;
    return true;
  }

  getPlaying(): boolean {
    return this.isPlaying;
  }
}
