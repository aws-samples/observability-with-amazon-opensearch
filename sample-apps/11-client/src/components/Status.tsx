import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  SpaceBetween
} from "@cloudscape-design/components";

function Status() {
  const [btnStatus, setBtnStatus] = useState(false);
  const [btnCancel, setBtnCancel] = useState(false);
  const [btnLoadingStatus, setBtnLoadingStatus] = useState(false);
  const [btnLoadingCancel, setBtnLoadingCancel] = useState(false);


  useEffect(() => {

    let interval = setInterval(() => { }, 1000)

    if (btnLoadingStatus) {
      interval = setInterval(() => {
        setBtnStatus(true);
        setBtnLoadingStatus(false);
      }, 1000 * 2)
    }

    if (btnLoadingCancel) {
      interval = setInterval(() => {
        setBtnCancel(true);
        setBtnStatus(false);
        setBtnLoadingStatus(false);
        setBtnLoadingCancel(false);
      }, 1000 * 6)
    }

    return () => clearInterval(interval);


  }, [btnLoadingStatus, btnLoadingCancel]);


  const handleCancel = async () => {
    fetch('/cancel-order')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    setBtnLoadingCancel(true);
  }

  const handleStatus = async () => {
    fetch('/delivery-status')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    setBtnLoadingStatus(true);
  }


  return (
    <>
      <SpaceBetween direction="vertical" size="l">

        <Alert
          visible={btnStatus}
          header="Order Status"
          type="success"
        >
          On the way!
        </Alert>

        <Alert
          visible={btnCancel}
          header="Canceled"
          type="success"
        >
          We'll process your cancelation shortly.
        </Alert>


        <Button
          disabled={btnStatus}
          iconName="status-info"
          loading={btnLoadingStatus}
          onClick={handleStatus}
          variant="primary"
        >
          Get order status
        </Button>


        <Button
          disabled={btnCancel}
          iconName="status-stopped"
          loading={btnLoadingCancel}
          onClick={handleCancel}
        >
          Cancel order
        </Button>

      </SpaceBetween>
    </>
  )
}

export default Status;
