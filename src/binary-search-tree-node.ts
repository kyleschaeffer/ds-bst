/**
 * Individual node which composes the binary search tree
 */
export class BinarySearchTreeNode<T> {
  /**
   * This tree node's value
   */
  public value: T;

  /**
   * The left-hand child node
   */
  public left: BinarySearchTreeNode<T>;

  /**
   * The right-hand child node
   */
  public right: BinarySearchTreeNode<T>;

  /**
   * Instantiate a new tree node
   */
  constructor(value: T, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
