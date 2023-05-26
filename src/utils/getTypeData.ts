import types from '../constants/types';

const { Brand, Product, Category, Exhibition } = types;

export default function getTypeData(item) {
  let obj = {};

  switch (item.type) {
    case Brand:
      obj = {
        title: item.brand_name,
        image: item.brand_image_url,
        follower: item.follower,
      };
      break;
    case Product:
      obj = {
        title: item.title,
        image: item.image_url,
        price: item.price,
        discount: item.discountPercentage,
      };
      break;
    case Category:
      obj = {
        title: `# ${item.title}`,
        image: item.image_url,
      };
      break;
    case Exhibition:
      obj = {
        title: item.title,
        subTitle: item.sub_title,
        image: item.image_url,
      };
      break;
  }

  return obj;
}
