import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot/chatbot.component';


// If you're planning to use other components later, import them here.
// For now, this file is minimal since AdminDashboard is in AppModule.

@NgModule({
  declarations: [
    // AdminDashboardComponent has been moved to AppModule
    // You can declare other feature components here as you build them
  
    
          // ✅ this must be correctly imported above
    
  
    
  ],
  imports: [
    CommonModule
    // Add Material modules here only if you use them in future components
  ],
  exports: [
    // Export feature components if needed later
  ]
})
export class FeaturesModule {}
