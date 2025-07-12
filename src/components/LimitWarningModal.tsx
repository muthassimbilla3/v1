import React from 'react';
import Modal from './Modal';
import { AlertTriangle } from 'lucide-react';

interface LimitWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  uploadedCount: number;
}

const LimitWarningModal: React.FC<LimitWarningModalProps> = ({
  isOpen,
  onClose,
  uploadedCount
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Complete">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
          <AlertTriangle className="h-6 w-6 text-yellow-600" />
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Upload Successful
        </h3>
        
        <p className="text-sm text-gray-600 mb-4">
          Successfully uploaded {uploadedCount} IP proxies to the database.
        </p>
        
        <button
          onClick={onClose}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default LimitWarningModal;