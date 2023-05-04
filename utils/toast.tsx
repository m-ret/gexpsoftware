import { Toast, toast } from 'react-hot-toast';

// showToast - A utility function to display toast notifications with various options and configurations.
export const showToast = ({
  promise,
  promiseMessages,
  duration = 5000,
  type = 'success',
  message = 'Success!',
  position = 'top-center',
  ...rest
}: Partial<Toast> & {
  promise?: Promise<any>;
  promiseMessages?: { loading?: string; success?: string; error?: string };
}) => {
  const style = { color: '#fff', background: '#333' };
  const defaultProps = { position, style, duration, ...rest };
  // If a promise and promiseMessages are provided, display a promise-based toast
  if (promise && promiseMessages) {
    toast.promise(
      promise,
      {
        error: promiseMessages.error || 'Error!',
        success: promiseMessages.success || 'Success!',
        loading: promiseMessages.loading || 'Loading...'
      },
      { ...defaultProps }
    );
    return;
  }

  switch (type) {
    case 'custom':
      toast(message, { ...defaultProps });
      break;
    case 'error':
      toast.error(message, { ...defaultProps });
      break;
    case 'success':
      toast.success(message, { ...defaultProps });
      break;
    case 'loading':
      toast.loading(message, { ...defaultProps });
      break;
    default:
      toast(message, { ...defaultProps });
  }
};
