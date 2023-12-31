import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPostsComponent } from './feed-posts/feed-posts.component';

const routes: Routes = [
  {
    path: '',
    component: FeedPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedsRoutingModule { }
