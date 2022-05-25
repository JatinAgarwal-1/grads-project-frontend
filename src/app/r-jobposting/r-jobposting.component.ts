import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../job.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-r-jobposting',
  templateUrl: './r-jobposting.component.html',
  styleUrls: ['./r-jobposting.component.css']
})
export class RJobpostingComponent implements OnInit {

  [x: string]: any;

  public jobs: Job[] = [];
  public editJob: Job | undefined ;
  public deleteJob: Job | undefined ;
  public file: File | undefined;

  constructor(private jobService : JobService ,private fileUploadService: FileUploadService) { }

  ngOnInit(){
    this.getJobs();
  }

 

  public getJobs(): void{
    this.jobService.getJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddJob(addForm: NgForm): void {
    document.getElementById('add-job-form')!.click();
    this.jobService.addJob(addForm.value).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  onChange(event : any) {
        this.file = event.target.files[0];
    }

  public  onUpload() {
        // this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        console.log(event)
      }
    );
  }

  public onUpdateJob(job: Job): void {
    this.jobService.updateJob(job).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteJob(jobId: number): void {
    this.jobService.deleteJob(jobId).subscribe(
      (response: void) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchJobs(key: string): void {
    console.log(key);
    const results: Job[] = [];
    for (const job of this.jobs) {
      if (job.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||job.requirements.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(job);
      }
    }
    this.jobs = results;
    if (results.length === 0 || !key) {
      this.getJobs();
    }
  }

  public onOpenModal(mode: string, job?: Job): void {
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addJobModal');
    }
    if (mode === 'csv') {
      button.setAttribute('data-target', '#addCSVModal');
    }
    if (mode === 'edit') {
      this.editJob=job;
      button.setAttribute('data-target', '#updateJobModal');
    }
    if (mode === 'delete') {
      this.deleteJob=job;
      button.setAttribute('data-target', '#deleteJobModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
