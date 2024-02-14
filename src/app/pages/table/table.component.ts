import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { UserDataService } from '../../services/app.service';
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { User } from './user';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    private httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      responseType: 'text'
    };
    constructor(private http: HttpClient) {}

    users:any;
    roles:any;
    result:any;
    person = {
        'name': "",
        'surname': "",
        'patronymic': "",
        'email': "",
        'telephone': "",
        'role_id': "",
        'password': ""
    };
    employee = {
      'id': "",
      'name': "",
      'surname': "",
      'patronymic': "",
      'email': "",
      'telephone': "",
      'role_id': "",
      'password': ""
    };
    headers = {
    'Content-Type': 'application/json' };
showForm() {
  // console.log("Сработала функция");
  document.getElementById("addUserForm").style.display="flex";
}
hideForm() {
  document.getElementById("addUserForm").style.display="none";
}
showChangeForm(user) {
  // console.log(user);
  document.getElementById("changeForm").style.display="flex";
  this.employee.id = user.id;
  this.employee.name = user.name;
  this.employee.surname = user.surname;
  this.employee.patronymic = user.patronymic;
  this.employee.email = user.email;
  this.employee.telephone = user.telephone;
  this.employee.role_id = user.role_id;
  this.employee.password = user.password;

}
hideChangeForm() {
  document.getElementById("changeForm").style.display="none";
}
// ДОБАВИТЬ ДАННЫЕ О СОТРУДНИКЕ
    addNewUser(){
      const headers = { 'content-type': 'application/json'};
      const body=JSON.stringify(this.person);
      console.log(body);


    return this.http.post('http://ambul/api/adduser', body,{responseType: 'text'}).subscribe(
      (data: any) => {
          console.log('success');
          console.log(data);
          alert("Данные сотрудника успешно добавлены");
          window.location.reload();
        },
        error => {
          console.log(error)
          alert("Ошибка добавления данных сотрудника");
        }
);

    }
    // ИЗМЕНИТЬ ДАННЫЕ О СОТРУДНИКЕ
    changeUser() {
      const headers = { 'content-type': 'application/json'};
      const body=JSON.stringify(this.employee);
      console.log(body);


    return this.http.post('http://ambul/api/changeuser', body,{responseType: 'text'}).subscribe(
      (data: any) => {
          console.log('success');
          console.log(data);
          alert("Данные сотрудника успешно изменены");
          window.location.reload();
        },
        error => {
          console.log(error)
          alert("Ошибка редактирования данных сотрудника");
        }
      );
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
        this.users = await this.http.post('http://ambul/api/user', '').toPromise();
        // console.log(this.users[0]);

        this.roles = await this.http.post('http://ambul/api/roles', '').toPromise();
        // console.log(this.roles);
// const btn = document.getElementById('addUser');
//
// btn.addEventListener('click', () => {
//   const form = document.getElementById('addUserForm');
//
//   if (form.style.display === 'none') {
//     // 👇️ this SHOWS the form
//     form.style.display = 'block';
//   }

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
