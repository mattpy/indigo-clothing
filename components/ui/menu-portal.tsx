import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: JSX.Element
}

function MenuContent(props: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(props.children, document.getElementById('dropdown-menu'))
    : null;
}

export default MenuContent;
