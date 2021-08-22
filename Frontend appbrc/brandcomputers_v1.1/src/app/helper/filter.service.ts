import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    filter = [];
    params = new HttpParams();

    constructor() {
    }

    setParamsFilter(event: any): HttpParams {

        if (this.params.get(event.target.name) !== null) {

            this.filter = this.params.getAll(event.target.name);
            this.params = this.params.delete(event.target.name, this.filter.toString());

            this.filter.push(event.target.value);
            this.params = this.params.set(event.target.name, this.filter.toString());
        } else {
            if (this.filter.length !== 0) {
                this.filter = [];
            }
            this.filter.push(event.target.value);
            this.params = this.params.set(event.target.name, this.filter.toString());
        }

        return this.params;
    }

    deleteFilter(event: any): HttpParams {
        this.filter = this.params.get(event.target.name).split(',');

        this.params = this.params.delete(event.target.name, this.filter.toString());
        this.filter.splice(this.filter.indexOf(event.target.value), 1);

        if (this.filter.length === 0) {
            this.params = this.params.delete(event.target.name, '');
        } else {
            this.params = this.params.append(event.target.name, this.filter.toString());
        }
        return this.params;
    }
}
