'use client';

import { DocSearch } from '@docsearch/react';

import '@docsearch/css';
import '@/assets/css/search.css';

export default function Search() {
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string}
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string}
      indexName="mianalysisio"
    />
  );
}
