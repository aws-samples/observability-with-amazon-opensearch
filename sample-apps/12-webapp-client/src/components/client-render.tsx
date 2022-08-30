import { useEffect, useState } from "react";
type Props = {
  children?: React.ReactNode
};

const ClientRender = ({ children }: Props) => {
  /**
 * @returns any children component only rendering in the client, skipping server-side rendering
 */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <>
      {loaded ? children : null}
    </>
  )
};

export default ClientRender;
