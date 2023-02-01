import Head from 'next/head';
import * as React from 'react';
import { visitFiles } from '../utils/visit-files';

export default function Home() {
  const test = visitFiles('../exercices');
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>

      <main>
        <p>
          Check <code>exercices/</code> folder.
          <br />
          <b>
            No need to manipulate pages - your code does not have to be used
            into pages !
          </b>
        </p>
      </main>
    </div>
  );
}
