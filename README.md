# The Munch Hut - README



### List of resources/References used

* Carousel 

   - [sandbox embla-carousel-loop-react](https://codesandbox.io/p/sandbox/embla-carousel-loop-react-7yvcgw?file=%2Fsrc%2Fjs%2Findex.jsx)
  - [Embla Carousel Docs](https://www.embla-carousel.com/examples/predefined/#loop)
  - [ShadCn](https://ui.shadcn.com/docs/components/carousel)

* SearchParams
  - [useSearchParams - Next.JS](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
  - [useRouter - Next.JS](https://nextjs.org/docs/app/api-reference/functions/use-router)

* Portable Text - Sanity
  - [Presenting Portable Text (Sanity Docs)](https://www.sanity.io/docs/presenting-block-text)
  - [react-portabletext (GitHub Readme)](https://github.com/portabletext/react-portabletext?tab=readme-ov-file)
  - [Block Content & Portable Text (Sanity Docs)](https://www.sanity.io/docs/block-content)
  - [Block Types (Sanity Docs)](https://www.sanity.io/docs/block-type)

* Plugins - Sanity
  - [Developing Plugins (Sanity Docs)](https://www.sanity.io/docs/developing-plugins)
  - [sanity-plugin-simpler-color-input](https://www.sanity.io/plugins/sanity-plugin-simpler-color-input)

* Sanity Studio
  - [Singleton Document (Sanity Docs)](https://www.sanity.io/guides/singleton-document)
  - [Sanity CLI Docs](https://www.sanity.io/docs/cli)
  - [Reference Documents (Sanity Type)](https://www.sanity.io/docs/reference-type)
  - [Schema Types (Sanity Docs)](https://www.sanity.io/docs/schema-types)
  - [Previews & Split Panes (Sanity Blog)](https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes)
  - [List Previews (Sanity Docs)](https://www.sanity.io/docs/previews-list-views)

* Validation
  - [ZOD Validation Docs](https://zod.dev/)
  - [React-Hook-Form Docs](https://react-hook-form.com/)
  - [Resolver for using React-hook-form & zod together (very useful)](https://github.com/react-hook-form/resolvers#zod)
  - [Package for ZOD and sanity schemas (Might not need/use)](https://github.com/saiichihashimoto/sanity-typed/tree/main/packages/zod)
  - [Package for help using both React forms with zod (Might not need/use)](https://github.com/esamattis/react-zorm)

* React built in hooks for forms
  - [Form with server action (React Docs)](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action)
  - [useActionState (React Docs)](https://react.dev/reference/react/useActionState)
  - [useFormStatus (React Docs)](https://react.dev/reference/react-dom/hooks/useFormStatus)
  - [useOptimistic (React Docs)](https://react.dev/reference/react/useOptimistic)
  - [useTransition (React Docs)](https://react.dev/reference/react/useTransition)

* React, using ref for re-usable components
  - [forwardRef (React Docs)](https://react.dev/reference/react/forwardRef#forwardref)

* Using http mutations API with sanity to create CRUD functionality with the studio
  - [Sanity http mutations Docs ](https://www.sanity.io/docs/http-mutations)
  - [Sanity http auth docs](https://www.sanity.io/docs/http-auth)

* Using Next not-found/404 page with multiple root layouts
  - [GitHub discussion on the subject](https://github.com/vercel/next.js/discussions/50034)

    ### How to use

    #### File path: App - (site/multiple path) - [...not-found] - page.jsx
    
    This triggers the notFound function using a catch all route [...not-found]. Which calls the "notFound.jsx" file below.
    ```js
      import { notFound } from "next/  navigation";

      export default function NotFound() {
      notFound()
      }
    ```

    ### not-found file

    #### File path: App - (site/multiple path) - not-found.jsx

    ```js
      import { BodyText } from "@/components/shared";
      import { LogoIcon } from "../../../public/assets";
      import Link from "next/link";

      const NotFound = () => {
        return (
          <main>
            <section>
              <div>
                <LogoIcon />
                <h1>
                  Woops...
                </h1>
              </div>
              <div>
                <BodyText>
                  This seems to be the wrong page!
                </BodyText>
                <Link href="/">
                  Return to Home
                </Link>
              </div>
            </section>
          </main>
        );
      };

      export default NotFound;
    ```