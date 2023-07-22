// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>ModularImageAnalysis</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div class="min-h-screen flex flex-col">
              <NavBar />
              <main class="flex flex-1 p-16">
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
