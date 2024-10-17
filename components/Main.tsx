import React from "react";
import Image from "next/image";
import csr from "@/app/public/1_kwlw0Y8ZYd3-YbW0WuFR7w.png";
import ssr from "@/app/public/ssr.png";
import ssg from "@/app/public/ssg.png";
import isr from "@/app/public/isr.webp";
const Main = () => {
  return (
    <>
      <div className="flex justify-evenly my-20 items-center">
        <div className="h-90 w-2/4 text-2xl border border-black p-2 shadow-lg shadow-red-600  rounded-lg bg-red-800 ">
          <h1>
            Client-side rendering (CSR) is a web development technique where the
            browser downloads the entire page's content and JavaScript, and then
            renders the content dynamically on the client-side. This approach
            shifts the load from the server to the client, providing a more
            interactive user experience. However, it can lead to longer initial
            load times as the browser has to download and process JavaScript
            files before displaying content. It's widely used in modern
            single-page applications.
          </h1>
        </div>
        <div>
          <Image
            src={csr}
            alt="Server Side Rendering"
            width={410}
            height={500}
            className="rounded-lg shadow-lg shadow-black border border-black "
          />
        </div>
      </div>
      <div className="flex justify-evenly my-12   items-center">
        <div>
          <Image
            src={ssr}
            alt="Client-side rendering"
            width={410}
            height={500}
            className="rounded-lg shadow-lg shadow-black border border-black "
          />
        </div>
        <div className="h-90 w-2/4 text-2xl border border-black p-2 shadow-lg shadow-red-600  rounded-lg bg-red-800 ">
          <h1>
          Server-Side Rendering (SSR) is a technique where web pages are rendered on the server rather than in the browser. This method improves performance by delivering fully-formed HTML pages to clients, which can lead to faster initial load times. It enhances SEO as search engines can crawl pre-rendered content more effectively. However, SSR can increase server load since each request requires processing time to render the page dynamically. Ideal for dynamic, content-heavy sites.
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly my-20 items-center ">
        <div className="h-90 w-2/4 text-2xl border border-black p-2 shadow-lg shadow-red-600  rounded-lg bg-red-800 ">
          <h1>
          Static Site Generation (SSG) involves pre-rendering web pages at build time, transforming them into static HTML files. This method ensures fast load times since the pre-generated pages can be quickly served from a CDN. It's ideal for content that doesn't change frequently, as the content is fixed at build time. SSG offers great SEO benefits, as search engines can easily crawl the static content. Perfect for blogs, documentation sites, and marketing pages!
          </h1>
        </div>
        <div>
          <Image
            src={ssg}
            alt="Static side generation"
            width={520}
            height={600}
            className="rounded-lg shadow-lg shadow-black border border-black  "
          />
        </div>
      </div>
      <div className="flex justify-evenly my-12   items-center">
        <div>
          <Image
            src={isr}
            alt="Client-side rendering"
            width={450}
            height={500}
            className="rounded-lg shadow-lg shadow-black border border-black "
          />
        </div>
        <div className="h-90 w-2/4 text-2xl border border-black p-2 shadow-lg shadow-red-600  rounded-lg bg-red-800 ">
          <h1>
          Incremental Static Regeneration (ISR) in Next.js allows you to update static content without a full site rebuild. It combines the benefits of Static Site Generation (SSG) and Server-Side Rendering (SSR) by regenerating specific pages at runtime when new requests come in. This keeps content fresh and up-to-date while maintaining high performance and SEO benefits. Ideal for blogs, news sites, or e-commerce platforms with frequently changing content.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
