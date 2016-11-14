import {RouterModule, Routes} from "@angular/router";
import {DashboardComponentComponent} from "./dashboard-component/dashboard-component.component";
import {CategoryListComponentComponent} from "./category-list-component/category-list-component.component";
import {QuizAttenComponentComponent} from "./quiz-atten-component/quiz-atten-component.component";

const App_Routes: Routes = [
  { path: '', redirectTo:'/Dashboard', pathMatch:'full'},
  { path: 'Dashboard', component: DashboardComponentComponent},
  { path: 'category-list', component: CategoryListComponentComponent},
  { path: 'quiz-atten', component: QuizAttenComponentComponent}

];

export const ROUTE = RouterModule.forRoot(App_Routes);
