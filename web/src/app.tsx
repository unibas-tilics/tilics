import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import {
  batch,
  createEffect,
  createSignal,
  onMount,
  Suspense,
  untrack,
} from "solid-js";

import "./app.css";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
          <BottomNav />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
