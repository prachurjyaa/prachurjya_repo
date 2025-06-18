import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  question = '';
  response = '';

  constructor(private http: HttpClient) {}

  askAI(): void {
    this.http.post<{ reply: string }>('http://localhost:3000/ask-ai', { question: this.question })
      .subscribe(res => this.response = res.reply);
  }
}
