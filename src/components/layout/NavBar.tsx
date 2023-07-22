import { useLocation, A } from 'solid-start';

export default function NavBar() {
  const location = useLocation();

  const active = (path: string) =>
    path == location.pathname ? 'border-sky-600' : 'border-transparent hover:border-sky-600';

  return (
    <nav class="bg-sky-800 flex justify-between items-center py-4 px-8 gap-8 text-white">
      <A href="/">Logo</A>

      <ul class="flex items-center gap-8">
        <li class={`border-b-2 ${active('/')}`}>
          <A href="/">Home</A>
        </li>
        <li class={`border-b-2 ${active('/guides')}`}>
          <A href="/guides">Guides</A>
        </li>
        <li class={`border-b-2 ${active('/modules')}`}>
          <A href="/modules">Modules</A>
        </li>
        <li class={`border-b-2 ${active('/publications')}`}>
          <A href="/publications">Publications</A>
        </li>
        <li class={`border-b-2 ${active('/about')}`}>
          <A href="/about">About</A>
        </li>
      </ul>
    </nav>
  );
}
