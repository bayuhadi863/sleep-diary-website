import React from 'react';

import { GoDownload } from 'react-icons/go';

const DownloadButton = () => {
  return (
    <button
      type='button'
      className='flex items-center justify-center text-background bg-white rounded-lg px-5 py-5'
    >
      <span className='uppercase text-sm font-semibold mr-1'>Unduh Sekarang</span>
      <GoDownload size={18} />
    </button>
  );
};

export default DownloadButton;
