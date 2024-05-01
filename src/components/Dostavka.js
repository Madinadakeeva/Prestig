import React from "react";
import { Divider, List } from "antd";
const data = [
  "При заказе в интернет-магазине стоимость доставки зависит от города и суммы заказа. Заказы, оформленные на сайте vprestige.kz общей стоимостью свыше 10 000 ₸, доставляются бесплатно в пределах административных границ города Актау и Жанаозен. Доставка Товара осуществляется службой доставки PRESTIGE. Наши сотрудники доставят заказ по указанному Вами в форме заказа адресу.",
  "Работы по переносу мебели внутри квартиры сотрудниками службы доставки не производятся. При доставке товара, Клиенту необходимо вскрыть в присутствии работника службы доставки внешнюю упаковку с целью проверки сохранности содержимого упаковки, осмотреть Товар на предмет целостности его индивидуальной упаковки и наличия внешних повреждений на нем.",
  "Обычное время доставки заказа составляет не более 3 рабочих дней. Допустимы изменения сроков доставки по причинам, не зависящим от Службы доставки. В праздничные дни сроки доставки увеличиваются. Подробности у менеджеров-консультантов. Мы обязательно предупредим вас о планируемой дате доставки при подтверждении заказа. Доставка товаров осуществляется в будние дни с 9 до 18 часов, в субботу с 9 до 16 часов.",
];
const Dostavka = () => (
  <>
    <Divider orientation="left">Доставка</Divider>
    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default Dostavka;
