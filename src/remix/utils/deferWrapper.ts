export default function mongoWrapper(result: Promise<any>) {
  return new Promise((resolve, reject) => {
    result.then(resolve).catch(reject);
  });
}
