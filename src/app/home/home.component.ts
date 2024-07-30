import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  greeting='';

  constructor(private route: ActivatedRoute){

  }
  ngOnInit()  {
    this.route.queryParams.subscribe( params=>{
      const userName = params['userName']
      console.log('query param found:',userName);
      if(userName){
        this.greeting=`WellCome "${userName}" ,boost your interview preperation...!`;
      }else{
        console.error("error while greeting");
        
      }
      
    });

    this.route.queryParams.subscribe(params=>{
      const userName =params['userName'];
      console.log('query params found:',userName);
      if(userName){
          this.greeting=`WellCome "${userName}" ,boost your interview preperation...!`;
      }else{
      console.error("error while assigning name :",userName);
      }
      
    });
}



}
