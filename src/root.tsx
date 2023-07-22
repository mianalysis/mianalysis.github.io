// @refresh reload
import { Suspense } from 'solid-js';
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from 'solid-start';
import './root.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="w-screen">
        <Suspense>
          <ErrorBoundary>
            <div class="min-h-screen flex flex-col overflow-x-hidden">
              <NavBar />
              <div class="flex flex-1">
                <Routes>
                  <FileRoutes />
                </Routes>
              </div>
              <Footer />
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
