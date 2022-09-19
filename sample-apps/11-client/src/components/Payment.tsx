import { useEffect, useState } from "react";
import { Button } from "@cloudscape-design/components";

interface IPayment {
  total: number;
  handlePay: (bool: boolean) => void
}
function Payment({ total, handlePay }: IPayment) {
  const [btnStatus, setBtnStatus] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {

    let interval = setInterval(() => { }, 1000)

    if (btnLoading) {
      interval = setInterval(() => {
        handlePay(true);
        setBtnStatus(true);
        setBtnLoading(false);
      }, 1000 * 1)
    };

    return () => clearInterval(interval);

  }, [btnLoading, btnStatus, handlePay])

  const handlePayment = async () => {
    fetch('/checkout')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    fetch('/pay-order')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    setBtnLoading(true);
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

export default Payment;
