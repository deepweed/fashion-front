const OrderSuccessMessage = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Мы уже получили Ваш заказ и скоро свяжемся с вами
      </h2>
      <span className="text-base">
        Благодарим вас за выбор нашего сервиса! В течение ближайшего времени
        наши специалисты тщательно проверят все детали вашего заказа, чтобы
        обеспечить максимально качественное и своевременное выполнение.
      </span>
    </div>
  );
};

export default OrderSuccessMessage;
