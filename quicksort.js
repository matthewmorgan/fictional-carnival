export default function (data) {
  return quicksort(data, 0, data.length - 1);
}

function quicksort(data, left, right) {

  let index;

  if (data.length > 1) {

    index = partition(data, left, right);

    if (left < index - 1) {
      quicksort(data, left, index - 1);
    }

    if (index < right) {
      quicksort(data, index, right);
    }
  }

  return data;
}

function partition(data, left, right) {

  const pivot = data[Math.floor((left + right) / 2)];

  while (left < right) {
    while (data[left] < pivot) {
      left++;
    }

    while (data[right] > pivot) {
      right--;
    }

    if (left <= right) {
      if (left !== right) swap(data, left, right);
      left++;
      right--;
    }
  }


  return left;

}

function swap(data, a, b) {
  const temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}