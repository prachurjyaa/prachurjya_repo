import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // No declarations for now (LoginComponent moved to AppModule)
  ],
  imports: [
    CommonModule
    // No Material modules here unless used in future core components
  ],
  exports: [
    // Export core services here later if needed
  ]
})
export class CoreModule {}
