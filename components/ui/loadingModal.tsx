"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LoadingModalProps = {
  open: boolean;
  success?: boolean;
  onClose?: () => void;
  message?: string;
};

const LoadingModal: React.FC<LoadingModalProps> = ({
  open,
  success = false,
  onClose,
  message = "Processing...",
}) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-card-component rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-4 w-80 text-white"
          >
            {!success ? (
              <>
                <div className="relative">
                  <Loader2 className="animate-spin w-12 h-12 text-white opacity-90" />

                  {/* Glow Animation */}
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse" />
                </div>

                <p className="font-medium text-white/90">{message}</p>
              </>
            ) : (
              <>
                <CheckCircle className="w-16 h-16 text-green-400 drop-shadow-lg" />
                <p className="font-semibold text-white text-lg">Berhasil!</p>

                {/* <button
                  onClick={() => {
                    setShow(false);
                    if (onClose) onClose();
                  }}
                  className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all shadow-md"
                >
                  Tutup
                </button> */}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingModal;
