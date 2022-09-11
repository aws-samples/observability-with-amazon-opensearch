import { useState } from "react";
import { Button } from "@cloudscape-design/components";

export default function Status() {
  const [btnStatus, setBtnStatus] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);

  function waitTime() {
    setInterval(() => {
      setBtnStatus(true);
      setbtnLoading(false);
    }, 1000 * 6)
  }

  const handlePayment = async () => {
    setbtnLoading(true);
    waitTime();
  }

  return (
    <>
      <Button
        disabled={btnStatus}
        iconName="status-info"
        loading={btnLoading}
        onClick={handlePayment}
        variant="primary"
      >
        Get order status
      </Button>
    </>
  )
}