import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UserDataService } from '../../services/app.service';
import { FormGroup, FormControl } from "@angular/forms";
// import { User } from './user';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'adress-cmp',
    moduleId: module.id,
    templateUrl: 'adress.component.html'
})

export class AdressComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;

    constructor(private http: HttpClient) {}

    users:any;
    roles:any;
    body:any;
    adresses:any;
    person = {
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    telephone: "",
    role_id: "",
    password: ""
    };
    addNewUser() {

    this.body=JSON.stringify(this.person);
    console.log(this.person);

    this.http.post('http://ambul/api/adduser', this.body).subscribe();
    }

// const setRequestDetails = async() => {
//   await this.http.post('http://ambul/api/user', '').then( res => {
//     let copyResponse = res
//   })
// }
  // async getAllUsers() {
  //   this.result = await this.http.post('http://ambul/api/user', '').toPromise();
  //   console.log(this.result);
  // }
  async  ngOnInit(){
        this.adresses = await this.http.post('http://ambul/api/adress', '').toPromise();
        // console.log(this.brigades[0]);

        // this.roles = await this.http.post('http://ambul/api/roles', '').toPromise();
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
    }

}
