import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { identity } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'Get input box';
  DisplayValue = '';
  ConvertType = '';


  GetValue(val: string) {
    console.warn(val);
    this.DisplayValue = val;
  }

  constructor(private https: HttpClient) {
  }
  StringToBase64(data: any) {
    this.https.post('https://localhost:44326/Home/StringToBase64?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'StringToBase64';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  StringToByte(data: any) {
    this.https.post('https://localhost:44326/Home/StringToByte?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'StringToByte';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  StringToHex(data: any) {
    this.https.post('https://localhost:44326/Home/StringToHex?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'StringToHex';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  HexToString(data: any) {
    this.https.post('https://localhost:44326/Home/HexToString?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'HexToString';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  Base64ToString(data: any) {
    this.https.post('https://localhost:44326/Home/Base64ToString?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'Base64ToString';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  ByteToString(data: any) {
    this.https.post('https://localhost:44326/Home/ByteToString?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'ByteToString';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  HexToBase64(data: any) {
    this.https.post('https://localhost:44326/Home/HexToBase64?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'HexToBase64';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  HexToByte(data: any) {
    this.https.post('https://localhost:44326/Home/HexToByte?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'HexToByte';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  Base64ToHex(data: any) {
    this.https.post('https://localhost:44326/Home/Base64ToHex?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'Base64ToHex';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  Base64ToByte(data: any) {
    this.https.post('https://localhost:44326/Home/Base64ToByte?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'Base64ToByte';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  ByteToBase64(data: any) {
    this.https.post('https://localhost:44326/Home/ByteToBase64?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'ByteToBase64';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }
  ByteToHex(data: any) {
    this.https.post('https://localhost:44326/Home/ByteToHex?str=' + data.stringInput, null, { responseType: 'text' })
      .subscribe((result) => {
        this.ConvertType = 'ByteToHex';
        this.DisplayValue = result;
        console.log(result);
      });
    console.log(data);
  }



  //   ngOnInit() {
  //   this.https.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
  //       this.postId = data.id;
  //   })
  // }
}
