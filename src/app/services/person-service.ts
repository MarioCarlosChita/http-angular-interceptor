 
 
import { Observable } from "rxjs";
import { ApiResponse } from "../models/api-response";
import { Usuario } from "../models/usuario";

@Injectable({
      providedIn: 'root'
})

export class PersonService {
     
      constructor(private http: HttpClient) { }
      public listPerson(): Observable<ApiResponse<Usuario[]>> {
            return this.http.get<any>('/users');
      }

      public addPerson(usuario: Usuario): Observable<any> {
            const body: any = {};
            body['name'] = usuario.name ? usuario.name : null;
            body['email'] = usuario.email ? usuario.email : null;
            // delete null values 
            Object.keys(body).forEach((key) => (body[key] === null) && delete body[key]);
            return this.http.post<any>("/users", { body });
      }
}