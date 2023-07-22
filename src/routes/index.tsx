import { A } from "solid-start";

export default function Home() {
  return (
    <div class="text-center mx-auto max-w-3xl space-y-8">
      <h1>Home</h1>

      <img src="/images/splash.png" alt="MIA" />

      <section class="grid grid-cols-3 gap-8 items-center justify-center">
        <a href="https://www.youtube.com/@mianalysis" class="p-5 border">
          Video Tutorials
        </a>
        <A href="/guides" class="p-5 border">
          Guides
        </A>
        <A href="/modules" class="p-5 border">
          List of modules
        </A>
      </section>

      <p>
        ModularImageAnalysis (MIA) is an ImageJ plugin which provides a modular
        framework for assembling image and object analysis workflows. Detected
        objects can be transformed, filtered, measured and related. Analysis
        workflows are batch-enabled by default, allowing easy processing of
        high-content datasets.
      </p>

      <p>
        MIA is developed in the{" "}
        <a href="https://www.bristol.ac.uk/wolfson-bioimaging/">
          Wolfson Bioimaging Facility
        </a>{" "}
        at the University of Bristol.
      </p>
    </div>
  );
}
