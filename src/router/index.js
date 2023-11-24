import { createWebHistory, createRouter } from "vue-router";
import IndexComp from "../components/IndexComp";
import LoginComp from "../components/LoginComp";

import ResumeComp from "../components/ResumeComp";
import ResumeComp1 from "../components/ResumeComp1";

import IntroComp from "../components/IntroComp";
import IntroComp1 from "../components/IntroComp1";
import IntroComp2 from "../components/IntroComp2";
import IntroComp3 from "../components/IntroComp3";

import ProjectComp from "../components/ProjectComp";
import ProjectComp1 from "../components/ProjectComp1";
import ProjectComp2 from "../components/ProjectComp2";
import ProjectComp3 from "../components/ProjectComp3";

import CareerComp from "../components/CareerComp";
import CareerComp1 from "../components/CareerComp1";
import CareerComp2 from "../components/CareerComp2";

const routes = [
    {
        path: "/",
        component: LoginComp,
    },
    {
        path: "/resume",
        component: ResumeComp,
        children: [
          {
            path: "resume",
            component: ResumeComp1,
          }
        ],
    },
    {
        path: "/introduce",
        component: IntroComp,
        children: [
          {
            path: "introduce1",
            component: IntroComp1,
          },
          {
            path: "introduce2",
            component: IntroComp2,
          },
          {
            path: "introduce3",
            component: IntroComp3,
          },
        ],
    },
    {
        path: "/project",
        component: ProjectComp,
        children: [
          {
            path: "project1",
            component: ProjectComp1,
          },
          {
            path: "project2",
            component: ProjectComp2,
          },
          {
            path: "project3",
            component: ProjectComp3,
          }
        ],
    },
    {
        path: "/career",
        component: CareerComp,
        children: [
          {
            path: "career1",
            component: CareerComp1,
          },
          {
            path: "career2",
            component: CareerComp2,
          }
        ],
    },
];

const router = createRouter({
  // 라우트 생성
  history: createWebHistory(),
  routes,
});

export default router;
                    