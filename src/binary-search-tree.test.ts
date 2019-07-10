import { BinarySearchTree } from './binary-search-tree';

test('tree is instantiated', () => {
  const tree = new BinarySearchTree<string>();
  expect(tree.root).toBe(null);
});

test('value is added to tree', () => {
  const tree = new BinarySearchTree<number>();
  tree.add(10);
  expect(tree.root.value).toBe(10);
});

test('values are added to tree', () => {
  const tree = new BinarySearchTree<number>();
  tree.add(10);
  tree.add(15);
  tree.add(8);
  tree.add(12);
  tree.add(18);
  tree.add(1);
  tree.add(3);
  tree.add(9);
  expect(tree.root.value).toBe(10);
});

test('string values are added to tree', () => {
  const tree = new BinarySearchTree<string>();
  tree.add('c');
  tree.add('b');
  tree.add('d');
  tree.add('a');
  expect(tree.root.left.value).toBe('b');
});
