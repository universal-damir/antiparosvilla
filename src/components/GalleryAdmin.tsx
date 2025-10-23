import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

const GalleryAdmin: React.FC = () => {
  const [orderData, setOrderData] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/get-gallery-order');
      const data = await response.json();

      if (data.filenames && Array.isArray(data.filenames)) {
        const formattedArray = '[\n  "' + data.filenames.join('",\n  "') + '"\n]';
        const timestamp = data.timestamp ? `\n\n// Saved at: ${new Date(data.timestamp).toLocaleString()}` : '';
        setOrderData(formattedArray + timestamp);
      } else {
        setOrderData('No saved order found. Client hasn\'t arranged the gallery yet.');
      }
    } catch (error) {
      console.error('Error fetching order:', error);
      setOrderData('Error fetching order. Make sure Netlify Dev is running or the site is deployed.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F3EB] pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
            Gallery Admin
          </h1>
          <p className="text-[#8E7D67] mb-6 font-['Roboto']">
            Retrieve the gallery order after your client has arranged it.
          </p>

          <div className="mb-6">
            <button
              onClick={fetchOrder}
              disabled={loading}
              className="px-6 py-3 bg-[#8E7D67] text-white font-['Roboto'] uppercase tracking-wider hover:bg-[#7A6B57] transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Fetch Gallery Order'}
            </button>
          </div>

          {orderData && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-['Roboto'] font-semibold text-[#3A3532]">
                    Gallery Order (Image IDs):
                  </h3>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8E7D67] text-white text-sm rounded hover:bg-[#7A6B57] transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={16} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-white p-4 rounded border border-gray-300 overflow-x-auto text-sm font-mono">
                  {orderData}
                </pre>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="font-['Roboto'] font-semibold text-blue-900 mb-2">
                  Next Steps:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800 font-['Roboto'] text-sm">
                  <li>Copy the array above using the Copy button</li>
                  <li>Open <code className="bg-blue-100 px-2 py-1 rounded">src/data/galleryData.ts</code></li>
                  <li>Replace the entire <code className="bg-blue-100 px-2 py-1 rounded">photoFiles</code> array with what you copied</li>
                  <li>Save the file</li>
                  <li>Remove the "Edit Gallery Order" button from <code className="bg-blue-100 px-2 py-1 rounded">src/components/Gallery.tsx</code> (lines 270-299)</li>
                  <li>Commit and deploy: <code className="bg-blue-100 px-2 py-1 rounded">git add . && git commit -m "Update gallery order" && git push</code></li>
                  <li>Done! Gallery is permanently in the new order 🎉</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryAdmin;
