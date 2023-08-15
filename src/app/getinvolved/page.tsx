import Link from 'next/link';

export default function GetInvolved() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <section className="space-y-4">
        <h1>Get involved</h1>

        <p className="opacity-70 text-3xl">
          We welcome any contributions to the MIA project. If you&apos;d like to get involved, here
          are a few ways you could do so.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Adding a new MIA module</h2>

        <p>
          We&apos;d love it if you&apos;d consider contributing a new module to MIA. Such a module
          could allow an existing ImageJ plugin to be used as part of MIA workflows or add totally
          new functionality. Modules can either be added to the main MIA plugin by submitting a pull
          request or packaged as standalone .jar files which will be automatically detected by MIA.
          Details of MIA&apos;s module format are provided in our{' '}
          <a
            className="link"
            href="https://github.com/mianalysis/mia-examples/tree/main/DevelopmentExamples/DevEx1_CustomModule"
          >
            mia-examples
          </a>{' '}
          repository, where you&apos;ll find an example module as well as a blank template module
          that can be used as a starting point for new modules.
        </p>

        <p>
          If you&apos;d like to include the latest version of MIA in your project, you can add the
          following dependency to your pom.xml file:
        </p>

        <pre>
          <code>
            {`
    <dependency>
        <groupId>io.github.mianalysis</groupId>
        <artifactId>mia</artifactId>
        <version>1.3.0</version>
    </dependency>
                `}
          </code>
        </pre>

        <p>
          The JavaDoc for MIA is available{' '}
          <a className="link" href="https://javadoc.io/doc/io.github.mianalysis/mia">
            here
          </a>{' '}
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2>Developing existing MIA modules</h2>

        <p>
          We&apos;re in the process of transitioning from using ImageJ&apos;s ImagePlus format to
          the{' '}
          <a className="link" href="https://imagej.net/libs/imglib2/">
            ImgLib2
          </a>{' '}
          format. Amongst other benefits, this will allow MIA to make use ImgLib2&apos;s disk-cached
          image formats (loading images directly from storage). Any modules which could be rewritten
          to take advantage of ImgLib2 would help us reach this goal faster!
        </p>
      </section>

      <section className="space-y-4">
        <h2>Contributing new example workflows</h2>

        <p>
          If you&apos;ve got a workflow you&apos;d like to share, please consider uploading it to
          the{' '}
          <a
            className="link"
            href="https://github.com/mianalysis/mia-examples/tree/main/DevelopmentExamples/DevEx1_CustomModule"
          >
            mia-examples
          </a>{' '}
          repository.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Adding automated tests</h2>

        <p>
          Automated testing for MIA is currently incomplete. We&apos;d be very grateful for any
          tests that were added to the automated test suite.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Providing feedback</h2>

        <p>
          Any feedback, feature suggestions or comments are very welcome. If you&apos;d like to tell
          us how you&apos;re getting on with MIA, please contact us via the{' '}
          <a className="link" href="https://github.com/mianalysis/mia/issues">
            Issues
          </a>{' '}
          board or send an email to stephen.cross@bristol.ac.uk
        </p>
      </section>
    </div>
  );
}
