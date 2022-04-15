export default async function sampleApi(page) {
  var data = [];
  await new Promise(resolve => setTimeout(resolve, 1500));
  for (let i = page * 100; i < (page + 1) * 100; ++i) {
    data.push({
      key: i,
      text: `Entry #${i}`,
    });
  }
  return data;
}
