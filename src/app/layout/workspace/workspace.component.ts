import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass'],
})
export class WorkspaceComponent implements OnInit {
  public files: any[] = [];
  public currentActiveView: any = 'Welcome';
  public missingIndexes: any[] = [];

  // Editor Properties Below
  public theme = 'vs-dark';
  public codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  public options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  public onCodeChanged(value: any) {
    console.log('CODE', value);
  }
  constructor() {
    this.files.push({
      name: 'Welcome',
      extension: 'component',
      path: null,
      data: [],
    });
  }

  ngOnInit(): void {
  }

  createTemporaryFile(e: any) {}

  popFile(fileName: any) {
    this.files = this.files.filter((file) => file.name !== fileName);
    if(fileName === 'Welcome'){
      this.currentActiveView = this.files[0].name;
    }
  }

  createNewFile(fileName: any) {
    let check = this.files.filter((file) => file.name.includes(fileName));
    if (check.length == 0) {
      this.files.push({
        name: fileName + '-1',
        extension: '.json',
        language: 'json',
        path: null,
        index: 1,
        data: '{}',
      });
    } else {
      // we need to make sure that the insertion order of the files should be
      this.missingIndexes = this.MissingNumbers(
        check.map((element) => element.index).sort()
      );
      if (this.missingIndexes.length == 0) {
        this.files.push({
          name: fileName + '-' + ++check.length,
          extension: '.json',
          language: 'json',
          path: null,
          index: check.length,
          data: '{}',
        });
      } else {
        this.files.push({
          name: fileName + '-' + this.missingIndexes[0],
          extension: '.json',
          language: 'json',
          path: null,
          index: this.missingIndexes[0],
          data: '{}',
        });
        this.missingIndexes = [];
      }
    }
  }

  viewFile(e: any) {
    this.currentActiveView = e;
  }
  MissingNumbers(arr: any) {
    for (let i = 0; i < arr.length; i++) {
      let index = Math.abs(arr[i]);
      if (arr[index - 1] > 0) {
        arr[index - 1] *= -1;
      }
    }
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        answer.push(i + 1);
      }
    }
    return answer;
  }
}
