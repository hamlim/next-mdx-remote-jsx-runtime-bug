import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  return (
    <main>
      <MDXRemote
        source={`# Some Markdown here

More content here too!

~~strikethrough???~~~

- list
- list
`}
      />
    </main>
  );
}
