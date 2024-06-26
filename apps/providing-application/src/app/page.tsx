import { zip } from '@susu/array';

export default function ProvidingIndexPage() {
  const [a, b] = zip([1, 2, 3], ['a', 'b', 'c']);

  return (
    <div>
      A: <pre>{JSON.stringify(a)}</pre>
      B: <pre>{JSON.stringify(b)}</pre>
    </div>
  );
}
