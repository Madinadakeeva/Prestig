import React from 'react';
import { Divider, List } from 'antd';
const data = [
  'При оформлении заказа вам будет предложено три способа оплаты: Оплата в магазине, Оплата при получении, Оплата онлайн.',
  'Оплата в магазине - вы оплачиваете заказ в любом из наших мебельных салонов.',
  'Оплата онлайн - вы оплачиваете банковской картой (Visa, MasterCard).При выборе данного способа оплаты вам нужно будет указать в открывшемся окне Номер карты, Имя на карте, срок действия карты, CVV2.Проверьте ещё раз указанные данные и нажмите кнопку ОПЛАТИТЬ.',
];
const Oplata = () => (
  <>
    <Divider orientation="left">Оплата заказа</Divider>
    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
</>)
export default Oplata;