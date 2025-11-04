import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  message: string | null = null;
  error: string | null = null;
  loading = false;

  constructor(private hello: HelloService) { }

  ngOnInit(): void {
    this.loading = true;
    this.hello.get().subscribe({
      next: (m) => { this.message = m; this.loading = false; },
      error: () => { this.error = 'Could not reach backend'; this.loading = false; }
    });
  }
}

