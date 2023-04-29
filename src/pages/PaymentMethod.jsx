import { Dialog, Transition } from '@headlessui/react';
import React, {
  Fragment,
  useContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store/Store';
import { SAVE_PAYMENT_METHOD } from '../store/Constanst';

const paymentArray = [
  {
    type: 'Cash',
    descr: 'Trả khi nhận',
  },
  {
    type: 'PayPal',
    descr: 'Trả online',
  },
];

const PaymentMethod = ({ isOpen, setIsOpen }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const { dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();

  const onSubmit = () => {
    ctxDispatch({
      type: SAVE_PAYMENT_METHOD,
      payload: paymentMethod,
    });
    localStorage.setItem('paymentMethod', paymentMethod);
    navigate('/placeorder');
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={onSubmit}>
                    <ul className="grid gap-6 w-full md:grid-cols-2">
                      {paymentArray.map((item) => (
                        <li key={item.type}>
                          <input
                            type="radio"
                            id={item.type}
                            name={item.type}
                            value={item.type}
                            className="hidden peer"
                            checked={
                              paymentMethod === item.type
                            }
                            onChange={(e) =>
                              setPaymentMethod(
                                e.target.value
                              )
                            }
                          />
                          <label
                            htmlFor={item.type}
                            className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded border-2 cursor-pointer peer-checked:bg-primary-color peer-checked:text-white peer-checked:border-primary-color"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                {item.type}
                              </div>
                              <div className="w-full">
                                {item.descr}
                              </div>
                            </div>
                          </label>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="submit"
                      className="mt-5 inline-flex justify-center rounded border border-transparent bg-primary-color px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      Move
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PaymentMethod;
