import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   
  }
data=[
{"name":"anuroop","age":21,"photo":"https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/042_girl_avatar_profile_woman_shirt-2-512.png"},
{"name":"aiswarya","age":19,"photo":"https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/042_girl_avatar_profile_woman_shirt-2-512.png" },
{"name":"gopika","age":20,"photo":"https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/042_girl_avatar_profile_woman_shirt-2-512.png" },
{"name":"aromal","age":20,"photo":"https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/042_girl_avatar_profile_woman_shirt-2-512.png" },
{"name":"abhinav","age":19,"photo": "https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/042_girl_avatar_profile_woman_shirt-2-512.png"},
{"name":"salashil","age":19,"photo":"https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/042_girl_avatar_profile_woman_shirt-2-512.png" }
]
}
