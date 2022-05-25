import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(`${this.apiServerUrl}/job/all`);
  }

  public addJob(job : Job): Observable<Job>{
    return this.http.post<Job>(`${this.apiServerUrl}/job/add`, job);
  }

  public updateJob(job : Job): Observable<Job>{
    return this.http.put<Job>(`${this.apiServerUrl}/job/update`, job);
  }

  public deleteJob(jobId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/job/delete/${jobId}`);
  }

}
