# Pure New Tab

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/cworld1/pure-new-tab?label=commits&style=flat-square)](https://github.com/cworld1/pure-new-tab/commits)
[![GitHub stars](https://img.shields.io/github/stars/cworld1/pure-new-tab?style=flat-square)](https://github.com/cworld1/pure-new-tab/stargazers)
[![GitHub license](https://img.shields.io/github/license/cworld1/pure-new-tab?style=flat-square)](https://github.com/cworld1/pure-new-tab/blob/main/LICENSE)

A simple new tab page extension for Chrome and Firefox. Aimming to provide a clean and minimalistic ntp for users.

## Local development

Environment requirements:

- [Nodejs](https://nodejs.org/): 18.0.0+
- [Bun](https://bunjs.dev/): 1.0.0+

Clone the repository:

```shell
git clone https://github.com/cworld1/pure-new-tab.git
```

Install dependencies:

```shell
cd pure-new-tab
bun install
```

Start the development server:

```shell
bun dev
```

Or build the extension:

```shell
bun build
```

> If you are using firefox, you may need to change the `browser` field in `vite.config.ts`:
>
> ```ts
> export default defineConfig({
>   plugins: [
>     webExtension({
>       manifest: generateManifest,
>       browser: "firefox",
>     }),
>   ],
> });
> ```

## Contributions

To spend more time coding and less time fiddling with whitespace, this project uses code conventions and styles to encourage consistency. Code with a consistent style is easier (and less error-prone!) to review, maintain, and understand.

## Thanks

- [MiaoMint/hitokoto-new-tab](https://github.com/MiaoMint/hitokoto-new-tab/tree/main)

## License

This project is licensed under the GPL 3.0 License.
