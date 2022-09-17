import { useState } from "react";
import { Button } from "@cloudscape-design/components";

interface IPayment {
  total: number;
  handlePay: (bool: boolean) => void
}

export default function Payment({ total, handlePay }: IPayment) {
  const [btnStatus, setBtnStatus] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);

  function waitTime() {
    setInterval(() => {
      handlePay(true);
      setBtnStatus(true);
      setbtnLoading(false);
    }, 1000 * 5)
  }

  const handlePayment = async () => {
    fetch('/pay-order')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    setbtnLoading(true);
    waitTime();
  }

  return (
    <>
      <h1>
        {btnStatus ? "Paid" : "Pay"}
      </h1>
      <p><strong>Total</strong>: {total} GDL</p>
      <Button
        disabled={btnStatus}
        loading={btnLoading}
        onClick={handlePayment}
      >
        One-click purchase
      </Button>
    </>
  )
}