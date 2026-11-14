export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    // -i: remove already sorted element
    for (let j = 0; j < arr.length -1 -i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
