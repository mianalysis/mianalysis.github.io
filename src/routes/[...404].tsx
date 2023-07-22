import { A } from 'solid-start';

export default function NotFound() {
  return (
    <main class="text-center mx-auto space-y-5">
      <h1>Not Found</h1>

      <p>
        Return to {''}
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
      </p>
    </main>
  );
}
