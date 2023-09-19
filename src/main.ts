const total = 1000000;

/** Sorted list */
const list = Array.from({ length: total }, (_, v) => ++v);

const findIdx = 'findIdx';
const indexOf = 'indexOf';
const bnarySW = 'bnarySW';
const bnarySR = 'bnarySR';

const target = total - 1;

console.time(findIdx);
console.log(list.findIndex((v) => v === target));
console.timeEnd(findIdx);

console.time(indexOf);
console.log(list.indexOf(target)); // fastest when having SMALL-size data (e.g. 100000 length)
console.timeEnd(indexOf);

console.time(bnarySW);
console.log(binarySearch1(list, target)); // fastest when having MEDIUM-size data (e.g. 1000000 length)
console.timeEnd(bnarySW);

console.time(bnarySR);
console.log(binarySearch2(list, target)); // fastest overall
console.timeEnd(bnarySR);

/** Iterative binary search */
function binarySearch1<T>(arr: T[], target: T): number {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

/** Recursive binary search */
function binarySearch2<T>(arr: T[], target: T): number {
  const search = (start: number, end: number): number => {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      return search(mid + 1, end);
    }

    if (arr[mid] > target) {
      return search(start, mid - 1);
    }

    return -1;
  };

  return search(0, arr.length - 1);
}
