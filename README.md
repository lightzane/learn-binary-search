# Learn Binary Search

Just learning binary search for sorted list for large data.

But it seems that `Array.indexOf()` is still the fastest for small data.

## Recursive

```ts
/** Recursive binary search */
function binarySearch2<T>(arr: T[], target: T): number {
  const search = (start: number, end: number): number => {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      return search(mid + 1, end); // search on right half
    }

    if (arr[mid] > target) {
      return search(start, mid - 1); // search on left half
    }

    return -1;
  };

  return search(0, arr.length - 1);
}
```

## Iterative

```ts
/** Iterative binary search */
function binarySearch1<T>(arr: T[], target: T): number {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1; // search on right half
    } else {
      r = mid - 1; // search on left half
    }
  }

  return -1;
}
```
