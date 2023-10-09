import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedPostsComponent } from './feed-posts/feed-posts.component';
import { FeedsComponentHeader } from '../general/header/feeds/feeds.component';
import { CardsComponent } from '../general/cards/cards.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [FeedPostsComponent, FeedsComponentHeader],
  imports: [CommonModule, FeedsRoutingModule, GeneralModule],
  exports: [FeedPostsComponent],
})
export class FeedsModule {}
