import { Component } from '@angular/core';
import { ReportComponent } from "./report/report.component"; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  // Importing MatProgressSpinnerModule


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule, ReportComponent // Adding MatProgressSpinnerModule here
  ]
})
export class ReportModule { }



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'report-sheet';
}

 