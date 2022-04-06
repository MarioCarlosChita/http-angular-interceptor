import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class TokenService {
    constructor() { }

    setTokenValue(base64String: string): void {
        const base64: string = base64String;
        localStorage.setItem('token', base64);
    }

    getTokenValue(keyString: string): string {
        const key: string = keyString;
        const jsonKey: string = JSON.stringify(key);
        return jsonKey;
    }
}
