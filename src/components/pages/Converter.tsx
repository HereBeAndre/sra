import { useState, useEffect } from 'react';

import { Button } from 'antd';

import BaseLayout from '../layout/BaseLayout';

import { EURO_TO_DOLLAR_EXCHANGE_RATE } from '../../utils/constants';

import i18n from '../../i18n';

const Converter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(amount);

  const onPlus10Click = () => setAmount(amount + 10);

  const onPlus100Click = () => setAmount(amount + 100);

  useEffect(() => {
    // FIXME: Remove rounding when toFixed() is applied
    setConvertedAmount(Number((amount * EURO_TO_DOLLAR_EXCHANGE_RATE).toFixed(2)));
  }, [amount]);

  const onResetClick = () => {
    setAmount(0);
  };

  return (
    <BaseLayout>
      <div>
        <Button onClick={onPlus10Click}>{i18n.PLUS_10}</Button>
        <Button onClick={onPlus100Click}>{i18n.PLUS_100}</Button>
        <Button onClick={onResetClick} disabled={!amount}>
          {i18n.RESET}
        </Button>
        <span>
          € {amount} = $ {convertedAmount}
        </span>
      </div>
    </BaseLayout>
  );
};

export default Converter;
