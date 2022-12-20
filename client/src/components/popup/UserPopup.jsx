import { Dialog, Transition } from '@headlessui/react';
import React, {
  Fragment,
  useContext,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import PaymentMethod from '../../pages/PaymentMethod';
import { Store } from '../../store/Store';

const UserPopup = ({
  openUserModal,
  setOpenUserModal,
  movingPayment,
}) => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [email, setEmail] = useState(userInfo && userInfo.email);
  const [name, setName] = useState(userInfo && userInfo.name);
  const [address, setAddress] = useState(userInfo && userInfo.address);
  const [isOpen, setIsOpen] = useState(false);
  const props = {
    isOpen,
    setIsOpen,
  };

  const saveHandler = () => {
    const shippingAddress = {
      name,
      email,
      address
    }
    dispatch({type: 'SAVE_ADDRESS', payload: shippingAddress})
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress))
  }

  const onClickOpen = () => {
    setOpenUserModal(false);
    setIsOpen(true);
    saveHandler();
  };

  return (
    <div>
      <Transition appear show={openUserModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenUserModal(false)}
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Thông tin của bạn
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray focus:bg-white focus:border-blue-600 focus:outline-none"
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      value={name}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray focus:bg-white focus:border-blue-600 focus:outline-none"
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      value={email}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray focus:bg-white focus:border-blue-600 focus:outline-none"
                      onChange={(e) =>
                        setAddress(e.target.value)
                      }
                      value={address}
                    />
                  </div>
                  <div className="flex flex-row mt-4 justify-between">
                    {movingPayment ? (
                      <div className="">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded border border-transparent bg-primary-color px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                          onClick={onClickOpen}
                        >
                          Chọn Phương Thức
                        </button>
                      </div>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <PaymentMethod {...props} />
    </div>
  );
};

export default UserPopup;
