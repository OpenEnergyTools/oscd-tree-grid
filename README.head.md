# \<tree-grid>

## Installation

```bash
npm i tree-grid
```

## Usage

```html
<script type="module">
  import 'tree-grid';
</script>

<tree-grid filterLabel="Regular Expression"></tree-grid>

<script type="module">
  const oscdTree = document.querySelector('tree-grid');
  await oscdTree.updateComplete;

  const tree = await fetch('/tree.json').then(r => r.json());

  oscdTree.tree = tree;
</script>
```

## TypeScript types

For use with [TypeScript](https://www.typescriptlang.org/), `tree-grid`
exports the following types:

```ts
export type TreeSelection = { [name: string]: TreeSelection };

export type Path = string[];

export type TreeNode = {
  children?: Tree;
  text?: string;
  mandatory?: boolean;
};

export type Tree = Partial<Record<string, TreeNode>>;
```

> This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc)
> recommendation.

