export const dataToArray = data => {
  const dataArray = [];

  data.forEach(dataItem => {
    const item = dataItem.val();
    item.id = dataItem.key;

    dataArray.push(item);
  });

  return dataArray;
};
