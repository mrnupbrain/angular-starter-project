import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ExtractorsPageComponent } from './pages/extractors-page/extractors/extractors-page.component';
import { CreateExtractorsPageComponent } from './pages/extractors-page/create-extractors/create-extractors.page.component';
import { AiExtractorsPageComponent } from './pages/extractors-page/create-extractors/ai-extractors/ai-extractors.component';
import { DefinekeyExtractorsPageComponent } from './pages/extractors-page/create-extractors/definekey-extractors/definekey-extractors.component';
import { DescriptionExtractorsPageComponent } from './pages/extractors-page/create-extractors/description-extractors/description-extractors.component';
import { SamplefilesExtractorsPageComponent } from './pages/extractors-page/create-extractors/samplefiles-extractors/samplefiles-extractors.component';
import { LayoutPageComponent } from './pages/extractors-page/layout-page.component';
import { FileUploaderComponent } from './pages/extractors-page/component/app-file-uploader/file-uploader.component';
import { AttachmentComponent } from './pages/extractors-page/component/attachment/attachment.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    ExtractorsPageComponent,
    CreateExtractorsPageComponent,
    AiExtractorsPageComponent,
    DefinekeyExtractorsPageComponent,
    DescriptionExtractorsPageComponent,
    SamplefilesExtractorsPageComponent,
    FileUploaderComponent,
    AttachmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
