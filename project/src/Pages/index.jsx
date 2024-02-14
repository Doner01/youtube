import { lazy } from "react";

const HomePage = lazy(() => import('./HomePage'))
const LibraryPage = lazy(() => import('./LibraryPage'))
const SubPage = lazy(() => import('./SubPage'))
const TrendPage = lazy(() => import('./TrendPage'))

export { HomePage, LibraryPage, SubPage, TrendPage }