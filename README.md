# next-mdx-remote-jsx-runtime-bug

This repo replicates a bug in either `next` or `next-mdx-remote` where (I think) the dynamic `require` of the `react/jsx-runtime` leads to the following error:

```sh
Error: A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.
```

## Steps to reproduce:

- Clone the repo
- Install dependencies via `bun install`
- `cd apps/docs`
- Run `bun run dev`
- visit http://localhost:3000
- See error from Next!

`next` versions: 15.0.0-canary.59
`next-mdx-remote` version: `5.0.0`
