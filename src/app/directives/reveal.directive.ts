import {
  Directive,
  ElementRef,
  AfterViewInit,
  HostListener,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);

  private check(): void {
    if (typeof window === 'undefined') return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    const vh = window.innerHeight * 0.85;
    if (rect.top < vh) {
      this.el.nativeElement.classList.add('visible');
    }
  }

  ngAfterViewInit(): void {
    this.check();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.check();
  }
}
