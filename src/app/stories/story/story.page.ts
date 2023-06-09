import {Component, OnInit} from '@angular/core';
import {StoryDataService} from "../../shared/services/story-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {
  public story: any = {}

  constructor(private StoryDataService: StoryDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(res => {
      switch (res['typeId']) {
        case "1":
          this.getStoryData(+res['storyId']);
          break;
        case "2":
          this.getStoryDataForSleep(+res['storyId']);
          break;
        case "3":
          this.getStoryDataForBaby(+res['storyId']);
          break;
        case "4":
          this.getStoryDataForEnglish(+res['storyId']);
          break;
        default:
          this.getStoryData(+res['storyId']);
      }
    });
  }

  getStoryData(storyId: number) {
    this.StoryDataService.getStory().subscribe(res => {
      this.story = res.find((element: any) => element.id == storyId);
    })
  }

  getStoryDataForSleep(storyId: number) {
    this.StoryDataService.getStoryForSleep().subscribe(res => {
      this.story = res.find((element: any) => element.id == storyId);
    })
  }

  getStoryDataForBaby(storyId: number) {
    this.StoryDataService.getStoryForBaby().subscribe(res => {
      this.story = res.find((element: any) => element.id == storyId);
    })
  }

  getStoryDataForEnglish(storyId: number) {
    this.StoryDataService.getStoryForEnglish().subscribe(res => {
      this.story = res.find((element: any) => element.id == storyId);
    })
  }
}
