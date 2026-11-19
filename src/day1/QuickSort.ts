function sortRange(arr: number[], low: number, high: number): void {
  // Empty or single-element range is already sorted
  if (low >= high) return;

  const pivotIdx = partition(arr, low, high);

  sortRange(arr, low, pivotIdx - 1);
  sortRange(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  // End of the region that holds values <= pivot
  let boundary = low - 1;

  for (let i = low; i < high; ++i) {
    if (arr[i] <= pivot) {
      boundary++;
      const temp = arr[i];
      arr[i] = arr[boundary];
      arr[boundary] = temp;
    }
  }

  // Drop the pivot just after that region
  boundary++;
  arr[high] = arr[boundary];
  arr[boundary] = pivot;

  return boundary;
}

export default function quick_sort(arr: number[]): void {
  sortRange(arr, 0, arr.length - 1);
}
