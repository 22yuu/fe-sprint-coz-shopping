import { useEffect } from 'react';

import Toast from './Toast';

export default function ToastContainer({ time = 3000, toasts, setToastState }) {
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToastState((toasts) => toasts.slice(1)),
        time
      );

      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <section className="fixed bottom-20 right-7">
      {toasts.map((toast) => (
        <Toast key={toast.id} state={toast.isBookmarked} />
      ))}
    </section>
  );
}
