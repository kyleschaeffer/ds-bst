import { BinarySearchTreeNode } from './binary-search-tree-node';

/**
 * Binary search tree (BST) data structure
 *  - Very fast lookup speeds
 *  - This is a crude implementation (not self-balancing)
 *  - This will be iterative (recursive used in AVL tree)
 */
export class BinarySearchTree<T> {
  /**
   * The root node of the tree
   */
  public root: BinarySearchTreeNode<T>;

  /**
   * Instiantiate a new BST
   */
  constructor() {
    // New empty tree
    this.root = null;
  }

  /**
   * Add a value to the tree
   */
  public add(value: T): void {
    // New node
    const node = new BinarySearchTreeNode<T>(value);

    // New root
    if (!this.root) {
      this.root = node;
      return;
    }

    // Add to tree
    let current: BinarySearchTreeNode<T> = this.root;
    while (current) {
      if (value < current.value) {
        // New left node
        if (!current.left) {
          current.left = node;
          break;
        }

        // Move left
        current = current.left;
      } else {
        // New right node
        if (!current.right) {
          current.right = node;
          break;
        }

        // Move right
        current = current.right;
      }
    }
  }
}
