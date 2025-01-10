import { expect, fixture, html } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';

import type { MdListItem } from '@scopedelement/material-web/list/MdListItem.js';

import './tree-grid.js';
import type { TreeGrid } from './TreeGrid.js';

const factor = process.env.CI ? 4 : 2;

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(4000 * factor);

const tree = {
  a: {
    children: {
      aa: {
        children: {
          aaa: {
            children: {
              aaaa: {},
              aaab: {},
              aaac: {},
              aaad: {},
            },
          },
          aab: {
            children: {
              aaba: {},
              aabb: {},
              aabc: {},
              aabd: {},
            },
          },
          aac: {
            children: {
              aaca: {},
              aacb: {},
              aacc: {},
              aacd: {},
            },
          },
          aad: {},
        },
      },
      ab: {
        mandatory: true,
        children: {
          aba: {
            children: {
              abaa: {},
              abab: {},
              abac: {},
              abad: {},
            },
          },
          abb: {
            mandatory: true,
            children: {
              abba: {
                text: '🎶Dancing Queen💃',
                mandatory: true,
              },
              abbb: {},
              abbc: {},
              abbd: {},
            },
          },
          abc: {
            children: {
              abca: {},
              abcb: {},
              abcc: {},
              abcd: {},
            },
          },
          abd: {},
        },
      },
      ac: {
        children: {
          aca: {
            children: {
              acaa: {},
              acab: {},
              acac: {},
              acad: {},
            },
          },
          acb: {
            children: {
              acba: {},
              acbb: {},
              acbc: {},
              acbd: {},
            },
          },
          acc: {
            children: {
              acca: {},
              accb: {},
              accc: {},
              accd: {},
            },
          },
          acd: {},
        },
      },
      ad: {},
    },
  },
  b: {
    children: {
      ba: {
        children: {
          baa: {
            children: {
              baaa: {},
              baab: {},
              baac: {},
              baad: {},
            },
          },
          bab: {
            children: {
              baba: {},
              babb: {},
              babc: {},
              babd: {},
            },
          },
          bac: {
            children: {
              baca: {},
              bacb: {},
              bacc: {},
              bacd: {},
            },
          },
          bad: {
            text: 'bad👎',
          },
        },
      },
      bb: {
        children: {
          bba: {
            children: {
              bbaa: {},
              bbab: {},
              bbac: {},
              bbad: {},
            },
          },
          bbb: {
            children: {
              bbba: {},
              bbbb: {},
              bbbc: {},
              bbbd: {},
            },
          },
          bbc: {
            text: 'British Broadcasting Corporation',
            children: {
              bbca: {
                text: 'BBC One',
              },
              bbcb: {
                text: 'BBC Two',
              },
              bbcc: {
                text: 'BBC Three',
              },
              bbcd: {
                text: 'BBC Four',
              },
              bbcr: {
                text: 'BBC Radio',
                children: {
                  bbcr1: {
                    text: 'BBC Radio 1',
                  },
                  bbcr2: {
                    text: 'BBC Radio 2',
                  },
                  bbcr3: {
                    text: 'BBC Radio 3',
                  },
                  bbcr4: {
                    text: 'BBC Radio 4',
                  },
                },
              },
            },
          },
          bbd: {},
        },
      },
      bc: {
        children: {
          bca: {
            children: {
              bcaa: {},
              bcab: {},
              bcac: {},
              bcad: {},
            },
          },
          bcb: {
            children: {
              bcba: {},
              bcbb: {},
              bcbc: {},
              bcbd: {},
            },
          },
          bcc: {
            children: {
              bcca: {},
              bccb: {},
              bccc: {},
              bccd: {},
            },
          },
          bcd: {},
        },
      },
      bd: {},
    },
  },
  c: {
    children: {
      ca: {
        children: {
          caa: {
            children: {
              caaa: {},
              caab: {},
              caac: {},
              caad: {},
            },
          },
          cab: {
            text: 'cab🚕',
            children: {
              caba: {},
              cabb: {},
              cabc: {},
              cabd: {},
            },
          },
          cac: {
            children: {
              caca: {},
              cacb: {},
              cacc: {},
              cacd: {},
            },
          },
          cad: {},
        },
      },
      cb: {
        children: {
          cba: {
            children: {
              cbaa: {},
              cbab: {},
              cbac: {},
              cbad: {},
            },
          },
          cbb: {
            children: {
              cbba: {},
              cbbb: {},
              cbbc: {},
              cbbd: {},
            },
          },
          cbc: {
            children: {
              cbca: {},
              cbcb: {},
              cbcc: {},
              cbcd: {},
            },
          },
          cbd: {},
        },
      },
      cc: {
        children: {
          cca: {
            children: {
              ccaa: {},
              ccab: {},
              ccac: {},
              ccad: {},
            },
          },
          ccb: {
            children: {
              ccba: {},
              ccbb: {},
              ccbc: {},
              ccbd: {},
            },
          },
          ccc: {
            children: {
              ccca: {},
              cccb: {},
              cccc: {},
              cccd: {},
            },
          },
          ccd: {},
        },
      },
      cd: {},
    },
  },
  d: {},
};

describe('tree-grid', () => {
  let grid: TreeGrid;
  beforeEach(async () => {
    grid = await fixture<TreeGrid>(html`<tree-grid .tree=${tree}></tree-grid>`);
    document.body.prepend(grid);
    await grid.updateComplete;
  });

  afterEach(() => {
    grid.remove();
  });

  it('selects and deselects subpaths on item click', async () => {
    await grid.updateComplete;
    await visualDiff(document.body, 'select-none');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list-item[value="b"]')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-b');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list-item[value="ba"]')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-ba');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list-item[value="bad"]')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-bad');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list-item[value="bd"]')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-bad-and-bd');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list-item[value="bd"]')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-bad');
  });

  it('(de-)selects an entire column on "select all" icon click', async () => {
    grid.paths = [['b', 'bb', 'bbc'], ['a']];
    await grid.updateComplete;
    await visualDiff(document.body, 'select-a-and-bbc');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list:nth-of-type(5) > md-list-item')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-all-abb-bbc');

    grid.shadowRoot
      ?.querySelector<MdListItem>('md-list:nth-of-type(5) > md-list-item')
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'select-a-and-bbc');
  });

  it('filters rows by value given filter text', async () => {
    grid.paths = [['a'], ['b', 'bb']];
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-none');

    grid.filter = 'bb';
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-bb');

    grid.filter = 'bba';
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-bba');

    grid.filter = 'bbc';
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-bbc');
  });

  it('filters out rows on collapse button click', async () => {
    grid.paths = [['a'], ['b', 'bb']];
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-none');

    grid
      .shadowRoot!.querySelector<MdListItem>(
        `md-list.collapse > md-list-item[data-path=${CSS.escape(
          '["a","ab","abb"]'
        )}]`
      )!
      .click();
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-collapse-abb');

    grid.shadowRoot
      ?.querySelector<MdListItem>(
        `md-list.collapse > md-list-item[data-path=${CSS.escape('["a","ab"]')}]`
      )
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-collapse-ab');

    grid.shadowRoot
      ?.querySelector<MdListItem>(
        `md-list.collapse > md-list-item[data-path=${CSS.escape('["a"]')}]`
      )
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-collapse-a');

    grid.shadowRoot
      ?.querySelector<MdListItem>(
        `md-list.expand > md-list-item[data-path=${CSS.escape('["a"]')}]`
      )
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-collapse-ab');

    grid.shadowRoot
      ?.querySelector<MdListItem>(
        `md-list.expand > md-list-item[data-path=${CSS.escape('["a","ab"]')}]`
      )
      ?.click();
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-collapse-abb');

    grid
      .shadowRoot!.querySelector<MdListItem>(
        `md-list.expand > md-list-item[data-path=${CSS.escape(
          '["a","ab","abb"]'
        )}]`
      )!
      .click();
    await grid.updateComplete;
    await visualDiff(document.body, 'filter-none');
  });
});
