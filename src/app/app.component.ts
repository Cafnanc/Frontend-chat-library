import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // allUserMessages = [
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'John Doe',
  //     lastMessage: 'Hey, how are you?',
  //     time: new Date()
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Jane Smith',
  //     lastMessage: 'Are we meeting tomorrow?',
  //     time: new Date(Date.now() - 600000)
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Bob Johnson',
  //     lastMessage: 'Call me when you are free.',
  //     time: new Date(Date.now() - 1200000)
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'David',
  //     lastMessage: 'Hey, how are you?',
  //     time: new Date()
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Jack Sparrow',
  //     lastMessage: 'Are we meeting tomorrow?',
  //     time: new Date(Date.now() - 600000)
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Joseph',
  //     lastMessage: 'Hey man!!.',
  //     time: new Date(Date.now() - 1200000)
  //   }
  // ];

  chatConfig = {
    rocketChatBaseUrl: 'https://chat-dev.elevate-apis.shikshalokam.org',
    websocketUrl: 'ws://chat-dev.elevate-apis.shikshalokam.org/websocket',
    user: {
      xAuthToken: "lZiJS8ns7uC-HC0cax19cQBEhj7UHIgdL5rJB4Q6_Ay",
      userId: "YwisTMuma3efTJwc7",
      userName: "kiranharidas"
    }
  }

  ngOninit() {}
}
