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



## `TreeGrid.ts`:

### class: `TreeGrid`, `tree-grid`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Mixins

| Name                  | Module | Package                                 |
| --------------------- | ------ | --------------------------------------- |
| `ScopedElementsMixin` |        | @open-wc/scoped-elements/lit-element.js |

#### Static Fields

| Name             | Privacy | Type     | Default                                                                                                                                 | Description | Inherited From |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `scopedElements` |         | `object` | `{
    'md-list': MdList,
    'md-icon': MdIcon,
    'md-list-item': MdListItem,
    'md-outlined-textfield': MdOutlinedTextField,
  }` |             |                |

#### Fields

| Name          | Privacy | Type                               | Default | Description                                | Inherited From |
| ------------- | ------- | ---------------------------------- | ------- | ------------------------------------------ | -------------- |
| `tree`        |         | `Tree`                             | `{}`    | The \`Tree\` to be selected from           |                |
| `selection`   |         | `TreeSelection`                    | `{}`    | Selected rows as \`TreeSelection\`         |                |
| `paths`       |         | `Path[]`                           |         | Selected rows as \`Path\[]\`               |                |
| `filter`      |         | `string`                           |         | Regular expression by which to filter rows |                |
| `filterLabel` |         | `string`                           | `''`    | Filter \`TextField\` label                 |                |
| `filterUI`    |         | `MdOutlinedTextField \| undefined` |         |                                            |                |

<details><summary>Private API</summary>

#### Fields

| Name          | Privacy | Type                   | Default             | Description | Inherited From |
| ------------- | ------- | ---------------------- | ------------------- | ----------- | -------------- |
| `depth`       | private | `number`               |                     |             |                |
| `filterRegex` | private | `RegExp`               |                     |             |                |
| `container`   | private | `Element \| undefined` |                     |             |                |
| `collapsed`   | private |                        | `new Set<string>()` |             |                |

#### Methods

| Name                   | Privacy | Description | Parameters                          | Return           | Inherited From |
| ---------------------- | ------- | ----------- | ----------------------------------- | ---------------- | -------------- |
| `getPaths`             | private |             | `maxLength: number`                 | `Path[]`         |                |
| `treeNode`             | private |             | `path: Path`                        | `TreeNode`       |                |
| `rows`                 | private |             |                                     | `Path[]`         |                |
| `clicked`              | private |             | `el: HTMLElement`                   | `MdListItem`     |                |
| `select`               | private |             | `parentPath: Path, clicked: string` | `void`           |                |
| `selectAll`            | private |             | `clicked: MdListItem`               | `void`           |                |
| `scrollRight`          | private |             |                                     | `Promise<void>`  |                |
| `handleSelected`       | private |             | `event: Event`                      | `Promise<void>`  |                |
| `renderCell`           | private |             | `path: Path, previousPath: Path`    | `TemplateResult` |                |
| `renderColumn`         | private |             | `column: (Path \| undefined)[]`     | `TemplateResult` |                |
| `toggleCollapse`       | private |             | `serializedPath: string`            |                  |                |
| `renderExpandCell`     | private |             | `path: Path`                        | `TemplateResult` |                |
| `renderExpandColumn`   | private |             | `rows: Path[]`                      | `TemplateResult` |                |
| `renderCollapseCell`   | private |             | `path: Path`                        | `TemplateResult` |                |
| `renderCollapseColumn` | private |             | `rows: Path[]`                      | `TemplateResult` |                |
| `renderColumns`        | private |             |                                     | `TemplateResult` |                |
| `renderFilterField`    | private |             |                                     |                  |                |

</details>

<hr/>

### Exports

| Kind | Name       | Declaration | Module      | Package |
| ---- | ---------- | ----------- | ----------- | ------- |
| `js` | `TreeGrid` | TreeGrid    | TreeGrid.ts |         |

## `tree-grid.ts`:

### Exports

| Kind                        | Name        | Declaration | Module       | Package |
| --------------------------- | ----------- | ----------- | ------------ | ------- |
| `custom-element-definition` | `tree-grid` | TreeGrid    | /TreeGrid.js |         |



&copy; 2023 OMICRON electronics GmbH
