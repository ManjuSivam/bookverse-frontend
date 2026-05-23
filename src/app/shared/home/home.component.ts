import { Component } from '@angular/core';
import { HealthService } from '../../core/services/health.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message = '';

  constructor(private healthSrvc: HealthService) {

  }

  ngOnInit(): void {
    this.checkHealth();
  }

  checkHealth(): void {
    this.healthSrvc.getHealthStatus().subscribe({
      next: (response => {
        this.message = "Health " + response;
      }),
      error: (err => {
        this.message = 'API is Down'
      })
    });
  }
}
