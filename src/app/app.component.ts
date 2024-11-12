import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportComponent } from './report/report.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'report-sheet';
}
