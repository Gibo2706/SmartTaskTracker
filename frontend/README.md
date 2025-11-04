# Smart Task Tracker - Frontend

This is the initial Angular frontend for the Smart Task Tracker project.

What I added:
- Minimal Angular scaffold (app module, root component).
- `HelloService` and `HelloComponent` which call `/api/hello` on backend.
- `proxy.conf.json` so `ng serve` forwards `/api` to `http://localhost:8080` (Spring Boot default).
- Basic `package.json`, `angular.json`, and tsconfig.

Quick start:
1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start (dev server with proxy):

```bash
npm start
```

This opens the app in your browser and the `HelloComponent` will attempt to GET `/api/hello`.

Backend expectations:
- Spring Boot runs on http://localhost:8080
- An endpoint `GET /api/hello` returning JSON like `{ "message": "Hello from backend" }`

Next steps I can do if you want:
- Add routing and modules for tasks, users, analytics.
- Add environment files and production build optimizations.
- Add simple e2e tests.
import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  template: `
    <section>
      <h2>Backend status</h2>
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error" style="color:darkred">{{ error }}</div>
      <div *ngIf="message">{{ message }}</div>
    </section>
  `
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
      error: (err) => { this.error = 'Could not reach backend'; this.loading = false; }
    });
  }
}

