import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable({ providedIn: 'root' })

export class HttpInterceptorService implements HttpInterceptor {

    constructor(private http: HttpClient) {
        this.loadAutentication();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // #req.url request http-request
        return next.handle(req.clone({ url: environment.ApiBaseUrl + req.url }));
    }

    loadAutentication() {
        setInterval(() => {
            this.checkAuthentication();
        }, 500)
    }

    checkAuthentication() {
        console.log('checking......');
    }


}
