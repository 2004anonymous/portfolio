import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useState } from 'react'

interface Content{
  content:string
}

const Toast = ({content}:Content) => {

  const [isToastVisible, setIsToastVisible] = useState(true);
  setTimeout(() => {
    setIsToastVisible(false);
  }, 2000);

    const close = () => {
        setIsToastVisible(false);
      };
  return (
    <div>
        {isToastVisible && (
        <AnimatePresence>
          <motion.div
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 100, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="fixed w-80 lg:w-96 m-auto left-0 right-0 top-4  bg-purple-500 text-white rounded-lg shadow-lg flex justify-between p-3 items-center"
          >
            <p className="text-sm">{content}</p>
            <button
              onClick={close}
              className="text-white bg-red-400 rounded-full p-2 hover:bg-red-600"
            >
              <X color="#ffffff" size={14} />
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default Toast